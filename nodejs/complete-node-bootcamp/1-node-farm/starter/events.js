const EventEmitter = require('events');
const http = require('http'); // 👈 Tambahkan baris ini!

class Sales extends EventEmitter {
   constructor() {
      super();
   }
}

const myEmmiter = new Sales();

myEmmiter.on('newSale', () => {
   console.info('There was a sale!');
});

myEmmiter.on('newSale', () => {
   console.log('Coustumer name : Muhamad Rayhan');
});

myEmmiter.on('newSale', (stock) => {
   console.log('Tere are now ' + stock + ' items left in stoc.');
});

myEmmiter.emit('newSale', 9);

//////////////////
const server = http.createServer();
server.on('request', (req, res) => {
   console.log('Reques Recived');
   res.end('Request received');
});

server.on('request', (req, res) => {
   console.log('Another request');
});

server.on('close', () => {
   console.log('Server Closed');
});

server.listen(8000, '127.0.0.1', () => {
   console.log('Waiting for request');
});
