
const challangeSatu = () => {
    //     Tantangan Koding #1: Membuat Aplikasi Poll Sederhana
    // Kita akan membangun sebuah aplikasi poll(survey) sederhana.Poll ini akan memiliki pertanyaan, pilihan yang bisa dipilih orang, dan jumlah suara yang diterima untuk masing - masing pilihan.Data ini akan disimpan dalam objek poll.
    //         Tugas:
    //     1.	Buat metode registerNewAnswer di dalam objek poll.Metode ini harus melakukan 2 hal: 1.1.Tampilkan sebuah jendela prompt yang meminta pengguna untuk memilih nomor opsi.
    // Apa bahasa pemrograman favorit Anda ?
    // 0 : JavaScript
    // 1: Python
    // 2: Rust
    // 3: C++
    // (Tulis nomor pilihan)

    // 1.2.Berdasarkan input nomor yang dipilih pengguna, update array answers dengan menambahkan 1 pada posisi yang sesuai dengan nomor pilihan yang dimasukkan.Pastikan untuk memeriksa bahwa input adalah angka yang valid dan sesuai(misalnya, nomor 52 tidak boleh diterima).
    //2.	Panggil metode registerNewAnswer setiap kali pengguna mengklik tombol "Jawab Poll".
    // 3.	Buat metode displayResults untuk menampilkan hasil poll.Metode ini menerima input berupa string yang disebut 'type', yang bisa bernilai 'string' atau 'array'.
    // o	Jika tipe 'array', tampilkan hasil poll dalam bentuk array(misalnya: [5, 2, 3]).
    // o	Jika tipe 'string', tampilkan hasil poll dalam bentuk string, misalnya: "Hasil poll adalah 13, 2, 4, 1".
    // o	Tipe 'array' adalah opsi default.
    //     4.	Jalankan metode displayResults setelah setiap panggilan ke metode registerNewAnswer.
    // 5.	Bonus: Gunakan metode displayResults untuk menampilkan dua array hasil poll dengan data tes berikut:
    // o	Data 1: [5, 2, 3]
    // o	Data 2: [1, 5, 3, 9, 6, 1]
    // o	Gunakan keduanya dengan opsi 'array' dan 'string'.Jangan masukkan data array tersebut ke dalam objek poll!
    //     ________________________________________
    //     Ringkasan:
    //     1.	Metode registerNewAnswer: Tanyakan pengguna pilihan mereka dan perbarui hasilnya.
    // 2.	Metode displayResults: Tampilkan hasil poll sesuai format yang dipilih.
    // 3.	Bonus: Tampilkan hasil poll dengan data tes menggunakan kedua format 'array' dan 'string'.




    const poll = {
        question: "What is your favourite programming language?",
        options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
        answers: [0, 0, 0, 0],
        registerNewAnswer() {
            const answer =
                Number(prompt(`${this.question}\n ${this.options.join('\n')}(Tulis Nomor Pilihan)`));
            if (typeof answer === 'number' && answer < 0 || answer >= this.options.length) {
                alert("Pilihan tidak valid! Silakan pilih nomor yang sesuai.");
            } else {
                this.answers[answer]++;
            }
            console.info(this.displayResults(this.answers));
            console.info(this.displayResults(this.answers.join(',')));
            console.info(this.displayResults([5, 2, 3]));
            console.info(this.displayResults([5, 2, 3].join(',')));
            console.info(this.displayResults([1, 5, 3, 9, 6, 1]));
            console.info(this.displayResults([1, 5, 3, 9, 6, 1].join(',')));
        },
        displayResults(type) {
            if (Array.isArray(type)) {
                return type;
            } else { return `Hasil poll adalah ${type}` };
        }
    }

    document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll)
    );




}
// challangeSatu();

const challangeDua = () => {
    //     Tantangan Pemrograman #2
    // Ini lebih merupakan tantangan untuk berpikir daripada tantangan coding 🤓

    // Ambil IIFE(Immediately Invoked Function Expression) di bawah ini dan di bagian akhir fungsi, tambahkan event listener yang mengubah warna elemen h1 yang dipilih(header) menjadi biru setiap kali elemen BODY diklik.Jangan memilih lagi elemen h1!

    // Setelah itu, jelaskan kepada DIRI KAMU SENDIRI(atau kepada orang lain di sekitar kamu) MENGAPA ini berhasil! Luangkan waktu untuk memikirkannya.Pikirkan tentang KAPAN tepatnya fungsi callback dieksekusi, dan apa artinya 

    // Penjelasan:
    // IIFE (Immediately Invoked Function Expression) adalah fungsi yang langsung dijalankan setelah didefinisikan.
    // Anda diminta untuk menambahkan event listener pada elemen <body> yang mengubah warna teks dari elemen <h1> (dengan id header) menjadi biru saat elemen body diklik.
    // Anda tidak perlu memilih elemen <h1> lagi setelah event listener ditambahkan.
    // Bagian tantangan adalah untuk memahami kenapa kode ini berhasil dan kapan callback function dalam event listener dieksekusi.




    document.body.addEventListener('click', () => (function () {
        const h1 = document.querySelector('#header');
        return function () {
            h1.style.color = 'blue';
            console.info(h1);
        }
    })()());

    // SEMOGA BERUNTUNG 😀
}
challangeDua();