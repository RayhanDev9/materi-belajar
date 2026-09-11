#include <iostream>
#include <string>

using namespace std;

// Fungsi dengan default argument:
// 'sistem_operasi' default-nya "Android"
// 'diskon' default-nya 0.0
void buatHandphone(string merk, string sistem_operasi = "Android", double diskon = 0.0) {
    cout << "Merk HP        : " << merk << endl;
    cout << "Sistem Operasi : " << sistem_operasi << endl;
    cout << "Diskon         : " << diskon * 100 << "%" << endl;
    cout << "---------------------------------" << endl;
}

int main() {
    // 1. Memanggil dengan 1 argumen saja (2 parameter lainnya pakai nilai default)
    buatHandphone("Samsung");

    // 2. Memanggil dengan 2 argumen (hanya diskon yang pakai default)
    buatHandphone("iPhone", "iOS");

    // 3. Mengisi semua argumen (tidak ada yang memakai nilai default)
    buatHandphone("Xiaomi", "HyperOS", 0.15);

    return 0;
}