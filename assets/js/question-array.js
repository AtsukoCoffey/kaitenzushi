////////////////////////////////////////////// Sushi Question array object
const words = [
  {
    name: 'amaebi',
    "kana": 'あまえび',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'Sweet shrimp'
  },
  {
    name: 'anago',
    "kana": 'あなご',
    image: 'assets/images/sushi_anago.webp',
    sound: 'assets/sounds/su-anago.mp3',
    english: 'Conger eel'
  },
  {
    name: 'battera',
    "kana": 'ばってら',
    image: 'assets/images/sushi_battera.webp',
    sound: 'assets/sounds/su-battera.mp3',
    english: 'Mackerel sushi'
  },
  {
    name: 'sabazushi',
    "kana": 'さばずし',
    image: 'assets/images/sushi_bouzushi_saba.webp',
    sound: 'assets/sounds/su-sabazushi.mp3',
    english: 'Mackerel sushi'
  },
  {
    name: 'buri',
    "kana": 'ぶり',
    image: 'assets/images/sushi_buri.webp',
    sound: 'assets/sounds/su-buri.mp3',
    english: 'Big yellowtail'
  },
  {
    name: 'chirashizushi',
    "kana": 'ちらしずし',
    image: 'assets/images/sushi_chirashizushi.webp',
    sound: 'assets/sounds/su-chirashizushi.mp3',
    english: 'Sprinkled sushi'
  },
  {
    name: 'chutoro',
    "kana": 'ちゅうとろ',
    image: 'assets/images/sushi_chutoro.webp',
    sound: 'assets/sounds/su-chutoro.mp3',
    english: 'Medium tuna Toro'
  },
  {
    name: 'ebi',
    "kana": 'えび',
    image: 'assets/images/sushi_ebi.webp',
    sound: 'assets/sounds/su-ebi.mp3',
    english: 'Shrimp'
  },
  {
    name: 'hamachi',
    "kana": 'はまち',
    image: 'assets/images/sushi_hamachi.webp',
    sound: 'assets/sounds/su-hamachi.mp3',
    english: 'Medium yellowtail'
  },
  {
    name: 'hanba-gu',
    "kana": 'はんばーぐ',
    image: 'assets/images/sushi_hamburg_tare.webp',
    sound: 'assets/sounds/su-hanba-gu.mp3',
    english: 'hamburg'
  },
  {
    name: 'harasu',
    "kana": 'はらす',
    image: 'assets/images/sushi_harasu.webp',
    sound: 'assets/sounds/su-harasu.mp3',
    english: 'Salmon belly'
  },
  {
    name: 'hotate',
    "kana": 'ほたて',
    image: 'assets/images/sushi_hotate.webp',
    sound: 'assets/sounds/su-hotate.mp3',
    english: 'Scallop'
  },
  {
    name: 'ika',
    "kana": 'いか',
    image: 'assets/images/sushi_ika.webp',
    sound: 'assets/sounds/su-ika.mp3',
    english: 'Squid'
  },
  {
    name: 'ikura',
    "kana": 'いくら',
    image: 'assets/images/sushi_ikura.webp',
    sound: 'assets/sounds/su-ikura.mp3',
    english: 'Salmon roe'
  },
  {
    name: 'inarizushi',
    "kana": 'いなりずし',
    image: 'assets/images/sushi_inarizushi_set.webp',
    sound: 'assets/sounds/su-inarizushi.mp3',
    english: 'Pickled fried tofu sushi'
  },
  {
    name: 'hokkigai',
    "kana": 'ほっきがい',
    image: 'assets/images/sushi_kai_hokkigai.webp',
    sound: 'assets/sounds/su-hokkigai.mp3',
    english: 'Hokkaido clam'
  },
  {
    name: 'katsuo',
    "kana": 'かつお',
    image: 'assets/images/sushi_katsuo.webp',
    sound: 'assets/sounds/su-katsuo.mp3',
    english: 'Bonito'
  },
  {
    name: 'kazunoko',
    "kana": 'かずのこ',
    image: 'assets/images/sushi_kazunoko.webp',
    sound: 'assets/sounds/su-kazunoko.mp3',
    english: 'Herring roe'
  },
  {
    name: 'kappa',
    "kana": 'かっぱ',
    image: 'assets/images/sushi_makimono_kappa.webp',
    sound: 'assets/sounds/su-kappa.mp3',
    english: 'Cucumber'
  },
  {
    name: 'nattou',
    "kana": 'なっとう',
    image: 'assets/images/sushi_makimono_nattou.webp',
    sound: 'assets/sounds/su-nattou.mp3',
    english: 'Natto'
  },
  {
    name: 'negitoro',
    "kana": 'ねぎとろ',
    image: 'assets/images/sushi_makimono_negitoro.webp',
    sound: 'assets/sounds/su-negitoro.mp3',
    english: 'Tuna & Spring onion'
  },
  {
    name: 'takuan',
    "kana": 'たくあん',
    image: 'assets/images/sushi_makimono_takuwan.webp',
    sound: 'assets/sounds/su-takuan.mp3',
    english: 'Pickled radish'
  },
  {
    name: 'torotaku',
    "kana": 'とろたく',
    image: 'assets/images/sushi_makimono_torotaku.webp',
    sound: 'assets/sounds/su-torotaku.mp3',
    english: 'Tuna & Pickled radish'
  },
  {
    name: 'sake',
    "kana": 'さけ',
    image: 'assets/images/sushi_salmon.webp',
    sound: 'assets/sounds/su-sake.mp3',
    english: 'Salmon'
  },
  {
    name: 'tai',
    "kana": 'たい',
    image: 'assets/images/sushi_tai.webp',
    sound: 'assets/sounds/su-tai.mp3',
    english: 'Sea bream'
  },
  {
    name: 'tako',
    kana: 'たこ',
    image: 'assets/images/sushi_tako.webp',
    sound: 'assets/sounds/su-tako.mp3',
    english: 'Octopus'
  },
  {
    name: 'tamago',
    kana: 'たまご',
    image: 'assets/images/sushi_tamago.webp',
    sound: 'assets/sounds/su-tamago.mp3',
    english: 'Egg'
  },
  {
    name: 'temakizushi',
    "kana": 'てまきずし',
    image: 'assets/images/sushi_temakizushi.webp',
    sound: 'assets/sounds/su-temakizushi.mp3',
    english: 'Hand-rolled sushi'
  },
  {
    name: 'uni',
    "kana": 'うに',
    image: 'assets/images/sushi_uni.webp',
    sound: 'assets/sounds/su-uni.mp3',
    english: 'Sea urchin'
  },
];

////////////////////////////////////////////// Greeting Question array object
const greetings = [
  {
    name: 'konnichiwa',
    "kana": 'こんにちは',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'Good day'
  },
  {
    name: 'ohayou',
    "kana": 'おはよう',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'Good morning'
  },
  {
    name: 'konbanwa',
    "kana": 'こんばんは',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'Good evening'
  },
  {
    name: 'ogennkidesuka',
    "kana": 'おげんきですか',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'How are you'
  },
  {
    name: 'ohisasiburi',
    "kana": 'おひさしぶり',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'Long time no see'
  },
  {
    name: 'arigatou',
    "kana": 'ありがとう',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'thank you'
  },
  {
    name: 'oishii',
    "kana": 'おいしい',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'delicious'
  },
  {
    name: 'itadakimasu',
    "kana": 'いただきます',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'Grace - before meal'
  },
  {
    name: 'gochisousama',
    "kana": 'ごちそうさま',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'Grace - after meal'
  },
  {
    name: 'douitasimasite',
    "kana": 'どういたしまして',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'You are welcome'
  },
  {
    name: 'oyasumi',
    "kana": 'おやすみ',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'Good night'
  },
  {
    name: 'iitenkidesune',
    "kana": 'いいてんきですね',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'Good weather'
  },
  {
    name: 'waruitenkidesune',
    "kana": 'わるいてんきですね',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'Bad weather'
  },
  {
    name: 'daijoubu',
    "kana": 'だいじょうぶ',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'Good day'
  },
  {
    name: 'taihendesu',
    "kana": 'たいへんです',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'There\'s problem'
  },
  {
    name: 'komarimasita',
    "kana": 'こまりました',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'I\'m in trouble'
  },
  {
    name: 'tanosii',
    "kana": 'たのしい',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'enjoyable'
  },
  {
    name: 'uresii',
    "kana": 'うれしい',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'I\'m happy'
  },
  {
    name: 'kanshasitemasu',
    "kana": 'かんしゃしてます',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'appreciating'
  },
  {
    name: 'daisuki',
    "kana": 'だいすき',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'I love it'
  },
  {
    name: 'daikirai',
    "kana": 'だいきらい',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'I hate it'
  },
  {
    name: 'joudandesu',
    "kana": 'じょうだんです',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'It\'s kidding'
  },
  {
    name: 'kireidesune',
    "kana": 'きれいですね',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'It\'s beautiful'
  },
  {
    name: 'choudoiidesu',
    "kana": 'ちょうどいいです',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'Just right'
  },
  {
    name: 'isoide',
    "kana": 'いそいで',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'Hurry up'
  },
  {
    name: 'nemuidesu',
    "kana": 'ねむいです',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'sleepy'
  },
  {
    name: 'onakasuita',
    "kana": 'おなかすいた',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'I\'m hungry'
  },
  {
    name: 'kanshasitemasu',
    "kana": 'かんしゃしてます',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'I\'m tired'
  },
  {
    name: 'yokatta',
    "kana": 'よかった',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'That\'s good'
  },
  {
    name: 'annsinndesu',
    "kana": 'あんしんです',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'I\'m releaved'
  },
];