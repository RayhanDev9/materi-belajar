const challengeOne = function () {

    // Tantangan Coding #1
    // Dalam tantangan ini, kamu akan membuat sebuah fungsi bernama whereAmI yang menampilkan informasi negara HANYA berdasarkan koordinat GPS. Untuk itu, kamu akan menggunakan API kedua untuk melakukan geocoding.
    // Berikut adalah tugas-tugasmu:
    // BAGIAN 1
    // 1.	Buatlah sebuah fungsi bernama whereAmI yang menerima dua input: nilai lintang (latitude, lat) dan nilai bujur (longitude, lng) (ini adalah koordinat GPS, contohnya ada di bawah).
    // 2.	Lakukan "reverse geocoding" dari koordinat yang diberikan. Reverse geocoding berarti mengubah koordinat menjadi lokasi yang bermakna, seperti nama kota dan negara. Gunakan API ini untuk melakukan reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}. Panggilan AJAX akan dilakukan ke URL dengan format ini: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Gunakan API fetch dan promise untuk mendapatkan data. JANGAN gunakan fungsi getJSON yang kita buat, itu curang 😉.
    // 3.	Setelah mendapatkan data, lihatlah di konsol untuk melihat semua atribut yang kamu terima tentang lokasi yang diberikan. Kemudian, menggunakan data ini, tampilkan pesan seperti ini ke konsol: "Kamu berada di Berlin, Jerman".
    // 4.	Tambahkan metode .catch ke akhir rantai promise dan tampilkan error ke konsol.
    // 5.	API ini hanya mengizinkan 3 permintaan per detik. Jika kamu memuat ulang dengan cepat, kamu akan mendapatkan error dengan kode 403. Ini adalah error dengan permintaan. Ingat, fetch() TIDAK me-reject promise dalam kasus ini. Jadi, buatlah error untuk me-reject promise sendiri, dengan pesan error yang bermakna.
    // BAGIAN 2
    // 6.	Sekarang saatnya menggunakan data yang diterima untuk menampilkan informasi negara. Jadi, ambil atribut yang relevan dari hasil API geocoding, dan masukkan ke dalam API negara yang telah kita gunakan.
    // 7.	Tampilkan informasi negara dan tangkap semua error, seperti yang telah kita lakukan di pelajaran terakhir (kamu bahkan bisa menyalin kode ini, tidak perlu mengetik kode yang sama).
    // KOORDINAT UJI 1: 52.508, 13.381 (Lintang, Bujur) KOORDINAT UJI 2: 19.037, 72.873 KOORDINAT UJI 3: -33.933, 18.474
    // SEMOGA SUKSES 😀


    const whereAmI = function (lat, lng) {
        // https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
            .then(response => console.info(response.text()));
    }
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log("Lintang:", latitude);
                console.log("Bujur:", longitude);
                whereAmI(latitude, longitude)
            },
            function (error) {
                console.error("Gagal mendapatkan lokasi:", error.message);
            }
        );
    } else {
        console.log("Geolocation API tidak didukung");
    }
}
challengeOne()