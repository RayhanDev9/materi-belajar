const challangesSatu = () => {
    const books = [
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, genre: 'Fiction' },

        { title: '1984', author: 'George Orwell', year: 1949, genre: 'Dystopian' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, genre: 'Fiction' },
        { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genre: 'Romance' },
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, genre: 'Fiction' },
        { title: 'Brave New World', author: 'Aldous Huxley', year: 1932, genre: 'Dystopian' },
        { title: 'Moby Dick', author: 'Herman Melville', year: 1851, genre: 'Adventure' }
    ];

    // Tugas:
    // 1.	Tugas 1: Menambahkan Tahun Terbit Buku Baru
    // Buat array baru yang berisi objek buku yang sama, tetapi tambahkan properti baru recommendedYear yang berisi tahun yang disarankan untuk membaca buku tersebut.
    // o	Jika genre adalah Fiction: Tahun disarankan adalah tahun 2020.
    // o	Jika genre adalah Dystopian: Tahun disarankan adalah tahun 2025.
    // o	Jika genre adalah Romance: Tahun disarankan adalah tahun 2022.
    // o	Jika genre adalah Adventure: Tahun disarankan adalah tahun 2023.
    // Contoh hasil output:
    // javascript
    // Salin kode
    // [
    //   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, genre: 'Fiction', recommendedYear: 2020 },
    //   { title: '1984', author: 'George Orwell', year: 1949, genre: 'Dystopian', recommendedYear: 2025 },
    //   ...
    // ]
    const recommendedYear = (book) => {
        if (book.genre === 'Fiction') book.recommendedYear = 2020;
        if (book.genre === 'Dystopian') book.recommendedYear = 2025;
        if (book.genre === 'Romance') book.recommendedYear = 2022;
        if (book.genre === 'Adventure') book.recommendedYear = 2023;
    }
    books.map(recommendedYear)


    // 2.	Tugas 2: Buku yang Diterbitkan Setelah 1950
    // Gunakan metode filter() untuk membuat array baru yang hanya berisi buku yang diterbitkan setelah tahun 1950.
    // Contoh hasil output:
    // javascript
    // Salin kode
    // [
    //   { title: '1984', author: 'George Orwell', year: 1949, genre: 'Dystopian' },
    //   { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, genre: 'Fiction' },
    //   { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, genre: 'Fiction' },
    //   { title: 'Brave New World', author: 'Aldous Huxley', year: 1932, genre: 'Dystopian' }
    // ]

    const publishedAfter1950 = books.filter(book => book.year >= 1950)
    console.info(publishedAfter1950);


    // 3.	Tugas 3: Menambahkan Tahun Terbit Buku ke Tahun Sekarang
    // Gunakan map() untuk membuat array baru yang hanya berisi selisih tahun terbit dengan tahun sekarang (2024) untuk setiap buku. Hasilnya adalah array angka yang menunjukkan berapa tahun yang telah berlalu sejak setiap buku diterbitkan.
    // Contoh hasil output:
    // javascript
    // Salin kode
    // [99, 75, 64, 211, 73, 92, 173]
    const AddingBookPublicationYearToCurrentYear = books.map(book => 2025 - book.year);
    console.info(AddingBookPublicationYearToCurrentYear);


    // 4.	Tugas 4: Daftar Penulis Buku Dystopian
    // Gunakan filter() untuk menemukan semua buku yang ber-genre Dystopian, kemudian buat array hanya berisi nama penulis dari buku-buku tersebut.
    // Contoh hasil output:
    // javascript
    // Salin kode
    // ['George Orwell', 'Aldous Huxley']
    const ListOfDystopianBookAuthors = books.filter(books => books.genre === 'Dystopian').map(book => book.author);
    console.info(ListOfDystopianBookAuthors);
    console.info(books);

    // 5.	Tugas 5: Jumlah Buku Berdasarkan Genre
    // Gunakan metode reduce() untuk menghitung jumlah buku berdasarkan genre. Hasilnya adalah objek yang menyebutkan jumlah buku per genre.
    // Contoh hasil output:
    // javascript
    // Salin kode
    // {
    //   Fiction: 3,
    //   Dystopian: 2,
    //   Romance: 1,
    //   Adventure: 1
    // }
    const NumberOfBooksByGenre = books.reduce((acc, book) => {
        // Periksa genre buku
        const genre = book.genre;


        // Jika genre belum ada di accumulator, buat properti dengan nilai awal 0
        if (!acc[genre]) {
            acc[genre] = 0;
        }

        // Tambahkan 1 pada jumlah buku untuk genre yang sesuai
        acc[genre] += 1;

        return acc;  // Kembalikan accumulator untuk iterasi berikutnya
    }, {});


    console.info(NumberOfBooksByGenre);

    // 6.	Tugas 6: Mengurutkan Buku Berdasarkan Tahun Terbit
    // Gunakan metode sort() untuk mengurutkan array buku berdasarkan tahun terbit secara menaik (ascending). Pastikan array asli tidak berubah dan hasilkan array baru yang sudah diurutkan.
    // Contoh hasil output:
    // javascript
    // Salin kode

    console.info(books[0].year);
    console.info(books);
    books.sort((a, b) => a.year - b.year);
    console.info(books);
}

// challangesSatu();

const challangesDua = () => {

    // Tentu! Berikut adalah soal baru yang berfokus pada manipulasi array dan objek di JavaScript, dengan berbagai tingkat kesulitan. Soal-soal ini dirancang untuk membantu memahami penggunaan metode array seperti map(), filter(), reduce(), dan beberapa konsep lanjutan seperti desktrukturisasi dan penggunaan objek.
    // ________________________________________
    // Soal: Pengelolaan Data Produk
    // Deskripsi Masalah: Kamu diberi data produk dari sebuah toko online. Setiap produk memiliki informasi seperti id, name, category, price, dan quantity. Tugas kamu adalah memanipulasi data ini untuk berbagai tujuan, seperti menghitung total harga produk, mengelompokkan produk berdasarkan kategori, dan mengurutkan produk berdasarkan harga atau kuantitas.
    // Data Produk:________________________
    // Tugas yang Diberikan:







    // ________________________________________
    // Panduan Penyelesaian:
    // 1.	forEach():
    // o	Berguna untuk melakukan operasi pada setiap elemen dalam array tanpa mengubah array itu sendiri. Gunakan ini untuk memodifikasi array, seperti menambahkan properti baru pada objek dalam array.
    // 2.	reduce():
    // o	Digunakan untuk mengakumulasi nilai berdasarkan kondisi tertentu. Bisa digunakan untuk menghitung total harga, menemukan produk tertentu, atau mengelompokkan data.
    // 3.	filter():
    // o	Digunakan untuk membuat array baru berdasarkan kriteria tertentu. Gunakan ini untuk memfilter produk berdasarkan harga atau kategori.
    // 4.	sort():
    // o	Digunakan untuk mengurutkan array. Bisa digunakan untuk mengurutkan produk berdasarkan harga atau kuantitas.
    // 5.	map():
    // o	Digunakan untuk membuat array baru dengan format atau data yang dimodifikasi berdasarkan elemen asli. Ini berguna untuk mengubah struktur data produk, seperti menambahkan properti baru.
    // ________________________________________
    // Contoh Penyelesaian:
    // Tugas 1: Menambahkan Total Harga per Produk
    // javascript
    // Salin kode
    // function addTotalPrice(product) {
    //   product.totalPrice = product.price * product.quantity;
    // }

    // products.forEach(addTotalPrice);
    // console.log(products);
    // Tugas 2: Menghitung Total Nilai Stok Toko
    // javascript
    // Salin kode
    // const totalStockValue = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    // console.log('Total Nilai Stok:', totalStockValue);
    // Tugas 3: Mengelompokkan Produk Berdasarkan Kategori
    // javascript
    // Salin kode
    // const groupedByCategory = products.reduce((acc, product) => {
    //   if (!acc[product.category]) {
    //     acc[product.category] = [];
    //   }
    //   acc[product.category].push(product);
    //   return acc;
    // }, {});
    // console.log(groupedByCategory);
    // Tugas 4: Menyaring Produk yang Memiliki Harga di atas 100
    // javascript
    // Salin kode
    // const expensiveProducts = products.filter(product => product.price > 100);
    // console.log(expensiveProducts);
    // Tugas 5: Menemukan Produk dengan Harga Termahal
    // javascript
    // Salin kode
    // const mostExpensiveProduct = products.reduce((max, product) => product.price > max.price ? product : max, products[0]);
    // console.log(mostExpensiveProduct);
    // ________________________________________
    // Kesimpulan:
    // Soal-soal di atas memberikan berbagai tantangan yang berfokus pada pengolahan array dan objek menggunakan metode array seperti forEach(), reduce(), filter(), map(), dan sort(). Soal-soal ini bertujuan untuk mengasah kemampuan kamu dalam memanipulasi dan mengelola data dalam format array dan objek di JavaScript. Jika kamu membutuhkan penjelasan lebih lanjut atau solusi untuk soal lainnya, jangan ragu untuk bertanya!

    const products = [
        { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10 },
        { id: 2, name: 'Shirt', category: 'Clothing', price: 30, quantity: 50 },
        { id: 3, name: 'Coffee Maker', category: 'Appliances', price: 90, quantity: 20 },
        { id: 4, name: 'Smartphone', category: 'Electronics', price: 800, quantity: 30 },
        { id: 5, name: 'Jeans', category: 'Clothing', price: 50, quantity: 40 },
        { id: 6, name: 'Blender', category: 'Appliances', price: 60, quantity: 25 },
        { id: 7, name: 'Headphones', category: 'Electronics', price: 200, quantity: 15 }
    ];
    // 1. Tugas 1: Menambahkan Total Harga per Produk
    // •	Buat fungsi addTotalPrice(product) yang menambahkan properti totalPrice pada setiap objek produk, yang dihitung sebagai price * quantity.
    // •	Gunakan forEach() untuk memodifikasi array produk.
    // •	Log hasil array yang sudah dimodifikasi.

    const addTotalPrice = (products) => {
        const total = products.map(product => product.price * product.quantity);

        products.forEach(product => {
            const totalForEach = product.price * product.quantity;
            console.info(totalForEach)
        })
        return total;
    }
    addTotalPrice(products)

    // 2. Tugas 2: Menghitung Total Nilai Stok Toko
    // •	Hitung total nilai stok yang dimiliki oleh toko. Total nilai stok dihitung dengan menjumlahkan totalPrice setiap produk.
    // •	Gunakan reduce() untuk menghitung total ini.
    const calculatingTheTotalValueOfStoreStock = (products) => {
        const totalHargaProduk = products.map(product => product.price * product.quantity).reduce((acc, cur) => acc + cur, 0);
        console.info(totalHargaProduk);
    }
    calculatingTheTotalValueOfStoreStock(products)

    // 3. Tugas 3: Mengelompokkan Produk Berdasarkan Kategori
    // •	Kelompokkan produk berdasarkan kategori (category) dan buat objek di mana setiap properti adalah nama kategori, dan nilai adalah array produk yang termasuk dalam kategori tersebut.
    // •	Gunakan reduce() untuk mengelompokkan produk.

    // Kelompokan produk berdasarkan katagori 
    //dan buat objek dimana setipa properti adalah nama katagori
    //dan nilai adalah array produk yang termasuk dalam katagor tersebut
    const groupingProductsByCategory = (products) => {
        return products.reduce((acc, cur) => {
            const category = cur.category;
            if (!acc[category]) {
                acc[category] = 0;
            }
            acc[category] += 1
            return acc;

        }, {})
    }
    console.info(groupingProductsByCategory(products));

    // 4. Tugas 4: Menyaring Produk yang Memiliki Harga di atas 100
    // •	Buat array baru yang berisi produk-produk dengan harga lebih dari 100.
    // •	Gunakan filter() untuk melakukan penyaringan berdasarkan harga.

    const filteringProductsThatHaveAPriceAbove100 = products.filter(product => product.price >= 100);
    console.info(filteringProductsThatHaveAPriceAbove100);

    // 5. Tugas 5: Menemukan Produk dengan Harga Termahal
    // •	Temukan produk dengan harga tertinggi di dalam array.
    // •	Gunakan reduce() untuk menemukan produk dengan harga tertinggi.

    const findingProductsWithTheMostExpensivePrices = (products) => {
        const rsault = products
            .reduce((rsault, product) => rsault > product.price ? rsault : product.price, products[0].price);
        return products.find(product => product.price === rsault)
    }
    console.info(findingProductsWithTheMostExpensivePrices(products));

    // 6. Tugas 6: Mengurutkan Produk Berdasarkan Harga
    // •	Buat array baru yang berisi produk-produk yang sudah diurutkan berdasarkan harga produk (dari yang terendah ke yang tertinggi).
    // •	Gunakan sort() untuk mengurutkan array produk berdasarkan harga.

    const sortedProduct = products.toSorted((a, b) => a.price - b.price);
    console.info(sortedProduct);


    // 7. Tugas 7: Menemukan Produk dengan Stok Terbanyak
    // •	Temukan produk dengan stok terbanyak (quantity tertinggi).
    // •	Gunakan reduce() untuk menemukan produk dengan kuantitas tertinggi.
    const stokTerbanyak = (products) => {
        const rsault = products
            .reduce((rsault, product) => rsault > product.quantity ? rsault : product.quantity, products[0].quantity);
        return products.find(product => product.quantity === rsault)
    }
    console.info(stokTerbanyak(products));

    // 8. Tugas 8: Menyaring Produk Berdasarkan Kategori dan Harga
    // •	Buat array baru yang hanya berisi produk-produk dengan kategori "Electronics" dan harga lebih dari 100.
    // •	Gunakan kombinasi filter() untuk menyaring berdasarkan kategori dan harga.

    const electronics = products.filter(product => product.category === 'Electronics' && product.price > 100);
    console.info(electronics);
    console.info(products);

    // 9. Tugas 9: Menghitung Rata-Rata Harga Produk
    // •	Hitung rata-rata harga dari semua produk yang ada dalam array.
    // •	Gunakan reduce() untuk menghitung total harga dan bagi dengan jumlah produk untuk mendapatkan rata-rata.
    const rataRataHargaProduct = products.reduce((acc, product, i, arr) =>
        (acc += (product.price / arr.length)), 0);
    console.info(rataRataHargaProduct);

    // 10. Tugas 10: Mengubah Format Data Produk
    // •	Buat array baru yang hanya berisi objek dengan format berikut:
    // o	{ name: <product_name>, totalValue: <totalPrice> }
    // •	Gunakan map() untuk mengubah format data produk menjadi format yang diinginkan.
    const mengubahFormatDataProduct = products.map(products => {
        let product = products;
        return {
            nama: product.name,
            totalValue: product.price
        }

    }, {})

    console.info(mengubahFormatDataProduct);
}
// challangesDua();

const challangesTiga = () => {

    //     Soal 1: Menggunakan Array.from() untuk Membuat Array dari String
    // Deskripsi Masalah: Kamu diberikan sebuah string yang berisi serangkaian angka yang dipisahkan oleh tanda koma. Tugas kamu adalah mengubah string tersebut menjadi array angka menggunakan Array.from(). Kemudian, cari angka terbesar dan terkecil dari array tersebut.
    // Contoh Input:
    // javascript
    // Salin kode
    // const inputString = "10,20,30,40,50";
    // Tugas:
    // 1.	Gunakan Array.from() untuk mengubah string menjadi array angka.
    // 2.	Cari angka terbesar dan terkecil di dalam array.
    // 3.	Log hasilnya.
    // Hint:
    // •	Gunakan Array.from() dengan pemetaan (mapping) untuk mengubah string menjadi angka.
    // ________________________________________
    const inputString = "10,20,30,40,50";

    const inputArray = Array.from(inputString.split(','), str => {
        const angka = Number(str);
        console.info(angka)
        return angka
        // angka.replaceAll(NaN, ''
    });
    console.info(Math.min(...inputArray))
    console.info(Math.max(...inputArray))
    console.info(inputArray);

    // Soal 2: Membuat Array dengan new Array()
    // Deskripsi Masalah: Kamu diminta untuk membuat array baru dengan panjang 100 yang berisi angka dari 1 hingga 100. Gunakan new Array() untuk membuat array tersebut, kemudian isi array dengan angka-angka yang sesuai.
    // Tugas:
    // 1.	Gunakan new Array() untuk membuat array kosong dengan panjang 100.
    // 2.	Isi array tersebut dengan angka mulai dari 1 hingga 100.
    // 3.	Tampilkan array yang sudah terisi.
    // Hint:
    // •	Kamu bisa menggunakan map() setelah membuat array kosong dengan new Array(), atau menggunakan for untuk mengisi array.
    // ________________________________________

    const arr1_100 = new Array(100)
    const nambahValue = (i) => {
        arr1_100[i] = i;
    }
    for (let i = 0; i < 100; i++) {
        nambahValue(i)
    }

    // Soal 3: Menggunakan Object.groupBy() untuk Mengelompokkan Data
    // Deskripsi Masalah: Kamu memiliki array objek yang berisi data tentang orang-orang dan umur mereka. Tugas kamu adalah mengelompokkan orang-orang tersebut berdasarkan rentang umur mereka, seperti: "18-30", "31-50", dan "51+".
    // Contoh Input:
    // javascript
    // Salin kode

    // Tugas:
    // 1.	Gunakan Object.groupBy() (atau implementasikan fungsionalitas serupa jika groupBy() belum tersedia di lingkungan kamu) untuk mengelompokkan orang berdasarkan rentang umur.
    // 2.	Rentang umur:
    // o	"18-30"
    // o	"31-50"
    // o	"51+"
    // 3.	Log hasil pengelompokan.
    // Hint:
    // •	Gunakan Object.groupBy() jika mendukungnya, atau buat logika grup dengan reduce() atau forEach().
    // ________________________________________

    const people = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 35 },
        { name: "Charlie", age: 45 },
        { name: "Dave", age: 55 },
        { name: "Eve", age: 28 },
        { name: "Frank", age: 60 }
    ];

    const rentangUmur = Object.groupBy(people, people => {
        if (people.age >= 18 && people.age <= 30) return '18-30';
        if (people.age >= 31 && people.age <= 50) return '31-50';
        if (people.age >= 51) return '50+';
    });
    console.info(rentangUmur);

    // Soal 4: Menggunakan Array.from() untuk Membuat Array dari Set
    // Deskripsi Masalah: Kamu diberikan sebuah objek Set yang berisi nilai-nilai unik. Tugas kamu adalah mengubah Set tersebut menjadi array menggunakan Array.from() dan kemudian mencari elemen terkecil dan terbesar dalam array tersebut.
    // Contoh Input:
    // javascript
    // Salin kode
    // Tugas:
    // 1.	Gunakan Array.from() untuk mengubah Set menjadi array.
    // 2.	Cari angka terbesar dan terkecil di dalam array.
    // 3.	Log hasilnya.
    // ____

    const uniqueNumbers = Array.from(new Set([10, 20, 5, 40, 30, 5, 20]));
    console.info(Math.max(...uniqueNumbers));
    console.info(Math.min(...uniqueNumbers));



    // Soal 5: Menggunakan new Array() untuk Membuat Matriks 2D
    // Deskripsi Masalah: Kamu diminta untuk membuat sebuah matriks 2D berukuran 3x3 menggunakan new Array(). Setiap elemen dalam matriks harus berisi angka acak antara 1 dan 100. Matriks tersebut harus terlihat seperti ini:
    // javascript
    // Salin kode
    // [
    //   [23, 54, 12],
    //   [45, 76, 89],
    //   [98, 32, 61]
    // ]
    // Tugas:
    // 1.	Gunakan new Array() untuk membuat array dua dimensi (3x3).
    // 2.	Isi matriks tersebut dengan angka acak antara 1 dan 100.
    // 3.	Tampilkan matriks tersebut.
    // Hint:
    // •	Gunakan Math.random() untuk menghasilkan angka acak.
    // ________________________________________
    // Membuat matriks 2D berukuran 3x3 menggunakan new Array()

    let matriks = new Array(3); // Membuat array dengan 3 baris
    // Mengisi matriks dengan angka acak antara 1 dan 100
    for (let i = 0; i < 3; i++) {
        matriks[i] = new Array(3); // Setiap baris memiliki 3 kolom
        for (let j = 0; j < 3; j++) {
            // Mengisi elemen matriks dengan angka acak antara 1 dan 100
            matriks[i][j] = Math.floor(Math.random() * 100) + 1;
        }
    }

    // Menampilkan matriks
    console.log(matriks);


    // Soal 6: Menggunakan Object.groupBy() untuk Mengelompokkan Data Berdasarkan Status
    // Deskripsi Masalah: Kamu diberi array objek yang berisi data tugas yang perlu diselesaikan, masing-masing dengan status "complete" atau "incomplete". Tugas kamu adalah mengelompokkan tugas-tugas tersebut berdasarkan status mereka.
    // Contoh Input:
    // javascript
    // Salin kode

    // Tugas:
    // 1.	Gunakan Object.groupBy() (atau implementasikan sendiri) untuk mengelompokkan tugas berdasarkan status.
    // 2.	Log hasil pengelompokan.
    // Hint:
    // •	Pengelompokan berdasarkan status bisa dilakukan dengan reduce() atau menggunakan Object.groupBy() jika tersedia di lingkungan kamu.
    // ________________________________________
    const tasks = [
        { id: 1, name: "Task 1", status: "complete" },
        { id: 2, name: "Task 2", status: "incomplete" },
        { id: 3, name: "Task 3", status: "complete" },
        { id: 4, name: "Task 4", status: "incomplete" }
    ];

    const pengelompokan = Object.groupBy(tasks, tas =>
        tas.status === "complete" ? "complete" : "incomplete"
    )
    console.info(pengelompokan);

    const pRduece = tasks.reduce((acc, task) => {

        const kondisi = task.status === "complete" ? "complete" : "incomplete";

        acc[kondisi].push(task);
        return acc;

    }, { complete: [], incomplete: [] })
    console.info(pRduece);

    // Soal 7: Menggunakan Array.from() untuk Membuat Array dari NodeList
    // Deskripsi Masalah: Kamu diberikan sebuah HTML yang berisi beberapa elemen <li>. Tugas kamu adalah menggunakan Array.from() untuk mengonversi NodeList dari elemen-elemen <li> menjadi array, kemudian log daftar teks dari semua elemen tersebut.
    // Contoh HTML:
    // html
    // Salin kode

    // Tugas:
    // 1.	Ambil semua elemen <li> menggunakan document.querySelectorAll().
    // 2.	Gunakan Array.from() untuk mengonversi NodeList menjadi array.
    // 3.	Ambil teks dari setiap elemen <li> dan log hasilnya dalam bentuk array.
    // Hint:
    // •	Gunakan Array.from() untuk mengonversi NodeList menjadi array sehingga kamu bisa memanipulasi elemen-elemen tersebut lebih mudah.

    const elUl = Array.from(document.querySelectorAll('ul li')).map(li => li.textContent);



    console.info(elUl);


}


// challangesTiga();

const challangesEnam = () => {



    //     Soal 2: Menggunakan Array.from() untuk Mengonversi String menjadi Array
    // Deskripsi Masalah: Kamu diminta untuk mengonversi sebuah string menjadi array menggunakan Array.from(). Setelah itu, hitung berapa kali setiap karakter muncul dalam string tersebut.
    // Tugas:
    // 1.Gunakan Array.from() untuk mengonversi string berikut: "abcaacba".
    // 2.Hitung frekuensi kemunculan masing-masing karakter dalam array yang dihasilkan.
    // 3.Tampilkan hasilnya dalam format objek, misalnya:
    // javascript
    // Salin kode
    // {
    //   a: 4,
    //   b: 2,
    //   c: 2
    // }
    // ________________________________________

    const number = Array.from("abcaacba").reduce((acc, huruf) => {
        if (!acc[huruf]) acc[huruf] = 0;
        acc[huruf] += 1
        return acc;
    }, {});
    console.info(number);

    // Soal 3: Menggunakan Object.groupBy() untuk Mengelompokkan Data
    // Deskripsi Masalah: Kamu diminta untuk mengelompokkan sebuah array objek berdasarkan nilai pada properti category. Gunakan Object.groupBy() untuk menyelesaikan tugas ini.
    // Tugas:
    // 1.Diberikan array objek berikut:
    // javascript
    // Salin kode

    // 2.Kelompokkan produk berdasarkan kategori mereka menggunakan Object.groupBy().
    // 3.Tampilkan hasil pengelompokan dalam format objek, misalnya:
    // javascript
    // Salin kode
    // {
    //   Fruit: [
    //     { id: 1, name: 'Apple', category: 'Fruit' },
    //     { id: 3, name: 'Banana', category: 'Fruit' }
    //   ],
    //   Vegetable: [
    //     { id: 2, name: 'Carrot', category: 'Vegetable' },
    //     { id: 4, name: 'Cucumber', category: 'Vegetable' }
    //   ]
    // }
    // ________________________________________
    const products = [
        { id: 1, name: 'Apple', category: 'Fruit' },
        { id: 2, name: 'Carrot', category: 'Vegetable' },
        { id: 3, name: 'Banana', category: 'Fruit' },
        { id: 4, name: 'Cucumber', category: 'Vegetable' }
    ];

    const kelompokanProduct = Object.groupBy(products, product =>
        product.category === 'Fruit' ? 'Fruit' : 'Vegetable'
    )
    console.info(kelompokanProduct);


    // Soal 4: Menggunakan reduce() untuk Mengelompokkan Nilai Berdasarkan Kategori
    // Deskripsi Masalah: Kamu diminta untuk mengelompokkan data dalam sebuah array menggunakan reduce() berdasarkan kategori yang ada pada setiap elemen. Setiap kategori akan menjadi sebuah properti dalam objek yang dihasilkan.
    // Tugas:
    // 1.Diberikan array objek berikut:
    // javascript
    // Salin kode

    // 2.Gunakan reduce() untuk mengelompokkan objek berdasarkan kategori mereka. Hasil akhirnya harus berbentuk objek, seperti:
    // javascript
    // Salin kode
    // {
    //   A: [
    //     { id: 1, name: 'Item A', category: 'A' },
    //     { id: 3, name: 'Item C', category: 'A' }
    //   ],
    //   B: [
    //     { id: 2, name: 'Item B', category: 'B' }
    //   ],
    //   C: [
    //     { id: 4, name: 'Item D', category: 'C' }
    //   ]
    // }
    // ________________________________________
    const items = [
        { id: 1, name: 'Item A', category: 'A' },
        { id: 2, name: 'Item B', category: 'B' },
        { id: 3, name: 'Item C', category: 'A' },
        { id: 4, name: 'Item D', category: 'C' }
    ];
    const pengelompokanReduce = items.reduce((acc, item) => {
        console.info(acc['A']);
        console.info(item)
        if (!acc[item.category]) {
            acc[item.category] = []
        }
        acc[item.category].push(item);



        return acc;
    }, {})
    console.info(pengelompokanReduce)



    // Soal 5: Menggunakan reduce() untuk Menjumlahkan Nilai dalam Array
    // Deskripsi Masalah: Kamu diminta untuk menghitung jumlah nilai dari array angka menggunakan reduce(). Namun, kali ini angka-angka yang ada dalam array akan dikelompokkan berdasarkan tanda positif dan negatif.
    // Tugas:
    // 1.Diberikan array angka berikut: c.
    // 2.Gunakan reduce() untuk mengelompokkan angka berdasarkan tanda (positif dan negatif), lalu jumlahkan masing-masing grupnya.
    // 3.Hasil akhirnya harus berbentuk objek, seperti:
    // javascript
    // Salin kode
    // {
    //   positive: 26,  // 10 + 7 + 9
    //   negative: -10   // -5 + -2 + -3
    // }
    // ________________________________________

    // Soal 5: Menggunakan reduce() untuk Menjumlahkan Nilai dalam Array
    // Deskripsi Masalah: Kamu diminta untuk menghitung jumlah nilai dari array angka menggunakan reduce(). Namun, kali ini angka-angka yang ada dalam array akan dikelompokkan berdasarkan tanda positif dan negatif.
    // Tugas:
    // 1.Diberikan array angka berikut: [10, -5, 7, -2, 9, -3].
    // 2.Gunakan reduce() untuk mengelompokkan angka berdasarkan tanda (positif dan negatif), lalu jumlahkan masing-masing grupnya.
    // 3.Hasil akhirnya harus berbentuk objek, seperti:
    // javascript
    // Salin kode
    // {
    //   positive: 26,  // 10 + 7 + 9
    //   negative: -10   // -5 + -2 + -3
    // }
    // ________________________________________

    // Soal 5: Menggunakan reduce() untuk Menjumlahkan Nilai dalam Array
    // Deskripsi Masalah: Kamu diminta untuk menghitung jumlah nilai dari array angka menggunakan reduce(). Namun, kali ini angka-angka yang ada dalam array akan dikelompokkan berdasarkan tanda positif dan negatif.
    // Tugas:
    // 1.Diberikan array angka berikut: [10, -5, 7, -2, 9, -3].
    // 2.Gunakan reduce() untuk mengelompokkan angka berdasarkan tanda (positif dan negatif), lalu jumlahkan masing-masing grupnya.
    // 3.Hasil akhirnya harus berbentuk objek, seperti:
    // javascript
    // Salin kode
    // {
    //   positive: 26,  // 10 + 7 + 9
    //   negative: -10   // -5 + -2 + -3
    // }
    // ________________________________________
    const angka = [10, -5, 7, -2, 9, -3];

    const menjumlahkanNilaiDalamArray = angka.reduce((acc, angka) => {
        angka > 0 ? acc.positive += angka : acc.negative += angka;
        return acc;
    }, { positive: 0, negative: 0 })

    console.info(menjumlahkanNilaiDalamArray);


    // Soal 6: Menggunakan new Array() untuk Membuat Array dengan Elemen yang Diulang
    // Deskripsi Masalah: Kamu diminta untuk membuat sebuah array yang berisi elemen yang sama, menggunakan new Array(). Array tersebut harus memiliki panjang 10 dan diisi dengan angka 5.
    // Tugas:
    // 1.Gunakan new Array() untuk membuat array dengan panjang 10.
    // 2.Setiap elemen dalam array harus berisi angka 5.
    // 3.Tampilkan array yang telah dibuat di konsol.
    // ________________________________________

    const arr1_101 = new Array(10).fill(5);
    console.info(arr1_101);



    // Soal 7: Menggunakan Array.from() untuk Mengonversi NodeList menjadi Array
    // Deskripsi Masalah: Kamu diminta untuk mengonversi NodeList yang dihasilkan dari pencarian elemen-elemen HTML menggunakan document.querySelectorAll() menjadi array menggunakan Array.from().
    // Tugas:
    // 1.Diberikan HTML berikut:
    // html
    // Salin kode

    // 2.Gunakan Array.from() untuk mengonversi NodeList hasil dari document.querySelectorAll('p') menjadi array.
    // 3.Tampilkan array yang dihasilkan dan tampilkan panjang array tersebut.
    // ________________________________________

    const divArrFrom = Array.from(document.querySelectorAll('.chellange')).length;
    console.info(divArrFrom);


    // Soal 8: Menggunakan reduce() untuk Menyusun Data dalam Format Tertentu
    // Deskripsi Masalah: Kamu diminta untuk mengubah array objek menjadi format yang lebih terstruktur menggunakan reduce().
    // Tugas:
    // 1.Diberikan array objek berikut:
    // javascript
    // Salin kode

    // 2.Gunakan reduce() untuk mengelompokkan karyawan berdasarkan departemen mereka.
    // 3.Format hasilnya menjadi objek yang memiliki properti sesuai departemen, misalnya:
    // javascript
    // Salin kode
    // {
    //   HR: [
    //     { id: 1, name: 'John', department: 'HR' },
    //     { id: 3, name: 'Mary', department: 'HR' }
    //   ],
    //   IT: [
    //     { id: 2, name: 'Jane', department: 'IT' },
    //     { id: 4, name: 'Paul', department: 'IT' }
    //   ]
    // }


    const employees = [
        { id: 1, name: 'John', department: 'HR' },
        { id: 2, name: 'Jane', department: 'IT' },
        { id: 3, name: 'Mary', department: 'HR' },
        { id: 4, name: 'Paul', department: 'IT' }
    ];

    const posisiEmploye = employees.reduce((acc, empolye) => {
        if (!acc[empolye.department]) {
            acc[empolye.department] = [];
        }

        console.info(acc[empolye.department]);
        acc[empolye.department].push(empolye)
        return acc;
    }, {})
    console.info(posisiEmploye);


}
// challangesEnam();

const challangesTujuh = () => {

    //     Soal 1: Menggunakan concat()
    // Deskripsi Masalah:
    // Diberikan dua array, array1 dan array2. Tugas kamu adalah menggabungkan kedua array tersebut menjadi satu array baru menggunakan metode concat().
    // Array yang diberikan:
    // javascript
    // Salin kode

    // Tugas:
    // 1.	Gunakan metode concat() untuk menggabungkan array1 dan array2.
    // 2.	Tampilkan hasilnya.
    // Output yang diinginkan:
    // javascript
    // Salin kode
    // [1, 2, 3, 4, 5, 6]
    // ________________________________________

    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    console.info(array1.concat(array2));




    // Soal 2: Menggunakan slice()
    // Deskripsi Masalah:
    // Diberikan sebuah array numbers. Tugas kamu adalah membuat array baru yang berisi elemen-elemen mulai dari indeks ke-2 hingga ke-5 (tidak termasuk elemen pada indeks ke-5), menggunakan metode slice().
    // Array yang diberikan:
    // javascript
    // Salin kode
    const numbers = [10, 20, 30, 40, 50, 60];
    // Tugas:
    // 1.	Gunakan metode slice() untuk mengambil elemen mulai dari indeks ke-2 hingga ke-4 (indeks 5 tidak termasuk).
    // 2.	Tampilkan hasilnya.
    // Output yang diinginkan:
    // javascript
    // Salin kode
    // [30, 40, 50]
    // ________________________________________
    const newArrayNumbers = numbers.slice(2, 5);
    console.info(newArrayNumbers);

    // Soal 3: Menggunakan splice()
    // Deskripsi Masalah:
    // Diberikan sebuah array colors. Tugas kamu adalah menghapus dua elemen mulai dari indeks ke-1 dan kemudian menyisipkan elemen baru di posisi yang sama menggunakan metode splice().
    // Array yang diberikan:
    // javascript
    // Salin kode
    const colors = ['red', 'blue', 'green', 'yellow'];
    // Tugas:
    // 1.	Gunakan metode splice() untuk menghapus dua elemen mulai dari indeks ke-1.
    // 2.	Setelah itu, tambahkan dua elemen baru: 'purple' dan 'orange' ke dalam array yang sama, mulai dari posisi indeks ke-1.
    // 3.	Tampilkan hasilnya.
    // Output yang diinginkan:
    // javascript
    // Salin kode
    // ["red", "purple", "orange", "yellow"]
    // ________________________________________
    colors.splice(1, 2, 'purple', 'orange');
    console.info(colors);

    // Soal 4: Menggunakan join()
    // Deskripsi Masalah:
    // Diberikan sebuah array words. Tugas kamu adalah menggabungkan semua elemen dalam array tersebut menjadi satu string, dengan pemisah berupa tanda koma (,), menggunakan metode join().
    // Array yang diberikan:
    // javascript
    // Salin kode
    const words = ['JavaScript', 'is', 'fun'];
    // Tugas:
    // 1.	Gunakan metode join() untuk menggabungkan semua elemen array dengan pemisah koma.
    // 2.	Tampilkan hasilnya.
    // Output yang diinginkan:
    // javascript
    // Salin kode
    // "JavaScript,is,fun"
    // ________________________________________
    console.info(words.join(','));

    // Soal 5: Menggunakan at()
    // Deskripsi Masalah:
    // Diberikan sebuah array fruits. Tugas kamu adalah menggunakan metode at() untuk mengambil elemen di indeks terakhir dari array.
    // Array yang diberikan:
    // javascript
    // Salin kode
    const fruits = ['apple', 'banana', 'cherry'];
    // Tugas:
    // 1.	Gunakan metode at() untuk mengambil elemen terakhir dari array fruits.
    // 2.	Tampilkan hasilnya.
    // Output yang diinginkan:
    // javascript
    // Salin kode
    // "cherry"
    // ________________________________________
    console.info(fruits.at(fruits.length - 1));


    // Soal 6: Menggunakan forEach()
    // Deskripsi Masalah:
    // Diberikan sebuah array numbers. Tugas kamu adalah mencetak setiap angka dalam array ke konsol menggunakan metode forEach().
    // Array yang diberikan:
    // javascript
    // Salin kode
    const numbersForEach = [1, 2, 3, 4, 5];
    // Tugas:
    // 1.	Gunakan metode forEach() untuk mencetak setiap angka dalam array ke konsol.
    // 2.	Tampilkan hasilnya.
    // Output yang diinginkan:
    // javascript
    // Salin kode
    // 1
    // 2
    // 3
    // 4
    // 5
    // ________________________________________

    numbersForEach.forEach(number => console.info(number));

    // Bonus Soal: Kombinasi Semua Metode
    // Deskripsi Masalah:
    // Diberikan sebuah array animals yang berisi nama-nama hewan. Tugas kamu adalah:
    // 1.	Menggunakan concat() untuk menggabungkan array animals dengan array moreAnimals.
    // 2.	Menggunakan slice() untuk mengambil 3 elemen pertama dari array gabungan tersebut.
    // 3.	Menggunakan splice() untuk menghapus 1 elemen mulai dari indeks ke-2 dan menggantinya dengan dua elemen baru.
    // 4.	Menggunakan join() untuk menggabungkan elemen-elemen array yang telah dimodifikasi menjadi satu string, dengan pemisah berupa spasi.
    // 5.	Gunakan at() untuk mengambil elemen terakhir dari array yang telah dimodifikasi.
    // 6.	Gunakan forEach() untuk mencetak semua elemen array yang telah dimodifikasi ke konsol.
    // Array yang diberikan:
    // javascript
    // Salin kode
    const animals = ['cat', 'dog', 'rabbit'];
    const moreAnimals = ['elephant', 'tiger', 'lion'];
    const animalsConcat = animals.concat(moreAnimals).slice(0, 3);
    animalsConcat.splice(1, 1, 'brid')
    console.info(animalsConcat.join(' '));
    console.info(animalsConcat.at(animalsConcat.length - 1));
    animalsConcat.forEach(animal => console.info(animal));

}

// challangesTujuh();


const challangesDelapan = () => {

    //     Soal 1: Menggunakan find()
    // Deskripsi Masalah:
    // Diberikan array products yang berisi objek-objek produk dengan properti id, name, dan price. Tugas kamu adalah mencari objek produk pertama yang memiliki harga lebih dari 100 menggunakan metode find().
    // Array yang diberikan:
    // javascript
    // Salin kode
    const products = [
        { id: 1, name: 'Product A', price: 50 },
        { id: 2, name: 'Product B', price: 150 },
        { id: 3, name: 'Product C', price: 80 },
        { id: 4, name: 'Product D', price: 200 }
    ];
    // Tugas:
    // 1.	Gunakan metode find() untuk mencari produk pertama yang harganya lebih dari 100.
    // 2.	Tampilkan hasilnya.
    // Output yang diinginkan:
    // javascript
    // Salin kode
    // { id: 2, name: 'Product B', price: 150 }
    // ________________________________________

    const valuePertamaLebihDari100 = products.find(product => product.price > 100);
    console.info(valuePertamaLebihDari100);

    // Soal 2: Menggunakan findIndex()
    // Deskripsi Masalah:
    // Diberikan array students yang berisi objek-objek siswa dengan properti id, name, dan grade. Tugas kamu adalah mencari indeks siswa pertama yang memiliki nilai lebih dari 80 menggunakan metode findIndex().
    // Array yang diberikan:
    // javascript
    // Salin kode
    const students = [
        { id: 1, name: 'Alice', grade: 75 },
        { id: 2, name: 'Bob', grade: 85 },
        { id: 3, name: 'Charlie', grade: 90 },
        { id: 4, name: 'David', grade: 60 }
    ];
    // Tugas:
    // 1.	Gunakan metode findIndex() untuk menemukan indeks siswa pertama yang memiliki nilai lebih dari 80.
    // 2.	Tampilkan indeks tersebut.
    // Output yang diinginkan:
    // javascript
    // Salin kode
    // 1
    // ________________________________________
    const student = students.findIndex(student => student.grade > 80)
    console.info(student);

    // Soal 3: Menggunakan findLast()
    // Deskripsi Masalah:
    // Diberikan array users yang berisi objek-objek pengguna dengan properti id, name, dan isActive. Tugas kamu adalah menemukan pengguna terakhir yang sedang aktif (memiliki isActive: true) menggunakan metode findLast().
    // Array yang diberikan:
    // javascript
    // Salin kode
    const users = [
        { id: 1, name: 'John', isActive: false },
        { id: 2, name: 'Jane', isActive: true },
        { id: 3, name: 'Alice', isActive: false },
        { id: 4, name: 'Bob', isActive: true }
    ];
    // Tugas:
    // 1.	Gunakan metode findLast() untuk menemukan pengguna terakhir yang sedang aktif.
    // 2.	Tampilkan hasilnya.
    // Output yang diinginkan:
    // javascript
    // Salin kode
    // { id: 4, name: 'Bob', isActive: true }
    // ________________________________________

    const userActiveTerakhir = users.findLast(user => user.isActive === true);
    console.info(userActiveTerakhir);

    // Soal 4: Menggunakan findLastIndex()
    // Deskripsi Masalah:
    // Diberikan array transactions yang berisi objek-objek transaksi dengan properti id, amount, dan type. Tugas kamu adalah mencari indeks transaksi terakhir yang bertipe "credit" menggunakan metode findLastIndex().
    // Array yang diberikan:
    // javascript
    // Salin kode
    const transactions = [
        { id: 1, amount: 100, type: 'debit' },
        { id: 2, amount: 50, type: 'credit' },
        { id: 3, amount: 200, type: 'debit' },
        { id: 4, amount: 300, type: 'credit' }
    ];
    // Tugas:
    // 1.	Gunakan metode findLastIndex() untuk mencari indeks transaksi terakhir yang bertipe "credit".
    // 2.	Tampilkan indeks tersebut.
    // Output yang diinginkan:
    // javascript
    // Salin kode
    // 3
    // ________________________________________
    console.info(transactions.findLastIndex(transaction => transaction.type.includes('credit')));

    // Soal 5: Menggunakan indexOf()
    // Deskripsi Masalah:
    // Diberikan array fruits yang berisi nama-nama buah. Tugas kamu adalah menemukan indeks dari buah "orange" menggunakan metode indexOf().
    // Array yang diberikan:
    // javascript
    // Salin kode
    const fruits = ['apple', 'banana', 'orange', 'grape'];
    // Tugas:
    // 1.	Gunakan metode indexOf() untuk mencari indeks dari buah "orange".
    // 2.	Tampilkan indeks tersebut.
    // Output yang diinginkan:
    // javascript
    // Salin kode
    // 2
    // ________________________________________
    console.info(fruits.indexOf('orange'));

    // Soal 6: Kombinasi Metode find(), findIndex(), indexOf()
    // Deskripsi Masalah:
    // Diberikan array inventory yang berisi objek-objek produk dengan properti id, name, dan category. Tugas kamu adalah:
    // 1.	Gunakan find() untuk mencari produk dengan id: 3.
    // 2.	Gunakan findIndex() untuk mencari indeks produk dengan name yang mengandung kata "Shampoo".
    // 3.	Gunakan indexOf() untuk mencari indeks dari kategori "Beauty" di array kategori yang terpisah.
    // Array yang diberikan:
    // javascript
    // Salin kode
    const inventory = [
        { id: 1, name: 'Toothpaste', category: 'Health' },
        { id: 2, name: 'Shampoo', category: 'Beauty' },
        { id: 3, name: 'Conditioner', category: 'Beauty' },
        { id: 4, name: 'Soap', category: 'Health' }
    ];
    // Output yang diinginkan:
    // javascript
    // Salin kode
    // 1. Produk dengan id 3: { id: 3, name: 'Conditioner', category: 'Beauty' }
    // 2. Indeks produk dengan nama yang mengandung kata "Shampoo": 1
    // 3. Indeks kategori "Beauty": 1

    console.info(inventory.find(iven => iven.id === 3))
    console.info(inventory.findIndex(iven => iven.name === 'Shampoo'));
    console.info(inventory.map(iven => iven.category).includes("Beauty"));
    console.info(inventory.map(iven => iven.category).indexOf("Beauty"));
}

// challangesDelapan();

const challangesSembilan = () => {

    // Soal 1: Metode .some()
    // Pertanyaan:
    // Diberikan sebuah array berikut:
    // javascript
    // Salin kode
    let numbers = [5, 8, 13, 21, 34];
    // Gunakan metode .some() untuk memeriksa apakah ada angka dalam array tersebut yang lebih besar dari 20. Tampilkan hasilnya (true jika ada, false jika tidak).
    // Jawaban yang diharapkan:
    // javascript
    // Salin kode
    // let result = numbers.some(num => num > 20);
    // console.log(result);  // true

    console.info(numbers.some(number => number >= 20));
    // ________________________________________
    // Soal 2: Metode .every()
    // Pertanyaan:
    // Diberikan sebuah array berikut:
    // javascript
    // Salin kode
    let ages = [22, 25, 18, 30, 21];
    // Gunakan metode .every() untuk memeriksa apakah semua angka dalam array tersebut lebih besar dari atau sama dengan 18. Tampilkan hasilnya (true jika semua elemen memenuhi syarat, false jika ada yang tidak memenuhi).
    // Jawaban yang diharapkan:
    // javascript
    // Salin kode
    // let result = ages.every(age => age >= 18);
    // console.log(result);  // true
    // ________________________________________
    console.info(ages.every(age => age >= 18))
    // Soal 3: Metode .flat()
    // Pertanyaan:
    // Diberikan array berikut yang memiliki beberapa array di dalamnya:
    // javascript
    // Salin kode
    let nestedArray = [1, [2, 3], [4, 5], 6];
    // Gunakan metode .flat() untuk meratakan array menjadi satu dimensi. Tampilkan hasilnya.
    // Jawaban yang diharapkan:
    // javascript
    // Salin kode
    // let flattened = nestedArray.flat();
    // console.log(flattened);  // [1, 2, 3, 4, 5, 6]
    // ________________________________________
    console.info(nestedArray.flat());
    // Soal 4: Metode .flatMap()
    // Pertanyaan:
    // Diberikan array berikut yang berisi string:
    // javascript
    // Salin kode
    let words = ["apple", "banana", "cherry"];
    // Gunakan metode .flatMap() untuk mengubah setiap kata menjadi array karakter-karakter yang ada dalam kata tersebut, lalu gabungkan hasilnya menjadi satu array datar. Tampilkan hasilnya.
    // Jawaban yang diharapkan:
    // javascript
    // Salin kode
    // console.log(result);  // ['a', 'p', 'p', 'l', 'e', 'b', 'a', 'n', 'a', 'n', 'a', 'c', 'h', 'e', 'r', 'r', 'y']
    // ________________________________________
    console.info(words.flatMap(word => word.split('')));
    console.info(words.join().replaceAll(',', '').split(''))
    // console.info(words.flatMap(word =>  ))
    // Soal 5: Metode .fill()
    // Pertanyaan:
    // Diberikan array berikut yang memiliki 5 elemen:
    // javascript
    // Salin kode
    let arr = [1, 2, 3, 4, 5];
    // Gunakan metode .fill() untuk mengganti seluruh elemen array menjadi angka 0. Tampilkan hasilnya.
    // Jawaban yang diharapkan:
    // javascript
    // Salin kode
    // arr.fill(0);
    // console.log(arr);  // [0, 0, 0, 0, 0]
    // ________________________________________

    console.info(arr.fill(0));
    // Soal 6: Metode .toReversed()
    // Pertanyaan:
    // Diberikan array berikut:
    // javascript
    // Salin kode
    let numbersRev = [10, 20, 30, 40];
    // Gunakan metode .toReversed() untuk membalik urutan elemen-elemen dalam array dan tampilkan hasilnya tanpa mengubah array asli.
    // Jawaban yang diharapkan:
    // javascript
    // Salin kode
    // let reversed = numbers.toReversed();
    // console.log(reversed);  // [40, 30, 20, 10]
    // console.log(numbers);   // [10, 20, 30, 40] (array asli tidak berubah)
    // ________________________________________
    console.info(numbersRev.toReversed());
    // Soal 7: Metode .toSpliced()
    // Pertanyaan:
    // Diberikan array berikut:
    // javascript
    // Salin kode
    let array = [10, 20, 30, 40, 50];
    // Gunakan metode .toSpliced() untuk menghapus elemen dengan indeks 1 dan 2, serta menambahkan angka 99 di posisi indeks 1. Tampilkan hasilnya tanpa mengubah array asli.
    // Jawaban yang diharapkan:
    // javascript
    // Salin kode
    // let spliced = array.toSpliced(1, 2, 99);
    // console.log(spliced);  // [10, 99, 40, 50]
    // console.log(array);    // [10, 20, 30, 40, 50] (array asli tidak berubah)
    // ________________________________________
    console.info(array.toSpliced(1, 2, 90))
    // Soal 8: Metode .toSorted()
    // Pertanyaan:
    // Diberikan array berikut yang berisi angka-angka acak:
    // javascript
    // Salin kode
    let numbersSort = [30, 10, 50, 40, 20];
    // Gunakan metode .toSorted() untuk mengurutkan angka-angka dalam array secara menaik dan tampilkan hasilnya tanpa mengubah array asli.
    // Jawaban yang diharapkan:
    // javascript
    // Salin kode
    // let sorted = numbers.toSorted();
    // console.log(sorted);  // [10, 20, 30, 40, 50]
    // console.log(numbers); // [30, 10, 50, 40, 20] (array asli tidak berubah)
    console.info(numbersSort.toSorted((a, b) => a - b))

}
// challangesSembilan()

const challangesSepuluh = () => {
    // Soal 1: Chaining dengan String Methods
    // Instruksi: Diberikan sebuah string yang berisi kalimat. Gunakan metode chaining untuk:
    // 1.	Mengubah string menjadi huruf kapital.
    // 2.	Menghapus spasi di awal dan akhir string.
    // 3.	Mengganti semua huruf "A" dengan "X".
    // javascript
    // Salin kode
    let kalimatSatu = "   belajar JavaScript sangat menyenankan    ";
    // Pertanyaan:
    // 1.	Gunakan metode chaining untuk melakukan perubahan yang disebutkan di atas.
    // 2.	Tampilkan hasil akhirnya.
    console.info(kalimatSatu.toUpperCase().trim().replaceAll('A', 'X'));
    // ________________________________________
    // Soal 2: Chaining dengan Array Methods
    // Instruksi: Diberikan sebuah array angka. Gunakan metode chaining untuk:
    // 1.	Menambahkan angka 5 ke akhir array.
    // 2.	Mengurutkan array secara menurun.
    // 3.	Menyaring angka yang lebih besar dari 10.
    // javascript
    // Salin kode
    let angkaDua = [15, 3, 8, 22, 5, 10];
    // Pertanyaan:
    // 1.	Gunakan metode chaining untuk menyelesaikan instruksi di atas.
    // 2.	Tampilkan hasil akhirnya.
    angkaDua.push(5)
    angkaDua.sort((a, b) => b - a)
    console.info(angkaDua.filter(angka => angka >= 10))
    // ________________________________________
    // Soal 3: Chaining dengan Metode Array map(), filter(), dan reduce()
    // Instruksi: Diberikan sebuah array angka. Gunakan metode chaining untuk:
    // 1.	Mengalikan setiap angka dalam array dengan 2.
    // 2.	Menyaring angka yang lebih besar dari 10.
    // 3.	Menjumlahkan semua angka yang tersisa.
    // javascript
    // Salin kode
    let angkaTiga = [5, 8, 12, 7, 3];
    // Pertanyaan:
    // 1.	Gunakan metode chaining untuk menyelesaikan instruksi di atas.
    // 2.	Tampilkan hasil akhirnya.
    
    console.info(angkaTiga.map(angka => angka * 2).filter(angka => angka >= 10).reduce((acc,angka) => acc = (acc + angka)));

    // ________________________________________
    // Soal 4: Chaining dengan String Methods dan split()
    // Instruksi: Diberikan sebuah string yang berisi kalimat. Gunakan metode chaining untuk:
    // 1.	Mengubah string menjadi huruf kecil.
    // 2.	Memisahkan string menjadi array berdasarkan spasi.
    // 3.	Menghapus elemen array yang kosong (jika ada).
    // javascript
    // Salin kode
    let kalimat = "    JavaScript adalah bahasa pemrograman    ";
    // Pertanyaan:
    // 1.	Gunakan metode chaining untuk menyelesaikan instruksi di atas.
    // 2.	Tampilkan hasil akhirnya (sebuah array).
    
    const hasil = kalimat.toLowerCase().split(' ');
    hasil.splice(0,4)
    hasil.splice(-4)
    console.info(hasil)
    // ________________________________________
    // Soal 5: Chaining dengan filter() dan map()
    // Instruksi: Diberikan sebuah array objek dengan properti name dan age. Gunakan metode chaining untuk:
    // 1.	Menyaring objek yang memiliki usia lebih dari 18.
    // 2.	Membuat array baru yang berisi hanya nama-nama orang yang lolos penyaringan.
    // javascript
    // Salin kode
    let orang = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 17 },
      { name: "Charlie", age: 19 },
      { name: "David", age: 16 }
    ];
    // Pertanyaan:
    // 1.	Gunakan metode chaining untuk menyelesaikan instruksi di atas.
    // 2.	Tampilkan hasil akhirnya (array nama).
    const peploe = orang.filter(orang => orang.age >= 18);
    console.info(peploe);
}
// challangesSepuluh();
