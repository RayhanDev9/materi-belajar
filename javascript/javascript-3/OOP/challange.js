const challengeOne = () => {

    // Tantangan Koding Pemrograman Berorientasi Objek (OOP) #1
    // Tugas Anda:
    // 1.	Gunakan fungsi konstruktor untuk mengimplementasikan sebuah 'Mobil'. Sebuah mobil memiliki properti 'make' (merek) dan 'speed' (kecepatan). Properti 'speed' adalah kecepatan mobil saat ini dalam km/jam.
    // 2.	Implementasikan metode 'accelerate' yang akan meningkatkan kecepatan mobil sebesar 10 km/jam, dan mencetak kecepatan baru ke konsol.
    // 3.	Implementasikan metode 'brake' yang akan mengurangi kecepatan mobil sebesar 5 km/jam, dan mencetak kecepatan baru ke konsol.
    // 4.	Buat 2 objek 'Mobil' dan coba untuk memanggil metode 'accelerate' dan 'brake' beberapa kali pada masing-masing mobil tersebut.
    // Data uji:
    // •	Data mobil 1: 'BMW' dengan kecepatan 120 km/jam
    // •	Data mobil 2: 'Mercedes' dengan kecepatan 95 km/jam
    // SEMOGA BERUNTUNG 😊
    // Jika Anda membutuhkan bantuan untuk menyelesaikan tantangan ini, saya bisa membantu menjelaskan langkah-langkahnya lebih lanjut!

    const Mobil = function (merek, speed) {
        this.merek = merek;
        this.speed = speed;
    }

    Mobil.prototype.accelerate = function () {
        this.speed += 10;
        return this.speed;
    }
    Mobil.prototype.brake = function () {
        this.speed -= 5;
        return this.speed;
    }

    const bmw = new Mobil('BMW', 120);
    console.info(bmw.accelerate());
    console.info(bmw.brake());

    const mercedes = new Mobil('Mercades', 95)
    console.info(mercedes.accelerate());
    console.info(mercedes.accelerate());
    console.info(mercedes.accelerate());
    console.info(mercedes.brake());

}

// challengeOne();

const challengeTwo = () => {
    //     Tantangan Pemrograman #2
    // Tugas Anda:
    // 1.	Buat ulang Tantangan #1, namun kali ini menggunakan kelas ES6 (sebut kelas tersebut dengan nama 'CarCl').
    // 2.	Tambahkan getter yang bernama 'speedUS' yang mengembalikan kecepatan saat ini dalam mil per jam (mi/h), dengan cara membagi kecepatan dalam km/h dengan 1.6.
    // 3.	Tambahkan setter yang bernama 'speedUS' yang mengatur kecepatan saat ini dalam mil per jam (mi/h), namun mengonversinya terlebih dahulu ke km/h sebelum menyimpan nilai tersebut, dengan cara mengalikan input dengan 1.6.
    // 4.	Buat mobil baru dan coba metode 'accelerate' dan 'brake', serta dengan getter dan setter.
    // Data uji:
    // •	Data mobil 1: 'Ford' yang melaju dengan kecepatan 120 km/jam.
    // SELAMAT MENCOBA 🎉

    class Mobil {
        constructor(merek, speed) {
            this.merek = merek;
            this.speed = speed;
        }
        accelerate = function () {
            this.speed += 10;
            return this.speed;
        }
        brake = function () {
            this.speed -= 5;
            return this.speed;
        }
        set speedUS(speed) {
            this._speedUS = `${this.speed * speed} mi/h`
        }
        get speedUS() {
            return `${this.speed / 1.6} mi/h`
        }
    }


    const bmw = new Mobil('BMW', 120);
    console.info(bmw.accelerate());
    console.info(bmw.brake());
    bmw.speedUS = 1.6;
    console.info(bmw._speedUS)
    console.info(bmw.speedUS)

    console.info('');

    const mercedes = new Mobil('Mercades', 95)
    console.info(mercedes.accelerate());
    console.info(mercedes.brake());
    mercedes.speedUS = 1.6;
    console.info(mercedes._speedUS);
    console.info(mercedes.speedUS);

    console.info('');

    const frod = new Mobil('ford', 120);
    console.info(frod.accelerate())
    console.info(frod.brake())
    frod.speedUS = 1.6;
    console.info(frod._speedUS);
    console.info(frod.speedUS);


}

// challengeTwo();

const challengeTiga = () => {
    //     Tantangan Pemrograman #3
    // Tugas kamu adalah:
    // 1.	Gunakan constructor function untuk mengimplementasikan mobil listrik (disebut 'EV') sebagai anak dari kelas 'Car'. Selain memiliki merek dan kecepatan saat ini, 'EV' juga harus memiliki persentase pengisian baterai saat ini (properti 'charge').
    // 2.	Implementasikan metode 'chargeBattery' yang menerima argumen 'chargeTo' dan mengatur pengisian baterai menjadi 'chargeTo'.
    // 3.	Implementasikan metode 'accelerate' yang akan meningkatkan kecepatan mobil sebanyak 20 km/jam, dan mengurangi pengisian baterai sebanyak 1%. Kemudian, log pesan seperti ini: 'Tesla sedang melaju dengan kecepatan 140 km/jam, dengan pengisian baterai 22%'.
    // 4.	Buat objek mobil listrik dan eksperimen dengan memanggil metode 'accelerate', 'brake', dan 'chargeBattery' (pengisian ke 90%). Perhatikan apa yang terjadi ketika kamu memanggil metode 'accelerate'! Petunjuk: Pelajari kembali definisi polymorphism.
    // Data uji: § Mobil 1: 'Tesla' sedang melaju dengan kecepatan 120 km/jam, dengan pengisian baterai 23%.

    const Car = function (make, speed) {
        this.make = make;
        this.speed = speed;
    };

    Car.prototype.accelerate = function () {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    Car.prototype.brake = function () {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    const EV = function (make, speed, charge) {
        Car.call(this, make, speed);
        this.charge = charge;
    };

    // Link the prototypes
    EV.prototype = Object.create(Car.prototype);

    EV.prototype.chargeBattery = function (chargeTo) {
        this.charge = chargeTo;
    };

    EV.prototype.accelerate = function () {
        this.speed += 20;
        this.charge--;
        console.log(
            `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
        );
    };

    const tesla = new EV('Tesla', 120, 23);
    tesla.chargeBattery(90);
    console.log(tesla);
    tesla.brake();
    tesla.accelerate();
    tesla.accelerate();
    tesla.brake();

}
// challengeTiga();

const challengeFour = () => {
    // Berikut adalah terjemahan soal Coding Challenge #4:
    // Tugas kamu:
    // 1.	Buat ulang Tantangan #3, tetapi kali ini gunakan kelas ES6: buatlah kelas anak 'EVCl' yang merupakan turunan dari kelas 'CarCl'.
    // 2.	Jadikan properti 'charge' menjadi private.
    // 3.	Implementasikan kemampuan untuk chaining metode 'accelerate' dan 'chargeBattery' dalam kelas ini, serta update metode 'brake' dalam kelas 'CarCl'. Kemudian, coba eksperimen dengan chaining!
    // Data uji:
    // •	Data mobil 1: 'Rivian' yang sedang melaju dengan kecepatan 120 km/jam, dengan charge sebesar 23%.
    // SELAMAT BERJUANG 🎉

    class CarCl {
        constructor(make, speed) {
            this.make = make;
            this.speed = speed;
        };
    }
    CarCl.prototype.accelerate = function () {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    CarCl.prototype.brake = function () {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    };

    class EVCl extends CarCl {
        #charge;
        constructor(make, speed, charge) {
            super(make, speed);
            this.#charge = charge;
        };

        // Link the prototypes

        chargeBattery = function (chargeTo) {
            this.#charge = chargeTo;
            return this;
        };

        accelerate = function () {
            this.speed += 20;
            this.charge--;
            console.log(
                `${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`
            );
            return this;
        };
    }


    const tesla = new EVCl('Tesla', 120, 23);
    tesla.chargeBattery(23).accelerate().accelerate().brake().brake();
    console.info(tesla);
}
challengeFour();