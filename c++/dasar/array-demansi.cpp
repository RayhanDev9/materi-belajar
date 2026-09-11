#include <iostream>

using namespace std;

int main() {
    // 1. Deklarasi & Inisialisasi Matriks 2D (2 Baris, 3 Kolom)
    int matriks[2][3] = {
        {10, 20, 30}, // Baris 0
        {40, 50, 60}  // Baris 1
    };

    // 2. Mengakses Elemen Tertentu
    // Format: matriks[indeks_baris][indeks_kolom]
    cout << "=== AKSES ELEMEN TERTENTU ===" << endl;
    cout << "Isi baris 0, kolom 1 : " << matriks[0][1] << endl; // Output: 20
    cout << "Isi baris 1, kolom 2 : " << matriks[1][2] << endl; // Output: 60

    // 3. Mengubah Nilai Elemen
    matriks[0][1] = 99;
    cout << "Setelah diubah [0][1] : " << matriks[0][1] << endl; // Output: 99

    cout << "\n=== MENAMPILKAN SEMUA ELEMEN (BENTUK TABEL) ===" << endl;
    // 4. Nested Loop Tradisional (Loop Bersarang)
    for (int baris = 0; baris < 2; baris++) {
        for (int kolom = 0; kolom < 3; kolom++) {
            cout << matriks[baris][kolom] << "\t"; // \t memberi jarak tab
        }
        cout << endl; // Ganti baris setiap 1 baris selesai dicetak
    }

    cout << "\n=== CARA MODERN (RANGE-BASED LOOP DENGAN REFERENCE) ===" << endl;
    // Perhatikan: Baris diambil sebagai reference (&baris) agar tidak menduplikasi array!
    for (const auto &baris : matriks) {
        for (const auto &kolom : baris) {
            cout << kolom << " ";
        }
        cout << endl;
    }

    return 0;
}