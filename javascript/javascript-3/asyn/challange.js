'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imgContainer = document.querySelector('.images');
const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

console.info(countriesContainer);

// const challengeOne = function () {

//     // Tantangan Coding #1
//     // Dalam tantangan ini, kamu akan membuat sebuah fungsi bernama whereAmI yang menampilkan informasi negara HANYA berdasarkan koordinat GPS. Untuk itu, kamu akan menggunakan API kedua untuk melakukan geocoding.
//     // Berikut adalah tugas-tugasmu:
//     // BAGIAN 1
//     // 1.	Buatlah sebuah fungsi bernama whereAmI yang menerima dua input: nilai lintang (latitude, lat) dan nilai bujur (longitude, lng) (ini adalah koordinat GPS, contohnya ada di bawah).
//     // 2.	Lakukan "reverse geocoding" dari koordinat yang diberikan. Reverse geocoding berarti mengubah koordinat menjadi lokasi yang bermakna, seperti nama kota dan negara. Gunakan API ini untuk melakukan reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}. Panggilan AJAX akan dilakukan ke URL dengan format ini: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Gunakan API fetch dan promise untuk mendapatkan data. JANGAN gunakan fungsi getJSON yang kita buat, itu curang 😉.
//     // 3.	Setelah mendapatkan data, lihatlah di konsol untuk melihat semua atribut yang kamu terima tentang lokasi yang diberikan. Kemudian, menggunakan data ini, tampilkan pesan seperti ini ke konsol: "Kamu berada di Berlin, Jerman".
//     // 4.	Tambahkan metode .catch ke akhir rantai promise dan tampilkan error ke konsol.
//     // 5.	API ini hanya mengizinkan 3 permintaan per detik. Jika kamu memuat ulang dengan cepat, kamu akan mendapatkan error dengan kode 403. Ini adalah error dengan permintaan. Ingat, fetch() TIDAK me-reject promise dalam kasus ini. Jadi, buatlah error untuk me-reject promise sendiri, dengan pesan error yang bermakna.
//     // BAGIAN 2
//     // 6.	Sekarang saatnya menggunakan data yang diterima untuk menampilkan informasi negara. Jadi, ambil atribut yang relevan dari hasil API geocoding, dan masukkan ke dalam API negara yang telah kita gunakan.
//     // 7.	Tampilkan informasi negara dan tangkap semua error, seperti yang telah kita lakukan di pelajaran terakhir (kamu bahkan bisa menyalin kode ini, tidak perlu mengetik kode yang sama).
//     // KOORDINAT UJI 1: 52.508, 13.381 (Lintang, Bujur) KOORDINAT UJI 2: 19.037, 72.873 KOORDINAT UJI 3: -33.933, 18.474
//     // SEMOGA SUKSES 😀


//     const whereAmI = function (lat, lng) {
//         // https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}
//         fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
//             .then(response => console.info(response.text()));
//     }
//     if ("geolocation" in navigator) {
//         navigator.geolocation.getCurrentPosition(
//             function (position) {
//                 const latitude = position.coords.latitude;
//                 const longitude = position.coords.longitude;
//                 console.log("Lintang:", latitude);
//                 console.log("Bujur:", longitude);
//                 whereAmI(latitude, longitude)
//             },
//             function (error) {
//                 console.error("Gagal mendapatkan lokasi:", error.message);
//             }
//         );
//     } else {
//         console.log("Geolocation API tidak didukung");
//     }
// }
// challengeOne()




const challengeOne = function () {
    //     Tantangan Coding Asynchronous JavaScript #1
    // Dalam tantangan ini, Anda akan membuat fungsi 'whereAmI' yang menampilkan sebuah negara hanya berdasarkan koordinat GPS. Untuk itu, Anda akan menggunakan API kedua untuk melakukan geocoding koordinat. Jadi, dalam tantangan ini, Anda akan menggunakan API sendiri untuk pertama kalinya! 😊
    // Tugas Anda:
    // BAGIAN 1
    // 1.	Buatlah sebuah fungsi bernama whereAmI yang menerima dua input: nilai lintang (lat) dan nilai bujur (lng) (ini adalah koordinat GPS, contoh ada di data uji di bawah).

    const renderCountry = function (data, className = '') {
        const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies
            [0].code}</p>
          </div>
    </article>
    `

        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;


    }

    // const getCountry = function (country) {
    //     console.info(country);
    //     return fetch(`https://restcountries.com/v2/name/${country}`)
    //         .then(response => {
    //             if (!response.ok) throw new Error(`Country not found ${response.status}`);
    //             return response.json()
    //         })
    //         .then(data => {
    //             renderCountry(data[0])

    //             const neighbour = data?.[0]?.borders?.[0];

    //             if (!neighbour) throw new Error(` country neighbour not found!`)


    //             return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
    //         })
    //         .then(response => {

    //             if (!response.ok) throw new Error(`Country not found ${response.status}`);
    //             return response.json()
    //         })
    //         .then(data => {
    //             console.info(data);
    //             renderCountry(data, 'neighbour')
    //         })
    //         .catch(err => console.info(`${err.message}`))
    // }

    // const whereAmI = function (lat, lng) {
    //     return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {

    //             if (!data) throw new Error(`Data not found`)
    //             console.info(`Anda berada di ${data.city},${data.countryName}`)

    //             btn.addEventListener('click', function () {
    //                 getCountry(`${data.countryName}`)



    //             })

    //         })
    //         .catch(err => console.info(err.message));
    // }

    // Asyn Await
    const getCountry = async function (country) {
        try {
            const res = await fetch(`https://restcountries.com/v2/name/${country}`)


            if (!res.ok) throw new Error(`Country not found ${response.status}`);
            const data = await res.json()

            renderCountry(data[0])

            const neighbour = await data?.[0]?.borders?.[0];

            if (!neighbour) throw new Error(` country neighbour not found!`)


            const resNeighbour = await fetch(`https://restcountries.com/v2/alpha/${neighbour}`)

            if (!resNeighbour.ok) throw new Error(`Country not found ${resNeighbour.status}`);
            const dataNeighbour = await resNeighbour.json()

            renderCountry(dataNeighbour, 'neighbour')
            return 'indonesia[';

        } catch (err) {
            console.info(err.message)

            // Reject promise from asyn function
            throw err;
        }
    }



    const whereAmI = async function (lat, lng) {
        const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)

        const data = await res.json();


        getCountry(data.countryName)
    }

        // const country = whereAmI(52.508, 13.381);
        // console.info(country)




        (async function () {
            getCountry('indonesia')
                .then(country => console.info(country))
                .catch(err => console.info(`${err.message}`))
                .finally(() => console.info('finishd'))
        }())


    // 2.	Lakukan "geocoding terbalik" dari koordinat yang diberikan. Geocoding terbalik berarti mengubah koordinat menjadi lokasi yang bermakna, seperti nama kota dan negara. Gunakan API ini untuk melakukan geocoding terbalik: https://geocode.xyz/api. Panggilan AJAX akan dilakukan ke URL dengan format ini: https://geocode.xyz/52.508,13.381?geoit=json. Gunakan Fetch API dan Promises untuk mendapatkan data. Jangan gunakan fungsi getJSON yang sudah kita buat, itu curang! 😉

    // 3.	Setelah Anda mendapatkan data, lihatlah di konsol untuk melihat semua atribut yang Anda terima tentang lokasi yang diberikan. Kemudian, menggunakan data ini, catat pesan seperti ini ke konsol: "Anda berada di Berlin, Jerman"

    // 4.	Rantaikan metode .catch ke akhir rantai promise dan catat error ke konsol.

    // 5.	API ini hanya mengizinkan Anda membuat 3 permintaan per detik. Jika Anda memuat ulang dengan cepat, Anda akan mendapatkan error dengan kode 403. Ini adalah error dengan permintaannya. Ingat, fetch() tidak menolak promise dalam kasus ini. Jadi, buatlah error untuk menolak promise itu sendiri, dengan pesan error yang bermakna.

    // BAGIAN 2
    // 6.	Sekarang saatnya menggunakan data yang diterima untuk menampilkan sebuah negara. Jadi, ambil atribut yang relevan dari hasil API geocoding, dan masukkan ke dalam API negara yang telah kita gunakan.

    // 7.	Tampilkan negara dan tangani error apa pun, sama seperti yang telah kita lakukan pada kuliah terakhir (Anda bahkan bisa menyalin kode ini, tidak perlu mengetik kode yang sama).
    // ________________________________________
    // Data Uji:
    // •	Koordinat 1: 52.508, 13.381 (Lintang, Bujur)
    // •	Koordinat 2: 19.037, 72.873
    // •	Koordinat 3: -33.933, 18.474
    // SELAMAT MENGERJAKAN!

}

// challengeOne();

const challengeTwo = function () {
    //     🧠 Tantangan Coding #2 – Memuat Gambar dengan Promise
    // Untuk tantangan ini, kamu harus menonton videonya dulu! Setelah itu, bangunlah fitur pemanggilan gambar seperti yang diperlihatkan dalam video.
    // ________________________________________
    // 🎯 PART 1
    // 1.	Buat fungsi bernama createImage(imgPath)
    // o	Fungsi ini menerima path gambar sebagai parameter (imgPath)
    // o	Fungsi harus mengembalikan sebuah Promise
    // o	Di dalam Promise:
    // 	Buat elemen gambar dengan document.createElement('img')
    // 	Set atribut .src dari gambar ke imgPath






    // 2.	Saat gambar berhasil dimuat:
    // o	Tambahkan gambar ke DOM, tepatnya ke elemen yang memiliki kelas 'images'
    // o	Selesaikan Promise (resolve) dengan mengembalikan elemen gambar
    // 3.	Jika terjadi error saat memuat gambar:
    // o	Dengarkan event 'error' dari elemen gambar
    // o	Tolak Promise (reject)
    // 📌 Kalau bagian ini masih membingungkan, kamu bisa menonton bagian awal solusi di video.
    // ________________________________________
    // 🎯 PART 2
    // 4.	Konsumsi Promise yang dibuat dari createImage menggunakan .then()
    // o	Jangan lupa juga menambahkan error handler (.catch())
    // 5.	Setelah gambar pertama dimuat:
    // o	Jeda proses selama 2 detik menggunakan fungsi wait() (yang sudah kamu buat di challenge sebelumnya)
    // 6.	Setelah 2 detik berlalu:
    // o	Sembunyikan gambar saat ini dengan cara mengubah CSS display ke 'none'
    // o	Kemudian, muat gambar kedua
    // 💡 Gunakan elemen gambar yang dikembalikan dari createImage(...) untuk menyembunyikannya. Mungkin kamu perlu menyimpan gambar ke dalam variabel global.
    // 7.	Setelah gambar kedua selesai dimuat:
    // o	Tunggu lagi 2 detik dengan fungsi wait()
    // 8.	Setelah 2 detik berlalu:
    // o	Sembunyikan gambar kedua
    // ________________________________________
    // ✅ Data Uji:
    // •	Gunakan gambar yang ada di folder img
    // •	Untuk menguji error handler, coba gunakan path gambar yang salah
    // •	Agar bisa melihat delay loading gambar, ubah kecepatan jaringan ke "Fast 3G" di DevTools > Network
    // ________________________________________
    // 🚀 SELAMAT MENCOBA!
    // Kalau kamu ingin saya bantu implementasi kodenya atau periksa bagian tertentu, tinggal bilang saja!

    const getError = function (msg) {
        console.info(` ${msg} `);
    }

    const createImage = function (imgPath) {
        return new Promise(function (resolve, reject) {
            const img = document.createElement('img')
            img.src = imgPath;

            const path = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

            let pathTrue;

            for (let i = 0; i < path.length; i++) {
                if (path[i] === imgPath) {
                    pathTrue = true;
                }
            }
            if (!pathTrue) reject(new Error('path Img kamu tidak ditemukan'));

            resolve(img)

        })




    }

    const await = function () {
        return new Promise(function (resolve) {
            setTimeout(resolve, 2000);
        })

    }

    const excuCreateImage = function (imgPath) {
        return createImage(`img/img-${imgPath}.jpg`)
            .then(res => {
                res.addEventListener('load', function () {

                    this.classList.add('images');

                    countriesContainer.insertAdjacentElement('beforeend', this);
                    countriesContainer.style.opacity = 1;
                    Promise.resolve().then(() => {
                        setTimeout(() => this.style.display = 'none', 2000);
                    })

                })
            })
    }

    await()
        .then(() => {
            excuCreateImage(1)
            return await()

        })
        .then(() => await())
        .then(() => {
            excuCreateImage(2)
            return await()

        })
        .then(() => await())
        .then(() => {
            excuCreateImage(3)
            return await()
        })
        .catch(err => getError(err));
}

// challengeTwo();

const challangeThree = function () {
    // BAGIAN 1

    // Tulislah sebuah fungsi async bernama loadNPause yang mengulang kembali Coding Challenge #2, tetapi kali ini menggunakan async/await (hanya bagian di mana promise digunakan).
    // Bandingkan kedua versinya (versi lama dengan versi baru), pikirkan perbedaan besarnya, dan tentukan mana yang lebih kamu sukai.
    // Jangan lupa untuk menguji error handler (penanganan error), dan atur kecepatan jaringan menjadi "Fast 3G" di tab Network pada dev tools.

    // 🎯 PART 1
    // 1.	Buat fungsi bernama createImage(imgPath)
    // o	Fungsi ini menerima path gambar sebagai parameter (imgPath)
    // o	Fungsi harus mengembalikan sebuah Promise
    // o	Di dalam Promise:
    // 	Buat elemen gambar dengan document.createElement('img')
    // 	Set atribut .src dari gambar ke imgPath
    // 2.	Saat gambar berhasil dimuat:
    // o	Tambahkan gambar ke DOM, tepatnya ke elemen yang memiliki kelas 'images'
    // o	Selesaikan Promise (resolve) dengan mengembalikan elemen gambar
    // 3.	Jika terjadi error saat memuat gambar:
    // o	Dengarkan event 'error' dari elemen gambar
    // o	Tolak Promise (reject)
    // 📌 Kalau bagian ini masih membingungkan, kamu bisa menonton bagian awal solusi di video.

    // PART 2
    // 1.	Buat sebuah fungsi async bernama loadAll yang menerima sebuah array berisi path gambar (imgArr).
    // 2.	Gunakan .map untuk melakukan perulangan pada array tersebut, untuk memuat semua gambar dengan fungsi createImage (simpan array hasilnya ke variabel bernama imgs).
    // 3.	Cek isi array imgs di console! Apakah hasilnya sesuai dengan yang kamu harapkan?
    // 4.	Gunakan promise combinator untuk benar-benar mendapatkan gambar dari array 😉
    // 5.	Tambahkan class 'paralell' pada semua gambar tersebut (class ini sudah punya style CSS tertentu).
    // DATA UJI:
    // ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'] 
    // Untuk mengetes, matikan dulu fungsi loadNPause.
    // Good luck 😀




    const getError = async function (msg) {
        console.info(` ${msg.message} `);
    }

    const createImage = async function (imgPath) {

        try {
            const img = document.createElement('img')
            img.src = imgPath;
            // img.classList.add = 'paralell';

            const path = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

            let pathTrue;

            for (let i = 0; i < path.length; i++) {
                if (path[i] === imgPath) {
                    pathTrue = true;

                    img.addEventListener('load', function () {
                         imgContainer.append(img);
                        img.classList.add('images');

                       imgContainer.style.opacity = 1;
                    });

                    img.addEventListener('error', function () {
                        throw new Error("Image not found");

                    });
                }
            }

            if (!pathTrue) throw new Error('path Img kamu tidak ditemukan');

            return img;

        } catch (err) {
            console.info(err)
        }
    }

    // const excuCreateImage = async function (imgPath) {
    //     try {
    //         const img = await createImage(`img/img-${imgPath}.jpg`)
    //         // const img = await loadAll(imgArr);
    //         console.info(img);

    //         img.addEventListener('load', function () {

    //             console.info(this)
    //             img.classList.add('images');
    //             // img.classList.add('paralell');

    //             countriesContainer.insertAdjacentElement('beforeend', this);
    //             countriesContainer.style.opacity = 1;
    //             Promise.resolve().then(() => {
    //                 setTimeout(() => this.style.display = 'none', 2000);
    //             })


    //         })
    //     } catch (err) {
    //         console.info(err)
    //     }
    // }

    // const await = async function () {
    //     try {
    //         await new Promise(function (resolve) {
    //             setTimeout(resolve, 2000);
    //         })
    //     } catch (err) {
    //         console.info(err)
    //     }

    // }
    // await()
    //     .then(() => {
    //         excuCreateImage();
    //         return await()
    //     })
    //     .then(() => await())

    // await()
    //     .then(() => {
    //         excuCreateImage(1)
    //         return await()


    //     })
    //     .then(() => await())
    //     .then(() => {
    //         excuCreateImage(2)
    //         return await()

    //     })
    //     .then(() => await())
    //     .then(() => {
    //         excuCreateImage(3)
    //         return await()
    //     })
    //     .catch(err => getError(err));


    // 4.	Gunakan promise combinator untuk benar-benar mendapatkan gambar dari array 😉
    // 5.	Tambahkan class 'paralell' pada semua gambar tersebut (class ini sudah punya style CSS tertentu).
    const loadAll = async function (imges) {
        try {
            const imgs = await imges.map(async (img) => await createImage(img))
            console.info(imgs);

            const imgsEl = await Promise.all(imgs)

            imgsEl.forEach(img => img.classList.add('parallel'))
            console.info(imgsEl);
        } catch (err) {
            console.info(err)
        }
        // return await createImage(imgs[0]);
    }
    loadAll(imgArr)

}







challangeThree()