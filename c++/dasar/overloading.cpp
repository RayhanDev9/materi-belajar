#include <iostream>
#include <string>

using namespace std;

// 1. Fungsi hitungTotal untuk 1 barang (harga satuan)
double hitungTotal(double harga) {
    return harga;
}

// 2. Overloading: Nama sama, tapi beda JUMLAH parameter (harga * jumlah unit)
double hitungTotal(double harga, int jumlah) {
    return harga * jumlah;
}

// 3. Overloading: Nama sama, tapi parameter ditambah diskon
double hitungTotal(double harga, int jumlah, double diskonPersen) {
    double subtotal = harga * jumlah;
    double potongan = subtotal * (diskonPersen / 100.0);
    return subtotal - potongan;
}

// 4. Overloading: Nama sama, tapi BEDA TIPE parameter (menerima input string nama barang)
void cetakInfo(string namaBarang) {
    cout << "Nama Produk: " << namaBarang << endl;
}

void cetakInfo(int idProduk) {
    cout << "ID Produk  : #" << idProduk << endl;
}

int main() {
    cout << "=== CONTOH FUNCTION OVERLOADING ===" << endl;

    // Kompiler otomatis memilih fungsi ke-1
    cout << "Beli 1 HP (satuan)       : Rp " << hitungTotal(5000000) << endl;

    // Kompiler otomatis memilih fungsi ke-2 (karena ada 2 parameter: double, int)
    cout << "Beli 3 HP                : Rp " << hitungTotal(5000000, 3) << endl;

    // Kompiler otomatis memilih fungsi ke-3 (ada 3 parameter: double, int, double)
    cout << "Beli 3 HP (Diskon 10%)   : Rp " << hitungTotal(5000000, 3, 10.0) << endl;

    cout << "\n-----------------------------------" << endl;

    // Memanggil overloading berdasarkan tipe parameter
    cetakInfo("Laptop Gaming"); // Memanggil versi string
    cetakInfo(10928);           // Memanggil versi int

    return 0;
}