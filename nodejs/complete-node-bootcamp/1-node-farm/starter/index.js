const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const url = require('node:url');
const slugify = require('slugify');
const replaceTemplate = require('./moduls/replace-moduls');
const { todo } = require('node:test');
/////////////////////////
// File

//TODO
// TODO: ada spasi dan titik dua
// FIXME: ada spasi dan titik dua

// Blocking syncrounus way
// const nama = "Muhamad Rayan";

// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.info(textIn);

// const taxtOut = `Text ini dari file input.txt. ${textIn}`;

// fs.writeFileSync("./txt/output.txt", taxtOut);

// // Blocking asyncrounus way
// fs.readFile(`./txt/starfft.txt`, "utf-8", (err, data) => {
//   if (err) return console.info("Error");

//   fs.readFile(`./txt/${data}`, "utf-8", (err, data2) => {
//     console.info(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.info(data3);
//       fs.writeFile("./txt/final.txt", `${(data2, data3)}`, (err) => {
//         console.info("You fil binn write file");
//       });
//     });
//   });
// });

// console.info("Finish");

/////////////////////////
// Server

// ✅ 1. template-card.html (tanpa 's')
const templateCard = fs.readFileSync(
   `${__dirname}/templates/template-card.html`,
   'utf-8',
);

// ✅ 2. Arahkan ke template-overview.html
const templateOverview = fs.readFileSync(
   `${__dirname}/templates/template-overview.html`,
   'utf-8',
);

// ✅ 3. Arahkan ke template-product.html
const templateProduct = fs.readFileSync(
   `${__dirname}/templates/template-product.html`,
   'utf-8',
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.info(slugs);

console.info(
   slugify('Testing', {
      lower: true,
   }),
);

const server = http.createServer((req, res) => {
   // console.log(req);
   const pathName = req.url;
   console.info(req.url);
   const { query, pathname } = url.parse(req.url, true);

   // Overview page
   if (pathName === '/' || pathName === '/view') {
      console.info('Succes');
      res.writeHead(200, {
         'Content-Type': 'text/html',
      });
      const cardsHtml = dataObj
         .map((el) => replaceTemplate(templateCard, el))
         .join('');
      const output = templateOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
      res.end(output);

      console.info(cardsHtml);
   }
   // Product
   else if (pathname === '/product') {
      res.writeHead(200, {
         'Content-Type': 'text/html',
      });

      const product = dataObj[query.id];

      const output = replaceTemplate(templateProduct, product);
      res.end(output);
   }
   // Api
   else if (pathName === '/api') {
      res.writeHead(200, {
         'Content-Type': 'application/json',
      });
      res.end(data);
   }
   //Not Found
   else {
      console.info('Gagal');
      res.writeHead(404, {
         'Content-Type': 'text/html',
         'my-own-header': 'Hello world',
      });
      res.end('<h1>Page not found</h1>');
   }
});

server.listen(8000, '127.0.0.1', () => {
   console.info('Listening to request on port 8000');
});
