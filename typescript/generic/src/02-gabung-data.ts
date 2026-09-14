// Soal: Fungsi gabungData
// Buat sebuah fungsi bernama gabungData yang menerima dua argumen dengan tipe yang bisa berbeda, lalu mengembalikan sebuah tuple (array dengan urutan tipe tetap) berisi kedua data tersebut.

// Syarat:

// Gunakan dua Generic type parameter (biasanya dinamai <T, U>).

// Argumen pertama (item1) bertipe T.

// Argumen kedua (item2) bertipe U.

// Tipe nilai balik (return type) adalah tuple [T, U].

// Fungsi mengembalikan array: [item1, item2].

function gabungData<T, U>(item1: T, item2: U): [T, U] {
  return [item1, item2];
}
const hasil1 = gabungData("Rayhan", 20);
// Tipenya harus terdeteksi sebagai: [string, number]
console.info(hasil1);

const hasil2 = gabungData(true, { peran: "Admin" });
// Tipenya harus terdeteksi sebagai: [boolean, { peran: string }]
console.info(hasil2);
