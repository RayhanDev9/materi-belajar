export const materi2Modules = [
  {
    id: 101,
    number: 1,
    slug: 'intro-pronouns',
    title: 'Pengenalan Pronoun (Kata Ganti)',
    category: 'Konsep Dasar Pronoun',
    icon: '🎭',
    tagline: 'Membuat kalimat mengalir alami tanpa pengulangan kata yang kaku',
    intro: 'Pronoun adalah kata yang menggantikan kata benda (orang, hewan, atau benda). Bayangkan jika dalam bahasa Indonesia kita harus menyebut nama orang berulang-ulang: "Rudi lapar, Rudi membeli nasi untuk Rudi." Terdengar aneh, bukan? Pronoun hadir agar kalimat menjadi: "Rudi lapar, dia membeli nasi untuk dirinya."',
    rules: [
      {
        title: 'Mengapa Pronoun Sangat Penting?',
        desc: 'Pronoun memiliki 3 fungsi utama dalam percakapan sehari-hari:',
        items: [
          '1. Menghindari Pengulangan: Kalimat menjadi lebih hemat kata dan enak didengar.',
          '2. Menunjukkan Peran: Menjelaskan siapa yang melakukan aksi dan siapa yang menerima aksi.',
          '3. Menunjukkan Kepemilikan: Menegaskan barang milik siapa tanpa berbelit-belit.'
        ]
      },
      {
        title: 'Peta 5 Jenis Pronoun Utama',
        desc: 'Di materi ini kita akan membedah keluarga pronoun lengkap:',
        items: [
          'Personal Pronoun: I vs Me (Pelaku vs Sasaran)',
          'Possessive Pronoun: My vs Mine (Kepemilikan)',
          'Reflexive Pronoun: Myself (Mengenai diri sendiri)',
          'Relative Pronoun: Who, Which, That (Kata hubung "yang")',
          'Indefinite Pronoun: Someone, Anyone (Tak tentu)'
        ]
      }
    ],
    proTip: 'Kunci menguasai pronoun bukan menghafal tabel secara kaku, tapi melihat POSISINYA dalam kalimat: di depan kata kerja (Subjek) atau di belakang kata kerja (Objek)!',
    commonMistakes: 'Memakai nama orang berulang kali dalam satu paragraf. Begitu orangnya sudah diperkenalkan di kalimat pertama, selalu gantikan dengan pronoun (He/She/They) di kalimat berikutnya.',
    quiz: [
      {
        question: 'Apa fungsi utama dari Pronoun dalam bahasa Inggris?',
        options: ['Menggantikan kata benda agar tidak terjadi pengulangan', 'Mengubah kalimat menjadi masa lalu', 'Menghitung jumlah benda', 'Menunjukkan waktu terjadinya aktivitas'],
        answerIndex: 0,
        explanation: 'Pronoun berfungsi menggantikan Noun (kata benda) agar kalimat lebih ringkas dan alami.'
      },
      {
        question: 'Pada kalimat "Sarah is reading because Sarah likes books", kata "Sarah" yang kedua sebaiknya diganti dengan...',
        options: ['Her', 'She', 'Herself', 'Hers'],
        answerIndex: 1,
        explanation: 'Karena posisinya sebagai pelaku di depan kata kerja "likes", gunakan Subject Pronoun "She".'
      }
    ]
  },
  {
    id: 102,
    number: 2,
    slug: 'personal-pronouns',
    title: 'Personal Pronoun (Subject vs Object)',
    category: 'Keluarga Pronoun',
    icon: '👥',
    tagline: 'Pembedaan mutlak antara Si Pelaku (Subject) dan Si Sasaran (Object)',
    intro: 'Dalam bahasa Indonesia kata "saya" tidak berubah: "Saya melihat kamu" dan "Kamu melihat saya". Namun dalam bahasa Inggris, bentuk kata berubah drastis tergantung apakah ia menjadi Pelaku atau Korban!',
    rules: [
      {
        title: '1. Subject Pronoun (Pelaku di Depan Kata Kerja)',
        desc: 'Gunakan jika orang tersebut yang MELAKUKAN tindakan:',
        items: [
          'I (Saya) -> I call you.',
          'You (Kamu) -> You understand English.',
          'We (Kita/Kami) -> We study together.',
          'They (Mereka) -> They play football.',
          'He (Dia pria) -> He helps me.',
          'She (Dia wanita) -> She knows the answer.',
          'It (Benda/hewan) -> It works perfectly.'
        ]
      },
      {
        title: '2. Object Pronoun (Sasaran di Belakang Kata Kerja / Preposisi)',
        desc: 'Gunakan jika orang tersebut MENERIMA tindakan atau berada setelah kata depan (with, for, to, at):',
        items: [
          'Me (Saya) -> You call ME (bukan You call I).',
          'You (Kamu) -> I like YOU.',
          'Us (Kita/Kami) -> Join US (bukan Join We).',
          'Them (Mereka) -> Listen to THEM.',
          'Him (Dia pria) -> I saw HIM yesterday.',
          'Her (Dia wanita) -> Give HER the book.',
          'It (Benda/hewan) -> I like IT.'
        ]
      }
    ],
    proTip: 'Trik Cepat: Sebelum kata kerja pakai I/He/She/They. Setelah kata kerja atau setelah kata "for/with/to", SELALU pakai Me/Him/Her/Them!',
    commonMistakes: 'Mengatakan "Give it to I" (SALAH). Setelah kata depan "to" wajib memakai Object: "Give it to ME" (BENAR).',
    quiz: [
      {
        question: 'Lengkapi kalimat: "Can you help ____? I am confused."',
        options: ['I', 'me', 'my', 'mine'],
        answerIndex: 1,
        explanation: 'Setelah kata kerja "help", kita membutuhkan Object Pronoun yaitu "me".'
      },
      {
        question: 'Manakah kalimat yang tepat secara tata bahasa?',
        options: ['Him loves she', 'He loves her', 'He loves she', 'Him loves her'],
        answerIndex: 1,
        explanation: 'Pelaku di depan menggunakan "He" (Subject), sasaran di belakang menggunakan "her" (Object).'
      }
    ]
  },
  {
    id: 103,
    number: 3,
    slug: 'possessive-pronouns',
    title: 'Possessive: Milik Siapa? (My vs Mine)',
    category: 'Keluarga Pronoun',
    icon: '💼',
    tagline: 'Membedakan kepemilikan yang diikuti benda (My) dan yang berdiri sendiri (Mine)',
    intro: 'Menyatakan kepemilikan dalam bahasa Inggris ada 2 gaya: Gaya Gandeng (ada bendanya di belakang, misal "My car") dan Gaya Mandiri (bendanya tidak disebut lagi, misal "The car is mine").',
    rules: [
      {
        title: '1. Possessive Adjective (Wajib Ditempeli Benda)',
        desc: 'Tidak bisa berdiri sendiri, harus ada kata bendanya:',
        items: [
          'My book (buku saya)',
          'Your house (rumahmu)',
          'Our team (tim kita)',
          'Their school (sekolah mereka)',
          'His motorcycle (motor dia pria)',
          'Her dress (gaun dia wanita)',
          'Its tail (ekornya - tanpa petik!)'
        ]
      },
      {
        title: '2. Possessive Pronoun (Berdiri Sendiri / Mandiri)',
        desc: 'Bendanya sudah dipahami, jadi tidak perlu diulang lagi:',
        items: [
          'Mine (milik saya) -> This book is MINE.',
          'Yours (milikmu) -> That choice is YOURS.',
          'Ours (milik kita) -> The victory is OURS.',
          'Theirs (milik mereka) -> That house is THEIRS.',
          'His (milik dia pria) -> The phone is HIS.',
          'Hers (milik dia wanita) -> The red car is HERS.'
        ]
      }
    ],
    proTip: 'Perhatikan pola huruf: Hampir semua Possessive Pronoun berakhiran huruf S (YourS, OurS, TheirS, HerS), KECUALI "Mine"!',
    commonMistakes: 'Menulis "This is mine book" (SALAH). Mine tidak boleh diikuti benda. Pilih salah satu: "This is my book" atau "This book is mine".',
    quiz: [
      {
        question: 'Kalimat "This jacket is ____" yang benar adalah...',
        options: ['my', 'mine', 'me', 'I'],
        answerIndex: 1,
        explanation: 'Karena berada di akhir kalimat tanpa kata benda setelahnya, gunakan Possessive Pronoun "mine".'
      },
      {
        question: 'Pilihlah kalimat yang benar:',
        options: ['Where is you car?', 'Where is yours car?', 'Where is your car?', 'Where is car yours?'],
        answerIndex: 2,
        explanation: 'Karena ada kata benda "car" di belakangnya, gunakan "your car".'
      }
    ]
  },
  {
    id: 104,
    number: 4,
    slug: 'reflexive-pronouns',
    title: 'Reflexive Pronoun (Mengenai Diri Sendiri)',
    category: 'Keluarga Pronoun',
    icon: '🪞',
    tagline: 'Saat pelaku dan korban adalah orang yang sama: -self dan -selves',
    intro: 'Reflexive pronoun berakhiran "-self" untuk tunggal (1 orang) dan "-selves" untuk jamak (banyak orang). Digunakan saat tindakan si pelaku berbalik mengenai dirinya sendiri seperti bayangan di cermin!',
    rules: [
      {
        title: 'Daftar Lengkap Reflexive Pronoun',
        desc: 'Dibagi berdasarkan tunggal dan jamak:',
        items: [
          'Myself = Diriku sendiri (1 orang)',
          'Yourself = Dirimu sendiri (1 orang)',
          'Himself = Dirinya sendiri (pria)',
          'Herself = Dirinya sendiri (wanita)',
          'Itself = Dirinya sendiri (benda/hewan)',
          'Ourselves = Diri kami/kita sendiri (jamak)',
          'Yourselves = Diri kalian sendiri (jamak)',
          'Themselves = Diri mereka sendiri (jamak)'
        ]
      },
      {
        title: '2 Penggunaan Paling Populer',
        desc: 'Kapan kita menggunakannya?',
        items: [
          '1. Aksi mengenai diri sendiri: "I cut myself while cooking." (Saya teriris sendiri saat masak).',
          '2. Menegaskan mandiri (sendirian / tanpa bantuan): "I did the homework by myself." (Saya mengerjakan PR ini sendirian).'
        ]
      }
    ],
    proTip: 'Frasa "By myself" = "Alone" (sendirian tanpa bantuan orang lain). Contoh: "I live by myself" (Saya tinggal sendirian).',
    commonMistakes: 'Menulis bentuk jamak dengan f, seperti "themself" atau "ourself" (SALAH). Untuk jamak wajib berubah menjadi v: "Themselves" dan "Ourselves" (BENAR).',
    quiz: [
      {
        question: 'Lengkapi: "She looked at _____ in the mirror."',
        options: ['her', 'herself', 'she', 'hers'],
        answerIndex: 1,
        explanation: 'Dia melihat dirinya sendiri di cermin, jadi menggunakan Reflexive "herself".'
      },
      {
        question: 'Bentuk Reflexive yang benar untuk subjek "They" adalah...',
        options: ['Theirselves', 'Themself', 'Themselves', 'Theirs'],
        answerIndex: 2,
        explanation: 'Bentuk yang baku dan benar adalah "Themselves".'
      }
    ]
  },
  {
    id: 105,
    number: 5,
    slug: 'relative-pronouns',
    title: 'Relative Pronoun (Kata Penghubung "Yang")',
    category: 'Keluarga Pronoun',
    icon: '🔗',
    tagline: 'Menggabungkan dua ide kalimat menjadi satu dengan kata "yang": Who, Which, That',
    intro: 'Dalam percakapan, kita sering ingin menjelaskan orang atau benda lebih detail: "Pria YANG memakai kemeja biru itu guru saya." Kata "yang" dalam bahasa Inggris memiliki aturan spesifik tergantung apa yang dijelaskan.',
    rules: [
      {
        title: '1. WHO (Khusus Manusia)',
        desc: 'Dipakai untuk menghubungkan orang yang menjadi pelaku:',
        items: [
          'Contoh: "The girl WHO called me is smart." (Gadis YANG menelepon saya itu pintar).',
          'Contoh: "I know the doctor WHO works here."'
        ]
      },
      {
        title: '2. WHICH (Khusus Benda & Hewan)',
        desc: 'Dipakai untuk benda mati atau hewan:',
        items: [
          'Contoh: "The car WHICH is parked outside is mine." (Mobil YANG diparkir di luar itu milik saya).',
          'Contoh: "I adopted a cat WHICH loves fish."'
        ]
      },
      {
        title: '3. THAT (Serbaguna: Manusia & Benda)',
        desc: 'Bisa menggantikan Who dan Which dalam percakapan santai sehari-hari:',
        items: [
          'Contoh: "The phone THAT I bought is great."',
          'Contoh: "The person THAT told me the story."'
        ]
      },
      {
        title: '4. WHOSE (Menyatakan Kepemilikan "Yang ...-nya")',
        desc: 'Menunjukkan kepemilikan:',
        items: [
          'Contoh: "The man WHOSE car was stolen." (Pria YANG mobilnya dicuri).'
        ]
      }
    ],
    proTip: 'Jika Anda ragu dalam percakapan santai, kata "THAT" adalah jalan pintas paling aman untuk benda maupun orang!',
    commonMistakes: 'Memakai "which" untuk orang, misal: "The man which spoke to me" (SALAH). Untuk orang wajib memakai "Who" atau "That".',
    quiz: [
      {
        question: 'Lengkapi: "This is the laptop _____ I use every day."',
        options: ['who', 'which', 'whom', 'whose'],
        answerIndex: 1,
        explanation: 'Laptop adalah benda, sehingga menggunakan "which" (atau "that").'
      },
      {
        question: 'Lengkapi: "The woman _____ lives next door is very kind."',
        options: ['which', 'who', 'whose', 'where'],
        answerIndex: 1,
        explanation: 'The woman adalah manusia, sehingga menggunakan "who".'
      }
    ]
  },
  {
    id: 106,
    number: 6,
    slug: 'indefinite-pronouns',
    title: 'Indefinite Pronoun (Kata Ganti Tak Tentu)',
    category: 'Keluarga Pronoun',
    icon: '❓',
    tagline: 'Menyebut orang atau benda yang tidak spesifik: Someone, Anyone, Everyone, Nothing',
    intro: 'Saat kita tidak tahu persis siapa orangnya atau apa bendanya, kita menggunakan kata seperti "seseorang", "siapa pun", atau "segalanya". Ada pola gabungan yang sangat rapi untuk mengingatnya!',
    rules: [
      {
        title: 'Tabel Kombinasi 4 Kata Ajaib',
        desc: 'Gabungkan awalan (Some, Any, Every, No) dengan akhiran (-one, -body, -thing):',
        items: [
          'SOME- (Positif): Someone / Somebody (seseorang), Something (sesuatu).',
          'ANY- (Negatif & Tanya): Anyone / Anybody (siapa saja), Anything (apa saja).',
          'EVERY- (Semua): Everyone / Everybody (semua orang), Everything (segalanya).',
          'NO- (Tidak ada): No one / Nobody (tak seorang pun), Nothing (tidak ada apa-apa).'
        ]
      },
      {
        title: '⚠️ Aturan Emas Paling Kritis: Selalu TUNGGAL!',
        desc: 'Meskipun "Everyone" artinya semua orang, secara tata bahasa ia dihitung sebagai 1 ENTITAS TUNGGAL:',
        items: [
          '"Everyone IS happy." (BENAR - pakai is)',
          '"Everyone ARE happy." (SALAH - bukan are)',
          '"Somebody HAS my key." (BENAR - pakai has)'
        ]
      }
    ],
    proTip: 'Kata "-one" dan "-body" artinya sama persis: "Someone" dan "Somebody" bisa saling menggantikan 100%!',
    commonMistakes: 'Membuat double negative dengan kata "nothing", misal: "I don’t have nothing" (SALAH). Karena nothing sudah bermakna negatif, ucapkan: "I have nothing" atau "I don’t have anything".',
    quiz: [
      {
        question: 'Pilihlah to-be yang tepat: "Everyone in the room _____ listening."',
        options: ['is', 'are', 'were', 'be'],
        answerIndex: 0,
        explanation: 'Everyone selalu dianggap tunggal, sehingga berpasangan dengan "is".'
      },
      {
        question: 'Untuk kalimat negatif "Saya tidak melihat siapa pun", yang benar adalah...',
        options: ['I didn’t see no one', 'I didn’t see anyone', 'I saw anyone', 'I not saw someone'],
        answerIndex: 1,
        explanation: 'Pada kalimat negatif (didn\'t), gunakan "anyone" agar tidak terjadi double negative.'
      }
    ]
  },
  {
    id: 107,
    number: 7,
    slug: 'demonstrative-pronouns',
    title: 'Demonstrative Pronoun (Kata Tunjuk Mandiri)',
    category: 'Keluarga Pronoun',
    icon: '👉',
    tagline: 'Menunjuk benda secara mandiri tanpa menyebut nama bendanya lagi',
    intro: 'Pada Materi 1 kita sudah mengenal This dan That. Kali ini kita belajar bagaimana This, That, These, dan Those bertindak mandiri sebagai Pronoun pengganti benda.',
    rules: [
      {
        title: 'Matriks Jarak & Jumlah',
        desc: 'Perhatikan 4 posisi kata tunjuk:',
        items: [
          'THIS = Dekat, berjumlah 1. ("This is delicious!" - Ini lezat!)',
          'THAT = Jauh, berjumlah 1. ("Look at that!" - Lihat itu!)',
          'THESE = Dekat, berjumlah banyak (>1). ("These are my favorite shoes.")',
          'THOSE = Jauh, berjumlah banyak (>1). ("Those were great memories.")'
        ]
      },
      {
        title: 'Beda Demonstrative Adjective vs Demonstrative Pronoun',
        desc: 'Bedanya sangat sederhana:',
        items: [
          'Adjective (ada bendanya): "This CAR is fast."',
          'Pronoun (berdiri sendiri): "THIS is fast."'
        ]
      }
    ],
    proTip: 'Saat berbicara di telepon dalam bahasa Inggris, penutur asli biasa berkata: "Hello, this is John" (Halo, ini John), bukan "I am John"!',
    commonMistakes: 'Menggunakan "this" untuk benda jamak, misal: "This are my friends" (SALAH). Untuk teman-teman (jamak) wajib gunakan: "These are my friends".',
    quiz: [
      {
        question: 'Jika Anda menunjuk bintang-bintang di langit malam yang jauh, kata apa yang tepat?',
        options: ['This', 'These', 'That', 'Those'],
        answerIndex: 3,
        explanation: 'Bintang-bintang berjumlah banyak dan posisinya jauh, gunakan "Those" (Those are stars).'
      },
      {
        question: 'Lengkapi: "_____ are the keys I was looking for!" (kunci-kunci di tangan Anda)',
        options: ['This', 'These', 'That', 'Those'],
        answerIndex: 1,
        explanation: 'Kunci banyak dan posisinya dekat (di tangan), gunakan "These".'
      }
    ]
  },
  {
    id: 108,
    number: 8,
    slug: 'capital-nouns',
    title: 'Noun dengan Huruf Kapital (Proper Nouns)',
    category: 'Dunia Kata Benda (Noun)',
    icon: '🏛️',
    tagline: 'Kapan kata benda WAJIB diawali huruf besar di mana pun posisinya dalam kalimat',
    intro: 'Proper Noun adalah nama spesifik dari seseorang, tempat, atau institusi. Mengetahui kapan harus menggunakan huruf kapital akan membuat tulisan bahasa Inggris Anda terlihat profesional dan tidak canggung.',
    rules: [
      {
        title: 'Daftar Kata Benda yang Wajib Huruf Kapital:',
        desc: 'Selalu gunakan huruf kapital di awal kata:',
        items: [
          '1. Nama Orang: Michael, Siti Rahma, Dr. Smith.',
          '2. Negara, Kota, & Kebangsaan: Indonesia, Japan, Tokyo, Indonesian food.',
          '3. Bahasa: English, Japanese, Bahasa Indonesia.',
          '4. Hari & Bulan: Monday, Friday, January, August.',
          '5. Hari Libur / Perayaan: Christmas, Eid Mubarak, New Year.',
          '6. Merk & Nama Tempat: Google, Toyota, Eiffel Tower, Monas.'
        ]
      },
      {
        title: 'Hal yang Sering Disalahartikan (JANGAN DIBERI KAPITAL):',
        desc: 'Banyak pemula memberi huruf besar pada hal-hal ini:',
        items: [
          'Nama musim (summer, winter, spring) -> huruf kecil.',
          'Nama mata pelajaran umum (science, history) -> huruf kecil, kecuali bahasa (English).'
        ]
      }
    ],
    proTip: 'Kata ganti "I" (saya) selalu huruf besar di mana pun posisinya, bersama dengan semua Proper Noun!',
    commonMistakes: 'Menulis nama bahasa atau nama hari dengan huruf kecil, seperti "i speak english on monday" (SALAH). Yang benar: "I speak English on Monday".',
    quiz: [
      {
        question: 'Manakah penulisan kalimat yang benar menurut aturan huruf kapital?',
        options: ['She studies french on monday', 'She studies French on Monday', 'She studies French on monday', 'she studies french on Monday'],
        answerIndex: 1,
        explanation: 'Nama bahasa (French) dan nama hari (Monday) wajib diawali huruf kapital.'
      },
      {
        question: 'Apakah nama musim (seperti summer / musim panas) wajib diawali huruf kapital?',
        options: ['Ya, selalu', 'Tidak, ditulis dengan huruf kecil', 'Hanya di pagi hari', 'Hanya jika di akhir kalimat'],
        answerIndex: 1,
        explanation: 'Musim (summer, winter, fall, spring) tidak memakai huruf kapital dalam bahasa Inggris standar.'
      }
    ]
  },
  {
    id: 109,
    number: 9,
    slug: 'singular-plural-nouns',
    title: 'Singular & Plural Noun (Satu vs Banyak)',
    category: 'Dunia Kata Benda (Noun)',
    icon: '📚',
    tagline: 'Aturan penambahan -s, -es, -ies, serta kata benda jamak unik yang wajib dihafal',
    intro: 'Jika sebuah benda berjumlah lebih dari satu (Plural), kata bendanya harus diubah. Sebagian besar cukup ditambah huruf "s", namun ada aturan ejaan khusus dan beberapa kata ajaib yang bentuknya berubah total!',
    rules: [
      {
        title: '1. Aturan Regular (Berpola)',
        desc: 'Berdasarkan huruf akhiran kata:',
        items: [
          'Umum: Tambah -s (book -> books, car -> cars).',
          'Akhiran berdesis (s, ss, sh, ch, x): Tambah -es (bus -> buses, watch -> watches, box -> boxes).',
          'Akhiran konsonan + y: Ganti jadi -ies (baby -> babies, city -> cities). *Jika vokal + y cukup -s (boy -> boys, key -> keys).*',
          'Akhiran f / fe: Berubah jadi -ves (knife -> knives, leaf -> leaves, wife -> wives).'
        ]
      },
      {
        title: '2. Aturan Irregular (Bentuk Berubah Unik - Wajib Tahu!)',
        desc: 'Tidak ditambah -s, melainkan berganti kata:',
        items: [
          'Child -> Children (anak-anak, BUKAN childs)',
          'Man -> Men / Woman -> Women',
          'Person -> People (orang-orang, BUKAN persons)',
          'Tooth -> Teeth (gigi banyak) / Foot -> Feet (kaki banyak)',
          'Mouse -> Mice (tikus banyak)',
          'Kata yang sama persis: Sheep -> Sheep (domba), Fish -> Fish (ikan)'
        ]
      }
    ],
    proTip: 'Kata "People" bermakna jamak (banyak orang), jadi pasangannya selalu ARE/HAVE: "People are friendly" (bukan is)!',
    commonMistakes: 'Menulis "Two childs" atau "Three mans". Yang benar: "Two children" dan "Three men".',
    quiz: [
      {
        question: 'Bentuk jamak yang benar dari kata "city" adalah...',
        options: ['citys', 'cities', 'cityes', 'citis'],
        answerIndex: 1,
        explanation: 'Huruf "t" adalah konsonan sebelum "y", sehingga "y" berubah menjadi "-ies" (cities).'
      },
      {
        question: 'Bentuk jamak dari kata "child" adalah...',
        options: ['childs', 'childrens', 'children', 'childies'],
        answerIndex: 2,
        explanation: 'Child adalah irregular noun, bentuk jamaknya adalah "children".'
      }
    ]
  },
  {
    id: 110,
    number: 10,
    slug: 'countable-nouns',
    title: 'Countable Noun (Kata Benda Bisa Dihitung)',
    category: 'Dunia Kata Benda (Noun)',
    icon: '🍎',
    tagline: 'Benda-benda yang bisa dihitung dengan jari: satu, dua, tiga',
    intro: 'Countable noun adalah benda yang memiliki unit terpisah dan wujudnya jelas bisa dihitung satu per satu, seperti apel, buku, kursi, atau kucing.',
    rules: [
      {
        title: 'Ciri Khas Countable Noun:',
        desc: 'Memiliki sifat-sifat gramatikal berikut:',
        items: [
          '1. Bisa diawali artikel "A" atau "An" saat berjumlah satu: a pen, an apple.',
          '2. Bisa langsung diberi angka di depannya: one table, three cars.',
          '3. Bisa diubah ke bentuk jamak (plural dengan akhiran -s): apples, pens, students.',
          '4. Jika bertanya jumlah, gunakan kata tanya "HOW MANY": How many books do you have?'
        ]
      }
    ],
    proTip: 'Coba tes dengan pertanyaan: "Bisa nggak saya bilang satu buku, dua buku, tiga buku?" Jika bisa dan masuk akal, itu adalah Countable Noun!',
    commonMistakes: 'Lupa memberi artikel "a" pada countable noun tunggal, misal: "I have car" (SALAH). Wajib: "I have a car" (BENAR).',
    quiz: [
      {
        question: 'Kata manakah di bawah ini yang merupakan Countable Noun?',
        options: ['Water', 'Chair', 'Air', 'Sugar'],
        answerIndex: 1,
        explanation: 'Chair (kursi) bisa dihitung satuan (one chair, two chairs), sedangkan water/air/sugar tidak.'
      },
      {
        question: 'Untuk menanyakan jumlah countable noun, kita menggunakan frasa tanya...',
        options: ['How much', 'How many', 'How long', 'How often'],
        answerIndex: 1,
        explanation: 'How many digunakan khusus untuk kata benda yang bisa dihitung (countable).'
      }
    ]
  },
  {
    id: 111,
    number: 11,
    slug: 'uncountable-nouns',
    title: 'Uncountable Noun & Wadahnya',
    category: 'Dunia Kata Benda (Noun)',
    icon: '🥛',
    tagline: 'Benda cair, butiran, dan konsep abstrak: air, uang, nasi, informasi',
    intro: 'Uncountable noun adalah benda yang tidak bisa dihitung per butir/satuan secara langsung karena berupa zat cair, gas, butiran halus tak terhingga, atau konsep abstrak.',
    rules: [
      {
        title: '1. Kategori Uncountable Noun Populer',
        desc: 'Kenali kelompoknya:',
        items: [
          'Zat cair / gas: water (air), milk (susu), oil (minyak), air (udara).',
          'Butiran halus / bahan: sugar (gula), rice (nasi/beras), salt (garam), sand (pasir).',
          'Bahan mentah / makanan padat: meat (daging), bread (roti), cheese (keju).',
          'Konsep abstrak: information, advice (saran), love, music, time.',
          'Uang: Money (mata uangnya seperti dollar bisa dihitung, tapi kata "money" uncountable!).'
        ]
      },
      {
        title: '2. Aturan Mutlak Uncountable Noun',
        desc: 'Haram dilakukan pada uncountable noun:',
        items: [
          'TIDAK BOLEH ditambah "-s": (Waters, Milks, Informations - SEMUANYA SALAH).',
          'TIDAK BOLEH pakai "a/an" langsung: (A water - SALAH).',
          'Pertanyaan jumlah memakai: "HOW MUCH": (How much water do you drink?).'
        ]
      },
      {
        title: '3. Trik Ajaib Menghitung Uncountable: Hitung Wadahnya!',
        desc: 'Gunakan satuan wadah / takaran (Partitives):',
        items: [
          'A glass of water (segelas air) -> two glasses of water',
          'A cup of coffee (secangkir kopi) -> three cups of coffee',
          'A bowl of rice (semangkuk nasi)',
          'A slice of bread (sepotong roti)',
          'A piece of advice / information (sebuah saran/informasi)'
        ]
      }
    ],
    proTip: 'Kata "Money" adalah uncountable (kita tidak bilang "one money, two moneys"). Kita bertanya: "How much money do you need?", bukan "How many".',
    commonMistakes: 'Menulis "many advices" atau "two informations". Yang benar: "some advice" atau "two pieces of information".',
    quiz: [
      {
        question: 'Manakah cara menghitung air minum yang benar dalam bahasa Inggris?',
        options: ['Two waters', 'Two glasses of water', 'Two piece of water', 'A water'],
        answerIndex: 1,
        explanation: 'Air dihitung melalui wadahnya: "Two glasses of water".'
      },
      {
        question: 'Untuk menanyakan harga atau jumlah uang, kita bertanya...',
        options: ['How many money is this?', 'How much money is this?', 'How numbers money?', 'How big money?'],
        answerIndex: 1,
        explanation: 'Karena money adalah uncountable noun, gunakan "How much".'
      }
    ]
  },
  {
    id: 112,
    number: 12,
    slug: 'tobe-present-past',
    title: 'To Be: Am, Is, Are, Was, dan Were',
    category: 'Kata Kerja Penghubung',
    icon: '⏳',
    tagline: 'Mesin waktu To-Be: Kondisi sekarang (Present) vs Kemarin (Past)',
    intro: 'Pada Materi 1 Anda sudah belajar Am, Is, Are untuk waktu sekarang. Sekarang saatnya melangkah lebih jauh: bagaimana jika keadaannya terjadi di masa lalu (kemarin, minggu lalu)? To Be akan berganti menjadi Was dan Were!',
    rules: [
      {
        title: '1. Sekarang (Present Tense) -> Am, Is, Are',
        desc: 'Dipakai untuk kondisi hari ini, saat ini, atau fakta umum:',
        items: [
          'I -> AM ("I am ready now")',
          'He, She, It -> IS ("He is happy today")',
          'You, We, They -> ARE ("They are at home now")'
        ]
      },
      {
        title: '2. Masa Lalu (Past Tense) -> Was & Were',
        desc: 'Dipakai untuk keterangan waktu kemarin (yesterday, last night, two days ago):',
        items: [
          'I, He, She, It -> WAS ("I was tired yesterday", "She was a student in 2020")',
          'You, We, They -> WERE ("We were late yesterday", "They were happy last night")'
        ]
      },
      {
        title: 'Ringkasan Tabel Transformasi Waktu',
        desc: 'Bandingkan perubahannya:',
        items: [
          'Am / Is  ====> WAS',
          'Are       ====> WERE'
        ]
      }
    ],
    proTip: 'Ingat polanya: Semua yang tadinya pakai IS (dan juga "I") di masa lalu berubah menjadi WAS. Yang tadinya pakai ARE berubah menjadi WERE!',
    commonMistakes: 'Menulis "I were sick" (SALAH). Untuk subjek tunggal "I", masa lalunya selalu "I was" (BENAR).',
    quiz: [
      {
        question: 'Lengkapi kalimat untuk masa lalu: "They _____ in Bali last week."',
        options: ['are', 'were', 'was', 'is'],
        answerIndex: 1,
        explanation: 'Subjek "They" pada waktu lampau (last week) berpasangan dengan "were".'
      },
      {
        question: 'Lengkapi: "I _____ very busy yesterday."',
        options: ['am', 'was', 'were', 'are'],
        answerIndex: 1,
        explanation: 'Subjek "I" pada waktu lampau (yesterday) menggunakan "was".'
      }
    ]
  },
  {
    id: 113,
    number: 13,
    slug: 'quantifiers-some-any-many-much',
    title: 'Kuantitas: Some, Any, Many, Much, & A Lot of',
    category: 'Kuantitas & Jumlah',
    icon: '📊',
    tagline: 'Memilih kata "banyak" dan "beberapa" yang tepat untuk setiap jenis kalimat',
    intro: 'Dalam bahasa Indonesia kita cukup bilang "banyak buku" dan "banyak air". Di bahasa Inggris, ada perbedaan ketat antara benda yang bisa dihitung dan tidak, serta jenis kalimat positif vs negatif!',
    rules: [
      {
        title: '1. Some vs Any (Artinya: "Beberapa / Sedikit")',
        desc: 'Bedanya terletak pada jenis kalimatnya:',
        items: [
          'SOME: Dipakai pada kalimat POSITIF (+). ("I have some friends.", "I need some water.")',
          'ANY: Dipakai pada kalimat NEGATIF (-) dan TANYA (?). ("I don’t have any cash.", "Do you have any questions?")',
          'Pengecualian Sopan: "Some" boleh dipakai di pertanyaan HANYA jika menawarkan sesuatu dengan ramah ("Would you like some tea?").'
        ]
      },
      {
        title: '2. Many vs Much (Artinya: "Banyak")',
        desc: 'Bedanya terletak pada jenis bendanya:',
        items: [
          'MANY: Untuk Countable Noun (benda bisa dihitung). ("Many cars", "Many apples", "Many students").',
          'MUCH: Untuk Uncountable Noun (benda tak bisa dihitung). ("Much time", "Much money", "Much water").'
        ]
      },
      {
        title: '3. A LOT OF (Senjata Rahasia Pemula: Bisa untuk Apa Saja!)',
        desc: 'Bisa dipakai untuk countable MAUPUN uncountable:',
        items: [
          '"I have a lot of books." (Bisa dihitung - BENAR)',
          '"I drink a lot of water." (Tak bisa dihitung - BENAR)',
          'Sangat cocok dipakai dalam percakapan sehari-hari!'
        ]
      }
    ],
    proTip: 'Jika Anda ragu apakah suatu benda Countable atau Uncountable, gunakan saja "A LOT OF". Dijamin 100% benar dan sangat natural!',
    commonMistakes: 'Mengatakan "I don’t have some money" (SALAH). Pada kalimat negatif dengan don’t/didn’t, selalu ganti some menjadi any: "I don’t have ANY money" (BENAR).',
    quiz: [
      {
        question: 'Lengkapi kalimat negatif: "We don’t have _____ milk in the fridge."',
        options: ['some', 'any', 'many', 'a'],
        answerIndex: 1,
        explanation: 'Pada kalimat negatif (don\'t have), gunakan "any".'
      },
      {
        question: 'Lengkapi: "How _____ brothers do you have?"',
        options: ['much', 'many', 'any', 'some'],
        answerIndex: 1,
        explanation: 'Brothers adalah orang yang bisa dihitung (countable), sehingga menggunakan "How many".'
      }
    ]
  }
];
