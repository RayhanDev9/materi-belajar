'use strict';

const chellangeSatuMetode = () => {
    // Soal 1: Menggunakan .trim()
    // Instruksi: Diberikan string dengan spasi ekstra di awal dan akhir. Gunakan metode .trim() untuk menghapus spasi ekstra tersebut dan cetak hasilnya.
    // javascript
    // Salin kode
    let str = "   JavaScript is awesome!   ";
    // Pertanyaan:
    // 1.	Gunakan .trim() untuk menghapus spasi di awal dan akhir string.
    // 2.	Tampilkan hasilnya.
    // ________________________________________
    console.info(str.trim())
    // Soal 2: Menggunakan .trimStart()
    // Instruksi: Diberikan string dengan spasi di awal. Gunakan metode .trimStart() untuk menghapus spasi di awal dan cetak hasilnya.
    // javascript
    // Salin kode
    let strStart = "   Hello, World!";
    // Pertanyaan:
    // 1.	Gunakan .trimStart() untuk menghapus spasi di awal string.
    // 2.	Tampilkan hasilnya.
    // ________________________________________
    console.info(strStart.trimStart());
    // Soal 3: Menggunakan .trimEnd()
    // Instruksi: Diberikan string dengan spasi di akhir. Gunakan metode .trimEnd() untuk menghapus spasi di akhir dan cetak hasilnya.
    // javascript
    // Salin kode
    let strEnd = "Hello, World!   ";
    // Pertanyaan:
    // 1.	Gunakan .trimEnd() untuk menghapus spasi di akhir string.
    // 2.	Tampilkan hasilnya.
    // ________________________________________
    console.info(strEnd.trimEnd());
    // Soal 4: Menggunakan .replace() untuk Mengganti Karakter Pertama
    // Instruksi: Diberikan string dengan beberapa kata. Gunakan metode .replace() untuk mengganti hanya kemunculan pertama dari kata tertentu dengan kata lain.
    // javascript
    // Salin kode
    let strRep = "I love JavaScript, JavaScript is fun!";
    // Pertanyaan:
    // 1.	Gunakan .replace() untuk mengganti hanya kemunculan pertama dari kata "JavaScript" dengan "TypeScript".
    // 2.	Tampilkan hasilnya.
    // ________________________________________
    console.info(strRep.replace('JavaScript', "TypeScript"))
    // Soal 5: Menggunakan .replaceAll() untuk Mengganti Semua Kemunculan
    // Instruksi: Diberikan string dengan beberapa kemunculan kata yang sama. Gunakan metode .replaceAll() untuk mengganti semua kemunculan kata tersebut dengan kata lain.
    // javascript
    // Salin kode
    let strRepAll = "I love JavaScript. JavaScript is awesome!";
    // Pertanyaan:
    // 1.	Gunakan .replaceAll() untuk mengganti semua kemunculan kata "JavaScript" dengan "TypeScript".
    // 2.	Tampilkan hasilnya.
    // ________________________________________
    console.info(strRepAll.replaceAll('JavaScript', "TypeScript"))
    // Soal 6: Menggabungkan .trim(), .replace(), dan .replaceAll()
    // Instruksi: Diberikan string yang berisi spasi ekstra dan beberapa kemunculan kata tertentu. Lakukan langkah-langkah berikut:
    // javascript
    // Salin kode
    let strGabungan = "   JavaScript is great! JavaScript is powerful!   ";
    // Pertanyaan:
    // 1.	Gunakan .trim() untuk menghapus spasi di awal dan akhir string.
    // 2.	Gunakan .replace() untuk mengganti kemunculan pertama kata "JavaScript" dengan "TypeScript".
    // 3.	Gunakan .replaceAll() untuk mengganti semua kemunculan kata "is" dengan "was".
    // 4.	Tampilkan hasil setelah setiap langkah.
    // ________________________________________
    console.info(strGabungan.trim().replace("JavaScript", "TypeScript").replaceAll('is', 'was'))
    // Soal 7: Menggunakan .replace() untuk Menghapus Karakter Khusus
    // Instruksi: Diberikan string dengan beberapa karakter khusus seperti tanda baca dan spasi. Gunakan metode .replace() untuk menghapus semua tanda baca.
    // javascript
    // Salin kode
    // Pertanyaan:
    // 1.	Gunakan .replace() dengan regular expression untuk menghapus semua tanda baca (seperti koma, tanda seru, dan tanda kutip).
    // 2.	Tampilkan hasilnya.
    // ________________________________________
    let strTandaBaca = "Hello, World! How's everything?";

    // Array tanda baca
    const tandaBaca = [',', '!', '?', "'", ';', '"', '(', ')', '{', '}', '[', ']'];

    // Menghapus semua tanda baca dengan replaceAll dalam loop
    let hasil = strTandaBaca;
    for (let i = 0; i < tandaBaca.length; i++) {
        hasil = hasil.replaceAll(tandaBaca[i], '');
    }

    console.info(hasil);  // Output: "Hello World Hows everything"
    // Soal 10: Menggunakan .replaceAll() untuk Mengganti Spasi Ekstra
    // Instruksi: Diberikan string dengan beberapa spasi ekstra. Gunakan metode .replaceAll() untuk mengganti semua spasi ganda dengan satu spasi.
    // javascript
    // Salin kode
    let strSpasi = "Hello   World!  How  are    you?";
    // Pertanyaan:
    // 1.	Gunakan .replaceAll() untuk mengganti semua spasi ganda menjadi satu spasi.
    // 2.	Tampilkan hasilnya.
    console.info(strSpasi.replaceAll('  ', ' '))

}
// chellangeSatuMetode();
const chellangDuaMetode = () => {
    // Soal 1: Menggunakan .includes()
    // Instruksi: Diberikan string yang berisi kalimat. Gunakan metode .includes() untuk memeriksa apakah sebuah kata tertentu ada di dalam string tersebut.

    // javascript
    // Salin kode
    let kalimat = "Saya suka belajar JavaScript.";
    // Pertanyaan:

    // Gunakan .includes() untuk memeriksa apakah kata "belajar" ada di dalam string kalimat.
    // Tampilkan hasilnya (true atau false).
    console.info(kalimat.includes('belajar'))
    // Soal 2: Menggunakan .startsWith()
    // Instruksi: Diberikan string yang berisi sebuah kalimat. Gunakan metode .startsWith() untuk memeriksa apakah string dimulai dengan kata tertentu.

    // javascript
    // Salin kode
    let kalimatStart = "JavaScript itu menyenangkan!";
    // Pertanyaan:

    // Gunakan .startsWith() untuk memeriksa apakah string kalimat dimulai dengan kata "JavaScript".
    // Tampilkan hasilnya (true atau false).
    console.info(kalimatStart.startsWith('"JavaScript"'))
    // Soal 3: Menggunakan .endsWith()
    // Instruksi: Diberikan string yang berisi kalimat. Gunakan metode .endsWith() untuk memeriksa apakah string tersebut diakhiri dengan kata tertentu.

    // javascript
    // Salin kode
    let kalimatEnd = "Belajar JavaScript sangat seru!";
    // Pertanyaan:

    // Gunakan .endsWith() untuk memeriksa apakah string kalimat diakhiri dengan kata "seru!".
    console.info(kalimatEnd.endsWith("seru!"))
    // Tampilkan hasilnya (true atau false).
    // Soal 4: Menggunakan .padEnd()
    // Instruksi: Diberikan string pendek. Gunakan metode .padEnd() untuk menambahkan karakter tertentu di akhir string sehingga panjang string mencapai jumlah yang diinginkan.

    // javascript
    // Salin kode
    let kataPadEnd = "JavaScript";
    // Pertanyaan:

    // Gunakan .padEnd() untuk menambahkan karakter tanda seru ('!') di akhir string kata sehingga panjangnya menjadi 15 karakter.
    console.info(kataPadEnd.padEnd(15, '!'));
    // Tampilkan hasilnya.
    // Soal 5: Menggunakan .padStart()
    // Instruksi: Diberikan string pendek. Gunakan metode .padStart() untuk menambahkan karakter tertentu di awal string sehingga panjang string mencapai jumlah yang diinginkan.

    // javascript
    // Salin kode
    let kataPadStart = "JS";
    // Pertanyaan:

    // Gunakan .padStart() untuk menambahkan karakter tanda bintang ('*') di awal string kata sehingga panjangnya menjadi 10 karakter.
    // Tampilkan hasilnya.
    console.info(kataPadStart.padStart(10, '*'));
    // Soal 6: Menggunakan .includes() dan .startsWith()
    // Instruksi: Diberikan string yang berisi kalimat. Gunakan metode .includes() untuk memeriksa apakah ada kata tertentu dan .startsWith() untuk memeriksa kata pertama dalam string.

    // javascript
    // Salin kode
    let kalimatISW = "Belajar JavaScript itu menyenangkan!";
    // Pertanyaan:

    // Gunakan .includes() untuk memeriksa apakah kata "JavaScript" ada di dalam string kalimat.
    // Gunakan .startsWith() untuk memeriksa apakah string kalimat dimulai dengan kata "Belajar".
    // Tampilkan hasil kedua pemeriksaan tersebut.
    console.info(kalimatISW.includes('JavaScript'));
    console.info(kalimatISW.startsWith('Belajar'));
    // Soal 7: Menggunakan .endsWith() dan .padEnd()
    // Instruksi: Diberikan string yang berisi kalimat pendek. Gunakan metode .endsWith() untuk memeriksa akhiran string dan .padEnd() untuk menambahkan karakter agar string lebih panjang.

    // javascript
    // Salin kode
    let kalimatEE = "Pemrograman";
    // Pertanyaan:

    // Gunakan .endsWith() untuk memeriksa apakah string kalimat diakhiri dengan "graman".
    // Gunakan .padEnd() untuk menambahkan karakter tanda seru ('!') di akhir string kalimat sehingga panjangnya menjadi 15 karakter.
    // Tampilkan hasil kedua langkah tersebut.
    console.info(kalimatEE.endsWith('graman'))
    console.info(kalimatEE.padEnd(15, '!'))
    // Soal 8: Menggunakan .includes() untuk Pencarian Kata dalam Kalimat
    // Instruksi: Diberikan string yang berisi kalimat. Gunakan .includes() untuk mencari kata tertentu dalam kalimat tersebut dan berikan pesan yang sesuai.

    // javascript
    // Salin kode
    let kalimatNight = "Saya ingin belajar JavaScript bersama teman-teman.";
    // Pertanyaan:

    // Gunakan .includes() untuk memeriksa apakah kata "belajar" ada di dalam string kalimat.
    // Jika kata "belajar" ditemukan, tampilkan pesan "Kata ditemukan!". Jika tidak, tampilkan pesan "Kata tidak ditemukan!".
    console.info(kalimatNight.includes("belajar"))
    // Soal 9: Menggunakan .startsWith() dan .endsWith()
    // Instruksi: Diberikan string yang berisi kalimat. Gunakan metode .startsWith() dan .endsWith() untuk memeriksa kata pertama dan terakhir dalam string.


    // javascript
    // Salin kode
    let kalimatNine = "Pemrograman JavaScript sangat seru!";
    // Pertanyaan:

    // Gunakan .startsWith() untuk memeriksa apakah kalimat kalimat dimulai dengan kata "Pemrograman".
    // Gunakan .endsWith() untuk memeriksa apakah kalimat kalimat diakhiri dengan kata "seru!".
    // Tampilkan hasil dari kedua pemeriksaan tersebut.
    console.info(kalimatNine.startsWith("Pemrograman"))
    console.info(kalimatNine.endsWith("seru!"))
    // Soal 10: Menggunakan .padStart() dan .padEnd() untuk Menyelaraskan Teks
    // Instruksi: Diberikan string yang lebih pendek. Gunakan metode .padStart() dan .padEnd() untuk menambahkan karakter tertentu di kedua sisi string sehingga panjang string menjadi lebih besar.

    // javascript
    // Salin kode
    let kataTen = "HTML";
    // Pertanyaan:

    // Gunakan .padStart() untuk menambahkan karakter '*' di awal string kata sehingga panjangnya menjadi 10 karakter.
    // Gunakan .padEnd() untuk menambahkan karakter '#' di akhir string kata sehingga panjangnya menjadi 15 karakter.
    // Tampilkan hasil dari kedua langkah tersebut.
    console.info(kataTen.padStart(10, '*').padEnd(15, '#'));
}

// chellangDuaMetode()

const chellangTigaMetode = () => {

    // Soal 1: Menggunakan .concat()
    // Instruksi: Diberikan dua string. Gunakan metode .concat() untuk menggabungkan kedua string menjadi satu.
    // javascript
    // Salin kode
    let pertama = "Hello";
    let kedua = "World";
    // Pertanyaan:
    // 1.	Gunakan .concat() untuk menggabungkan string pertama dan kedua dengan tambahan spasi di antaranya.
    // 2.	Tampilkan hasilnya.
    // ________________________________________
    console.info(pertama.concat(kedua));
    // Soal 2: Menggunakan .indexOf()
    // Instruksi: Diberikan string yang berisi kalimat. Gunakan metode .indexOf() untuk mencari posisi pertama sebuah kata di dalam string.
    // javascript
    // Salin kode
    let kalimatDua = "JavaScript adalah bahasa pemrograman yang menyenangkan.";
    // Pertanyaan:
    // 1.	Gunakan .indexOf() untuk mencari posisi pertama kata "bahasa" dalam string kalimat.
    // 2.	Tampilkan hasilnya (posisi pertama kata tersebut).
    // ________________________________________
    console.info(kalimatDua.indexOf('bahasa'))
    // Soal 3: Menggunakan .lastIndexOf()
    // Instruksi: Diberikan string yang berisi kalimat. Gunakan metode .lastIndexOf() untuk mencari posisi terakhir sebuah kata di dalam string.
    // javascript
    // Salin kode
    let kalimatTiga = "Belajar JavaScript sangat menyenangkan. JavaScript itu menyenangkan!";
    // Pertanyaan:
    // 1.	Gunakan .lastIndexOf() untuk mencari posisi terakhir kata "JavaScript" dalam string kalimat.
    // 2.	Tampilkan hasilnya (posisi terakhir kata tersebut).
    // ________________________________________
    console.info(kalimatTiga.lastIndexOf("JavaScript"))
    // Soal 4: Menggunakan .slice()
    // Instruksi: Diberikan string yang berisi kalimat. Gunakan metode .slice() untuk memotong bagian tertentu dari string.
    // javascript
    // Salin kode
    let kalimatEmpat = "Belajar JavaScript itu menyenangkan!";
    // Pertanyaan:
    // 1.	Gunakan .slice() untuk memotong kata "JavaScript" dari string kalimat.
    // 2.	Tampilkan hasilnya.
    // ________________________________________
    console.info(kalimatEmpat.slice(8, 18))
    // Soal 5: Menggunakan .slice() dengan Parameter Negatif
    // Instruksi: Diberikan string yang berisi kalimat. Gunakan metode .slice() dengan parameter negatif untuk memotong string dari bagian akhir.
    // javascript
    // Salin kode
    let kalimatLima = "Selamat datang di dunia JavaScript!";
    // Pertanyaan:
    // 1.	Gunakan .slice() untuk mengambil 9 karakter terakhir dari string kalimat.
    // 2.	Tampilkan hasilnya.
    // ________________________________________
    console.info(kalimatLima.slice(-5))
    // Soal 6: Menggunakan .splice() (Penggunaan Array)
    // Instruksi: Diberikan array yang berisi beberapa kata. Gunakan metode .splice() untuk menghapus atau mengganti kata tertentu dalam array.
    // javascript
    // Salin kode
    let arrEnam = ["Belajar", "JavaScript", "sangat", "menyenangkan"];
    // Pertanyaan:
    // 1.	Gunakan .splice() untuk menghapus kata "sangat" dari array arr.
    // 2.	Tampilkan array setelah penghapusan.
    // ________________________________________
    arrEnam.splice(2, 1);
    console.info(arrEnam);
    // Soal 7: Menggunakan .splice() untuk Menambah Elemen dalam Array
    // Instruksi: Diberikan array yang berisi beberapa kata. Gunakan metode .splice() untuk menambah kata baru di posisi tertentu dalam array.
    // javascript
    // Salin kode
    let arrTujuh = ["Belajar", "JavaScript", "sangat", "menyenangkan"];
    // Pertanyaan:
    // 1.	Gunakan .splice() untuk menambahkan kata "terserah" setelah kata "JavaScript" dalam array arr.
    // 2.	Tampilkan array setelah penambahan kata baru.
    // ________________________________________
    arrTujuh.splice(1, 1, 'Javascript', 'Terserah');
    console.info(arrTujuh);
    // Soal 8: Menggabungkan String dengan .concat() dan .slice()
    // Instruksi: Diberikan dua string. Gabungkan kedua string menggunakan .concat() dan kemudian ambil sebagian dari hasil gabungan tersebut menggunakan .slice().
    // javascript
    // Salin kode
    let bagian1 = "Belajar JavaScript";
    let bagian2 = " sangat menyenangkan!";
    // Pertanyaan:
    // 1.	Gabungkan string bagian1 dan bagian2 menggunakan .concat().
    // 2.	Ambil hanya kata "JavaScript" dari hasil gabungan menggunakan .slice().
    // 3.	Tampilkan hasilnya.
    // ________________________________________
    console.info(bagian1.concat(bagian2).slice(8, 18))
    // Soal 9: Menggunakan .indexOf() dan .slice()
    // Instruksi: Diberikan string yang berisi kalimat. Gunakan .indexOf() untuk mencari posisi pertama sebuah kata dan gunakan .slice() untuk mengambil kata tersebut dari string.
    // javascript
    // Salin kode
    let kalimatNine = "JavaScript adalah bahasa pemrograman yang menyenangkan.";
    // Pertanyaan:
    // 1.	Gunakan .indexOf() untuk menemukan posisi kata "bahasa" dalam string kalimat.
    // 2.	Gunakan .slice() untuk memotong kata "bahasa" berdasarkan posisi yang ditemukan menggunakan .indexOf().
    // 3.	Tampilkan hasilnya.
    // ________________________________________
    console.info(kalimatNine.slice(kalimatNine.indexOf('bahasa')))
    // Soal 10: Menggunakan .lastIndexOf() dan .slice()
    // Instruksi: Diberikan string yang berisi kalimat. Gunakan .lastIndexOf() untuk menemukan posisi terakhir sebuah kata, dan gunakan .slice() untuk memotong string dari posisi tersebut.
    // javascript
    // Salin kode
    let kalimatTen = "Belajar JavaScript itu menyenangkan. JavaScript sangat menyenangkan!";
    // Pertanyaan:
    // 1.	Gunakan .lastIndexOf() untuk menemukan posisi terakhir kata "JavaScript".
    // 2.	Gunakan .slice() untuk memotong string dari posisi tersebut hingga akhir.
    // 3.	Tampilkan hasilnya
    console.info(kalimatTen.slice(kalimatTen.lastIndexOf("JavaScript")))

}

// chellangTigaMetode()

const chellangEmpatMetode = () => {

    // Soal 1: Menggunakan .split()
    // Instruksi: Diberikan sebuah string yang berisi kalimat. Gunakan metode .split() untuk memisahkan kata-kata dalam kalimat tersebut dan simpan hasilnya dalam array.
    // javascript
    // Salin kode
    let kalimatSatu = "JavaScript adalah bahasa pemrograman";
    // Pertanyaan:
    // 1.	Gunakan .split() untuk memisahkan kata-kata dalam string kalimat berdasarkan spasi.
    // 2.	Tampilkan array yang dihasilkan.
    // ________________________________________
    console.info(kalimatSatu.split(' '))
    // Soal 2: Menggunakan .repeat()
    // Instruksi: Diberikan sebuah string yang berisi kata. Gunakan metode .repeat() untuk mengulang string tersebut beberapa kali.
    // javascript
    // Salin kode
    let kataDua = "Halo ";
    // Pertanyaan:
    // 1.	Gunakan .repeat() untuk mengulang string kata sebanyak 5 kali.
    // 2.	Tampilkan hasilnya.
    // ________________________________________
    console.info(kataDua.repeat(5));
    // Soal 3: Menggunakan .valueOf()
    // Instruksi: Diberikan sebuah string yang berisi kalimat. Gunakan metode .valueOf() untuk mendapatkan nilai primitif dari string tersebut.
    // javascript
    // Salin kode
    let kalimat = "JavaScript adalah bahasa pemrograman";
    // Pertanyaan:
    // 1.	Gunakan .valueOf() untuk mendapatkan nilai primitif dari string kalimat.
    // 2.	Tampilkan hasilnya.
    // ________________________________________
    console.info(kalimat.valueOf());
    // Soal 4: Menggunakan .substring()
    // Instruksi: Diberikan sebuah string. Gunakan metode .substring() untuk mengambil sebagian string dari posisi tertentu.
    // javascript
    // Salin kode
    // let kalimat = "Belajar JavaScript itu menyenangkan";
    // Pertanyaan:
    // 1.	Gunakan .substring() untuk mengambil kata "JavaScript" dari string kalimat.
    // 2.	Tampilkan hasilnya.
    // ________________________________________
    // Soal 5: Menggunakan .toUpperCase()
    // Instruksi: Diberikan sebuah string yang berisi kalimat. Gunakan metode .toUpperCase() untuk mengubah semua huruf dalam string tersebut menjadi huruf kapital.
    // javascript
    // Salin kode
    let kalimatLima = "belajar javascript itu menyenangkan";
    // Pertanyaan:
    // 1.	Gunakan .toUpperCase() untuk mengubah semua huruf dalam string kalimat menjadi huruf kapital.
    // 2.	Tampilkan hasilnya.
    // ________________________________________
    console.info(kalimatLima.toUpperCase());
    // Soal 6: Menggunakan .toLowerCase()
    // Instruksi: Diberikan sebuah string yang berisi kalimat. Gunakan metode .toLowerCase() untuk mengubah semua huruf dalam string tersebut menjadi huruf kecil.
    // javascript
    // Salin kode
    let kalimatEnam = "BELAJAR JAVASCRIPT ITU MENYENANGKAN";
    // Pertanyaan:
    // 1.	Gunakan .toLowerCase() untuk mengubah semua huruf dalam string kalimat menjadi huruf kecil.
    // 2.	Tampilkan hasilnya.
    // ________________________________________
    console.info(kalimatEnam.toLowerCase());
    // Soal 7: Menggunakan .toString()
    // Instruksi: Diberikan sebuah objek atau angka, gunakan metode .toString() untuk mengonversi objek atau angka tersebut menjadi string.
    // javascript
    // Salin kode
    let angka = 12345;
    // Pertanyaan:
    // 1.	Gunakan .toString() untuk mengonversi angka angka menjadi string.
    // 2.	Tampilkan hasilnya.
    // ________________________________________
    console.info(angka.toString());
    // Soal 8: Menggunakan .split() dan .repeat()
    // Instruksi: Diberikan string yang berisi kalimat. Gunakan metode .split() untuk memisahkan kata-kata dalam kalimat dan kemudian gunakan .repeat() untuk mengulang setiap kata tersebut.
    // javascript
    // Salin kode
    let kalimatDelapan = "Belajar JavaScript itu menyenangkan";
    // Pertanyaan:
    // 1.	Gunakan .split() untuk memisahkan kata-kata dalam string kalimat berdasarkan spasi.
    // 2.	Gunakan .repeat() untuk mengulang setiap kata tersebut sebanyak 3 kali.
    // 3.	Tampilkan hasilnya.
    // ________________________________________
    console.info(kalimatDelapan.split(' '))
    console.info(kalimatDelapan.repeat(3))
    // Soal 9: Menggunakan .substring() dan .toUpperCase()
    // Instruksi: Diberikan sebuah string. Gunakan .substring() untuk mengambil sebagian string, lalu gunakan .toUpperCase() untuk mengubah bagian tersebut menjadi huruf kapital.
    // javascript
    // Salin kode
    let kalimatNine = "JavaScript adalah bahasa pemrograman";
    // Pertanyaan:
    // 1.	Gunakan .substring() untuk mengambil kata "bahasa" dari string kalimat.
    // 2.	Gunakan .toUpperCase() untuk mengubah kata "bahasa" menjadi huruf kapital.
    // 3.	Tampilkan hasilnya.
    // ________________________________________
    console.info(kalimat.substring(kalimatNine.indexOf('bahasa'),25));
    // Soal 10: Menggunakan .valueOf() dan .toString()
    // Instruksi: Diberikan sebuah string atau angka. Gunakan metode .valueOf() dan .toString() untuk melihat perbedaan keduanya.
    // javascript
    // Salin kode
    let angkaTen = 2024;
    // Pertanyaan:
    // 1.	Gunakan .valueOf() untuk mendapatkan nilai primitif dari angka angka.
    // 2.	Gunakan .toString() untuk mengonversi angka angka menjadi string.
    // 3.	Tampilkan hasil keduanya.
    console.info(angkaTen.valueOf())
    console.info(angkaTen.toString())

}

chellangEmpatMetode()