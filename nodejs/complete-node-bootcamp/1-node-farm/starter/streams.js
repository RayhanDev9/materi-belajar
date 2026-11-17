const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
   // Solution 1
   //  fs.readFile('./txt/test.txt', (err, data) => {
   //     if (err) console.info(err);
   //     res.end(data);
   //  });
   //  Solution 2 : Streams
   //  const readable = fs.createReadStream('./txt/tst.txt');
   //  readable.on('data', (chunk) => {
   //     res.write(chunk);
   //  });
   //  readable.on('end', () => {
   //     res.end();
   //  });
   //  readable.on('error', (err) => {
   //     console.info(err);
   //     res.statusCode = 500;
   //     res.end('Not found file');
   //  });
   // Solutin 3 :
   const readable = fs.createReadStream('./txt/tst.txt');
   readable.pipe(res);
   //  readableSource.pipe(writableDestination)
});

server.listen(8000, '127.0.0.1', () => {
   console.info('Listening....');
});
