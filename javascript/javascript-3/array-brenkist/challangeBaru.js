const challangesSatu = () => {
    //     Julia dan Kate sedang melakukan penelitian tentang anjing.Mereka bertanya kepada 5 pemilik anjing mengenai usia anjing mereka, dan menyimpan data tersebut dalam dua array(satu untuk Julia dan satu untuk Kate).Untuk sementara, mereka hanya ingin mengetahui apakah anjing tersebut dewasa atau masih anak anjing.

    // Anjing dikategorikan dewasa jika usianya 3 tahun atau lebih.
    // Anjing dikategorikan anak anjing jika usianya kurang dari 3 tahun.
    // Buatlah fungsi 'checkDogs' yang menerima dua array usia anjing('dogsJulia' dan 'dogsKate'), dan lakukan hal - hal berikut:

    // Julia menemukan bahwa pemilik 1 anjing pertama dan 2 anjing terakhir ternyata memiliki kucing, bukan anjing! Jadi, buat salinan dangkal dari array Julia dan hapus usia - usia kucing tersebut(karena mengubah parameter fungsi itu buruk).
    // Gabungkan array usia anjing Julia yang sudah diperbaiki dengan array usia anjing Kate.
    // Untuk setiap anjing yang tersisa, cetak apakah anjing itu dewasa atau anak anjing ke konsol dengan format seperti:
    //     "Anjing nomor 1 adalah anjing dewasa, dan berusia 5 tahun"
    //     "Anjing nomor 2 masih anak anjing 🐶"
    // Jalankan fungsi tersebut dengan dua set data uji berikut.
    // DATA UJI 1:

    // Data Julia: [3, 5, 2, 12, 7]
    // Data Kate: [4, 1, 15, 8, 3]
    // DATA UJI 2:

    // Data Julia: [9, 16, 6, 8, 3]
    // Data Kate: [10, 5, 6, 1, 4]
    // Selamat mencoba!

    const dogsJulia = [9, 16, 6, 8, 3];
    const dogsKate = [10, 5, 6, 1, 4];

    const checkDogs = (ArrJulia, ArrKate) => {
        const removeDogsJulia = ArrJulia
        removeDogsJulia.splice(0, 1)
        removeDogsJulia.splice(-2)
        const dogsJulia = removeDogsJulia;
        const dogsKate = ArrKate;
        const joinDogsJuliaKate = dogsJulia.concat(dogsKate);
        console.info(dogsJulia, dogsKate, joinDogsJuliaKate);
        joinDogsJuliaKate.forEach((age, i) => {
            if (age > 3) {
                console.info(`Anjing nomor ${i + 1} adalah anjing dewasa, dan berusia ${age} tahun`);
            } else {
                console.info(`Anjing nomor ${i + 1} masih anak anjing 🐶`)
            }

        })
    }

    checkDogs(dogsJulia, dogsKate)
}

// challangesSatu();

const challangesDua = () => {
    //     Terjemahan dan Penyederhanaan Soal:
    // Soal:
    // Mari kembali ke studi Julia dan Kate tentang anjing. Kali ini, mereka ingin mengonversi usia anjing ke usia manusia dan menghitung rata-rata usia anjing dalam studi mereka.

    // Buatlah sebuah fungsi calcAverageHumanAge, yang menerima sebuah array berisi usia anjing ages, dan melakukan hal-hal berikut secara berurutan:

    // Menghitung usia anjing dalam tahun manusia dengan rumus berikut:

    // Jika usia anjing <= 2 tahun, maka usia manusia = 2 * usia anjing.
    // Jika usia anjing > 2 tahun, maka usia manusia = 16 + (usia anjing * 4).

    // Menghapus (mengecualikan) semua anjing yang usia manusianya kurang dari 18 tahun. Artinya, hanya anjing yang berusia manusia minimal 18 tahun yang dipertahankan.

    // Menghitung rata-rata usia manusia dari semua anjing yang sudah memenuhi kriteria di atas (usia manusia >= 18 tahun).

    // Jalankan fungsi ini untuk dua data uji berikut:

    // TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
    // TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

    // Jika usia anjing <= 2 tahun, maka usia manusia = 2 * usia anjing.
    const calcAverageHumanAge = (agesDogs) => {

        const agesHuman = agesDogs.map(age => age <= 2 ? age * 2 : 16 + (age * 4));
        console.info(agesHuman);

        const removeAgesUnder18 = agesHuman.filter(age => age > 18);
        console.info(removeAgesUnder18);

        // const humanAverageValue = Math.floor(removeAgesUnder18.reduce((acc, age) => acc + age) / removeAgesUnder18.length);

        const humanAverageValue = Math.floor(removeAgesUnder18.reduce((acc, age) => acc + age / removeAgesUnder18.length));

        console.info(humanAverageValue);

    }
    calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
    calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);



}

// challangesDua();

const challangesTiga = () => {
    const calcAverageHumanAge = (agesDogs) => {

        //         Penjelasan:

        // Tugasnya adalah untuk menulis ulang fungsi calcAverageHumanAge yang telah ada, namun kali ini:

        // Fungsi tersebut harus ditulis menggunakan arrow function.
        // Fungsi tersebut juga harus menggunakan chaining(menggabungkan beberapa operasi dalam satu baris).
        // Test Data yang diberikan untuk pengujian:

        // Test Data 1: [5, 2, 4, 1, 15, 8, 3]
        // Test Data 2: [16, 6, 10, 5, 6, 1, 4]
        //         Tujuan: Menghitung usia rata - rata manusia dari array umur hewan peliharaan(dengan konversi dari umur hewan peliharaan ke umur manusia), dan menulis ulang kode tersebut dengan menggunakan fitur arrow function dan chaining.

        // Terjemahan dalam Bahasa Indonesia:

        // Tantangan Kode #3

        // Tulis ulang fungsi calcAverageHumanAge dari tantangan sebelumnya, tetapi kali ini dengan menggunakan arrow function dan chaining!

        // DATA UJI 1: [5, 2, 4, 1, 15, 8, 3]
        // DATA UJI 2: [16, 6, 10, 5, 6, 1, 4]

        const agesHuman = agesDogs
            .map(age => age <= 2 ? age * 2 : 16 + (age * 4))
            .filter(age => age >= 18)
            .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

        console.info(agesHuman)

    }
    calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
    calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]
    );

}
// challangesTiga()

const challangesEmpat = () => {

    // Soal:
    // Julia dan Kate sedang mempelajari tingkat aktivitas dari berbagai ras anjing.
    // Tugas-tugas:
    // 1.Simpan berat rata-rata "Husky" dalam sebuah variabel bernama huskyWeight.
    // 2.	Cari nama ras anjing yang suka melakukan kedua aktivitas yaitu "berlari" dan "fetch" (ambil bola), dan simpan dalam variabel dogBothActivities.
    // 3.	Buat sebuah array bernama allActivities yang berisi semua aktivitas dari seluruh ras anjing.
    // 4.	Buat sebuah array bernama uniqueActivities yang berisi hanya aktivitas unik (tanpa pengulangan aktivitas). Petunjuk: Gunakan teknik yang melibatkan struktur data khusus yang telah dipelajari.
    // 5.	Banyak ras anjing yang suka berenang. Aktivitas lain apa saja yang juga disukai oleh ras anjing yang suka berenang? Simpan semua aktivitas lain yang disukai ras anjing tersebut dalam array bernama swimmingAdjacent.
    // 6.	Apakah semua ras anjing memiliki berat rata-rata 10 kg atau lebih? Log (tampilkan) ke konsol apakah hasilnya "true" atau "false".
    // 7.	Apakah ada ras anjing yang dianggap "aktif"? "Aktif" berarti anjing tersebut memiliki 3 aktivitas atau lebih. Log (tampilkan) ke konsol apakah hasilnya "true" atau "false".
    // BONUS:
    // Berapa berat rata-rata ras anjing yang paling berat dan suka bermain fetch? Petunjuk: Gunakan metode Math.max bersama dengan operator spread (...).

    const breeds = [
        {
            breed: 'German Shepherd',
            averageWeight: 32,
            activities: ['fetch', 'swimming'],
        },
        {
            breed: 'Dalmatian',
            averageWeight: 24,
            activities: ['running', 'fetch', 'agility'],
        },
        {
            breed: 'Labrador',
            averageWeight: 28,
            activities: ['swimming', 'fetch'],
        },
        {
            breed: 'Beagle',
            averageWeight: 12,
            activities: ['digging', 'fetch'],
        },
        {
            breed: 'Husky',
            averageWeight: 26,
            activities: ['running', 'agility', 'swimming'],
        },
        {
            breed: 'Bulldog',
            averageWeight: 36,
            activities: ['sleeping'],
        },
        {
            breed: 'Poodle',
            averageWeight: 18,
            activities: ['agility', 'fetch'],
        },
    ];

    // 1.	Simpan berat rata-rata "Husky" dalam sebuah variabel bernama huskyWeight.
    const huskyWeight = Object.values(breeds.find(bre => bre.breed)).filter(age => !isNaN(age))[0];
    console.info(huskyWeight);
    // 1.Cara  bang jones
    const huskyWeightJones = breeds.find(breed => breed.breed === 'Husky').averageWeight;
    console.log(huskyWeight);

    // 2.	Cari nama ras anjing yang suka melakukan kedua aktivitas yaitu "berlari" dan "fetch" (ambil bola), dan simpan dalam variabel dogBothActivities.
    // cari nama ras anjing yang suka 2 melakukan aktifitas
    // Yaitu running dan fetch
    // dan simpan ke dalam variable dogBothAtctivities
    const dogBothActivities = breeds.find(bre => {
        if (bre.activities.includes('fetch') && bre.activities.includes('running')) {
            return bre.breed;
        }
    }
    )
    console.info(dogBothActivities);
    // 2.Cara Bang Jones
    const dogBothActivitiesJones = breeds.find(
        breed =>
            breed.activities.includes('fetch') && breed.activities.includes('running')
    ).breed;
    console.log(dogBothActivitiesJones);

    // 3.	Buat sebuah array bernama allActivities yang berisi semua aktivitas dari seluruh ras anjing.
    const allActivities = breeds.map(breed => breed.activities).flat();
    // const allActivities = breeds.flatMap(breed => breed.activities);
    console.info(allActivities);

    // 4.	Buat sebuah array bernama uniqueActivities yang berisi hanya aktivitas unik (tanpa pengulangan aktivitas). Petunjuk: Gunakan teknik yang melibatkan struktur data khusus yang telah dipelajari.

    //buat sebuah array uniqueActivites
    //yang berisi aktivitas unik 
    //tanpa perulangan aktivitas

    // const uniqueActivites = new Set(breeds.map(bree => bree.activities).flat());
    // const uniqueActivites = new Set(breeds.flatMap(bree => bree.activities));

    const uniqueActivites = [...new Set(allActivities)]

    console.info(uniqueActivites);

    // 5.	Banyak ras anjing yang suka berenang. Aktivitas lain apa saja yang juga disukai oleh ras anjing yang suka berenang? Simpan semua aktivitas lain yang disukai ras anjing tersebut dalam array bernama swimmingAdjacent.

    // Aktivitas lain apa saja yang juga disukai  ras anjing
    // ras anjing yang suka berenang
    //simpan semua aktivitas lain yang disukai ras anjing tersebut dalam array bernama swimmingAdjacent

    const swimmingAdjacent = [... new Set(breeds.filter(bree => bree.activities.includes('swimming')).flatMap(bree => bree.activities).filter(acti => acti !== 'swimming'))]
    console.info(swimmingAdjacent);

    // 6.Apakah semua ras anjing memiliki berat rata-rata 10 kg atau lebih? Log (tampilkan) ke konsol apakah hasilnya "true" atau "false".

    //Tangkap semua berat badan ras anjing
    // tambahkan setiap berat badan nya
    // setelah itu tinngal / length
    // lebih besar dari 10

    console.info(Math.floor(breeds.map(bre => bre.averageWeight).reduce((acc, value, i, arr) => acc + value / arr.length, 0)) > 10);

    // Cara bang jones
    // console.log(breeds.every(breed => breed.averageWeight > 10));

    // 7.	Apakah ada ras anjing yang dianggap "aktif"? "Aktif" berarti anjing tersebut memiliki 3 aktivitas atau lebih. Log (tampilkan) ke konsol apakah hasilnya "true" atau "false".
    console.info(breeds.some(breed => breed.activities.length === 3))

    // Berapa berat rata-rata ras anjing yang paling berat dan suka bermain fetch? Petunjuk: Gunakan metode Math.max bersama dengan operator spread (...).
    // tangkap object yang memiliki aktivitas fetch
    // tangkap berat anjing yang paling berat
    console.info(Math.max(...breeds.filter(breed => breed.activities.includes('fetch')).map(breed => breed.averageWeight)))

}

// challangesEmpat();

const challangesLima = () => {
    //     Deskripsi Masalah:
    // Julia dan Kate sedang mempelajari anjing-anjing. Kali ini, mereka ingin mengetahui apakah anjing-anjing tersebut makan terlalu banyak atau terlalu sedikit makanan.
    // •Formula untuk menghitung porsi makanan yang disarankan:
    // recommendedFood = weight ** 0.75 * 28. (Hasilnya dalam gram, dan berat anjing dalam kilogram).
    // •Terlalu banyak makan: Jika porsi makanan anjing saat ini lebih besar daripada porsi yang disarankan.
    // •Terlalu sedikit makan: Jika porsi makanan anjing saat ini lebih kecil daripada porsi yang disarankan.
    // •Makan dengan porsi yang oke: Jika porsi makanan anjing berada dalam rentang 10% lebih banyak atau lebih sedikit dari porsi yang disarankan.
    // Tugas yang Diberikan:
    // 1.Looping untuk setiap objek anjing dalam array dan hitung porsi makanan yang disarankan (recommendedFood). Tambahkan nilai ini sebagai properti baru di dalam objek anjing. Jangan buat array baru, cukup modifikasi array yang sudah ada.
    // 2.Cari anjing Sarah dalam array dan log apakah anjingnya makan terlalu banyak atau terlalu sedikit, berdasarkan porsi makanan saat ini dan porsi yang disarankan.
    // 3.Buat dua array:
    // oownersTooMuch: Array yang berisi pemilik anjing yang makan terlalu banyak.
    // oownersTooLittle: Array yang berisi pemilik anjing yang makan terlalu sedikit.
    // 4.Log kalimat untuk kedua array tersebut, seperti:
    // "Matilda dan Alice dan Bob's dogs eat too much!" dan "Sarah dan John dan Michael's dogs eat too little!"
    // 5.Cek apakah ada anjing yang makan tepat sesuai dengan porsi yang disarankan. Cukup log true atau false.
    // 6.Cek apakah SEMUA anjing makan dengan porsi yang OKE (dalam rentang 10% lebih atau kurang dari porsi yang disarankan). Cukup log true atau false.
    // 7.Buat array yang berisi anjing-anjing yang makan dengan porsi OKE (gunakan kondisi dari tugas sebelumnya).
    // 8.Kelompokkan anjing-anjing ke dalam 3 kelompok berdasarkan porsi makanannya:
    // o 'exact' (porsi tepat)
    // o 'too-much' (terlalu banyak)
    // o 'too-little' (terlalu sedikit)
    // 9.Kelompokkan anjing-anjing berdasarkan jumlah pemilik yang mereka miliki.
    // 10.Urutkan array anjing berdasarkan porsi makanan yang disarankan (recommendedFood) secara ascending (menaik). Pastikan array asli tidak berubah.
    // Data Uji:
    // javascript
    // Salin kode
    // ________________________________________
    // Tujuan dari soal ini:
    // •	Memahami cara kerja objek dan array di JavaScript.
    // •	Menggunakan loop untuk memanipulasi data di dalam array.
    // •	Menerapkan logika kondisi (untuk mengecek porsi makanan yang sesuai).
    // •	Berlatih dengan fungsi array seperti forEach, map, dan filter untuk memanipulasi data.
    // Semoga ini membantu! Jika kamu ingin solusi untuk setiap tugas, beri tahu saja! 😊

    const dogs = [
        { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
        { weight: 8, curFood: 200, owners: ['Matilda'] },
        { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
        { weight: 18, curFood: 244, owners: ['Joe'] },
        { weight: 32, curFood: 340, owners: ['Michael'] },
    ];

    // 1.Looping untuk setiap objek anjing dalam array dan hitung porsi makanan yang disarankan (recommendedFood). Tambahkan nilai ini sebagai properti baru di dalam objek anjing. Jangan buat array baru, cukup modifikasi array yang sudah ada.

    // •Formula untuk menghitung porsi makanan yang disarankan:
    // recommendedFood = weight ** 0.75 * 28. (Hasilnya dalam gram, dan berat anjing dalam kilogram).

    // dogs.map((dog, i) => dogs[i].recFood = Math.floor((dog.weight ** 0.75 * 28)));


    // cara bang jones
    dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));


    console.info(dogs);

    // 2.Cari anjing Sarah dalam array dan log apakah anjingnya makan terlalu banyak atau terlalu sedikit, berdasarkan porsi makanan saat ini dan porsi yang disarankan.

    //Ketentuan Pembandingan:

    //Terlalu banyak makan: Jika curFood (porsi makanan saat ini) lebih besar dari 10% di atas porsi yang disarankan.
    //Artinya, curFood > recommendedFood * 1.10
    //Terlalu sedikit makan: Jika curFood (porsi makanan saat ini) lebih kecil dari 10% di bawah porsi yang disarankan.
    //Artinya, curFood < recommendedFood * 0.90
    //Makan dengan porsi yang oke: Jika curFood berada dalam rentang 10% lebih banyak atau lebih sedikit dari porsi yang disarankan.
    //Artinya, recommendedFood * 0.90 <= curFood <= recommendedFood * 1.10

    // Temukan anjing sarah
    // const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
    // const currFoodSarah = (curFood, dog) => {
    //     if (curFood > dog. * 1.10) return 'Porsi makan terlalu banyak';
    //     if (curFood < dog. * 0.90) return 'Porsi makan terlalu sedikit';
    //     if (curFood >= dog. * 0.90 && curFood <= dog. * 1.10) return 'Pori makan pas';

    // }
    // currFoodSarah(dogSarah.curFood, dogSarah);

    // 2.
    const dogSarahJones = dogs.find(dog => dog.owners.includes('Sarah'));
    console.log(
        `Sarah's dog eats too ${dogSarahJones.curFood > dogSarahJones.recFood ? 'much' : 'little'
        }`
    );

    // 3.Buat dua array:
    // oownersTooMuch: Array yang berisi pemilik anjing yang makan terlalu banyak.
    // oownersTooLittle: Array yang berisi pemilik anjing yang makan terlalu sedikit.
    let oownersTooMuch = [dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners)];
    let oownersTooLittle = [dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners)]
    console.info(oownersTooMuch)
    console.info(oownersTooLittle)

    // 4.Log kalimat untuk kedua array tersebut, seperti:
    // "Matilda dan Alice dan Bob's dogs eat too much!" dan "Sarah dan John dan Michael's dogs eat too little!"
    console.log(`${oownersTooMuch.join('').replaceAll(',', ' and ')} dogs eat too much! dan ${oownersTooLittle.join('').replaceAll(',', ' and ')} dogs eat too little!`);

    // 5.Cek apakah ada anjing yang makan tepat sesuai dengan porsi yang disarankan. Cukup log true atau false.
    console.info(dogs.some(dog => dog.curFood === dog.recFood));

    // 6.Cek apakah SEMUA anjing makan dengan porsi yang OKE (dalam rentang 10% lebih atau kurang dari porsi yang disarankan). Cukup log true atau false.
    // 6.
    const checkEatingOkay = dog =>
        dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9;

    console.log(dogs.every(checkEatingOkay));


    // 7.Buat array yang berisi anjing-anjing yang makan dengan porsi OKE (gunakan kondisi dari tugas sebelumnya).
    // 7.
    const dogsEatingOkay = dogs.filter(checkEatingOkay);
    console.log(dogsEatingOkay);

    // 8.Kelompokkan anjing-anjing ke dalam 3 kelompok berdasarkan porsi makanannya:
    // o 'exact' (porsi tepat)
    // o 'too-much' (terlalu banyak)
    // o 'too-little' (terlalu sedikit)

    let [exact, too_much, to_little] = [[], [], []];

    console.info(exact, to_little, too_much);

    const kelompokAnjing = (dogs) => {
        dogs.map(dog => {
            console.info(dog.curFood, dog.recFood);
            if (dog.curFood > dog.recFood * 1.10) too_much.push(dog);
            if (dog.curFood < dog.recFood * 0.90) to_little.push(dog);
            if (dog.curFood >= dog.recFood * 0.90 && dog.curFood <= dog.recFood * 1.10) exact.push(dog);
        })
    }
    kelompokAnjing(dogs);
    console.info(exact, to_little, too_much);



    // 9.Kelompokkan anjing-anjing berdasarkan jumlah pemilik yang mereka miliki.
    const groupedByOwnersCount = Object.groupBy(dogs, dog => dog.owners.length);
    console.info(groupedByOwnersCount);

    // 10.Urutkan array anjing berdasarkan porsi makanan yang disarankan (recommendedFood) secara ascending (menaik). Pastikan array asli tidak berubah.

    console.info(dogs);
    const sorted = dogs.sort((a, b) => a.recFood - b.recFood);
    console.info(sorted);
}
// challangesLima();


