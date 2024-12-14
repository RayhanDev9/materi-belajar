// function tantanganSatu() {
//   const satu = () => {
//     //     Mengubah nilai boolean menjadi string 'Ya' atau 'Tidak'.
//     // Lengkapi metode yang mengambil nilai boolean dan kembalikan "Yes"string untuk true, atau "No"string untuk false.
//     const boolean = false;
//     return console.info(`${boolean ? 'Ya' : 'No'}`);
//   };

//   satu();

//   const dua = () => {
//     // Konversi DNA ke RNA
//     // Asam deoksiribonukleat, DNA adalah molekul penyimpanan informasi utama dalam sistem biologis. DNA terdiri dari empat basa asam nukleat, yaitu Guanin ('G'), Sitosin ('C'), Adenin ('A'), dan Timin ('T').

//     // Asam ribonukleat, RNA, adalah molekul pembawa pesan utama dalam sel. RNA sedikit berbeda dari DNA dalam struktur kimianya dan tidak mengandung Timin. Dalam RNA, Timin digantikan oleh asam nukleat lain, Urasil ('U').

//     // Buat fungsi yang menerjemahkan rangkaian DNA tertentu menjadi RNA.

//     // Misalnya:

//     // "GCAT"  =>  "GCAU"
//     // String inisial dapat memiliki panjang yang berubah-ubah - khususnya, string tersebut dapat kosong. Semua input dijamin valid, yaitu setiap string input hanya akan terdiri dari 'G', 'C', 'A'dan/atau 'T'.

//     // Membuat variable dna
//     //Dapatkan string 'T'
//     //Rubah menjadi 'U'
//     //merubah variable dna,yang ada asam nekleat 'T' ruabh menjadi 'U'.
//     //SEtelah itu return dna
//     //simpen ke variable rna
//     // dan console rna

//     // Bug Ketika dia sudahmenemukan T, huruf yang di belakangya tidak di iterasi lagi,menghasilkan jika di belakangya ada huruf T,tidak di rubah

//     let dna = ['G', 'C', 'A', 'T'];
//     const ruabahKeRna = dna => {
//       let cnt = 0;
//       for (let i = 0; i < dna.length; i++) {
//         cnt++;
//         if (dna[i] === 'T') {
//           dna[i] = 'U';
//           let perubahan = dna;
//           if (dna.length === cnt) {
//             return perubahan;
//           }
//         }
//       }
//     };
//     let rna = ruabahKeRna(dna);
//     console.info(rna);
//   };

//   dua();

//   const tiga = () => {
//     //   Jika kita memberikan nilai n = 5 ke fungsi tersebut, maka fungsi akan menghasilkan array [5, 4, 3, 2, 1].

//     // hitung mundur dari angka n ke 0 dan isi ke array n dari n ke 0
//     let n = 5;
//     const hitungMundur = n => {
//       let cnt = [];
//       for (let i = 0; i < n; n--) {
//         cnt.push(n);
//       }
//       return cnt;
//     };

//     const hasil = hitungMundur(n);
//     console.info(hasil);
//   };

//   tiga();

//   const empat = () => {
//     //     Tim sepak bola kami telah menyelesaikan kejuaraan.
//     // Hasil pertandingan tim kami dicatat dalam kumpulan string. Setiap pertandingan diwakili oleh string dalam format "x:y", di mana xadalah skor tim kami dan yadalah skor lawan kami.
//     // Misalnya: ["3:1", "2:2", "0:1", ...]
//     // Poin diberikan untuk setiap pertandingan sebagai berikut:
//     // jika x > y: 3 poin (menang)
//     // jika x < y: 0 poin (kalah)
//     // jika x = y: 1 poin (seri)
//     // Kita perlu menulis fungsi yang mengambil koleksi ini dan mengembalikan jumlah poin xyang diperoleh tim kita ( ) dalam kejuaraan berdasarkan aturan yang diberikan di atas.
//     // Catatan:
//     // tim kami selalu bermain 10 pertandingan di kejuaraan
//     // 0 <= x <= 4
//     // 0 <= y <= 4
//     // Dasar-dasarSusunanTali

//     function poinDariPertandingan(x, y) {
//       console.info('ok');
//       if (x > y) {
//         return 3;
//       } else if (x < y) {
//         return 0;
//       } else {
//         return 1;
//       }
//     }

//     const hasil = poinDariPertandingan(5, 5);
//     console.info(hasil);
//   };
//   empat();

//   const lima = () => {
//     //     Diberikan suatu array bilangan bulat.
//     // Mengembalikan sebuah array, yang elemen pertamanya merupakan jumlah bilangan positif dan elemen kedua merupakan jumlah bilangan negatif. 0 bukanlah bilangan positif maupun negatif.
//     // Jika inputnya adalah array kosong atau null, kembalikan array kosong.
//     // Contoh
//     // Untuk masukan [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], Anda harus kembali [10, -65].

//     const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

//     let positif = [];
//     let negatif = [];

//     for (let i = 0; i < array.length; i++) {
//       if (array[i] > 0) {
//         positif.push(array[i]);
//       } else if (array[i] < 0) {
//         negatif.push(array[i]);
//       }
//     }
//     console.info(negatif, positif);
//   };

//   lima();

//   const enam = () => {
//     //Periksa apakah di dalam array x ada di dalem array a
//     const a = [1, 2, 3, 'pisang', 4];
//     const x = [4, 1, 'pisang', 5, 2, 3];

//     // function customIncludes(array, valueArray) {
//     //   let matches = []; // Array untuk menyimpan nilai-nilai yang cocok

//     //   // Looping melalui setiap elemen dalam array pertama
//     //   for (let i = 0; i < array.length; i++) {
//     //     // Looping melalui setiap elemen dalam valueArray
//     //     for (let j = 0; j < valueArray.length; j++) {
//     //       // Jika elemen array pertama sama dengan salah satu elemen dalam valueArray
//     //       if (array[i] === valueArray[j]) {
//     //         matches.push(array[i]); // Menyimpan elemen yang cocok
//     //       }
//     //     }
//     //   }

//     //   // Jika ada elemen yang cocok
//     //   if (matches.length > 0) {
//     //     console.log("Elemen yang cocok:", matches);
//     //     return true;
//     //   } else {
//     //     return false; // Jika tidak ada yang cocok
//     //   }
//     // }

//     function customIncludes(array, valueArray) {
//       let hasil = [];

//       for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < valueArray.length; j++) {
//           if (array[i] === valueArray[j]) {
//             hasil.push(array[i]);
//           }
//         }
//       }

//       if (hasil.length > 0) {
//         console.log('Elemen yang cocok:', hasil);
//         return true;
//       } else {
//         return false; // Jika tidak ada yang cocok
//       }
//     }

//     customIncludes(x, a);
//   };

//   enam();

//   const tujuh = () => {
//     //     Tugas:
//     // Diberikan sebuah bilangan bulat non-negatif (misalnya 3), kembalikan sebuah string yang berisi suara "murmur": "1 domba...2 domba...3 domba...". Input yang diberikan selalu valid, yaitu tidak ada bilangan negatif.

//     // Penyederhanaan:
//     // Tugasnya adalah membuat sebuah string yang berisi urutan angka yang diikuti kata "domba", dengan format tertentu. Misalnya, jika input adalah 3, hasilnya adalah:

//     // "1 domba...2 domba...3 domba..."

//     // Penjelasan:
//     // Input adalah angka bulat non-negatif.
//     // Output adalah sebuah string yang berisi angka yang dihitung, diikuti dengan kata "domba" dan titik ("...") setelah setiap angka.

//     const angkaNonNegatif = [1, 2, 3, 4, 5];
//     let str = '';
//     for (let i = 0; i < angkaNonNegatif.length; i++) {
//       str += `${angkaNonNegatif[i]} domba...`;
//     }
//     console.info(str);
//   };
//   tujuh();

//   const delapan = () => {
//     let array = [10, 23, 45];

//     function nilaiRataRata(nilai) {
//       let hitungan = 0;
//       // if(typeof nilai )
//       for (let i = 0; i < nilai.length; i++) {
//         hitungan += nilai[i];
//       }
//       console.info(hitungan / nilai.length);
//     }
//     nilaiRataRata(array);
//   };
//   delapan();

//   const sembila = () => {
//     //     Perayaan Banyak Binatang
//     // Semua binatang sedang merayakan sebuah pesta! Setiap binatang membawa satu hidangan. Ada satu aturan: hidangan harus dimulai dan diakhiri dengan huruf yang sama seperti nama binatang.

//     // Contoh: burung heron biru besar membawa "garlic naan" dan burung chickadee membawa "chocolate cake".

//     // Tugasmu adalah menulis fungsi feast yang menerima dua argumen: nama binatang dan nama hidangan. Fungsi ini akan mengembalikan true jika hidangan diperbolehkan, atau false jika tidak.

//     // Asumsi:

//     // Nama binatang dan hidangan selalu berupa string huruf kecil, dengan minimal dua huruf.
//     // Nama binatang dan hidangan dapat mengandung tanda hubung (-) dan spasi, tetapi tidak ada di awal atau akhir string, dan tidak mengandung angka.

//     // jika bernilai sama huruf terakhirnya,maka akan dikembalikan true,jika tidak sama false

//     function indexLastTwo(binatang, hidangan) {
//       let cntB = 0;
//       let cntH = 0;
//       let matchesB = '';
//       let matchesH = '';

//       for (let i = 0; i < binatang.length; i++) {
//         cntB++;
//         if (cntB === binatang.length) {
//           matchesB += binatang[i];
//         }
//       }

//       for (let i = 0; i < hidangan.length; i++) {
//         cntH++;
//         if (cntH === hidangan.length) {
//           matchesH += hidangan[i];
//         }
//       }
//       console.info(matchesB, matchesH);

//       return console.info(matchesB === matchesH ? true : false);
//     }
//     indexLastTwo('babbibbi', 'meei');
//     indexLastTwo('babbibbi', 'mee');
//   };
//   sembila();

//   const sepuluh = () => {
//     const kuartal1 = ['jenuari', 'febuari', 'maret'];
//     const kuartal2 = ['april', 'mei', 'juni'];
//     const kuartal3 = ['juli', 'agustus', 'september'];
//     const kuartal4 = ['oktober', 'november', 'desember'];

//     function kuartalBulan(params) {
//       let bulan = [
//         'januari',
//         'febuari',
//         'maret',
//         'april',
//         'mei',
//         'juni',
//         'juli',
//         'agustus',
//         'september',
//         'oktober',
//         'november',
//         'desember',
//       ];

//       let kuartals = ['kuartal pertama','kuartal kedua','kuartal ketiga','kuartal keempat']

//       let hasil;
//       let cntH = 0;

//       for (let i = 0; i < bulan.length; i++) {
//         cntH++;
//         if (params === cntH ) {
//           hasil = bulan[i];
//         }
//       }

//       // Kuartal pertama
//       if (params <= 3) {
//         if (params === 1) {
//           console.info(
//             `Bulan ${params} (${hasil}) berada di ${kuartals[0]} `
//           );
//         } else if (params === 2) {
//           console.info(
//             `Bulan ${params} (${hasil}) berada di ${kuartals[0]} `
//           );
//         } else if (params === 3) {
//           console.info(
//             `Bulan ${params} (${hasil}) berada di ${kuartals[0]} `
//           );
//         }
//       }
//       // Kuartal kedua
//        else if (params <= 6) {
//         if (params === 4) {
//           console.info(
//             `Bulan ${params} (${hasil}) berada di ${kuartals[1]} `
//           );
//         } else if (params === 5) {
//           console.info(
//             `Bulan ${params} (${hasil}) berada di ${kuartals[1]} `
//           );
//         } else if (params === 6) {
//           console.info(
//             `Bulan ${params} (${hasil}) berada di ${kuartals[1]} `
//           );
//         }
//       }
//       // kuartal ketiga
//       else if (params <= 9) {
//         if (params === 7) {
//           console.info(
//             `Bulan ${params} (${hasil}) berada di ${kuartals[2]} `
//           );
//         } else if (params === 8) {
//           console.info(
//             `Bulan ${params} (${hasil}) berada di ${kuartals[2]} `
//           );
//         } else if (params === 9) {
//           console.info(
//             `Bulan ${params} (${hasil}) berada di ${kuartals[2]} `
//           );
//         }
//       }
//       // Kuartal keempat
//       else if (params <= 12) {
//         if (params === 10) {
//           console.info(
//             `Bulan ${params} (${hasil}) berada di ${kuartals[3]} `
//           );
//         } else if (params === 11) {
//           console.info(
//             `Bulan ${params} (${hasil}) berada di ${kuartals[3]} `
//           );
//         } else if (params === 12) {
//           console.info(
//             `Bulan ${params} (${hasil}) berada di ${kuartals[3]} `
//           );
//         }
//       } else {
//         console.info(`Nomor yang anda masukan tidak ada dalam nomor bulan`);
//       }
//     }
//     kuartalBulan(2);
//   };
//   sepuluh();
// }

// tantanganSatu();

function tantanganDua() {
  const satu = () => {
    //     Grasshopper - Buku Nilai

    // Buku Nilai

    // Lengkapi fungsi sehingga fungsi tersebut dapat menghitung rata-rata dari tiga nilai yang diberikan dan mengembalikan huruf yang sesuai dengan nilai rata-rata tersebut.

    // Tabel Nilai:

    // Nilai Numerik	Nilai Huruf
    // 90 <= nilai <= 100	'A'
    // 80 <= nilai < 90	'B'
    // 70 <= nilai < 80	'C'
    // 60 <= nilai < 70	'D'
    // 0 <= nilai < 60	'F'
    // Nilai yang diuji berada antara 0 dan 100. Tidak perlu memeriksa nilai negatif atau nilai yang lebih besar dari 100.

    let nilai = [0, 0, 90];
    let hasil = 0;

    function nilaiRataRata(nilai) {
      let jumlahNilai = 0;
      for (let i = 0; i < nilai.length; i++) {
        jumlahNilai += nilai[i];
      }
      hasil = jumlahNilai / nilai.length;
      console.info(hasil);
    }
    nilaiRataRata(nilai);

    function bukuNilai(hasil) {
      if (hasil > 90 && hasil <= 100) {
        console.info('A');
      } else if (hasil > 80 && hasil <= 90) {
        console.info('B');
      } else if (hasil > 70 && hasil <= 80) {
        console.info('C');
      } else if (hasil > 60 && hasil <= 70) {
        console.info('D');
      } else if (hasil <= 60) {
        console.info('E');
      }
    }
    bukuNilai(Number(hasil));
  };
  satu();

  const dua = () => {
    function inisial(nama) {
      let cnt = 0;
      let inisial;
      let result = ''; // Menyimpan hasil akhir

      for (let i = 0; i < nama.length; i++) {
        cnt++;

        if (cnt === 1) {
          inisial = nama[i] + '.';
        }
        if (nama[i] === ' ') {
          inisial += nama[i + 1];
        }
      }

      // Iterasi setiap karakter dalam string input
      for (let i = 0; i < inisial.length; i++) {
        let char = inisial[i];

        // Jika karakter adalah huruf kecil
        if (char >= 'a' && char <= 'z') {
          // Ubah menjadi huruf besar dengan mengurangi 32 dari charCode
          result += String.fromCharCode(char.charCodeAt(0) - 32);
        } else {
          // Jika bukan huruf kecil, tambahkan karakter seperti adanya
          result += char;
        }
      }
      return result;
    }

    console.info(inisial('muhamad rayhan'));
  };
  dua();

  const tiga = () => {
    // Bilangan Palsu
    // Diberikan sebuah string yang berisi angka-angka, ubah setiap angka yang lebih kecil dari 5 menjadi '0' dan angka 5 ke atas menjadi '1'. Kembalikan string yang sudah diubah tersebut.

    // Catatan: Input tidak akan kosong.

    let numbers = [1000, -100, 10, 10, 4, 5, 6, 7, 8, 9, 10];

    let bilanganPalsu = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] <= 5) {
        bilanganPalsu += 0;
      } else if (numbers[i] > 5) {
        bilanganPalsu += 1;
      }
    }
    console.info(bilanganPalsu);
  };
  tiga();

  const empat = () => {
    // Tentu! Berikut adalah versi yang lebih sederhana dari soal tersebut dalam Bahasa Indonesia:

    // Seri Pemula #4 Kecoak
    // Kecoak adalah salah satu serangga tercepat. Buatlah sebuah fungsi yang menerima kecepatan kecoak dalam km per jam dan mengubahnya menjadi cm per detik, dibulatkan ke bawah (dalam angka bulat).

    // Contoh:

    // 1.08 --> 30

    // Catatan: Input adalah angka real (tipe data tergantung bahasa pemrograman) dan selalu >= 0. Hasilnya harus berupa angka bulat.

    function kecepatanKecoa(km, waktu) {
      let cm = 0;
      let detik = 0;
      console.info(km + ' km' + '/' + waktu + ' jam');
      if (km >= 0) {
        cm = km * 1000;
        detik = waktu * 3600;
      }
      console.info(`${km} km / ${1} jam = ${cm} cm / ${detik} detik`);
    }
    kecepatanKecoa(0.4, 13);
  };
  empat();

  const lima = () => {
    //     Cari Jarum di Dalam Jerami
    // Buatlah sebuah fungsi findNeedle() yang menerima sebuah array yang berisi berbagai macam barang (junk), tetapi ada satu "jarum" di dalamnya.

    // Setelah fungsi menemukan "jarum", fungsi harus mengembalikan pesan (sebagai string) yang mengatakan:

    // "found the needle at position " diikuti dengan indeks tempat jarum ditemukan.

    // Contoh:

    // Input: ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
    // Output: "found the needle at position 5"

    // Catatan: Di bahasa COBOL, posisi indeks dimulai dari 1, jadi jawabannya menjadi "found the needle at position 6".
    const input = [
      'hay',
      'junk',
      'hay',
      'hay',
      'moreJunk',
      'needle',
      'randomJunk',
    ];
    function findNeedle(array) {
      let cnt = 0;
      for (let i = 0; i < array.length; i++) {
        cnt++;
        if (array[i] === 'needle') {
          return `menemukan ${array[i]} di posisi ${cnt}`;
        }
      }
    }

    const menemukanJarum = findNeedle(input);
    console.info(menemukanJarum);
  };
  lima();

  const enam = () => {
    //     Tentu! Berikut adalah versi yang lebih sederhana dari soal tersebut dalam Bahasa Indonesia:

    // Usia Dua Kali Lipat
    // Fungsi ini menerima dua argumen:

    // Usia ayah saat ini (dalam tahun)
    // Usia anak laki-laki saat ini (dalam tahun)

    //  Jawabannya selalu lebih besar atau sama dengan 0, baik itu di masa lalu atau di masa depan.

    function usiaAnakDuaKaliLipatUsiaAyah(ayah, anak) {
      console.info('ok');
      if (ayah - anak === anak) {
        console.info(`usia ayah (${ayah} tahun) adalah dua kali lipat usia anak yang saat itu ${anak} tahun`)
      }
      else if (anak * anak <= ayah) {
        console.info('ok');
        console.info(
          `usia ayah ${ayah} akan menjadi dua kali lipat usia anak ${anak} setelah ${anak * anak - ayah
          } tahun lagi}`
        );
      } else if (anak * anak >= ayah) {
        console.info('ok');
        console.info(
          `usia ayah ${ayah} akan menjadi dua kali lipat usia anak ${anak} setelah ayah  ${anak + anak - ayah
          } tahun lagi}`
        );
      }
    };
    console.info('ok');
    usiaAnakDuaKaliLipatUsiaAyah(40, 20)
  }
  enam();

  const tujuh = () => {
    // Soal: Buatlah sebuah fungsi yang mengubah nilai boolean(True / False) menjadi bentuk string - nya.

    //   Catatan: Hanya nilai yang valid yang akan diberikan.
    let str = ' ';
    const rubahNilaiBooleanMenjadiString = function (nilai) {
      if (nilai === true || nilai === false) {
        str = String(nilai);
      }
    }
    rubahNilaiBooleanMenjadiString(true);
    console.info(str);
  }
  tujuh();

  const delapan = () => {

    //     Tentu! Berikut adalah soal yang telah diterjemahkan dan disederhanakan dalam Bahasa Indonesia:

    //     Soal: Jumlahkan semua angka dalam sebuah array(atau list), kecuali angka tertinggi dan terendah.

    // Angka tertinggi dan terendah yang dimaksud adalah berdasarkan nilai, bukan posisi indeksnya! Jika ada lebih dari satu angka dengan nilai tertinggi atau terendah, hanya satu yang dihitung.

    // Perhatikan validasi input.

    //       Contoh:
    //     { 6, 2, 1, 8, 10 } → hasilnya adalah 16
    //     { 1, 1, 11, 2, 3 } → hasilnya adalah 6



    let array1 = [6, 2, 1, 8, 10]
    let array2 = [1, 1, 11, 2, 3]
    let array3 = [1, 1, 101, 12, 3]

    function nambahAngka(array) {
      let nilaiTinggi = 0;
      let nilaiRendah = 1000000000000;
      let hasil = 0;
      for (let i = 0; i < array.length; i++) {
        const matches = array[i];
        if (matches > nilaiTinggi) {
          nilaiTinggi = matches
        }
        if (matches < nilaiRendah) {
          nilaiRendah = matches;
        }
      }
      for (let i = 0; i < array.length; i++) {
        if (nilaiTinggi !== array[i] && nilaiRendah !== array[i]) {
          hasil += array[i]
        }
      }
      console.info(nilaiTinggi, nilaiRendah, hasil);
    }
    nambahAngka(array1);
    nambahAngka(array2);
    nambahAngka(array3);
  }
  delapan();

  const sembilan = () => {
    // Soal: Diberikan sebuah angka antara 0 hingga 9, kembalikan angka tersebut dalam bentuk kata.Input dijamin berada dalam rentang 0 hingga 9.

    // Contoh:
    // Input: 1
    // Output: "Satu"
    function getAngka(nilai) {
      let angka;
      switch (nilai) {
        case 0:
          angka = 'Noll';
          break;
        case 1:
          angka = 'Satu';
          break;
        case 2:
          angka = 'Dua';
          break;
        case 3:
          angka = 'Tiga';
          break;
        case 4:
          angka = 'Empat';
          break;
        case 5:
          angka = 'Lima';
          break;
        case 6:
          angka = 'Enam';
          break;
        case 7:
          angka = 'Tujuh';
          break;
        case 8:
          angka = 'Delapan';
          break;
        case 9:
          angka = 'Sembilan';
          break;
        default:
          angka = `Masukan angka 0 - 9,anda sekarang memasukan nilai ${nilai}`;
      }
      console.info(angka);
    }
    getAngka(9);
    getAngka(90);
  }
  sembilan();

  const sepuluh = () => {
    //     Soal: Diberikan sebuah tahun, tentukan abad(century) yang sesuai dengan tahun tersebut.

    // Abad pertama mencakup tahun 1 hingga 100, abad kedua mencakup tahun 101 hingga 200, dan seterusnya.
    function abad(year) {
      return Math.floor((year + 99) / 100)
    }

    console.info(abad(1));
  }
  sepuluh();
}
tantanganDua()
