export const modules = [
  {
    id: 1,
    slug: 'alphabet',
    title: 'Alphabet (Abjad)',
    category: 'Dasar Bunyi & Kata',
    icon: '🔤',
    tagline: 'Kunci pertama membaca dan mengeja ribuan kata bahasa Inggris',
    intro: 'Bahasa Inggris menggunakan 26 huruf yang sama persis dengan Bahasa Indonesia (A-Z). Perbedaannya terletak pada cara membacanya. Menguasai alfabet akan membuat Anda percaya diri saat mengeja nama, email, atau membaca kata baru!',
    vowelTrick: {
      title: 'Trik Rahasia 3 Huruf Vokal Kunci',
      desc: 'Banyak pemula tertukar antara A, E, dan I. Ingat rumus ini:',
      items: [
        { letter: 'A', sound: 'Ey', example: 'Apple', tip: 'Ingat kata "Eyang" atau "Hei!"' },
        { letter: 'E', sound: 'I', example: 'Elephant', tip: 'Kebalikan dari Indonesia: E dibaca "I"' },
        { letter: 'I', sound: 'Ay', example: 'Ice cream', tip: 'Ingat kata "Ayo!" atau kata "Eye" (mata)' }
      ]
    },
    alphabetList: [
      { letter: 'A', phonetics: 'ei', word: 'Apple', meaning: 'Apel' },
      { letter: 'B', phonetics: 'biː', word: 'Book', meaning: 'Buku' },
      { letter: 'C', phonetics: 'siː', word: 'Cat', meaning: 'Kucing' },
      { letter: 'D', phonetics: 'diː', word: 'Door', meaning: 'Pintu' },
      { letter: 'E', phonetics: 'iː', word: 'Eagle', meaning: 'Elang' },
      { letter: 'F', phonetics: 'ef', word: 'Fish', meaning: 'Ikan' },
      { letter: 'G', phonetics: 'dʒiː', word: 'Green', meaning: 'Hijau' },
      { letter: 'H', phonetics: 'eitʃ', word: 'House', meaning: 'Rumah' },
      { letter: 'I', phonetics: 'ai', word: 'Island', meaning: 'Pulau' },
      { letter: 'J', phonetics: 'dʒei', word: 'Juice', meaning: 'Jus' },
      { letter: 'K', phonetics: 'kei', word: 'Key', meaning: 'Kunci' },
      { letter: 'L', phonetics: 'el', word: 'Lion', meaning: 'Singa' },
      { letter: 'M', phonetics: 'em', word: 'Moon', meaning: 'Bulan' },
      { letter: 'N', phonetics: 'en', word: 'Night', meaning: 'Malam' },
      { letter: 'O', phonetics: 'ou', word: 'Orange', meaning: 'Jeruk' },
      { letter: 'P', phonetics: 'piː', word: 'Pen', meaning: 'Pulpen' },
      { letter: 'Q', phonetics: 'kjuː', word: 'Queen', meaning: 'Ratu' },
      { letter: 'R', phonetics: 'ɑːr', word: 'Rain', meaning: 'Hujan' },
      { letter: 'S', phonetics: 'es', word: 'Sun', meaning: 'Matahari' },
      { letter: 'T', phonetics: 'tiː', word: 'Table', meaning: 'Meja' },
      { letter: 'U', phonetics: 'juː', word: 'Umbrella', meaning: 'Payung' },
      { letter: 'V', phonetics: 'viː', word: 'Voice', meaning: 'Suara' },
      { letter: 'W', phonetics: 'ˈdʌbl.juː', word: 'Water', meaning: 'Air' },
      { letter: 'X', phonetics: 'eks', word: 'X-ray', meaning: 'Sinar-X' },
      { letter: 'Y', phonetics: 'wai', word: 'Yellow', meaning: 'Kuning' },
      { letter: 'Z', phonetics: 'zed / ziː', word: 'Zebra', meaning: 'Zebra' }
    ],
    proTip: 'Huruf "W" disebut "double-u" karena secara visual zaman dulu dibentuk dari dua huruf U (UU = W)!',
    commonMistakes: 'Membaca huruf "E" dengan bunyi "E" Indonesia. Ingat: Huruf E bahasa Inggris dibaca "I" (seperti kata "Email").',
    quiz: [
      {
        question: 'Bagaimana cara membaca huruf "I" dalam bahasa Inggris?',
        options: ['I (seperti ibu)', 'Ay (seperti air)', 'Ey (seperti eja)', 'U (seperti ubi)'],
        answerIndex: 1,
        explanation: 'Huruf "I" dalam bahasa Inggris dibaca "Ay" (contoh: "Ice cream" dibaca "Ais krim").'
      },
      {
        question: 'Huruf apakah yang dibaca "ei" dalam alfabet Inggris?',
        options: ['E', 'A', 'I', 'Y'],
        answerIndex: 1,
        explanation: 'Huruf "A" dibaca "ei". Sedangkan huruf "E" dibaca "i".'
      }
    ]
  },
  {
    id: 2,
    slug: 'numbers',
    title: 'Angka (Numbers)',
    category: 'Dasar Bunyi & Kata',
    icon: '🔢',
    tagline: 'Kuasai pola angka dari satuan, belasan, hingga jutaan tanpa pusing',
    intro: 'Angka dalam bahasa Inggris memiliki pola yang sangat teratur. Begitu Anda menguasai angka 1 sampai 12, angka-angka berikutnya hanya tinggal menyambung pola!',
    rules: [
      {
        title: '1. Angka Dasar (1 - 12)',
        desc: 'Ini adalah pondasi wajib hafal karena tidak berpola:',
        items: [
          '1 = One', '2 = Two', '3 = Three', '4 = Four', '5 = Five', '6 = Six',
          '7 = Seven', '8 = Eight', '9 = Nine', '10 = Ten', '11 = Eleven', '12 = Twelve'
        ]
      },
      {
        title: '2. Belasan (13 - 19) = Berakhiran "-teen"',
        desc: 'Ingat kata "Teenager" (remaja usia belasan). Tekanan intonasi ada di ujung kata:',
        items: [
          '13 = Thirteen', '14 = Fourteen', '15 = Fifteen', '16 = Sixteen',
          '17 = Seventeen', '18 = Eighteen', '19 = Nineteen'
        ]
      },
      {
        title: '3. Puluhan (20, 30, ...) = Berakhiran "-ty"',
        desc: 'Tekanan intonasi ada di suku kata pertama:',
        items: [
          '20 = Twenty', '30 = Thirty', '40 = Forty (tanpa u!)', '50 = Fifty',
          '60 = Sixty', '70 = Seventy', '80 = Eighty', '90 = Ninety'
        ]
      },
      {
        title: '4. Ratusan, Ribuan, & Jutaan',
        desc: 'Tinggal gabungkan angka satuan + unitnya:',
        items: [
          '100 = One hundred', '500 = Five hundred',
          '1,000 = One thousand', '1,000,000 = One million',
          'Contoh: 25 = Twenty-five | 142 = One hundred forty-two'
        ]
      }
    ],
    proTip: 'Hati-hati dengan 14 (Fourteen) vs 40 (Forty). Angka 40 ditulis "FORTY", huruf "u"-nya hilang!',
    commonMistakes: 'Tertukar antara pelafalan Thirteen (13) dan Thirty (30). 13 ada bunyi "teen" panjang di akhir, sedangkan 30 pendek "ti".',
    quiz: [
      {
        question: 'Bagaimana penulisan angka 40 dalam bahasa Inggris yang benar?',
        options: ['Fourty', 'Forty', 'Forteen', 'Fourteen'],
        answerIndex: 1,
        explanation: 'Angka 40 ditulis "Forty" (tanpa huruf u). Angka 14 adalah "Fourteen".'
      },
      {
        question: 'Bahasa Inggris dari angka 75 adalah...',
        options: ['Seventeen-five', 'Seventy-five', 'Seven-fifty', 'Seven-teen-five'],
        answerIndex: 1,
        explanation: '70 adalah Seventy, ditambah 5 (five) menjadi Seventy-five.'
      }
    ]
  },
  {
    id: 3,
    slug: 'calendar',
    title: 'Hari, Tanggal, Bulan, & Tahun',
    category: 'Waktu & Kalender',
    icon: '📅',
    tagline: 'Menyebutkan tanggal, hari ulang tahun, dan janji temu dengan lancar',
    intro: 'Dalam bahasa Inggris, menyebutkan waktu kalender memiliki aturan preposisi (kata depan) khusus seperti ON dan IN. Jangan khawatir, ada rumus singkatnya!',
    rules: [
      {
        title: 'Hari dalam Seminggu (Days of the Week)',
        desc: 'Gunakan preposisi "ON" di depan nama hari!',
        items: [
          'Monday (Senin) -> on Monday',
          'Tuesday (Selasa) -> on Tuesday',
          'Wednesday (Rabu - dibaca "wenz-dei")',
          'Thursday (Kamis - dibaca "therz-dei")',
          'Friday (Jumat) -> on Friday',
          'Saturday (Sabtu) -> on Saturday',
          'Sunday (Minggu) -> on Sunday'
        ]
      },
      {
        title: '12 Bulan (Months of the Year)',
        desc: 'Gunakan preposisi "IN" jika hanya menyebut bulan!',
        items: [
          'January, February, March, April, May, June, July, August, September, October, November, December.',
          'Contoh: in August (di bulan Agustus), in December (di bulan Desember).'
        ]
      },
      {
        title: 'Tanggal (Ordinal Numbers)',
        desc: 'Tanggal memakai urutan (ke-1, ke-2), bukan angka biasa:',
        items: [
          '1st = First', '2nd = Second', '3rd = Third',
          '4th = Fourth', '5th = Fifth', '21st = Twenty-first',
          'Contoh: August 17th (dibaca: August the seventeenth)'
        ]
      },
      {
        title: 'Tahun (Years) - Trik Belah Dua!',
        desc: 'Tahun biasanya dibaca dengan membelah 4 digit menjadi dua pasang angka:',
        items: [
          '1995 dibaca: Nineteen ninety-five (19 - 95)',
          '1945 dibaca: Nineteen forty-five (19 - 45)',
          '2026 dibaca: Twenty twenty-six (20 - 26) atau Two thousand twenty-six'
        ]
      }
    ],
    proTip: 'Rumus Preposisi: IN untuk waktu panjang (Bulan, Tahun: in August, in 2026). ON untuk hari & tanggal spesifik (on Monday, on August 17th). AT untuk jam (at 7 o’clock).',
    commonMistakes: 'Menulis "in Monday" atau "at Monday". Yang benar selalu: "on Monday".',
    quiz: [
      {
        question: 'Preposisi apa yang tepat untuk kalimat: "I will meet you ___ Friday"?',
        options: ['in', 'on', 'at', 'by'],
        answerIndex: 1,
        explanation: 'Untuk nama hari (Monday, Friday, etc.) selalu gunakan "on".'
      },
      {
        question: 'Bagaimana cara membaca tahun 1980 yang paling umum?',
        options: ['One thousand nine hundred eighty', 'Nineteen eighty', 'Nineteen eight', 'One nine eight zero'],
        answerIndex: 1,
        explanation: 'Tahun dibelah 2: 19 (Nineteen) dan 80 (Eighty) -> Nineteen eighty.'
      }
    ]
  },
  {
    id: 4,
    slug: 'time-telling',
    title: 'Waktu & Jam (Telling Time)',
    category: 'Waktu & Kalender',
    icon: '⏰',
    tagline: 'Cara membaca jam digital dan tradisional (Past & To) tanpa bingung',
    intro: 'Ada 2 cara menyebutkan jam dalam bahasa Inggris: Cara Santai (Digital) dan Cara Tradisional (Past/To). Sebagai pemula, Anda bisa memakai Cara Santai terlebih dahulu karena sangat mudah!',
    rules: [
      {
        title: 'Cara 1: Gaya Santai (Digital Style) - Paling Direkomendasikan untuk Pemula',
        desc: 'Tinggal sebut angka jam, lalu langsung sebut angka menitnya!',
        items: [
          '07:15 = Seven fifteen (Tujuh lima belas)',
          '08:30 = Eight thirty (Delapan tiga puluh)',
          '10:45 = Ten forty-five (Sepuluh empat puluh lima)',
          '09:05 = Nine oh five ("0" dibaca "oh")'
        ]
      },
      {
        title: 'Cara 2: Gaya Tradisional (British / Formal)',
        desc: 'Menyebut menitnya terlebih dahulu baru jamnya:',
        items: [
          'O’clock = Pas/Tepat (07:00 = Seven o’clock)',
          'Past = Lewat (07:10 = Ten past seven)',
          'Quarter past = Lewat 15 menit (07:15 = Quarter past seven)',
          'Half past = Lewat 30 menit (07:30 = Half past seven)',
          'To = Kurang menuju jam depan (07:50 = Ten to eight [10 menit menuju jam 8])',
          'Quarter to = Kurang 15 menit (07:45 = Quarter to eight)'
        ]
      },
      {
        title: 'AM vs PM',
        desc: 'Bahasa Inggris memakai format 12 jam:',
        items: [
          'AM (Ante Meridiem) = Tengah malam 00:00 s/d siang 11:59',
          'PM (Post Meridiem) = Siang 12:00 s/d malam 23:59'
        ]
      }
    ],
    proTip: 'Jika Anda gugup atau lupa aturan Past/To saat berbicara, gunakan selalu Gaya Santai (Contoh: "Seven twenty" untuk 07:20). Semua penutur asli bahasa Inggris mengerti 100%!',
    commonMistakes: 'Memakai "o’clock" saat ada menitnya, contoh: "seven fifteen o’clock" (SALAH). O’clock HANYA untuk jam pas tepat 00 (contoh: 7:00 = Seven o’clock).',
    quiz: [
      {
        question: 'Jam 08:30 dalam cara sebut santai adalah...',
        options: ['Eight thirty', 'Thirty past eight', 'Eight o’clock', 'Half eight thirty'],
        answerIndex: 0,
        explanation: 'Cara paling santai dan mudah adalah jam lalu menit: Eight thirty.'
      },
      {
        question: 'Kapan kata "o’clock" boleh digunakan?',
        options: ['Setiap kali menyebut jam', 'Hanya saat jarum menit tepat di angka 12 (menit 00)', 'Saat lewat 30 menit', 'Hanya di pagi hari'],
        answerIndex: 1,
        explanation: 'O’clock hanya dipakai saat jam tepat bulat (misal: 10:00 = Ten o’clock).'
      }
    ]
  },
  {
    id: 5,
    slug: 'family-vocabulary',
    title: 'Kosakata Keluarga (Family Members)',
    category: 'Kosakata Penting',
    icon: '👨‍👩‍👧‍👦',
    tagline: 'Mengenal anggota keluarga inti, keluarga besar, dan hubungan kerabat',
    intro: 'Membicarakan keluarga adalah topik percakapan paling umum saat berkenalan. Mari pelajari sebutan anggota keluarga inti dan keluarga besar secara terstruktur.',
    familyGroups: [
      {
        group: 'Keluarga Inti (Nuclear Family)',
        members: [
          { en: 'Father / Dad', id: 'Ayah / Papa' },
          { en: 'Mother / Mom', id: 'Ibu / Mama' },
          { en: 'Parents', id: 'Kedua orang tua' },
          { en: 'Brother', id: 'Saudara laki-laki' },
          { en: 'Sister', id: 'Saudara perempuan' },
          { en: 'Son', id: 'Anak laki-laki' },
          { en: 'Daughter', id: 'Anak perempuan' },
          { en: 'Child / Children', id: 'Anak / Anak-anak (jamak)' }
        ]
      },
      {
        group: 'Keluarga Besar (Extended Family)',
        members: [
          { en: 'Grandfather / Grandpa', id: 'Kakek' },
          { en: 'Grandmother / Grandma', id: 'Nenek' },
          { en: 'Grandparents', id: 'Kakek dan Nenek' },
          { en: 'Uncle', id: 'Paman / Om' },
          { en: 'Aunt', id: 'Bibi / Tante' },
          { en: 'Cousin', id: 'Saudara sepupu' },
          { en: 'Nephew', id: 'Keponakan laki-laki' },
          { en: 'Niece', id: 'Keponakan perempuan' }
        ]
      },
      {
        group: 'Keluarga Ipar / Mertua (In-Laws)',
        members: [
          { en: 'Father-in-law', id: 'Ayah mertua' },
          { en: 'Mother-in-law', id: 'Ibu mertua' },
          { en: 'Brother-in-law', id: 'Kakak/Adik ipar laki-laki' },
          { en: 'Sister-in-law', id: 'Kakak/Adik ipar perempuan' }
        ]
      }
    ],
    proTip: 'Bahasa Inggris tidak membedakan panggilan kakak atau adik secara khusus. Keduanya cukup "Brother" atau "Sister". Jika ingin menegaskan lebih tua/muda, gunakan "Older brother" (kakak) atau "Younger sister" (adik).',
    commonMistakes: 'Menyebut anak-anak dengan kata "Childs". Bentuk jamak dari child adalah "Children".',
    quiz: [
      {
        question: 'Apa bahasa Inggris untuk "Keponakan perempuan"?',
        options: ['Nephew', 'Niece', 'Cousin', 'Aunt'],
        answerIndex: 1,
        explanation: 'Niece adalah keponakan perempuan, sedangkan Nephew adalah keponakan laki-laki.'
      },
      {
        question: 'Kata "Parents" berarti...',
        options: ['Ayah saja', 'Ibu saja', 'Kedua orang tua (Ayah dan Ibu)', 'Kakek dan Nenek'],
        answerIndex: 2,
        explanation: 'Parents mengacu pada kedua orang tua.'
      }
    ]
  },
  {
    id: 6,
    slug: 'sentence-patterns',
    title: 'Pola Dasar Kalimat (Sentence Structure)',
    category: 'Fondasi Tata Bahasa (Grammar)',
    icon: '🧱',
    tagline: 'Struktur dasar kalimat bahasa Inggris: S + P + O yang persis Bahasa Indonesia',
    intro: 'Kabar baik bagi Anda: Pola kalimat bahasa Inggris dan bahasa Indonesia itu 90% sama! Kita menggunakan susunan Subject (Pelaku) + Predicate (Aksi/Kondisi) + Object (Sasaran).',
    rules: [
      {
        title: 'Formula Dasar: S + P + O',
        desc: 'Bandingkan kedua kalimat ini:',
        items: [
          'Bahasa Indonesia: Saya (S) makan (P) sebuah apel (O).',
          'Bahasa Inggris: I (S) eat (P) an apple (O).',
          'Polanya sama persis! Anda hanya perlu mengganti kosa katanya satu per satu.'
        ]
      },
      {
        title: '2 Jenis Kalimat dalam Bahasa Inggris',
        desc: 'Semua kalimat bahasa Inggris hanya terbagi menjadi 2 tipe:',
        items: [
          '1. Kalimat Verbal (Ada aktivitas aksi nyata): I read books. She drinks tea. They play soccer.',
          '2. Kalimat Nominal (Menjelaskan kondisi, profesi, sifat - butuh "To Be"): I am happy. He is a teacher. They are smart.'
        ]
      }
    ],
    proTip: 'Sebuah kalimat yang sah dalam bahasa Inggris MINIMAL harus punya 1 Subject dan 1 Predicate (Verb). Contoh paling pendek: "I sleep." atau "Cats run."',
    commonMistakes: 'Membuat kalimat tanpa predikat, seperti "I teacher" (SALAH). Karena tidak ada kata kerja fisik, wajib diberi To Be: "I am a teacher" (BENAR).',
    quiz: [
      {
        question: 'Dalam kalimat "Budi plays guitar", manakah yang bertindak sebagai Predicate?',
        options: ['Budi', 'plays', 'guitar', 'plays guitar'],
        answerIndex: 1,
        explanation: 'Plays adalah kata kerja (tindakan), sehingga berfungsi sebagai Predicate.'
      },
      {
        question: 'Manakah susunan kalimat yang benar?',
        options: ['An apple I eat', 'Eat I an apple', 'I eat an apple', 'I an apple eat'],
        answerIndex: 2,
        explanation: 'Pola standar adalah Subject (I) + Predicate (eat) + Object (an apple).'
      }
    ]
  },
  {
    id: 7,
    slug: 'subject',
    title: 'Apa itu Subject? (Si Pelaku)',
    category: 'Fondasi Tata Bahasa (Grammar)',
    icon: '👤',
    tagline: 'Mengenal 7 Subject Pronoun utama yang wajib dikuasai luar kepala',
    intro: 'Subject adalah siapa atau apa yang melakukan tindakan dalam kalimat, atau siapa yang sedang dibicarakan. Dalam bahasa Inggris, ada 7 kata ganti subjek utama yang menjadi motor penggerak kalimat.',
    actors: [
      { pronoun: 'I', meaning: 'Saya / Aku', example: 'I love music.', note: 'Selalu ditulis huruf kapital (besar)!' },
      { pronoun: 'You', meaning: 'Kamu / Kalian (bisa tunggal/jamak)', example: 'You are kind.', note: 'Bisa untuk 1 orang atau banyak orang' },
      { pronoun: 'We', meaning: 'Kami / Kita', example: 'We study English.', note: 'Termasuk diri kita' },
      { pronoun: 'They', meaning: 'Mereka', example: 'They live in Jakarta.', note: 'Orang atau benda berjumlah lebih dari satu' },
      { pronoun: 'He', meaning: 'Dia (Laki-laki tunggal)', example: 'He is my father.', note: '1 pria: Ayah, Budi, dokter pria' },
      { pronoun: 'She', meaning: 'Dia (Perempuan tunggal)', example: 'She is a nurse.', note: '1 wanita: Ibu, Ani, dokter wanita' },
      { pronoun: 'It', meaning: 'Dia (Benda / Hewan / Hal abstrak)', example: 'It is a red car.', note: 'Bukan manusia, berjumlah 1' }
    ],
    proTip: 'Kelompokkan menjadi 2 kubu: Kubu Jamak (I, You, We, They) dan Kubu Orang Ketiga Tunggal (He, She, It). Kubu He, She, It sering membawa aturan spesial (seperti kata kerja ditambah -s/es atau to-be "is")!',
    commonMistakes: 'Menulis huruf "i" kecil untuk "saya" di tengah kalimat. Huruf "I" (saya) WAJIB selalu huruf kapital besar di mana pun posisinya dalam kalimat.',
    quiz: [
      {
        question: 'Kata ganti subjek apa yang tepat untuk menggantikan "My sister"?',
        options: ['He', 'She', 'They', 'It'],
        answerIndex: 1,
        explanation: 'My sister adalah perempuan tunggal, jadi kata gantinya adalah "She".'
      },
      {
        question: 'Kata ganti apa yang tepat untuk menggantikan "Two cats"?',
        options: ['It', 'He', 'They', 'We'],
        answerIndex: 2,
        explanation: 'Walaupun kucing adalah hewan, karena ada dua (jamak), kata gantinya adalah "They". (It hanya untuk 1 hewan/benda).'
      }
    ]
  },
  {
    id: 8,
    slug: 'predicate',
    title: 'Apa itu Predicate? (Aksi / Keadaan)',
    category: 'Fondasi Tata Bahasa (Grammar)',
    icon: '⚡',
    tagline: 'Jantung kalimat: Kata kerja tindakan (Action Verb) dan Kata penghubung (To Be)',
    intro: 'Predicate menceritakan apa yang dilakukan Subjek atau bagaimana kondisi Subjek tersebut. Tanpa Predicate, kalimat tidak akan bermakna utuh.',
    rules: [
      {
        title: 'Tipe 1: Action Verb (Kata Kerja Tindakan)',
        desc: 'Mengekspresikan kegiatan fisik atau mental:',
        items: [
          'Run (berlari), Eat (makan), Sleep (tidur), Think (berpikir), Study (belajar).',
          'Contoh: "The birds fly." -> fly adalah predicate.',
          'Catatan: Untuk Subjek He, She, It pada waktu sekarang (present), verb ditambah "s/es": "He runs", "She eats".'
        ]
      },
      {
        title: 'Tipe 2: To Be (Kata Kerja Penghubung Keadaan)',
        desc: 'Jika kalimat tidak ada aksi fisik (hanya sifat, profesi, atau lokasi), gunakan To Be sebagai Predicate:',
        items: [
          'I -> AM (I am happy)',
          'You, We, They -> ARE (They are students)',
          'He, She, It -> IS (He is strong)'
        ]
      }
    ],
    proTip: 'Hafalkan pasangan Subjek dan To Be seperti sahabat sejati: "I am", "You are, We are, They are", "He is, She is, It is". Jangan sampai tertukar!',
    commonMistakes: 'Menumpuk Action Verb dan To Be bersamaan, contoh: "I am sleep" (SALAH). Pilih salah satu: "I sleep" (Saya tidur) atau "I am sleepy" (Saya mengantuk).',
    quiz: [
      {
        question: 'Pasangan To Be yang benar untuk subjek "They" adalah...',
        options: ['am', 'is', 'are', 'be'],
        answerIndex: 2,
        explanation: 'They berpasangan dengan "are" (They are students).'
      },
      {
        question: 'Manakah kalimat yang memiliki predicate kata kerja tindakan (action verb)?',
        options: ['She is beautiful', 'They drink coffee', 'We are at home', 'I am ready'],
        answerIndex: 1,
        explanation: '"drink" (minum) adalah tindakan fisik nyata, menjadikannya action verb.'
      }
    ]
  },
  {
    id: 9,
    slug: 'object-complement-adverb',
    title: 'Object, Complement, dan Adverb',
    category: 'Fondasi Tata Bahasa (Grammar)',
    icon: '🧩',
    tagline: 'Elemen pelengkap kalimat: Sasaran (Object), Penjelas (Complement), dan Keterangan (Adverb)',
    intro: 'Setelah Subjek dan Predikat, kalimat sering membutuhkan pelengkap agar informasinya detail dan jelas. Ketiganya memiliki peran yang berbeda:',
    rules: [
      {
        title: '1. Object (Objek / Sasaran Aksi)',
        desc: 'Siapa atau apa yang menjadi sasaran / korban dari kata kerja.',
        items: [
          'Contoh: "John kicked the ball." -> The ball adalah Object (yang ditendang).',
          'Contoh: "I love you." -> You adalah Object.'
        ]
      },
      {
        title: '2. Complement (Pelengkap Sifat / Status)',
        desc: 'Melengkapi informasi tentang Subjek setelah To Be (bukan korban aksi).',
        items: [
          'Profesi: "She is a doctor." -> a doctor adalah Complement.',
          'Sifat: "He is tired." -> tired adalah Complement.'
        ]
      },
      {
        title: '3. Adverb (Keterangan)',
        desc: 'Menjelaskan DI MANA (tempat), KAPAN (waktu), atau BAGAIMANA (cara).',
        items: [
          'Tempat: "in the office", "at school"',
          'Waktu: "yesterday", "every morning", "now"',
          'Cara: "quickly", "carefully"'
        ]
      }
    ],
    proTip: 'Rumus lengkap kalimat Bahasa Inggris: S + V + O + C + A. Contoh: "I (S) drink (V) coffee (O) hot (C) in the morning (A)."' ,
    commonMistakes: 'Mengira semua kata di belakang adalah Object. Pada kalimat "She is happy", "happy" bukanlah objek karena tidak ada yang dikenai aksi, melainkan Complement (kata sifat penjelas subjek).',
    quiz: [
      {
        question: 'Pada kalimat "They play football in the park", kata "in the park" berfungsi sebagai...',
        options: ['Subject', 'Predicate', 'Object', 'Adverb of place (keterangan tempat)'],
        answerIndex: 3,
        explanation: '"in the park" menjelaskan tempat terjadinya aktivitas, sehingga merupakan Adverb of place.'
      },
      {
        question: 'Pada kalimat "He eats a sandwich", apakah fungsi kata "a sandwich"?',
        options: ['Object', 'Complement', 'Adverb', 'Subject'],
        answerIndex: 0,
        explanation: '"a sandwich" adalah objek / sasaran yang dimakan oleh He.'
      }
    ]
  },
  {
    id: 10,
    slug: 'there-this-that-positive',
    title: 'There Is/Are, This, That: Kalimat Positif',
    category: 'Menunjuk & Menyatakan Keberadaan',
    icon: '👉',
    tagline: 'Menyatakan "Ada" serta menunjuk barang "Ini" dan "Itu"',
    intro: 'Untuk mengatakan "Ada sebuah meja" atau "Ini buku saya", bahasa Inggris memiliki kata penunjuk khusus yang sangat sering dipakai dalam percakapan sehari-hari.',
    rules: [
      {
        title: 'There is vs There are (Artinya: "Ada")',
        desc: 'Dipakai untuk menyatakan keberadaan benda:',
        items: [
          'THERE IS = Untuk 1 benda (tunggal). Contoh: "There is a book on the table." (Ada sebuah buku di meja).',
          'THERE ARE = Untuk banyak benda (jamak > 1). Contoh: "There are three apples." (Ada tiga apel).'
        ]
      },
      {
        title: 'This vs That (Menunjuk Jarak)',
        desc: 'Dipakai saat kita menunjuk suatu benda:',
        items: [
          'THIS = "Ini" (Jarak dekat dan bendanya cuma 1). Contoh: "This is my phone." (Ini hp saya).',
          'THAT = "Itu" (Jarak jauh dan bendanya cuma 1). Contoh: "That is a plane." (Itu pesawat terbang).'
        ]
      },
      {
        title: 'Tambahan Bonus: These & Those (Benda Banyak)',
        desc: 'Jika bendanya banyak (> 1):',
        items: [
          'THESE = "Ini (banyak)". Contoh: "These are my pens."',
          'THOSE = "Itu (banyak)". Contoh: "Those are tall buildings."'
        ]
      }
    ],
    proTip: 'Trik praktis: Is selalu untuk 1 benda, Are selalu untuk lebih dari 1 benda!',
    commonMistakes: 'Mengatakan "There is two books" (SALAH). Karena dua buku berjumlah jamak, wajib memakai "There are two books".',
    quiz: [
      {
        question: 'Lengkapi kalimat: "_____ is a cat in front of the house."',
        options: ['There are', 'There is', 'Those', 'These'],
        answerIndex: 1,
        explanation: 'Karena hanya ada "a cat" (1 kucing), gunakan "There is".'
      },
      {
        question: 'Jika Anda memegang pulpen di tangan Anda, Anda berkata...',
        options: ['That is my pen', 'This is my pen', 'Those is my pen', 'There are my pen'],
        answerIndex: 1,
        explanation: 'Benda dekat dan tunggal (1) menggunakan "This is".'
      }
    ]
  },
  {
    id: 11,
    slug: 'there-this-that-negative',
    title: 'There Is/Are, This, That: Kalimat Negatif',
    category: 'Menunjuk & Menyatakan Keberadaan',
    icon: '🚫',
    tagline: 'Menolak dan menyatakan "Tidak Ada" atau "Bukan Ini/Itu"',
    intro: 'Membuat kalimat negatif dari There Is/Are, This, dan That sangat mudah: Anda cukup menaruh kata NOT setelah kata "is" atau "are"!',
    rules: [
      {
        title: 'Rumus Negatif: Tambahkan NOT setelah IS / ARE',
        desc: 'Perhatikan perubahannya:',
        items: [
          'There is NOT a problem. -> Singkatan: There isn’t a problem. (Tidak ada masalah).',
          'There are NOT students here. -> Singkatan: There aren’t students here. (Tidak ada murid di sini).',
          'This is NOT my wallet. -> Singkatan: This isn’t my wallet. (Ini bukan dompet saya).',
          'That is NOT a real diamond. -> Singkatan: That isn’t a real diamond. (Itu bukan berlian asli).'
        ]
      },
      {
        title: 'Bentuk Singkatan Sehari-hari (Contractions)',
        desc: 'Penutur asli hampir selalu menyingkatnya saat berbicara santai:',
        items: [
          'is + not = isn’t',
          'are + not = aren’t'
        ]
      }
    ],
    proTip: 'Kata "no" juga bisa langsung dipakai setelah There is/are: "There is no water" (Tidak ada air) atau "There are no seats left" (Tidak ada kursi tersisa).',
    commonMistakes: 'Menulis "This not is my car" (SALAH). Kata NOT selalu datang SETELAH to-be: "This is not my car" (BENAR).',
    quiz: [
      {
        question: 'Bentuk singkatan dari "There is not" adalah...',
        options: ['There isn’t', 'There aren’t', 'There not', 'There ain’t'],
        answerIndex: 0,
        explanation: 'is + not disingkat menjadi isn’t.'
      },
      {
        question: 'Kalimat negatif yang benar untuk "That is your bag" adalah...',
        options: ['That not is your bag', 'That is not your bag', 'Not that is your bag', 'That are not your bag'],
        answerIndex: 1,
        explanation: 'Kata "not" diletakkan setelah "is", menjadi "That is not your bag".'
      }
    ]
  },
  {
    id: 12,
    slug: 'there-this-that-questions',
    title: 'There Is/Are, This, That: Kalimat Tanya',
    category: 'Menunjuk & Menyatakan Keberadaan',
    icon: '❓',
    tagline: 'Membalik urutan untuk bertanya: "Apakah ada...?" dan "Apakah ini...?"',
    intro: 'Untuk mengubah kalimat pernyataan menjadi kalimat tanya (Yes/No Question), Anda hanya perlu melakukan 1 trik ajaib: tukar posisi Is/Are ke bagian paling depan!',
    rules: [
      {
        title: 'Trik Geser ke Depan (Inversion)',
        desc: 'Bandingkan posisi katanya:',
        items: [
          'Pernyataan: "There is a hospital." -> Tanya: "Is there a hospital?" (Apakah ada rumah sakit?)',
          'Pernyataan: "There are oranges." -> Tanya: "Are there oranges?" (Apakah ada buah jeruk?)',
          'Pernyataan: "This is your coffee." -> Tanya: "Is this your coffee?" (Apakah ini kopi Anda?)',
          'Pernyataan: "That is a good school." -> Tanya: "Is that a good school?" (Apakah itu sekolah yang bagus?)'
        ]
      },
      {
        title: 'Cara Menjawab Singkat (Short Answers)',
        desc: 'Jawab dengan percaya diri dan natural:',
        items: [
          'Pertanyaan: "Is there any tea?" -> Jawaban: "Yes, there is." / "No, there isn’t."',
          'Pertanyaan: "Are there two tickets?" -> Jawaban: "Yes, there are." / "No, there aren’t."',
          'Pertanyaan: "Is this yours?" -> Jawaban: "Yes, it is." / "No, it isn’t."'
        ]
      }
    ],
    proTip: 'Jika ada turis bertanya "Is there an ATM nearby?", Anda sudah tahu artinya: "Apakah ada ATM di dekat sini?". Jawab saja "Yes, there is!"',
    commonMistakes: 'Bertanya dengan kalimat datar tanpa membalik to-be, misalnya "There is an ATM?" (Meskipun dipahami secara santai, bentuk grammar yang tepat adalah "Is there an ATM?").',
    quiz: [
      {
        question: 'Bagaimana kalimat tanya yang tepat untuk menanyakan "Apakah ini paspor Anda?"',
        options: ['This is your passport?', 'Is this your passport?', 'Are this your passport?', 'There is your passport?'],
        answerIndex: 1,
        explanation: 'Pindahkan "Is" ke paling depan: "Is this your passport?".'
      },
      {
        question: 'Bagaimana jawaban "Ya" yang tepat untuk pertanyaan "Are there books on the table?"',
        options: ['Yes, there is.', 'Yes, there are.', 'Yes, it is.', 'Yes, they is.'],
        answerIndex: 1,
        explanation: 'Karena pertanyaannya memakai "Are there", jawabannya adalah "Yes, there are."'
      }
    ]
  },
  {
    id: 13,
    slug: 'article-the',
    title: 'Article "The" (Benda Spesifik)',
    category: 'Kata Sandang (Articles)',
    icon: '🎯',
    tagline: 'Kapan harus memakai kata "The"? Rahasia benda yang sudah saling dipahami',
    intro: '"The" disebut Definite Article (kata sandang pasti). Gunakan "The" saat benda yang Anda bicarakan sudah SPESIFIK dan JELAS bagi orang yang diajak bicara.',
    rules: [
      {
        title: 'Kapan Menggunakan "The"?',
        desc: 'Berikut situasi pasti penggunaan "The":',
        items: [
          '1. Sudah sama-sama tahu bendanya: "Close the door!" (Tutup pintu itu -> keduanya tahu pintu yang mana).',
          '2. Benda yang hanya ada satu di dunia: The sun (matahari), the moon (bulan), the internet, the sky.',
          '3. Disebutkan untuk kedua kalinya: "I bought a book. The book is interesting." (Pertama kali: a book, kedua kali: the book).',
          '4. Tingkatan tertinggi (Superlative): The best (terbaik), the tallest (tertinggi), the most expensive.'
        ]
      },
      {
        title: 'Kapan TIDAK Boleh Menggunakan "The"?',
        desc: 'Hindari memakai "The" pada situasi berikut:',
        items: [
          'Nama orang: (The John - SALAH, gunakan John saja).',
          'Nama kota & negara umum: (The Indonesia - SALAH, gunakan Indonesia saja). *Kecuali negara serikat/kerajaan: The USA, The UK.'
        ]
      }
    ],
    proTip: 'Cara baca kata "The": Dibaca "Dhe" jika huruf depan kata berikutnya konsonan (The car). Dibaca "Dhi" jika huruf depannya vokal (The apple, The earth).',
    commonMistakes: 'Memakai "The" saat membicarakan hal umum secara luas. Contoh: "I like the music" (kurang tepat jika maksudnya musik secara umum). Seharusnya cukup "I like music".',
    quiz: [
      {
        question: 'Mengapa kita mengatakan "The Sun" dan bukan "A Sun"?',
        options: ['Karena matahari bersinar terang', 'Karena matahari hanya ada satu yang unik di dunia', 'Karena matahari sangat jauh', 'Hanya kebiasaan saja'],
        answerIndex: 1,
        explanation: 'Benda yang hanya ada satu dan unik di dunia selalu menggunakan "The" (The sun, The moon).'
      },
      {
        question: 'Lengkapi kalimat: "I saw a movie yesterday. ____ movie was amazing."',
        options: ['A', 'An', 'The', 'This'],
        answerIndex: 2,
        explanation: 'Karena film tersebut sudah disebutkan di kalimat pertama, pada penyebutan kedua filmnya sudah spesifik sehingga memakai "The".'
      }
    ]
  },
  {
    id: 14,
    slug: 'article-a-an',
    title: 'Article "A" dan "An"',
    category: 'Kata Sandang (Articles)',
    icon: '🍎',
    tagline: 'Kunci memilih "A" atau "An" berdasarkan BUNYI SUARA, bukan hurufnya!',
    intro: 'Kata "A" dan "An" sama-sama berarti: sebuah, seekor, seorang, atau sebutir (HANYA untuk 1 benda tunggal yang umum). Kunci membedakannya terletak pada BUNYI pengucapannya!',
    rules: [
      {
        title: '1. Gunakan "A" untuk Kata yang Berbunyi Huruf Konsonan',
        desc: 'Bunyi konsonan (b, c, d, f, g, k, m, p, t, w, dll.):',
        items: [
          'A car (sebuah mobil)',
          'A book (sebuah buku)',
          'A teacher (seorang guru)',
          'A dog (seekor anjing)'
        ]
      },
      {
        title: '2. Gunakan "An" untuk Kata yang Berbunyi Huruf Vokal (A, I, U, E, O)',
        desc: 'Tujuannya agar lidah kita tidak tersendat saat mengucapkannya dengan cepat:',
        items: [
          'An apple (sebuah apel - bunyi "e")',
          'An egg (sebutir telur - bunyi "e")',
          'An umbrella (sebuah payung - bunyi "a")',
          'An orange (sebuah jeruk - bunyi "o")'
        ]
      },
      {
        title: '3. Kasus Jebakan yang Sering Muncul!',
        desc: 'Ingat patokannya adalah BUNYI SUARA, bukan huruf tertulisnya:',
        items: [
          'Hour (jam) diawali huruf "H", tapi "H"-nya diam tidak dibaca (dibaca "our"). Jadi yang benar: AN HOUR.',
          'University diawali huruf "U", tapi dibacanya berbunyi "yu-ni-ver-si-ti" (konsonan Y). Jadi yang benar: A UNIVERSITY.',
          'Honest man (pria jujur) dibaca "onest". Yang benar: AN HONEST MAN.'
        ]
      }
    ],
    proTip: 'Ucapkan kata tersebut dengan cepat di mulut Anda. Jika bunyi pertamanya seperti "A-I-U-E-O", gunakan AN!',
    commonMistakes: 'Memakai "a" atau "an" untuk benda jamak atau benda tak dapat dihitung, seperti "a waters" (SALAH) atau "a cats" (SALAH). A/An HANYA untuk 1 benda.',
    quiz: [
      {
        question: 'Manakah pasangan artikel yang benar untuk kata "hour"?',
        options: ['A hour', 'An hour', 'The hour only', 'Hour a'],
        answerIndex: 1,
        explanation: 'Huruf "h" pada kata "hour" tidak dibaca (silent H), bunyinya vokal "our", jadi memakai "An hour".'
      },
      {
        question: 'Manakah pasangan artikel yang benar untuk kata "university"?',
        options: ['An university', 'A university', 'The university only', 'None'],
        answerIndex: 1,
        explanation: 'Kata "university" berbunyi awal huruf "Y" (konsonan yu-), maka menggunakan "A university".'
      }
    ]
  },
  {
    id: 15,
    slug: 'have-has',
    title: 'Have dan Has (Mempunyai)',
    category: 'Kata Kerja Esensial',
    icon: '🤝',
    tagline: 'Menyatakan kepemilikan benda dan ciri fisik tanpa salah pasang',
    intro: 'Kedua kata ini memiliki arti yang sama: "mempunyai" atau "memiliki". Perbedaannya murni ditentukan oleh siapa SUBJEK kalimatnya.',
    rules: [
      {
        title: '1. Geng HAVE: I, You, We, They',
        desc: 'Dipakai untuk subjek orang pertama, kedua, dan jamak:',
        items: [
          'I have a laptop. (Saya punya laptop).',
          'You have a nice smile. (Kamu punya senyum yang manis).',
          'We have two tickets. (Kami punya dua tiket).',
          'They have many friends. (Mereka punya banyak teman).'
        ]
      },
      {
        title: '2. Geng HAS: He, She, It (Subjek Tunggal)',
        desc: 'Dipakai untuk dia laki-laki, dia perempuan, benda/hewan 1 buah, atau nama 1 orang:',
        items: [
          'He has a motorcycle. (Dia punya sepeda motor).',
          'She has long hair. (Dia punya rambut panjang).',
          'It has four legs. (Hewan itu punya empat kaki).',
          'Rudi has a new job. (Rudi punya pekerjaan baru).'
        ]
      },
      {
        title: '3. Bentuk Negatif (Tidak Punya)',
        desc: 'Gunakan Don’t have atau Doesn’t have (setelah itu kembali ke "have"):',
        items: [
          'I don’t have time. (Saya tidak punya waktu).',
          'He doesn’t have money. (Dia tidak punya uang - perhatikan: kata has berubah jadi have karena sudah ada does!).'
        ]
      }
    ],
    proTip: 'Hafalkan mantra sederhana ini: "He, She, It suka akhiran S" -> maka pasangannya adalah haS!',
    commonMistakes: 'Menulis "He doesn’t has" (SALAH). Rumus bahasa Inggris: setelah kata kerja bantu "doesn’t", kata kerjanya kembali ke bentuk dasar: "He doesn’t have" (BENAR).',
    quiz: [
      {
        question: 'Lengkapi kalimat: "She _____ a blue bicycle."',
        options: ['have', 'has', 'having', 'is have'],
        answerIndex: 1,
        explanation: 'Subjek "She" berpasangan dengan kata "has".'
      },
      {
        question: 'Manakah kalimat negatif yang tepat untuk "He has a car"?',
        options: ['He doesn’t has a car', 'He doesn’t have a car', 'He don’t have a car', 'He not has a car'],
        answerIndex: 1,
        explanation: 'Setelah "doesn’t", kata "has" kembali ke bentuk dasarnya yaitu "have".'
      }
    ]
  },
  {
    id: 16,
    slug: 'apostrophe-s',
    title: 'Apostrophe + S (\'s)',
    category: 'Kepemilikan (Possession)',
    icon: '🏷️',
    tagline: 'Cara singkat dan keren menyatakan kepemilikan: milik siapa?',
    intro: 'Tanda petik atas ditambah s (\'s) adalah cara tercepat dalam bahasa Inggris untuk mengatakan kepemilikan. Daripada mengucapkan kalimat panjang seperti "The car of John", orang Inggris cukup mengatakan "John’s car"!',
    rules: [
      {
        title: '1. Aturan Dasar: [Pemilik] + \'s + [Benda]',
        desc: 'Letakkan \'s tepat setelah nama pemiliknya:',
        items: [
          'John’s car = Mobil milik John',
          'My mother’s house = Rumah ibu saya',
          'The cat’s tail = Ekor milik kucing itu',
          'Teacher’s book = Buku milik guru'
        ]
      },
      {
        title: '2. Jika Pemiliknya Sudah Berakhiran Huruf "S" (Jamak)',
        desc: 'Jika bendanya jamak dan sudah ada huruf s di belakang, cukup tambahkan tanda petik (\') saja tanpa s lagi:',
        items: [
          'My parents’ house = Rumah kedua orang tua saya (bukan parents’s)',
          'The students’ desks = Meja-meja milik para murid'
        ]
      },
      {
        title: '3. Awas Tertukar: \'s Kepemilikan vs \'s Singkatan "is"',
        desc: 'Bandingkan kedua kalimat ini:',
        items: [
          '1. "David’s phone is expensive." -> \'s di sini berarti kepemilikan (hp milik David).',
          '2. "David’s very smart." -> \'s di sini singkatan dari "is" (David is very smart).'
        ]
      }
    ],
    proTip: 'Selalu ingat susunan katanya: Siapa pemiliknya di depan, lalu \'s, lalu apa bendanya di belakang. (Contoh: "Budi’s dog", bukan "Dog’s Budi").',
    commonMistakes: 'Menulis kepemilikan untuk kata ganti "it" dengan tanda petik: "it’s tail" (SALAH). Untuk kata ganti benda kepemilikannya ditulis tanpa tanda petik: "its tail". "It’s" artinya adalah "It is".',
    quiz: [
      {
        question: 'Bagaimana cara mengatakan "Laptop milik Sarah" dalam bahasa Inggris?',
        options: ['Laptop’s Sarah', 'Sarah’s laptop', 'Sarah of laptop', 'The laptop Sarah'],
        answerIndex: 1,
        explanation: 'Pemilik di depan (Sarah) + \'s + benda (laptop) -> Sarah’s laptop.'
      },
      {
        question: 'Apa arti dari kalimat "This is my brother’s jacket"?',
        options: ['Ini adalah jaket milik saudara laki-laki saya', 'Saudara laki-laki saya adalah jaket', 'Ini adalah jaket untuk saudara saya', 'Saudara saya memakai jaket ini'],
        answerIndex: 0,
        explanation: 'brother’s jacket berarti jaket kepunyaan saudara laki-laki saya.'
      }
    ]
  }
];
