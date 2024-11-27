"use strict";
function tantanganSatu() {
  //     Tantangan #1:
  // Kembali ke dua tim senam, yaitu Dolphins dan Koalas! Ada disiplin senam baru yang bekerja dengan cara yang berbeda.

  // Setiap tim bertanding 3 kali, kemudian dihitung rata-rata dari 3 skor tersebut (jadi ada satu skor rata-rata untuk setiap tim).

  // Sebuah tim hanya bisa menang jika rata-rata skornya setidaknya dua kali lipat dari rata-rata skor tim lain. Jika tidak, tidak ada tim yang menang!

  // Tugas Anda:
  // Buat fungsi calcAverage: Fungsi ini untuk menghitung rata-rata dari 3 skor. Fungsi ini harus memiliki tiga parameter dan mengembalikan satu angka (rata-rata skor).

  // Buat dua variabel baru — scoreDolphins dan scoreKoalas, dan beri nilai yang dikembalikan dari fungsi calcAverage (Anda perlu memanggil fungsi ini dan memberikan skor-skor sebagai argumen).

  // Buat fungsi checkWinner: Fungsi ini menerima rata-rata skor kedua tim sebagai parameter (avgDolphins dan avgKoalas), lalu menampilkan pemenang di konsol, bersama dengan poin kemenangan sesuai aturan di atas. Contoh: "Koalas menang (30 vs. 13)" (gunakan avgDolphins dan avgKoalas alih-alih nilai yang sudah ditentukan).

  // Gunakan fungsi checkWinner untuk menentukan pemenang berdasarkan DATA 1 dan DATA 2.

  // Abaikan hasil seri. Jika tidak ada tim yang menang, tampilkan "Tidak ada tim yang menang..." di konsol.

  // DATA 1:
  // Dolphins: skor 44, 23, dan 71
  // Koalas: skor 65, 54, dan 49
  // DATA 2:
  // Dolphins: skor 85, 54, dan 41
  // Koalas: skor 23, 34, dan 27
  // Itulah soal yang disederhanakan dan diterjemahkan. Anda diminta untuk membuat fungsi untuk menghitung rata-rata, menentukan pemenang, dan memeriksa apakah ada tim yang menang atau tidak.

  function calcAverage(satu, dua, tiga) {
    return `${(satu + dua + tiga) / 3}`;
  }

  let scoreDolphins = calcAverage(44, 23, 71);
  let scoreKoalas = calcAverage(65, 54, 49);
  console.info(`${scoreDolphins} ${scoreKoalas}`);

  function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
      console.info(`Dolphins menang ( ${avgDolphins} vs ${avgKoalas} )`);
    } else if (avgKoalas >= avgDolphins * 2) {
      console.info(`Koalas menang ( ${avgKoalas} vs ${avgDolphins} )`);
    } else {
      console.info("Tidak ada tim yang menang");
    }
  }

  checkWinner(scoreDolphins, scoreKoalas);

  // tes 2
  scoreDolphins = calcAverage(85, 54, 41);
  scoreKoalas = calcAverage(23, 34, 27);
  checkWinner(scoreDolphins, scoreKoalas);

  console.info(`${scoreDolphins} ${scoreKoalas}`);
}

tantanganSatu();

function tantanganDua() {
  //     Tantangan #2: Kalkulator Tip Steven
  // Steven ingin Anda untuk memperbaiki kalkulator tip-nya. Aturan tip yang sama seperti sebelumnya:

  // Beri tip 15% dari total tagihan jika nilai tagihan berada antara 50 dan 300.
  // Jika nilai tagihan berbeda (yaitu kurang dari 50 atau lebih dari 300), beri tip 20%.
  // Tugas Anda:
  // Buat fungsi calcTip yang menerima nilai tagihan sebagai input dan mengembalikan tip yang sesuai berdasarkan aturan di atas.

  // Uji fungsi calcTip dengan nilai tagihan 100.

  // Gunakan array untuk menyimpan nilai-nilai tagihan dan tip:

  // Buat array bills yang berisi data tagihan: 125, 555, dan 44.
  // Buat array tips yang berisi nilai tip untuk setiap tagihan, dihitung dengan fungsi calcTip yang telah Anda buat.
  // BONUS: Buat array totals yang berisi total tagihan + tip untuk setiap nilai tagihan.
  // DATA UJI:
  // Tagihan: 125, 555, dan 44
  // Dengan tugas ini, Anda diminta untuk membuat fungsi kalkulasi tip dan menggunakan array untuk menyimpan data tagihan, tip, dan total (tagihan + tip).

  // Apakah Anda ingin mencoba membuat solusinya sekarang?

  //   function calcTip(bills) {
  //     if (bills >= 50 && bills <= 300) {
  //       return bills * 0.15;
  //     } else {
  //       return bills * 0.2;
  //     }
  //   }

  const calcTip = (bills) =>
    bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;

  let bills = [125, 555, 44];

  let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
  console.info(tips);

  let total = [
    tips[0] + bills[0],
    tips[1] + bills[1],
    tips[2] + bills[bills.length - 1],
  ];

  console.info(`${tips[0]} + ${bills[0]} = ${total[0]}`);
  console.info(`${tips[1]} + ${bills[1]} = ${total[1]}`);
  console.info(
    `${tips[2]} + ${bills[bills.length - 1]} = ${total[bills.length - 1]}`
  );
}

tantanganDua();

function tantanganTiga() {
  //     Tantangan #3: Membandingkan BMI Mark dan John
  // Kali ini, kita akan menggunakan objek untuk menghitung BMI (Indeks Massa Tubuh) Mark dan John.

  // Langkah-langkah:
  // Buat objek untuk Mark dan John yang memiliki properti:

  // fullName (nama lengkap)
  // mass (berat badan dalam kg)
  // height (tinggi badan dalam meter)
  // Objek untuk Mark: mark

  // Objek untuk John: john

  // Buat metode calcBMI() di setiap objek untuk menghitung BMI menggunakan rumus:

  // BMI = mass / (height * height)

  // Metode ini harus menyimpan nilai BMI ke dalam properti bmi dan juga mengembalikan nilai BMI.

  // Bandingkan BMI Mark dan John, dan log ke konsol siapa yang memiliki BMI lebih tinggi. Tampilkan nama lengkap dan BMI mereka, misalnya: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

  // Data Tes:
  // Mark: berat 78 kg, tinggi 1.69 m.
  // John: berat 92 kg, tinggi 1.95 m.
  // Catatan:
  // Operator ** untuk perpangkatan tidak diizinkan, jadi gunakan mass / (height * height) untuk menghitung BMI.

  const mark = {
    fullName: "Mark  Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
      this.BMI = this.mass / (this.height * this.height);
      return this.BMI;
    },
  };

  console.info(mark.calcBMI());

  const jhon = {
    fullName: "Jhon Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.BMI = this.mass / (this.height * this.height);
      return this.BMI;
    },
  };

  console.info(jhon.calcBMI());

  console.info(
    `BMI ${jhon.fullName} (${jhon.calcBMI()}) lebih ${
      jhon.calcBMI() >= mark.calcBMI() ? "Tinggi" : "Rendah"
    } daripada BMI ${mark.fullName} (${mark.calcBMI()})!`
  );
}

tantanganTiga();

function tantanganEmpat() {
  //     Tantangan #4: Memperbaiki Kalkulator Tip Steven dengan Menggunakan Loop
  // Tugas:

  // Buat array bernama bills yang berisi 10 nilai tagihan tes.
  // Buat array kosong untuk tips dan totals (tips dan total).
  // Gunakan fungsi calcTip (yang sudah ada di kode sebelumnya) untuk menghitung tip dan total (tagihan + tip) untuk setiap nilai tagihan dalam array bills. Gunakan loop for untuk melakukan perhitungan pada 10 nilai tagihan!
  // Data Uji:
  // Nilai tagihan yang diberikan: 22, 295, 176, 440, 37, 105, 10, 1100, 86, dan 52.

  // BONUS:
  // Tulis fungsi calcAverage yang menerima array bernama arr sebagai argumen. Fungsi ini akan menghitung rata-rata dari semua angka dalam array yang diberikan.

  // Langkah-langkah untuk menghitung rata-rata:

  // Jumlahkan semua nilai dalam array. Untuk menambahkan, buat variabel sum yang dimulai dengan 0.
  // Gunakan loop for untuk menambah setiap nilai array ke variabel sum.
  // Untuk mendapatkan rata-rata, bagi hasil penjumlahan (sum) dengan panjang array (jumlah elemen dalam array).
  // Panggil fungsi calcAverage dengan array totals.

  // Catatan:
  // Jika Anda kesulitan, Anda dapat menonton solusi dalam format video di pelajaran berikutnya.

  // Penjelasan Sederhana:

  // Buat array bills yang berisi tagihan.
  // Gunakan fungsi untuk menghitung tip dan total untuk setiap tagihan.
  // Gunakan loop untuk melakukan perhitungan pada semua tagihan.
  // Bonus: Hitung rata-rata total dengan menjumlahkan semua total dan membaginya dengan jumlah elemen di array.

  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  let tips = [];
  let totals = [];

  const calcTip = (bills) =>
    bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;

  for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
    console.info(`${tips[i]} + ${bills[i]} = ${totals[i]}`);
  }

  function calcAverage(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.info(
      `Total Semuanya adalah ${sum},Setelah di ambil atau di bagi nilai rata-ratanya ${
        sum / arr.length
      }`
    );
  }
  calcAverage(totals);
  calcAverage([3, 3, 3, 3]);
  calcAverage(tips);
  calcAverage(bills);
}

tantanganEmpat();
