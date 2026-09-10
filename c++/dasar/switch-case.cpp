#include <iostream>

using namespace std;

int main() {
    int pilihan;

    cout << "=== MENU MAKANAN ===" << endl;
    cout << "1. Nasi Goreng" << endl;
    cout << "2. Mie Ayam" << endl;
    cout << "3. Bakso" << endl;
    cout << "4. Sate Ayam" << endl;
    cout << "Masukkan pilihan menu (1-4): ";
    cin >> pilihan;

    cout << "\n";

    switch (pilihan) {
        case 1:
            cout << "Pilihan: Nasi Goreng" << endl;
            cout << "Harga  : Rp 15.000" << endl;
            break;
        case 2:
            cout << "Pilihan: Mie Ayam" << endl;
            cout << "Harga  : Rp 12.000" << endl;
            break;
        case 3:
            cout << "Pilihan: Bakso" << endl;
            cout << "Harga  : Rp 13.000" << endl;
            break;
        case 4:
            cout << "Pilihan: Sate Ayam" << endl;
            cout << "Harga  : Rp 20.000" << endl;
            break;
        default:
            cout << "Menu nomor " << pilihan << " tidak tersedia." << endl;
            break;
    }

    return 0;
}