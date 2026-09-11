#include <iostream>
#include <variant>
#include <string>

using namespace std;

int main() {
    // 1. Deklarasi variant: wadah ini bisa berisi int ATAU double ATAU string
    variant<int, double, string> data;

    // A. Mengisi dengan integer
    data = 42;
    cout << "Isi sekarang: " << get<int>(data) << endl;

    // B. Mengisi dengan string (menggantikan int sebelumnya)
    data = "Belajar Modern C++";
    cout << "Isi sekarang: " << get<string>(data) << endl;

    // C. Mengecek tipe data mana yang sedang aktif
    // holds_alternative<tipe>(variant) bernilai true/false
    if (holds_alternative<string>(data)) {
        cout << "Status: Saat ini data bertipe string." << endl;
    }

    // index() memberi tahu urutan index tipe yang aktif (0: int, 1: double, 2: string)
    cout << "Index tipe yang aktif: " << data.index() << endl; // Output: 2

    // D. Cara aman mengambil nilai (std::get_if) tanpa bikin program crash
    // get_if mengembalikan pointer ke nilai data jika tipe benar, atau nullptr jika salah
    if (auto pVal = get_if<string>(&data)) {
        cout << "Ambil aman via pointer: " << *pVal << endl;
    } else {
        cout << "Tipe data tidak cocok!" << endl;
    }

    // E. Apa yang terjadi jika salah memanggil tipe aktif via std::get?
    try {
        // Saat ini isinya string, tapi kita paksa minta double:
        cout << get<double>(data) << endl;
    } catch (const bad_variant_access& e) {
        cout << "\nError tertangkap: " << e.what() << endl;
        cout << "(Program tetap aman berjalan, tidak crash/korup seperti union biasa)" << endl;
    }

    return 0;
}