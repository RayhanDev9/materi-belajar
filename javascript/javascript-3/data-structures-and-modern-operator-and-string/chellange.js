'use strict';


const chellangeSatu = function () {
    // Tentu! Berikut adalah terjemahan dan penyederhanaan dari soal yang Anda berikan:

    // Tugas:
    // Kita sedang membangun aplikasi taruhan sepak bola (unt

    // Tentu! Berikut adalah terjemahan dan penyederhanaan soal tersebut:

    // Tugas:
    // Kita sedang membangun aplikasi taruhan sepak bola (soccer untuk teman-teman di Amerika) dan akan bekerja dengan data yang diterima dari layanan web tentang suatu pertandingan (game variable). Berikut adalah tugas-tugas yang harus diselesaikan:

    // 1. Membuat array pemain untuk setiap tim:
    // Buatlah dua array pemain: satu untuk tim pertama (players1) dan satu lagi untuk tim kedua (players2).
    // 2. Membuat variabel untuk pemain Bayern Munich (Tim 1):
    // Pemain pertama di dalam array adalah penjaga gawang (goalkeeper) dan pemain lainnya adalah pemain lapangan.
    // Untuk Bayern Munich (Tim 1), buat variabel gk yang berisi nama penjaga gawang.
    // Buat array fieldPlayers yang berisi semua pemain lapangan (selain penjaga gawang), total 10 pemain.
    // 3. Membuat array 'allPlayers':
    // Buat array allPlayers yang berisi gabungan semua pemain dari kedua tim (22 pemain).
    // 4. Membuat array pemain setelah substitusi:
    // Selama pertandingan, Bayern Munich (Tim 1) melakukan 3 pergantian pemain. Buat array baru players1Final yang berisi pemain tim 1 yang asli ditambah dengan 3 pemain pengganti: 'Thiago', 'Coutinho', dan 'Perisic'.
    // 5. Membuat variabel untuk odds (peluang):
    // Berdasarkan objek game.odds, buat variabel untuk setiap peluang pertandingan: team1, draw, dan team2.
    // 6. Membuat fungsi printGoals:
    // Tulis fungsi printGoals yang menerima beberapa nama pemain (bukan array) dan mencetak setiap nama pemain beserta jumlah gol yang mereka cetak (jumlah nama pemain yang diterima sebagai input).
    // 7. Menentukan tim yang lebih mungkin menang:
    // Tim dengan peluang (odd) yang lebih rendah lebih mungkin menang. Tampilkan tim yang lebih mungkin menang ke konsol, tanpa menggunakan if/else statement atau operator ternary.
    // Data Uji untuk Poin 6:
    // Pertama, gunakan pemain 'Davies', 'Muller', 'Lewandowski', dan 'Kimmich'.
    // Kemudian, panggil fungsi tersebut lagi dengan pemain dari game.scored.
    // Tugas ini membutuhkan pemahaman tentang pengolahan array, objek, dan pembuatan fungsi dalam JavaScript.


    // Apakah ada bagian tertentu yang ingin Anda bahas lebih lanjut atau butuh bantuan dengan kode?

    const game = {
        team1: 'Bayern Munich',
        team2: 'Borrussia Dortmund',
        players: [
            [
                'Neuer',
                'Pavard',
                'Martinez',
                'Alaba',
                'Davies',
                'Kimmich',
                'Goretzka',
                'Coman',
                'Muller',
                'Gnarby',
                'Lewandowski',
            ],
            [
                'Burki',
                'Schulz',
                'Hummels',
                'Akanji',
                'Hakimi',
                'Weigl',
                'Witsel',
                'Hazard',
                'Brandt',
                'Sancho',
                'Gotze',
            ],
        ],
        score: '4:0',
        scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
            'Hummels'],
        date: 'Nov 9th, 2037',
        odds: {
            team1: 11.33,
            x: 3.25,
            team2: 6.5,
        },
    };






    // 1)
    const [players1, players2] = game.players;
    console.info(players1, players2);
    // 2)
    const [gk, ...fieldPlayers] = players1;
    console.info(gk, fieldPlayers);
    // 3)
    const [...allPlayers] = [...players1, ...players2];
    console.info(allPlayers);
    // 4)
    const players1Final = [...players1, 'Thiago', 'Countinho', 'Perisic'];
    console.info(players1Final);
    // 5)
    const { team1, x: draw, team2 } = game.odds;
    console.info(team1, draw, team2);
    // 6)
    function printGoals(...pemain) {
        console.info(`${pemain.length} gols were score`);
        console.info(pemain);
    }

    printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
    printGoals(...game.scored)

    // 7)
    team1 > team2 && console.info(`team 1 to mory likey to winer`)
    team2 > team1 && console.info(`team 2 to mory likey to winer`)

}

// chellangeSatu();

const chellangeDua = function () {
    // Tantangan Koding #2
    // Mari kita lanjutkan dengan aplikasi taruhan sepak bola kita! Gunakan variabel game yang sudah ada sebelumnya.
    // Tugas-tugas Anda:
    // 1.	Loop melalui array game.scored dan tampilkan nama setiap pemain ke konsol, bersama dengan nomor gol yang mereka cetak (Contoh: "Gol 1: Lewandowski").
    // 2.	Gunakan loop untuk menghitung rata-rata odds (peluang) dan tampilkan hasilnya di konsol. (Kami sudah mempelajari cara menghitung rata-rata, Anda bisa memeriksa kembali jika lupa).
    // 3.	Tampilkan 3 odds di konsol, namun dengan format yang rapi, persis seperti ini:
    // yaml
    // Salin kode
    // Odd of victory Bayern Munich: 1.33
    // Odd of draw: 3.25
    // Odd of victory Borussia Dortmund: 6.5
    // Dapatkan nama tim langsung dari objek game, jangan menuliskannya secara manual (kecuali untuk "draw" yang bisa di-hardcode). Petunjuk: Perhatikan bagaimana odds dan objek game memiliki properti dengan nama yang sama.
    // 4.	Bonus: Buatlah sebuah objek bernama scorers yang berisi nama-nama pemain yang mencetak gol sebagai properti, dan jumlah gol sebagai nilai. Dalam permainan ini, objek scorers akan terlihat seperti ini:
    // javascript
    // Salin kode
    // { Gnarby: 1, Hummels: 1, Lewandowski: 2 }

    const game = {
        team1: 'Bayern Munich',
        team2: 'Borrussia Dortmund',
        players: [
            [
                'Neuer',
                'Pavard',
                'Martinez',
                'Alaba',
                'Davies',
                'Kimmich',
                'Goretzka',
                'Coman',
                'Muller',
                'Gnarby',
                'Lewandowski',
            ],
            [
                'Burki',
                'Schulz',
                'Hummels',
                'Akanji',
                'Hakimi',
                'Weigl',
                'Witsel',
                'Hazard',
                'Brandt',
                'Sancho',
                'Gotze',
            ],
        ],
        score: '4:0',
        scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
            'Hummels'],
        date: 'Nov 9th, 2037',
        odds: {
            team1: 11.33,
            x: 3.25,
            team2: 6.5,
        },
    };

    // 1.	Loop melalui array game.scored dan tampilkan nama setiap pemain ke konsol, bersama dengan nomor gol yang mereka cetak (Contoh: "Gol 1: Lewandowski").
    for (const [i, el] of game.scored.entries()) {
        console.info(`Gol ${i + 1} : ${el}`)
    }
    // 2.	Gunakan loop untuk menghitung rata-rata odds (peluang) dan tampilkan hasilnya di konsol. (Kami sudah mempelajari cara menghitung rata-rata, Anda bisa memeriksa kembali jika lupa).
    let cnt = 0;
    const peluang = Object.values(game.odds)
    console.info(peluang)
    for (const nilai of peluang) {
        cnt += Number(nilai);
    }
    console.info(cnt / peluang.length);

    // 3.	Tampilkan 3 odds di konsol, namun dengan format yang rapi, persis seperti ini:
    // yaml
    // Salin kode
    // Odd of victory Bayern Munich: 1.33
    // Odd of draw: 3.25
    // Odd of victory Borussia Dortmund: 6.5
    // Dapatkan nama tim langsung dari objek game, jangan menuliskannya secara manual (kecuali untuk "draw" yang bisa di-hardcode). Petunjuk: Perhatikan bagaimana odds dan objek game memiliki properti dengan nama yang sama.

    for (const [team, odd] of Object.entries(game.odds)) {
        const teamString = team !== 'x' ? `victory ${game[team]}` : `Draw`;
        console.info(`Odd of victory ${teamString} : ${odd}`)
    }

    // 4.	Bonus: Buatlah sebuah objek bernama scorers yang berisi nama-nama pemain yang mencetak gol sebagai properti, dan jumlah gol sebagai nilai. Dalam permainan ini, objek scorers akan terlihat seperti ini:
    // javascript
    // Salin kode
    // { Gnarby: 1, Hummels: 1, Lewandowski: 2 }
    let scorers = {};
    for (let value of Object.values(game.scored)) {
        if (value in scorers) {
            scorers[value] += 1;
            continue;
        }
        scorers[value] = 1; // Menambahkan properti dan nilai ke objek
    }
    console.info(scorers);

}

// chellangeDua();

const chellangeTiga = function () {
    //     Kamu memiliki sebuah map yang disebut 'gameEvents'(lihat di bawah) yang mencatat semua kejadian selama pertandingan sepak bola.Kunci pada map ini adalah menit keberapa kejadian tersebut terjadi, dan nilainya adalah jenis kejadian tersebut(misalnya, gol, kartu kuning, dll).
    // Tugas kamu adalah:
    // 1.Buat array 'events' yang berisi semua jenis kejadian yang terjadi dalam pertandingan(tanpa duplikasi).
    // 2.Setelah pertandingan selesai, ditemukan bahwa kartu kuning di menit 64 adalah keputusan yang tidak adil.Hapus kejadian ini dari log kejadian pertandingan.
    // 3.Hitung dan tampilkan pesan berikut di konsol:
    //"Rata-rata, sebuah kejadian terjadi setiap 9 menit"(Ingat bahwa pertandingan sepak bola berlangsung 90 menit).
    // 4.Lakukan iterasi(perulangan) melalui 'gameEvents' dan tampilkan setiap kejadian di konsol, dengan menandai apakah kejadian itu terjadi di babak pertama atau babak kedua(setelah menit ke - 45).Tampilkan hasilnya seperti ini:
    //o[BABAK PERTAMA]17: ⚽ GOAL
    //[BABAK KEDUA]64: 🟨 KARTU KUNING


    const gameEvents = new Map([
        [17, '⚽ GOAL'],
        [36, '� Substitution'],
        [47, '⚽ GOAL'],
        [61, '� Substitution'],
        [64, '� Yellow card'],
        [69, '� Red card'],
        [70, '� Substitution'],
        [72, '� Substitution'],
        [76, '⚽ GOAL'],
        [80, '⚽ GOAL'],
        [92, '� Yellow card'],
    ]);



    // 1.Buat array 'events' yang berisi semua jenis kejadian yang terjadi dalam pertandingan(tanpa duplikasi).
    const events = [...new Set(gameEvents.values())];
    console.info(events);
    // 2.Setelah pertandingan selesai, ditemukan bahwa kartu kuning di menit 64 adalah keputusan yang tidak adil.Hapus kejadian ini dari log kejadian pertandingan.
    gameEvents.delete(64);
    console.info(gameEvents);
    // 3.Hitung dan tampilkan pesan berikut di konsol:
    //"Rata-rata, sebuah kejadian terjadi setiap 9 menit"(Ingat bahwa pertandingan sepak bola berlangsung 90 menit).
    console.info(`Rata-rata, sebuah kejadian terjadi setiap ${90 / gameEvents.size} menit"(Ingat bahwa pertandingan sepak bola berlangsung 90 menit).`);
    // 4.Lakukan iterasi(perulangan) melalui 'gameEvents' dan tampilkan setiap kejadian di konsol, dengan menandai apakah kejadian itu terjadi di babak pertama atau babak kedua(setelah menit ke - 45).Tampilkan hasilnya seperti ini:
    //o[BABAK PERTAMA]17: ⚽ GOAL
    //[BABAK KEDUA]64: 🟨 KARTU KUNING

    for (const [key, value] of gameEvents) {
        key < 45 ? console.info(`[Babak Pertama] ${key} : ${value}`) : console.info(`[Babak Kedua] ${key} : ${value}`);
    }

}

// chellangeTiga();

const chellangeEmpat = function () {
    //     Tantangan Kode #4
    // Buatlah sebuah program yang menerima daftar nama variabel yang ditulis dalam format underscore_case dan mengubahnya menjadi format camelCase.

    // Input akan datang dari sebuah textarea yang dimasukkan ke dalam DOM(lihat kode di bawah untuk memasukkan elemen - elemen ini), dan konversi akan dilakukan saat tombol ditekan.

    // Data uji(dimasukkan ke dalam textarea, termasuk spasi):
    // Salin kode
    // underscore_case
    // first_name
    // Some_Variable
    // calculate_AGE
    // delayed_departure
    // Output yang diharapkan(5 hasil console.log yang terpisah):

    // Salin kode
    // underscoreCase ✅
    // firstName ✅✅
    // someVariable ✅✅✅
    // calculateAge ✅✅✅✅
    // delayedDeparture ✅✅✅✅
    //     Petunjuk:
    // Ingat karakter apa yang digunakan untuk memisahkan setiap baris dalam textarea.
    // Solusi ini hanya perlu berfungsi untuk nama variabel yang terdiri dari 2 kata, seperti a_b.
    // Mulailah tanpa khawatir tentang simbol ✅. Fokuskan dulu untuk mengubah nama variabel.
    // Tantangan ini agak sulit, jadi jika kamu merasa kesulitan, coba lihat solusinya, lalu berhenti dan coba lagi! Setelah selesai, uji dengan data uji lainnya!
    // Semoga sukses! 😊
    // Terjemahan dan Penyederhanaan: Buat program yang mengubah nama variabel dari format underscore_case menjadi camelCase.Program akan menerima data dari textarea dan melakukan konversi saat tombol ditekan.Setelah itu, tampilkan hasil konversi beserta simbol ✅ untuk menunjukkan jumlah perubahan.

    const text = document.querySelector('textarea');
    const button = document.querySelector('button');
    const h2 = document.querySelector('h2');
    const div = document.querySelector('.container');
    // Buatlah sebuah program yang menerima daftar nama variabel yang ditulis dalam format underscore_case dan mengubahnya menjadi format camelCase.
    let cnt = 0;

    // button.addEventListener('click', () => {
    //     cnt++;
    //     const kalimat = text.value;
    //     let hasil = '';
    //     let nilai = 0;
    //     for (let i = 0; i < kalimat.length; i++) {
    //         if (kalimat[i] === '_') {
    //             hasil += kalimat[i].replace('_', '');
    //             nilai += hasil.length;
    //         } else if (nilai !== 0 && nilai === hasil.length) {
    //             hasil += kalimat[i].toUpperCase();
    //             nilai = 0
    //         }
    //         else {
    //             hasil += kalimat[i]
    //         }
    //     }
    //     h2.textContent = ` ${hasil.padEnd(20)}` + `${'✅'.repeat(cnt)}`;
    //     text.value = '';
    //     const h2Create = document.createElement('h2');
    //     h2Create.textContent = h2.textContent;
    //     div.appendChild(h2Create)
    //     console.info(hasil + `${'✅'.repeat(cnt)}`)

    // });
    // Buatlah sebuah program yang menerima daftar nama variabel yang ditulis dalam format underscore_case dan mengubahnya menjadi format camelCase.

    // Input akan datang dari sebuah textarea yang dimasukkan ke dalam DOM(lihat kode di bawah untuk memasukkan elemen - elemen ini), dan konversi akan dilakukan saat tombol ditekan.
    button.addEventListener('click', () => {
        const texts = text.value;
        const rows = texts.split('\n');
        console.info(frist, second);

        for (const [i, e] of rows.entries()) {
            const [frist, second] = e.toLowerCase().trim().split('_');
            const output = `${frist}${second[0].toUpperCase()}${second.slice(1)}`
            console.info(`${output.padEnd(20)}${'✅'.repeat([i + 1])}`);
        }
    })
}

// chellangeEmpat();

const challangeLima = function () {
    const flights = '_Delayed_Departure;fao73549;txl123346;11:25+_Arrival;bru836456;fao6354748;11:45+_Delayed_Departure;fao73549;txl123346;11:25+_Arrival;bru836456;fao6354748;11:45';

    const flight = flights.split('+');
    console.info(flight)

    for (const item of flight) {
        const [type,from,to,time] = item.split(';');
        const output = `${type.startsWith('_Delayed')? '🥊' : ''.padStart(12)}${type.replaceAll('_',' ')} ${from.slice(0,3).toUpperCase()} ${to.slice(0,3).toUpperCase()} (${time.replace(':','h')})`;
        console.info(output);
    }
}
// challangeLima()