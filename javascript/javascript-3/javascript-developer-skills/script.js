'use strict';

const x = '10';

if (x === 10) {
  console.info(true);
}

const panah = tahun => 2025 - 2005;

// Membuat array suhu
//Loop ke array suhu
//Taro loop ke dalam functiion
//dan cetak hasilnya

let suhu = [27, 21, 23];

const forecastedTemperature = suhu => {
  let str = '';
  for (let i = 0; i < suhu.length; i++) {
    str +=`${suhu[i]}C in days ${i+1}...` 
  }
  console.info('...'+str);
};

forecastedTemperature(suhu);
