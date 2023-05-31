'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/config": "657a41c8a4eae7d0f38681cdd399328f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2083d77058d4a97b6d91d3902ed3f368",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d2b31bc3515dcfa0f28aa816ae606c9f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2b2f19af0dfad7d6dcd0a6b8fa34689d",
".git/logs/refs/heads/main": "5afe75ba994c462052956cf943aa75a2",
".git/logs/refs/remotes/origin/main": "5c0232b9e69e95b0dc8d14e6e3412c5b",
".git/objects/01/bb734797136620ada975bc89c3adbdea37dd9d": "7ac330675bc94c0605edf957142fa26f",
".git/objects/01/c303b3cd4fcf1739f2ebe3f751ee131a46044e": "6baae1fe5ceb8f26f22be22b5badb067",
".git/objects/03/3462f9363da99ff6df36f1356dc8004689267d": "f87eca09926bc27ad385844d96200126",
".git/objects/03/428aa0a86b320218cd853a28ed9b7448a0c57d": "ec1be8505d3d6f01a1dd5a3ae65ad261",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/efa6f54730a210540d143667e559ef6f78472f": "4289e18f635db34485e4f2ef16607fc6",
".git/objects/05/af03b22b8b08bc3c81488fe7abd87064892d7c": "fb6aadc7e3e9c9b6840e09204c933f7e",
".git/objects/0a/557a5fa095c62bdc51ed6d1b32fbfd56762c7f": "fdeb5c6b15c1838c8326f1a7670f1b4c",
".git/objects/0a/ba0eb077436e8c84f090eda285ab6e9284e0da": "5c1fcc085b3322c26c91c7cfb1182d56",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/7d20f6f500a901908da051956fe305e3db0baf": "c2cb71a482e0d3858adb091ba7a9d932",
".git/objects/0e/f747395856df7764e4e953e082e934721f9d4e": "7cebe9f0469046a38bf44362b03025c1",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/1c/19798fd37d03868931deeaaaca4c1d68d3c3ce": "9f37a6bed7214bb6639739a02eecff6d",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/29/0d3da96b838cefef60bd87bb838aefe0dfccf5": "12898e33e167a696caa8f30e36564089",
".git/objects/2c/16c1acedc8ae39b41ecd105171ca5838149f0a": "c26e3ec4678ab86fa114f99f03e9f3c5",
".git/objects/2d/6b26902666b76f270964488ae8599fe496960e": "39d4f448fd2362aac23f5fa9f76d4178",
".git/objects/2e/82d0a78f83b3b1c596344f3d64323b4b9f120b": "8253f04d2480b3884ad818bdfdc27ffe",
".git/objects/30/715930e13ced1f4c52c9b65d43daaff1a9520b": "728e5e1addbf74823d0567653c67af1a",
".git/objects/31/fe235bd3687d21c0170c247c8bfe4ca540a35f": "b9d9dd409e712c33fbc664e9e363a9da",
".git/objects/32/97a46eccfb160955a7ce394a2dba7a33bf15b7": "9953d80e0e317c2d2fbdf34bc2e483dc",
".git/objects/35/8728a1bf94ceea853b72ca6f9496e844c46761": "d6c1033021cd4d8fd6d7a58f2fd05e1b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/999a8ae842442f53eb5cf3a231cf0c8d32b34e": "abb5b13e3d2498f0b5915a831e52aec2",
".git/objects/37/2abd1edb4bb2d14b04681cdcefb544de427206": "ce8748bad44ba146380b0dd741652bd5",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/573dc995b2d8ac584277e44757468804c5a6bc": "9d8b4784d9677b8b8a2c5a9d6a477135",
".git/objects/39/111140b800a344b9632a488456393f5747ef98": "8444dffbf9dc5432064f43d9773e7d4b",
".git/objects/39/6d523dd54d35ad63c9826de2892e4531517a93": "66915140a1a81d24f1c57ec1a214c774",
".git/objects/3a/96ad30eb99ae9a36db597c704116ecef207ff3": "9fd44e8833bb011a79784d818b77fe04",
".git/objects/3f/421b096b3c20c4ded0bf70496ca89915bd3a76": "a6027eebd2ff7dcaddcdc4c69cf39aab",
".git/objects/40/54e8dab0e7ad68628e29d7cd83a58ee93e50d7": "30df2d0fe928441569e99063b44e7ca6",
".git/objects/41/8599e683e133e1426184485507cb49d72cd984": "da18c862f77d0001a0c531afe0f80188",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/f2c4d6bef7357770178b982abd186c40363c9e": "e88edc5b34e3c2a572c5445adcc365da",
".git/objects/4b/d79a4b9122c7b50441a8b7357d838a16a447ce": "ecacfeed7123407522e7d57193e1a0d8",
".git/objects/4e/2b32c15325e65818ea946226382fc65a1e7cf2": "047666e48a8054be7d65ea544b8434d5",
".git/objects/4e/9a40ee12f2206dfdb83a172893868810a6c17e": "dd07a5cbaa771d1a814ba59fb2d65885",
".git/objects/51/25b204a1c41b1e717c773009688ebaa04112c6": "aeafaf726e8fa43e3802e6ba198155f0",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/54/3e0f86f55c7d06d4cad3b9cde8d037303aea7a": "9efed99038ac8471718d8b2b9ccb5f35",
".git/objects/55/d5acff2867cadb425a4b8e95dde55b3ab8e1ec": "9c7324ba038fbe6f7de1c8cce353b5ec",
".git/objects/56/6e460c9043cc9251a5941f775ca1a317d00521": "609ff03529b9f490a419aa182c908409",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5d/49196478bdd3d95fc8eacc2275b40c4410cc4d": "dc7f3dc99c199d449c9a22c0881a0198",
".git/objects/5d/4f8d0e25bf3a27505976f4112c3ebfb3303e67": "72ef7e10148e5c9d41e566bbc5c2dbcc",
".git/objects/5d/96ddc167d798e2fdbb63097a8db356faf1d90b": "251cbe3ca7ef22ae8ddeaa580f0f0b78",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/a0a2436f0659e3d7d6f6f920cd2444466c3080": "5d5e3cb1c6a74ce642655cfcea24c92b",
".git/objects/63/e81bfe87d04614f10560dadc6b5a062c3c1bb6": "d6d58e5cf43ae442e3816194133f1037",
".git/objects/69/29ce834eec6d2f623e154c8dcd90c35abe15f3": "f7fa1549c5198e22d95d655066eb8236",
".git/objects/6f/1f3ec45c646cf675b015cc9ff12f77113f29bd": "b4c72cfebd9e9d117324992af9a7191a",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/4ea07d957140992f6d468f7d1fe8f33e7e9b17": "01bbf746248ece9f05ffba48cbc9c581",
".git/objects/72/af7d152e58bc02eba319681aa2ca2643a7dab8": "c83e36f5fe79256d2386747d892fce3b",
".git/objects/75/059af6b9c64509b894c878ea71aa948ed18154": "3ef8c6d3015a6fb4b2853ba50aa96ece",
".git/objects/76/8d49dc9a84273e9f3092c75ca49a1a8ea3fd03": "1e8e68c18287255c9ec0de5016d8db2c",
".git/objects/76/e1a1edc1f89cb6cd6e7ef54088ddda9e3b82c7": "3809d01e45dec869e765f55278b225f6",
".git/objects/76/faf0f188d7e91b97485e002c6f92b8bad12e8e": "be96d534a74b822914cea9e5d3806788",
".git/objects/7c/27bb46e909f2bfe0acf1fe99f2405e8a256c1a": "36f7257226125a3a8ddda0a24575da94",
".git/objects/7c/ff9a8afc5d11c10d18e4432b6d0ee7ba5df55e": "cb446b3b9ec73dc1c8e8c272c9ddb984",
".git/objects/7f/0f2aeb9f92e4ccd6faa96d6f1387cc92d54222": "351f40383d1bb60b3711b964564db985",
".git/objects/80/90a6f755d9029265f140ab37dcdd331afff025": "76551b179b89215293ef17f0270966a8",
".git/objects/85/4451dfb78e999a37a6272b40e51a9058a9e0e5": "9c15357971c2f376a289aee471870ff8",
".git/objects/86/e6c8f28d520adbc31a9ce32b23dce2b4525c86": "5f037df314669b0c892b097465f21284",
".git/objects/88/7f1011f5c4f8280f2c36ae5966653d852192fb": "fac1fbb5e8fc0347efe0c71cd7728ef9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/57ca144f404807594613265944c18813095c1e": "a1e015fe7575e0fd486c3e1cc257efaa",
".git/objects/8c/2ac8e99942cb792e3d0a00bac7bad6e0da7749": "4db8b3b71889f1dcd2116b571cdc6a52",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/f7a4232513dbf3bf9c6556f6869837bfa989b3": "472e291c5d60999e8785688a9c335723",
".git/objects/92/b55ee94abfab18718ac4df3d111cc3971bd145": "3b800645f1bb1678f8f6b55e454c8dc0",
".git/objects/96/b6541c7d03dad0b22f5a94dd3bc0696baf3682": "ee1a91a94b137b54717ce168ab507429",
".git/objects/9c/1be37be4ad4d581c15a43ab16d7ff4e83ba320": "dedb2ec55a3977a38e489fe8b2cd3e95",
".git/objects/9d/e841426a0a81e0bc2ca2c8030334dead099c99": "2465557b649fceb9a541555fca7f7308",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/a1/0c6e5822ccd3683b50eb55d7fd1141896eb0ef": "d7e6429690899b666654ce9ae5edd168",
".git/objects/a1/d159c9e6cdbe08dc206e472e293cf9bbd17f38": "aa517c17ad037cbc62a527023bd8b660",
".git/objects/a3/f8940550dee2b9c9fe854b07791baa266940ca": "4dd501ef784e754ad90612b985299c35",
".git/objects/a4/abfbe407d4deed8330d296df9b2b3625a81bb7": "d4fbee1f91d84cf13ee1902051924f54",
".git/objects/a7/48e216fd8a65af983d0429bc4df0789abf85c2": "cc73c26293c3f405b07b97f9d9bae1c8",
".git/objects/a8/e76b150d45ba66d16dc3a98cac30359c9e93a1": "44d12e7402bcdccad8521f659d11f1f6",
".git/objects/a9/550ccf154183526d584ef4d950780e18c63a25": "615a261d3083a573041e785d26286e3f",
".git/objects/ab/e3d2ba9a6962099a8cad25700a1f1eb685ff1e": "d365ee1d3cc698496fd839fa5489cf6e",
".git/objects/ac/a029113c01522c52469fbc8e9ffb3998d9338a": "5815de7db52a5b50bde2d8bc72594877",
".git/objects/ad/07053b2a6354add64f12194d9d883baf623dfb": "a9be8e35751fbc937220a2834c4540e6",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/b50b24042e01b4fa4d637892e9a31b01195613": "623daff19ac49eff112abba9a7bba179",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/0c926ab69d49945e07c1f62d21c9c4eb89817e": "048910671b24ee17a696d2a78b99cc1b",
".git/objects/b3/a8c3857c73a8f505247ccce53674c2ded0de37": "a6dfad4a4251225f6df6cc92353259c7",
".git/objects/b5/5ddae4f375fbce1884095cbca9729b74f26659": "38d36d5371de10386c71b086e1b60e47",
".git/objects/b6/fd42f0e667507e0bc9bd1971fb66bd8bcb15ab": "7328f89a851bd7d9b93d36395f0b807d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0e6c25c8bbc261d16ce7cd9d87c6c1ef03a43f": "258736eb61ba803e4f1aefcf4dacb535",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/8eee5805ff013299690d41393449edb4bc0a7c": "2f4d6185a4392c5c9ff407bbf98ddaed",
".git/objects/c2/e064d74df6bf8116908f7cb16704ef26f36db3": "f733b83cec6168e81aa440208f638d85",
".git/objects/c4/c571044dc6440587c15b626c90f0589f7ee078": "295458e022abc56f54af0b7677cf3349",
".git/objects/cc/35a0c8178aa075c65efa5d4667a4e39540f7c3": "ee7fb7cd9bd1fd04bf1dc1c0af94d258",
".git/objects/ce/755f0370de9ac35baec46c00ee7d379d1ac60b": "1dfe0b142334eeedcb994eb01ddf84d6",
".git/objects/cf/a3e726f9cc79db4bcdfb4db9799996df9c51ae": "cd1040ba9ea28b819677a56d896f2daa",
".git/objects/d0/d4ac30f5c95ce38d929b47b2cf5375d7f88d41": "08026c38abaf0b980279a4ecd1369ae9",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/03f6bff50f0b08310ad0a686e692d95825f60f": "dbfe18cfc8b926a1ed0c12c612f61a65",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/d4634c85024480e86fabe01ba0e7f2c467fabf": "9a7c915ff17f0c8d1536b5048e4594bc",
".git/objects/db/3cb9f91356976b5dc07021362ee7fae788d648": "5b30171eed588b8e66046b848ae9d14d",
".git/objects/de/f3e22778370560761f6525f0ca67390b766072": "51873fd68d0caef2ed002ab548a535a4",
".git/objects/e0/799fe3f863d2b1326684cf7b6db0afa8e6209f": "02491539cad509b6dbe6fdacd8275bfe",
".git/objects/e1/1dddee5d5d11ca5aa7583d562534e2238ec089": "17e7a3135bde0a19cb67953eebad6ee6",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e7/90bc25d9d006cfad7cb18a61581f520fada741": "9863727a2c35e9cdb449b839840844aa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b3561e0b247f98789f82ae669d54d4a7d296ed": "015ea85cab5f81e63a3d1936f56c3dae",
".git/objects/ec/b7007c76406b282dbbf6582a5634aacb0d2e71": "d4d331db80701a095b2b31e76ec52701",
".git/objects/ef/45ed95b6e5e1d5551faaac74bddc1fec7e9c65": "5688d4dd9510a104849d74e43e1d6fdb",
".git/objects/f1/d06c13c98e61b525e5bdc0371ba385e6c2d1ee": "d2acc78b85a6b16bfcb21e4c0ac03df2",
".git/objects/f2/c7b250ef565b68fbbe559961cb6298e56a67ae": "1482811d4181650d5a918902470c2275",
".git/objects/f9/613922a243a41c8412e08a4405fe2f9e39542b": "842083a135154d12fe2cfc25ddc65864",
".git/objects/fa/102147957c8728b523c4fad503dc4de51e8db4": "c0699dbde7c535d16af49c2a05061ff6",
".git/objects/fc/d9d3766cc09906113e6dc80e0b60c3da433a7d": "4553e49868b141bbd29f2501a17468e6",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/42d0f438d43e0aec3e6fd3ccbeedbbc2e2a039": "1b44377893f3bac74e6c16f24a59deaf",
".git/ORIG_HEAD": "d3bc1a6646f53e6154e656084b1b06ac",
".git/refs/heads/main": "d3bc1a6646f53e6154e656084b1b06ac",
".git/refs/remotes/origin/main": "d3bc1a6646f53e6154e656084b1b06ac",
"assets/AssetManifest.bin": "a7051394efae531fd4a9938e3d2ec4ff",
"assets/AssetManifest.json": "821550efd0d9aff78b7462802ad84d6e",
"assets/assets/fonts/Exo2-Light.ttf": "71330d68d887758bea8c742eb6641325",
"assets/assets/fonts/Exo2-Medium.ttf": "1e7da3a913cc046ed13485961df9616d",
"assets/assets/fonts/Rajdhani-Light.ttf": "e38f518cff0715ced49fb47f86c71d8a",
"assets/assets/fonts/Rajdhani-Medium.ttf": "5500ef6a4e84d3be9971dbb138c010e5",
"assets/assets/images/background_image.png": "0e33d9646cb680b9d94a705581632f13",
"assets/assets/images/flutter_logo.png": "9096b6398b67ffeeeff9eec3f990fba5",
"assets/assets/images/flutter_logo.svg": "3412e9b057f8e86a3765337b3e80f2bc",
"assets/assets/images/node_js_logo.png": "e1aa61383941e096626fad9818c10c1f",
"assets/assets/images/splash.png": "daeb7e4b1fded0aad15b2ea9b6bc9cfc",
"assets/assets/svg/background_image.svg": "5325c29a02e17eeed3acad38e2b37ce7",
"assets/assets/svg/background_image.svg.vec": "c441d00b95a0e9fa7ca05437c36e0318",
"assets/FontManifest.json": "8a7bf96bb8c0370f3a55c9502a115960",
"assets/fonts/MaterialIcons-Regular.otf": "42865c166de14e85ceb56d5e4029eb0c",
"assets/NOTICES": "296daf5cb21431f0c1c7103e60106ce5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aaa4350de981b965f97529da900dffd2",
"/": "aaa4350de981b965f97529da900dffd2",
"main.dart.js": "a1804231d5cde17bf0a0bb45ca07db8b",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"splash/img/dark-1x.png": "67c597bba27c4a765c763357c94b2075",
"splash/img/dark-2x.png": "8ff5775df3c0db09d7178e5b9666e89f",
"splash/img/dark-3x.png": "cbe3d15ac3740eab140f02ad55751fc5",
"splash/img/dark-4x.png": "eab896885e26d32e3efbe2068c105485",
"splash/img/light-1x.png": "67c597bba27c4a765c763357c94b2075",
"splash/img/light-2x.png": "8ff5775df3c0db09d7178e5b9666e89f",
"splash/img/light-3x.png": "cbe3d15ac3740eab140f02ad55751fc5",
"splash/img/light-4x.png": "eab896885e26d32e3efbe2068c105485",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
