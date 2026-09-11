#include <iostream>
#include <string>

using namespace std;

// 1. Pass by Reference biasa (mengubah data variabel asli)
void tambahBonus(double &gaji, double bonus) {
    gaji += bonus; // Memodifikasi langsung variabel di main()
}

// 2. Pass by Const Reference (hemat memori, cepat, dan aman/read-only)
void cetakProfil(const string &nama, const double &gaji) {
    cout << "Karyawan : " << nama << endl;
    cout << "Gaji     : Rp " << gaji << endl;
    // nama = "Budi"; // Eror jika diaktifkan karena ada kata kunci 'const'
}

// 3. Return by Reference (mengembalikan referensi elemen array)
int& ambilElemen(int arr[], int index) {
    return arr[index]; // Mengembalikan referensi langsung ke slot memori array
}

int main() {
    // --- Uji Coba 1 & 2: Pass by Reference & Const Reference ---
    string namaKaryawan = "Rayhan";
    double gajiKaryawan = 5000000.0;

    cout << "=== SEBELUM BONUS ===" << endl;
    cetakProfil(namaKaryawan, gajiKaryawan);

    // Memanggil fungsi yang mengubah variabel asli
    tambahBonus(gajiKaryawan, 1500000.0);

    cout << "\n=== SESUDAH BONUS ===" << endl;
    cetakProfil(namaKaryawan, gajiKaryawan);

    cout << "\n----------------------------------------\n" << endl;

    // --- Uji Coba 3: Return by Reference ---
    int deret[] = {10, 20, 30, 40, 50};

    cout << "Nilai awal deret[2]: " << deret[2] << endl;

    // Karena fungsi me-return reference, hasil fungsi bisa langsung diberi nilai baru (=)
    ambilElemen(deret, 2) = 999;

    cout << "Nilai baru deret[2]: " << deret[2] << " (berhasil diubah lewat return ref)" << endl;

    return 0;
}