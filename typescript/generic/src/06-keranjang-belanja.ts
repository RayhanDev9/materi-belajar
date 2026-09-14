// Kasus: Sistem Keranjang Belanja (Cart)
// Kamu diminta membuat struktur data untuk keranjang belanja e-commerce yang bisa menampung berbagai macam produk.

interface Cart<T> {
  id: number;
  items: T[];
  totalHarga: number;
}

interface CartItem {
  id: number;
  namaProduct: string;
  qty: number;
  harga: number;
}

// 1. Buat Generic Interface Pembungkus
// Buat interface generic bernama Cart<T> dengan properti:

// userId: number (ID pengguna pemilik keranjang)

// items: T[] (array berisi daftar barang/produk generic)

// totalHarga: number (total harga belanjaan)

// 2. Buat Interface Entitas
// Buat interface entitas bernama CartItem dengan properti:

// id: number

// namaProduk: string

// qty: number (jumlah barang)

// harga: number (harga per satuan)

// 3. Buat Variabel Implementasi
// Buat satu variabel bernama keranjangSaya yang menggunakan tipe Cart<CartItem> dengan contoh isi:

// userId: 1

// items: berisi minimal 2 produk di dalam array-nya

// totalHarga: sesuaikan dengan total perhitungan harga barang

// Coba tuliskan kodenya di file baru (misalnya src/04-latihan-cart.ts), lalu kirim hasilnya ke sini!

const keranjangSaya: Cart<CartItem> = {
  id: 1,
  items: [
    {
      id: 12,
      namaProduct: "Sepatu",
      qty: 5,
      harga: 4,
    },
    {
      id: 12,
      namaProduct: "Sepatu",
      qty: 5,
      harga: 4,
    },
  ],
  totalHarga: 20,
};

console.info(keranjangSaya);

// Berikut studi kasus baru untuk melatih ketelitian sintaks objek dan konsep Generic Interface:

// Kasus: Riwayat Transaksi Digital (Transaction History)
// Bayangkan kamu sedang membangun aplikasi dompet digital (e-wallet). Sistem memerlukan format riwayat transaksi yang rapi.

// 1. Buat Generic Interface Pembungkus
// Buat generic interface bernama RiwayatTransaksi<T> dengan properti:

// idDompet: string

// daftarTransaksi: T[] (array generic berisi daftar transaksi)

// totalNominal: number

interface RiwayatTransaksi<T> {
  idDompet: number;
  daftarTranksaksi: T[];
  totalNominal: [];
}

// 2. Buat Interface Entitas
// Buat interface entitas bernama Transaksi dengan properti:

// id: string

// judul: string (misal: “Beli Pulsa” atau “Top Up Saldo”)

// tipe: "masuk" | "keluar" (hanya menerima salah satu dari dua teks ini)

// nominal: number

interface Transaksi {
  id: string;
  judul: string;
  tipe: string;
  nominal: number;
}

// 3. Buat Variabel Implementasi
// Buat variabel bernama riwayatSaya dengan tipe RiwayatTransaksi<Transaksi> yang berisi:

// idDompet: "WLT-9901"

// daftarTransaksi: minimal dua objek transaksi di dalam array (satu "masuk" dan satu "keluar")

// totalNominal: jumlah dari nominal transaksi tersebut

const riwayatSaya: RiwayatTransaksi<Transaksi> = {
  idDompet: "WLT-9901",
  daftarTranksaksi: [
    {
      id: 1,
      judul: "Bayar",
      tipe: "OUT",
      nominal: 20000,
    },
  ],
  totalNominal: 333333,
};

console.info(riwayatSaya);
// Ingat perbedaannya:

// Di dalam interface: gunakan tanda titik koma (;).

// Di dalam data objek { ... }: gunakan tanda koma (,).

// Data array of object: [{ ... }, { ... }].

// Coba tuliskan kodenya di file baru, lalu kirim ke sini!

// Kasus 1: Interface dengan Dua Generic Parameter <T, U>
// Sistem pengiriman paket logistik membutuhkan struktur resi pengiriman yang fleksibel: data pengirimnya bisa berbeda jenis (perorangan atau perusahaan), dan daftar barang bawaannya juga fleksibel.

// Tugas:
// Buat generic interface ResiPengiriman<T, U> dengan properti:

// nomorResi: string

// pengirim: T (tipe generic untuk identitas pengirim)

// daftarBarang: U[] (array generic untuk barang yang dikirim)

// Buat interface entitas:

// Pengirim: properti nama (string) dan telepon (string)

// Barang: properti namaBarang (string) dan beratKg (number)

interface ResiPengiriman<T, U> {
  nomorResi: number;
  pengirim: T;
  daftarBarang: U[];
}

interface PengirimIdentitas {
  nama: string;
}

interface Barang {
  name: string;
}

const Resi: ResiPengiriman<PengirimIdentitas, Barang> = {
  nomorResi: 2,
  pengirim: { nama: "Randy" },
  daftarBarang: [
    {
      name: "Sandal",
    },
  ],
};

console.info(Resi);

// Buat variabel resiSaya dengan tipe ResiPengiriman<Pengirim, Barang> lengkap dengan contoh datanya.

// Kasus 2: Satu Generic dengan Union Type <TipeA TipeB |>
// Sistem pencatatan log aktivitas server menerima respons API yang datanya bisa berisi salah satu dari dua kondisi: Log Sukses atau Log Gagal.

// Tugas:
// Buat generic interface pembungkus LaporanAktivitas<T> dengan properti:

// idLaporan: string

// catatan: T[] (array generic)

// Buat dua interface entitas:

// AktivitasSukses: status: "berhasil", pesan: string

// AktivitasGagal: status: "gagal", pesan: string, kodeError: number

interface LaporanAktivitas<T> {
  idLaporan: number;
  catatan: T[];
}

interface AktivitasSukses {
  status: "Berhasil";
  pesan: string;
}

interface AktivitasGagal {
  status: "Gagal";
  pesan: string;
}

// Buat variabel laporanServer bertipe LaporanAktivitas<AktivitasSukses AktivitasGagal |> yang di dalam array catatan-nya memuat:

// Satu objek sukses

// Satu objek gagal

// Kamu bisa kerjakan salah satu dulu atau langsung keduanya di file baru (misal src/05-latihan-dua-generic.ts), lalu kirim kodenya ke sini.

const laporanServer: LaporanAktivitas<AktivitasSukses | AktivitasGagal> = {
  idLaporan: 223,
  catatan: [
    {
      status: "Berhasil",
      pesan: "DAtabase ok",
    },

    {
      status: "Gagal",
      pesan: "Database tidak ok",
    },
  ],
};

console.info(laporanServer);
