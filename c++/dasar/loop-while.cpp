#include <iostream>

using namespace std;

int main() {
    // 1. FOR LOOP (Cocok ketika jumlah putaran sudah pasti)
    cout << "=== 1. FOR LOOP (Cetak 1 sampai 5) ===" << endl;
    for (int i = 1; i <= 5; i++) {
        cout << "Iterasi ke-" << i << endl;
    }
    cout << "\n";

    // 2. WHILE LOOP (Cek kondisi dulu, baru jalankan blok kode)
    cout << "=== 2. WHILE LOOP (Cetak 1 sampai 5) ===" << endl;
    int j = 1;
    while (j <= 5) {
        cout << "Nilai j: " << j << endl;
        j++; // Jangan lupa increment agar tidak terjadi infinite loop
    }
    cout << "\n";

    // 3. DO-WHILE LOOP (Jalankan minimal 1 kali dulu, baru cek kondisi)
    cout << "=== 3. DO-WHILE LOOP (Cetak 1 sampai 5) ===" << endl;
    int k = 1;
    do {
        cout << "Nilai k: " << k << endl;
        k++;
    } while (k <= 5);
    cout << "\n";

    // 4. LOOP KONTROL: BREAK & CONTINUE
    cout << "=== 4. FOR LOOP DENGAN BREAK & CONTINUE ===" << endl;
    for (int x = 1; x <= 6; x++) {
        if (x == 3) {
            // Lewati iterasi saat x bernilai 3
            cout << "(Angka 3 dilewati via continue)" << endl;
            continue; 
        }

        if (x == 5) {
            // Hentikan perulangan sepenuhnya saat x bernilai 5
            cout << "(Perulangan dihentikan paksa via break saat x = 5)" << endl;
            break; 
        }

        cout << "Angka: " << x << endl;
    }

    return 0;
}