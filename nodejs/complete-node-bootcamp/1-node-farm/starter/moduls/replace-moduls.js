module.exports = (temp, product) => {
  // Ganti semua placeholder dengan data produk
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  // Jika produk BUKAN organik, tambahkan class css 'not-organic' agar labelnya berubah
  if (!product.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  }

  // ⚠️ Jangan lupa mengembalikan hasil output-nya
  return output;
};
