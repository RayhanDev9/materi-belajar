// Strict Mode
"use strict";

let izinMnegemudi = false;
const passTast = true;

if (passTast) izinMnegemudi = true;
if (izinMnegemudi) console.info("Mendapatkan izin mengemudi");

function penjelsanFunction() {
  // Function
  function log() {
    console.info("Sebuah Function");
  }
  log();

  // function buah (jeruk,apel) {
  //     console.info(jeruk,apel);
  //     const jus = `Membuat jus jeruk ${jeruk},dan membuat jus apel ${apel}`;
  //     return jus;
  // }

  // console.info(buah(2,3));

  // const jusBuah = buah(5,10);
  // console.info(jusBuah);
  // Function Declaration
  function umur(tahun) {
    return 2025 - tahun;
  }
  const age = umur(2005);
  console.info(age);

  // Function Expresion
  const umurDua = function (tahun) {
    return 2025 - tahun;
  };
  const ageDua = umurDua(2005);
  console.info(ageDua);

  // Arrow Function
  const umurTiga = (tahun) => 2025 - tahun;
  const ageTiga = umurTiga(2005);
  console.info(ageTiga);

  const umurEmpat = (tahun, pensiun) => {
    const umur = 2025 - tahun;
    const umurPensiun = pensiun - umur;
    return `kamu akan pensiun ${umurPensiun} tahun lagi`;
  };
  const pensiun = umurEmpat(2005, 60);
  console.info(pensiun);

  // Function Calling

  function jumlahMotongBuah(buah) {
    return buah * 4;
  }

  function buah(jeruk, apel) {
    const jumlahJeruk = jumlahMotongBuah(jeruk);
    const jumlahApel = jumlahMotongBuah(apel);
    const jus = `Membuat jus jeruk ${jumlahJeruk},dan membuat jus apel ${jumlahApel}`;
    return jus;
  }

  console.info(buah(5, 4));

  // meriview Function

  function lahirSaya(lahir, tahunSekarang) {
    return tahunSekarang - lahir;
  }

  function umurLima(lahir, tahunSekarang, namaSaya) {
    const umur = lahirSaya(lahir, tahunSekarang);
    const pensiun = 60 - umur;
    const nama = namaSaya;

    if (pensiun > 0) {
      return console.info(
        `${nama} kamu akan pensiun dalam ${pensiun} tahun ke depan,harap bersabar`
      );
    } else {
      return console.info(`${nama} anda sudah pensiun,nikmati hari tua mu `);
    }
  }

  const pensiunDua = umurLima(1905, 2024, "rayhan");
}

penjelsanFunction();

function penjelasanArray(params) {
  // Array

  let friends = ["eko", "rendy", "aldi"];
  console.info(friends[0]);
  console.info(friends[friends.length - 1]);

  const tahun = Array(1999, 1989, 1988);
  console.info(tahun[0]);
  console.info(tahun[tahun.length - 1]);

  //
  const years = function (tahun) {
    return 2025 - tahun;
  };

  const age1 = years(tahun[0]);
  const age2 = years(tahun[1]);
  const age3 = years(tahun[tahun.length - 1]);
  console.info(age1, age2, age3);

  const ages = [
    years(tahun[0]),
    years(tahun[1]),
    years(tahun[tahun.length - 1]),
  ];
  console.info(ages);

  // Method Array

  let teman = ["Rayhan", "Dani", "Sandi", "Dadi"];

  // Add
  const tambahAkhir = teman.push("Rendi");
  console.info(tambahAkhir);
  console.info(teman);

  const tambahAwal = teman.unshift("Eko");
  console.info(tambahAwal);
  console.info(teman);

  // Remove
  const hapusAkhir = teman.pop();
  console.info(hapusAkhir);
  console.info(teman);

  const hapusAwal = teman.shift();
  console.info(hapusAwal);
  console.info(teman);

  // Memeriksa
  teman.push("3");
  console.info(teman.indexOf("Rayhan"));
  console.info(teman.indexOf("Rayha"));
  console.info(teman.indexOf(3));

  console.info(teman.includes("Rayhan"));
  console.info(teman.includes("Rayha"));
  console.info(teman.includes(3));

  const nama = "Rayhan"; // prompt('Masukan nama kamu')
  if (teman.includes(nama)) {
    console.info("Hai Rayhan");
  } else {
    console.info(`Tidak ada nama ${nama} di daftar`);
  }
}

penjelasanArray();

function penjelasanObject() {
  const rayhan = {
    nama: "Rayhan",
    job: "Pelajar",
    friends: ["aldi", "paqih", "ravli"],
    lahir: 2005,
    izinMengemudi: true,
    // umur : function (lahir) {
    //     return 2025 - lahir;
    // }

    // umur : function () {
    //     console.info(this)
    //     return 2025 - this.lahir;
    // }

    umur: function () {
      this.age = 2025 - this.lahir;
      console.info(this);
      return this.age;
    },
    getSummery: function () {
      return console.info(
        `${this.nama} is a ${this.umur()}-year old ${this.job},and he has ${
          this.izinMengemudi ? "a" : "no"
        } driver's lisensi`
      );
    },
  };

  const info = "umur kamu berapa ?";

  console.info(rayhan.age);
  console.info(info + rayhan["age"]);

  const pertanyaan = "job"; // prompt('Age,Job,Friends');

  if (rayhan[pertanyaan]) {
    console.info(rayhan[pertanyaan]);
  } else {
    console.info("yang anda masukan tidak ada!!");
  }

  rayhan.location = "banten";
  rayhan["email"] = "m.rayhanoi26@gmail.com";
  console.info(rayhan);

  console.info(rayhan.friends[0]);
  console.info(rayhan.friends[1]);
  console.info(rayhan.friends[2]);

  // console.info(rayhan.umur(2005));
  // console.info(rayhan['umur'](2005));

  // console.info(rayhan.umur())

  rayhan.getSummery();
}

penjelasanObject();

function penjelasanLoop() {
  //   for (let rep = 1; rep <= 10; rep++) {
  //     console.info(`Saya melakukan ${rep} putaran`);
  //   }

  let rayhan = ["Rayhan", 19, "student", true, ["aldi", "rendi", "ravli"]];

  console.info("---String---");
  for (let i = 0; i < rayhan.length; i++) {
    if (typeof rayhan[i] !== "string") continue;
    console.info(rayhan[i], typeof rayhan[i]);
  }

  console.info("---Number---");
  for (let i = 0; i < rayhan.length; i++) {
    if (typeof rayhan[i] !== "number") continue;
    console.info(rayhan[i], typeof rayhan[i]);
  }

  console.info("---Object---");
  for (let i = 0; i < rayhan.length; i++) {
    if (typeof rayhan[i] !== "object") continue;
    console.info(rayhan[i], typeof rayhan[i]);
  }

  const years = [1998, 1899, 2004, 2003];
  let ages = [];

  for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
  }

  console.info(ages);

  for (let i = rayhan.length - 1; i >= 0; i--) {
    console.info(`${rayhan[i]}`);
  }

  for (let i = 1; i <= 4; i++) {
    console.info(`-----------Starting Exarcise ${i}`);
    for (let j = 1; j <= 6; j++) {
      console.info(`Exarcise ${i} : Lifting weight repetetion ${j}`);
    }
  }

  //   While Loop
  let conter = 0;
  while (conter <= 5) {
    console.info(`perulangan ${conter + 1}`);
    conter++;
  }

  let dadu = Math.floor(Math.random() * 6) + 1;
  console.info(dadu);

  while (dadu !== 6) {
    console.info(`kamu melempar dadu mendapatkan angka ${dadu}`);
    dadu = Math.floor(Math.random() * 6) + 1;
    if (dadu === 6) {
      console.info(`Lempar Dadu kamu selesai karena mendapatkan angka ${dadu}`);
    }
  }
}

penjelasanLoop();
