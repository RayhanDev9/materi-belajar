// class Stack<T> {
//   // Array internal untuk menampung data generic
//   private items: T[] = [];

//   // Masukkan data ke tumpukan paling atas
//   push(item: T): void {
//     this.items.push(item);
//   }

//   // Ambil elemen paling atas
//   pop(): T | undefined {
//     return this.items.pop();
//   }

//   // Intip elemen teratas tanpa menghapus
//   peek(): T | undefined {
//     return this.items[this.items.length - 1];
//   }

//   // Cek apakah kosong
//   isEmpty(): boolean {
//     return this.items.length === 0;
//   }
// }
// // 1. Buat instance stack bertipe string
// const tumpukanNama = new Stack<string>();

// // 2. Tambahkan data
// tumpukanNama.push("Rayhan");
// tumpukanNama.push("Robani");
// tumpukanNama.push("Farel");

// // 3. Lihat elemen paling atas tanpa menghapus
// console.info("Paling atas:", tumpukanNama.peek()); // Output: "Farel"

// // 4. Ambil (pop) elemen paling atas
// const yangKeluar = tumpukanNama.pop();
// console.info("Yang di-pop:", yangKeluar); // Output: "Farel"

// // 5. Cek lagi siapa yang sekarang ada di paling atas
// console.info("Paling atas sekarang:", tumpukanNama.peek()); // Output: "Robani"

// // Kalau T diisi string:
// const stackTeks = new Stack<string>();
// stackTeks.push("Halo");
// const hasil1 = stackTeks.pop();
// // TypeScript tahu otomatis variabel 'hasil1' bertipe: string | undefined

// // Kalau T diisi objek:
// interface Mahasiswa {
//   nim: string;
//   nama: string;
// }

// const stackMhs = new Stack<Mahasiswa>();
// stackMhs.push({ nim: "101", nama: "Rayhan" });

// const mhsKeluar = stackMhs.pop();
// // TypeScript langsung tahu 'mhsKeluar' punya properti .nim dan .nama!
// if (mhsKeluar) {
//   console.info(mhsKeluar.nim); // Autocomplete langsung jalan
// }

// console.info(mhsKeluar);
// console.info(hasil1);

// Tugas Latihan 1: Implementasi Stack Kasus Riwayat Perubahan (Undo History)
// Bayangkan kamu membuat fitur Undo untuk aplikasi catatan teks. Setiap kali pengguna mengetik, aksi tersebut disimpan ke dalam Stack.

// Spesifikasi:
// Buat interface entitas AksiTeks dengan properti:

// id: number;

// teks: string;

// waktu: string; (misal "14:00")

interface AksiTeks<> {
  id: number;
  teks: string;
  waktu: string;
}

// Buat class generic Stack<T> lengkap dengan method:

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  total(): number {
    return this.items.length;
  }
  pop(): T | undefined {
    return this.items.pop();
  }
}

const historyUndo = new Stack<AksiTeks>();

historyUndo.push({
  id: 1,
  teks: "Halo",
  waktu: "14.00",
});

historyUndo.push({
  id: 2,
  teks: "Halo nama saya Rayhan, saya mahasiswa",
  waktu: "14:05",
});

const aksiTerakhir = historyUndo.pop();

console.info("Aksi yang di-undo:", aksiTerakhir);

// Cek sisa data teratas sekarang
console.info("Posisi teks saat ini:", historyUndo.peek());

// push(item: T): void

// pop(): T | undefined

// peek(): T | undefined

// total(): number (mengembalikan jumlah tumpukan saat ini)

// Buat objek instansinya: const historyUndo = new Stack<AksiTeks>();

// Masukkan minimal dua aksi menggunakan .push().

// Jalankan .pop() satu kali untuk mensimulasikan proses undo, lalu cetak hasil data yang di-undo dan sisa elemen teratas (.peek()) ke terminal.

// Coba buat file baru (misal src/07-latihan-stack.ts), ketik kodenya, dan kirim hasilnya ke sini. Setelah ini selesai, kita lanjut ke bagian Queue!

class Queue<T> {
  private items : T[] = [];

  enqueue(item : T ) : void {
    this.items.push(item)
  }
  dequeue() : T | undefined{
return this.items.shift()
  }
  front () : T | undefined {
    return this.items[0]
  }
  isEmpaty () : boolean {
    return this.items.length === 0;
  }

  size() : number {
    return this.items.length;
  }
}

const queTes = new Queue<AksiTeks>();

queTes.enqueue({
 id: 122,
  teks: "Halo",
  waktu: "14.00",
})

console.info(queTes)

// queTes.dequeue()

console.info(queTes)
console.info(queTes.front())
console.info(queTes.isEmpaty())
console.info(queTes.size())