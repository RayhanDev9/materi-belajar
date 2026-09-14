function logLength<T extends { length: number }, U = string>(
  item: T,
  text: U,
): T {
  console.info(text, item.length);
  return item;
}

logLength("rayah", "Panjang");

// Tugas Kamu:

// Buat fungsi bernama cetakProfil<T EntitasDasar extends>(data: T): void yang mencetak teks ke konsol: "[ID: <id>] Nama: <nama>".

// Uji panggil fungsi tersebut dengan objek yang memiliki properti tambahan:

// TypeScript
const dataSiswa = {
  id: 1,
  nama: "Rayhan",
  jurusan: "Teknik Informatika",
  semester: 3,
};
// Coba prediksi: apakah pemanggilan cetakProfil(dataSiswa) akan berhasil atau memunculkan error garis merah? Tulis kodingan beserta analisismu!

interface EntitasDasar {
  id: number;
  nama: string;
}

function cetakProfile<T extends EntitasDasar>(dataMahasiswa: T): void {
  console.info(`[ID: ${dataMahasiswa.id}] Nama: ${dataMahasiswa.nama}`);
}
cetakProfile(dataSiswa);
