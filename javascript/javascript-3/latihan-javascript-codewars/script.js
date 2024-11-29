function tantangan() {
  const satu = () => {
    //     Mengubah nilai boolean menjadi string 'Ya' atau 'Tidak'.
    // Lengkapi metode yang mengambil nilai boolean dan kembalikan "Yes"string untuk true, atau "No"string untuk false.
    const boolean = false;
    return console.info(`${boolean ? "Ya" : "No"}`);
  };

  satu();

  const dua = () => {
    // Konversi DNA ke RNA
    // Asam deoksiribonukleat, DNA adalah molekul penyimpanan informasi utama dalam sistem biologis. DNA terdiri dari empat basa asam nukleat, yaitu Guanin ('G'), Sitosin ('C'), Adenin ('A'), dan Timin ('T').

    // Asam ribonukleat, RNA, adalah molekul pembawa pesan utama dalam sel. RNA sedikit berbeda dari DNA dalam struktur kimianya dan tidak mengandung Timin. Dalam RNA, Timin digantikan oleh asam nukleat lain, Urasil ('U').

    // Buat fungsi yang menerjemahkan rangkaian DNA tertentu menjadi RNA.

    // Misalnya:

    // "GCAT"  =>  "GCAU"
    // String input dapat memiliki panjang yang berubah-ubah - khususnya, string tersebut dapat kosong. Semua input dijamin valid, yaitu setiap string input hanya akan terdiri dari 'G', 'C', 'A'dan/atau 'T'.

    // Membuat variable dna
    //Dapatkan string 'T'
    //Rubah menjadi 'U'
    //merubah variable dna,yang ada asam nekleat 'T' ruabh menjadi 'U'.
    //SEtelah itu return dna
    //simpen ke variable rna
    // dan console rna

    // Bug Ketika dia sudahmenemukan T, huruf yang di belakangya tidak di iterasi lagi,menghasilkan jika di belakangya ada huruf T,tidak di rubah

    let dna = ["G", "C", "A", "T"];
    const ruabahKeRna = (dna) => {
      let cnt = 0;
      for (let i = 0; i < dna.length; i++) {
        cnt++;
        if (dna[i] === "T") {
          dna[i] = "U";
          let perubahan = dna;
          if (dna.length === cnt) {
            return perubahan;
          }
        }
      }
    };
    let rna = ruabahKeRna(dna);
    console.info(rna);
  };

  dua();

  const tiga = () => {
    //   Jika kita memberikan nilai n = 5 ke fungsi tersebut, maka fungsi akan menghasilkan array [5, 4, 3, 2, 1].

    // hitung mundur dari angka n ke 0 dan isi ke array n dari n ke 0
    let n = 5;
    const hitungMundur = (n) => {
      let cnt = [];
      for (let i = 0; i < n; n--) {
        cnt.push(n);
      }
      return cnt;
    };

    const hasil = hitungMundur(n);
    console.info(hasil);
  };

  tiga();

  const empat = () => {
    //     Tim sepak bola kami telah menyelesaikan kejuaraan.
    // Hasil pertandingan tim kami dicatat dalam kumpulan string. Setiap pertandingan diwakili oleh string dalam format "x:y", di mana xadalah skor tim kami dan yadalah skor lawan kami.
    // Misalnya: ["3:1", "2:2", "0:1", ...]
    // Poin diberikan untuk setiap pertandingan sebagai berikut:
    // jika x > y: 3 poin (menang)
    // jika x < y: 0 poin (kalah)
    // jika x = y: 1 poin (seri)
    // Kita perlu menulis fungsi yang mengambil koleksi ini dan mengembalikan jumlah poin xyang diperoleh tim kita ( ) dalam kejuaraan berdasarkan aturan yang diberikan di atas.
    // Catatan:
    // tim kami selalu bermain 10 pertandingan di kejuaraan
    // 0 <= x <= 4
    // 0 <= y <= 4
    // Dasar-dasarSusunanTali

    function poinDariPertandingan(x, y) {
      console.info("ok");
      if (x > y) {
        return 3;
      } else if (x < y) {
        return 0;
      } else {
        return 1;
      }
    }

    const hasil = poinDariPertandingan(5, 5);
    console.info(hasil);
  };
  empat();

  const lima = () => {
    //     Diberikan suatu array bilangan bulat.
    // Mengembalikan sebuah array, yang elemen pertamanya merupakan jumlah bilangan positif dan elemen kedua merupakan jumlah bilangan negatif. 0 bukanlah bilangan positif maupun negatif.
    // Jika inputnya adalah array kosong atau null, kembalikan array kosong.
    // Contoh
    // Untuk masukan [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], Anda harus kembali [10, -65].

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

    let positif = [];
    let negatif = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        positif.push(array[i]);
      } else if (array[i] < 0) {
        negatif.push(array[i]);
      }
    }
    console.info(negatif, positif);
  };

  lima();
}
tantangan();
