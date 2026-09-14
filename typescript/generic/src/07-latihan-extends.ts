// Kasus: Sistem Diskon Toko Online (Discount Calculator)
// Kamu sedang membuat modul promo toko online. Toko ini menjual berbagai macam barang (buku, pakaian, gadget). Setiap barang memiliki properti yang berbeda-beda, tetapi untuk menghitung diskon, fungsinya wajib memastikan barang tersebut punya harga.

// 1. Buat Interface Syarat Minimal
// Buat interface bernama ItemPunyaHarga dengan properti:

// harga: number;

interface itemPunyaHarga {
  harga: number;
}
// 2. Buat Fungsi Generic dengan Constraint
// Buat fungsi bernama hitungDiskon dengan kriteria:

// Menerima tipe generic <T ItemPunyaHarga extends>.

// Parameter 1: item: T (objek barang apa pun yang memenuhi syarat ItemPunyaHarga).

// Parameter 2: diskonPersen: number (angka persentase diskon, misal 10 untuk 10%).

// Return type: number (mengembalikan nominal potongan harga: item.harga * (diskonPersen / 100)).

function hitungDiskon<T extends itemPunyaHarga>(
  item: T,
  diskon: number,
): number {
  const potongan = item.harga * (diskon / 100);
  return potongan;
}

// 3. Buat Dua Interface Barang Berbeda
// Buat dua interface produk yang berbeda:

// Buku: memiliki judul: string;, penulis: string;, dan harga: number;

interface Buku {
  judul: string;
  penulis: string;
  harga: number;
}

interface Elektronik {
  nama: string;
  garansiBulan: number;
  harga: number;
}

// Elektronik: memiliki nama: string;, garansiBulan: number;, dan harga: number;

// 4. Pengujian
// Buat satu objek bertipe Buku dan satu objek bertipe Elektronik.

// Panggil hitungDiskon untuk masing-masing objek tersebut, lalu cetak hasilnya ke konsol.

const bukuCerita: Buku = {
  judul: "Bulu",
  penulis: "Randy",
  harga: 20,
};

const kipasAngin : Elektronik = {
  nama : "Kipas Angin",
  garansiBulan : 2,
  harga : 200,
}

console.info(bukuCerita);
console.info(hitungDiskon(bukuCerita, 50));
console.info(hitungDiskon(kipasAngin, 55));
// Coba tes panggil:

// TypeScript
// hitungDiskon({ nama: "Meja Kayu" }, 10);
// Amati apakah TypeScript menolak dengan garis merah karena objek tersebut tidak punya properti harga.

// Coba tuliskan kodenya di file baru (misal src/06-latihan-extends.ts), lalu kirim hasilnya ke sini!
