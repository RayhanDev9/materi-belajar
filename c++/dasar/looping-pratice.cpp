#include <iostream>

using namespace std;

int main() {
    int tinggi;

    cout << "Masukkan tinggi segitiga: ";
    cin >> tinggi;

    cout << "\n";

    // 1. Segitiga Siku-Siku Rata Kiri
    cout << "--- 1. Siku-Siku Rata Kiri ---" << endl;
    for (int i = 1; i <= tinggi; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    cout << "\n";

    // 2. Segitiga Siku-Siku Terbalik
    cout << "--- 2. Siku-Siku Terbalik ---" << endl;
    for (int i = tinggi; i >= 1; i--) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    cout << "\n";

    // 3. Segitiga Sama Kaki (Piramida)
    cout << "--- 3. Segitiga Sama Kaki (Piramida) ---" << endl;
    for (int i = 1; i <= tinggi; i++) {
        // Cetak spasi untuk meratakan posisi ke tengah
        for (int s = 1; s <= tinggi - i; s++) {
            cout << " ";
        }
        // Cetak bintang pola ganjil (1, 3, 5, ...)
        for (int b = 1; b <= (2 * i - 1); b++) {
            cout << "*";
        }
        cout << endl;
    }

    return 0;
}