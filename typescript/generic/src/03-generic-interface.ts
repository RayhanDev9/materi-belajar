interface Articale {
  id: number;
  judul: string;
}

interface ApiResponse<T> {
  status: boolean;
  message: string;
  data: T; // Tipe data fleksibel ditentukan saat interface dipakai
}

// Gunakan tanda sama dengan (=) dan isi dengan data nyata
const hasilArtikelTunggal: ApiResponse<Articale> = {
  status: true,
  message: "Berhasil mengambil data artikel",
  data: {
    id: 1,
    judul: "Belajar Generic TypeScript",
  },
};

console.info(hasilArtikelTunggal);
function generic<T, U>(value: T, name: U): [T, U] {
  return [value, name];
}

console.info(generic<string, string>("Hello anddy","tes"));
console.info(generic<number, number>(290,90));
console.info(generic("Tebak tipe", "tes"));
console.info(generic("Tebak tipe", 33));
// const hasilAkhir: ApiResponse<PaginationResult[]> = {
//   status: true,
//   message: "Berhasil mengambil data user",
//   data;
// }

// Tugas Latihan
// Sekarang giliran kamu membuat tipe generic serupa:

// Buat generic interface/type bernama PaginationResult<T> dengan properti:

// page: number (halaman saat ini).

// totalItems: number (total seluruh item).

// items: T[] (daftar data bertipe array generic).

// Buat satu interface entitas bernama Article dengan properti:

// id: number

// judul: string

// Buat satu variabel bernama hasilArtikel yang menggunakan tipe PaginationResult<Article>, lengkap dengan contoh isi datanya.
