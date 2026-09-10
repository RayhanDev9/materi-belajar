#include <iostream>

using namespace std;

int main() {
    int a = 5;
    int b = 5;

    cout << "=== OPERATOR INCREMENT (++) & DECREMENT (--) ===" << endl;
    cout << "Nilai awal a = " << a << ", Nilai awal b = " << b << "\n" << endl;

    // 1. Post-increment (a++) -> Tampilkan nilai lama dulu, baru tambah 1
    cout << "--- Post-increment (a++) ---" << endl;
    cout << "Saat dieksekusi (a++) : " << a++ << endl;
    cout << "Nilai a setelahnya    : " << a << "\n" << endl;

    // 2. Pre-increment (++b) -> Tambah 1 dulu, baru tampilkan nilai baru
    cout << "--- Pre-increment (++b) ---" << endl;
    cout << "Saat dieksekusi (++b) : " << ++b << endl;
    cout << "Nilai b setelahnya    : " << b << "\n" << endl;

    // Reset nilai untuk contoh decrement
    a = 5;
    b = 5;

    // 3. Post-decrement (a--) -> Tampilkan nilai lama dulu, baru kurangi 1
    cout << "--- Post-decrement (a--) ---" << endl;
    cout << "Saat dieksekusi (a--) : " << a-- << endl;
    cout << "Nilai a setelahnya    : " << a << "\n" << endl;

    // 4. Pre-decrement (--b) -> Kurangi 1 dulu, baru tampilkan nilai baru
    cout << "--- Pre-decrement (--b) ---" << endl;
    cout << "Saat dieksekusi (--b) : " << --b << endl;
    cout << "Nilai b setelahnya    : " << b << endl;

    return 0;
}