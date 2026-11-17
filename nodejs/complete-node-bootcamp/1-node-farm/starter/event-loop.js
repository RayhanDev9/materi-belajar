const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

// ⚙️ Mengatur jumlah worker thread di Thread Pool libuv (default: 4)
process.env.UV_THREADPOOL_SIZE = 4;

// 1. Dijalankan di luar siklus I/O (urutan Timer 1 dan Immediate 1 bisa bervariasi)
setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

// 2. Operasi I/O (File System)
fs.readFile('./txt/test.txt', () => {
  console.log('I/O finished');
  console.log('--------------------------------');

  // Di DALAM callback I/O:
  // - process.nextTick selalu dijalankan paling pertama (Microtask Queue)
  // - setImmediate selalu menang dibanding setTimeout 0ms (Check phase berjalan sebelum Timers di iterasi berikutnya)
  setTimeout(() => console.log('Timer 2 finished (0ms)'), 0);
  setTimeout(() => console.log('Timer 3 finished (3000ms)'), 3000);
  setImmediate(() => console.log('Immediate 2 finished'));

  process.nextTick(() => console.log('Process.nextTick executed!'));

  // 3. Eksperimen Thread Pool (Asynchronous - berjalan di 4 thread terpisah)
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'ms: Password 1 encrypted');
  });

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'ms: Password 2 encrypted');
  });

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'ms: Password 3 encrypted');
  });

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'ms: Password 4 encrypted');
  });
});

// 4. Top-level code selalu dieksekusi pertama kali secara Synchronous
console.log('Hello from the top-level code');
