// Soal Tantangan 1 dan 2:

function tantanganSatuDanDua () {
    // Rumus :
// BMI = massa / tinggi2 = massa / (tinggi x tinggi)

// Data yang diberikan:

// Data 1:

// Mark: Berat = 78 kg, Tinggi = 1.69 m
// John: Berat = 92 kg, Tinggi = 1.95 m

// Data 2:

// Mark: Berat = 95 kg, Tinggi = 1.88 m
// John: Berat = 85 kg, Tinggi = 1.76 m
// Tugas:

// 1.Simpan berat badan dan tinggi badan Mark dan John dalam variabel.
// 2.Hitung BMI untuk Mark dan John menggunakan rumus yang diberikan.
// 3.Tentukan apakah Mark memiliki BMI yang lebih tinggi dibandingkan John, dan simpan informasi ini dalam variabel markHigherBMI.

// BMI = massa / tinggi2 = massa / (tinggi x tinggi)

// Penyelesaian tantangan 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.info(`BMI Mark ${BMIMark} lebih tinggi dari BMI Jhon ${BMIJohn}`)
}else {
    console.info(`BMI Jhon ${BMIJohn} lebih tinggi dari BMI Mark ${BMIMark}`)
}

}

tantanganSatuDanDua ();

function tantanganTiga () {
//     Tantangan #3:
// Ada dua tim senam: Dolphins dan Koalas. Mereka bertanding tiga kali. Pemenang dengan rata-rata nilai tertinggi akan memenangkan piala!

// Tugas kamu:

// 1. Hitung rata-rata nilai untuk masing-masing tim, dan simpan hasilnya dalam variabel:

// scoreDolphins untuk tim Dolphins.
// scoreKoalas untuk tim Koalas.

// 2.Bandingkan rata-rata nilai kedua tim untuk menentukan pemenang, lalu cetak hasilnya ke konsol:

// "Dolphins menang piala" jika Dolphins menang.
// "Koalas menang piala" jika Koalas menang.
// "Keduanya menang piala" jika rata-rata nilai mereka sama.
// DATA UJI:

// Dolphins: 96, 108, dan 89.
// Koalas: 88, 91, dan 110

// Data Bonus 1:

// Dolphins: 97, 112, dan 101.
// Koalas: 109, 95, dan 123.

// Data Bonus 2:

// Dolphins: 97, 112, dan 101.
// Koalas: 109, 95, dan 106.


// const scoreDolphins = (96 + 108 + 89) / 3 ;
// const scoreKoalas = (88 + 91 + 110) / 3 ;
// console.info(scoreDolphins,scoreKoalas);

// if(scoreDolphins > scoreKoalas) {
//     console.info('Dolphins menang piala')
// }else if (scoreKoalas > scoreDolphins) {
//     console.info('Koalas menang piala')
// }else {
//     console.info('Keduanya menang piala')
// }

const scoreDolphins = (97 + 112 + 11) / 3 ;
const scoreKoalas = (109 + 95 + 16) / 3 ;
console.info(scoreDolphins,scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.info('Dolphins menang piala')
}else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.info('Koalas menang piala')
}else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas
    >= 100){
    console.info('Keduanya menang piala')
}else {
    console.info('Dolphins dan Koalas Tidak mendapatkan piala😂')
}

}

tantanganTiga();

function tantanganEmpat () {
    // Steven membutuhkan kalkulator tip yang sangat sederhana untuk digunakan saat dia makan di restoran. Di negaranya, biasanya memberikan tip sebesar 15% jika nilai tagihan berada di antara 50 dan 300. Jika nilai tagihannya berbeda (lebih kecil dari 50 atau lebih besar dari 300), tip yang diberikan adalah 20%.

// Tugas:
// 1.Hitung tip berdasarkan nilai tagihan.
// 2. Buat variabel yang disebut tip untuk menyimpan nilai tip.
// 3.Tidak diperbolehkan menggunakan pernyataan if...else. (Jika lebih mudah, kamu bisa mulai dengan menggunakan if...else, lalu coba ubah menjadi operator ternary).
// Tampilkan string di console yang berisi nilai tagihan, nilai tip, dan total (tagihan + tip).
// Contoh:
// Jika tagihan sebesar 275, maka tip-nya adalah 41.25, dan total yang harus dibayar adalah 316.25.

// Petunjuk:

// Untuk menghitung 20% dari sebuah nilai, kalikan nilai tersebut dengan 20/100 (atau 0.2).
// Tagihan X berada di antara 50 dan 300 jika X >= 50 dan X <= 300.
// DATA UJI:
// Cobalah dengan nilai tagihan yang berbeda: 275, 40, dan 430.

// Tujuan:
// Gunakan nilai dari variabel bill dan tip untuk membangun string yang sesuai, tanpa menuliskan angka secara langsung dalam string tersebut.

let tagihan = 430
let tip = tagihan >= 50 && tagihan <= 300 ? tagihan * (15 / 100) : tagihan * (20 / 100);
console.info(`Tagihan anda ${tagihan},nilai tip ${tip} dan total (${tagihan + tip})`);
}

tantanganEmpat();