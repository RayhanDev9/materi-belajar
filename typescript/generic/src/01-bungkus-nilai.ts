const pesan: string = "TypeScript siap digunakan!";
console.log(pesan);
// Soal Latihan Sederhana
// Buat sebuah fungsi bernama bungkusNilai menggunakan Generic:

// Tugas: Fungsi menerima sebuah argumen bernama nilai dengan tipe generic, lalu mengembalikan objek dengan format { data: nilai }.

// Ekspektasi Hasil:

// Jika dipanggil bungkusNilai("TypeScript"), tipenya harus terdeteksi sebagai { data: string }.

// Jika dipanggil bungkusNilai(100), tipenya harus terdeteksi sebagai { data: number }.

// Coba tuliskan kode fungsinya dan kirimkan di sini.

function bungkusNilai<T>(nilai: T): { data: T } {
  return { data: nilai };
}

console.info(bungkusNilai("TypeScript"));
console.info(bungkusNilai(12334));
