'use strict';

function game() {
  //Membuat Conter untuk Score
  let cnt = 10;

  //   membuat input tebak angka dan angka random
  let inputTebakAngka = 0;
  let boolean = false;
  let angkaRandom = Math.floor(Math.random() * 20) + 1;
  let heigtScore = 0;
  console.info(angkaRandom);

  //   Refectoring
  const hasil = hasil => {
    document.querySelector('.hasil').textContent = hasil;
  };

  const tandaTanya = tandaTanya => {
    document.querySelector('.tanda-tanya').textContent = tandaTanya;
  };
  //  Akhir Refectoring

  function pemberitahuan() {
    //   Membuat addEventListener tombol check ditekan,ketika if true maka alert akan ditampilkan
    document.querySelector('.check').addEventListener('click', () => {
      if (!boolean) {
        alert('Tolong Masukan Angka Terlebih Dahulu');
      }
    });

    // Merubah nilai variable boolean menjadi true
    document.querySelector('.tebak-angka').addEventListener('input', event => {
      boolean = true;
    });
  }
  pemberitahuan();

  function Again() {
    // Membuat addEventListener,ketika menekan tombol again akan terjadi, game akan di mulai lagi (Meload ulang)
    document.querySelector('.again').addEventListener('click', () => {
      cnt = 10;
      console.info(cnt);
      document.querySelector('.score span').textContent = cnt;
      hasil('Start guessing . . . .');
      document.querySelector('.tebak-angka').disabled = false;
      angkaRandom = Math.floor(Math.random() * 20) + 1;
      document.querySelector('.check').disabled = false;
      document.querySelector('.tanda-tanya').style.fontSize = '4em';
      document.querySelector('main').style.backgroundColor = 'white';
      tandaTanya('?')
      document.querySelector('.tebak-angka').value = '';
      console.info(angkaRandom);
    });
  }

  Again();

  function tombolCheck() {
    // Ketika tombol chechk ditekan ini yang terjadi
    document.querySelector('.check').addEventListener('click', e => {
      e.preventDefault();

      //   Mengkep input dan merubah input ke data number dan di taro ke var inputTebakAngka
      inputTebakAngka = Number(document.querySelector('.tebak-angka').value);

      // untuk membuat ketika tombol Check di tekan maka akan berkurang 1
      if (cnt > 0 && boolean) {
        cnt -= 1;
        //Merubah Text content score
        document.querySelector('.score span').textContent = cnt;
      }

      //Membuat kondisi ketika menang dan kalah
      if (inputTebakAngka === angkaRandom || cnt === 0) {
        // kodisi ketika heightScore lebih kecil dari angkaRandom maka vlue heigtscore akan di rubah menjadi angkaRandom
        if (heigtScore < angkaRandom) {
          heigtScore = angkaRandom;
          console.info('ok');
          console.info(heigtScore);
        }
        // kondisi ketika menang
        if (inputTebakAngka === angkaRandom) {
           (
            // (document.querySelector('.hasil').textContent = '🎉Correct Number'),
            (hasil('🎉Correct Number')),
            (
              (document.querySelector('.high-score span').textContent =
                heigtScore)
            ),
            (tandaTanya( angkaRandom)),
            ((document.querySelector('.tanda-tanya').style.fontSize = '4.1em'),
            (document.querySelector('main').style.backgroundColor = 'green')),
            (document.querySelector('.check').disabled = true)
          );
          //Kondisi ketika kalah
        } else {
          return (
            hasil('Game Over'),
            (document.querySelector('.high-score span').textContent =
              heigtScore),
            (tandaTanya( angkaRandom)),
            (document.querySelector('.tebak-angka').disabled = true),
            (document.querySelector('.check').disabled = true)
          );
        }
        //Kondisi ketika pemain memasukan input akan di beritahu apakah terlalu tinggi atau rendah
      } else if (
        inputTebakAngka !== angkaRandom &&
        inputTebakAngka > 0 &&
        inputTebakAngka <= 20
      ) {
        if (cnt > 1) {
          hasil(
            (document.querySelector('.hasil').textContent =
              inputTebakAngka > angkaRandom && inputTebakAngka <= 20
                ? 'Too Hight'
                : 'Too Low')
          );
        }
        // Ketika pemain tidak memasukan angka yang sesuai
      } else {
        return hasil('Masukan Angka 1-20');
      }
    });
  }

  tombolCheck();
}

game();
