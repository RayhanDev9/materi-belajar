#include <iostream>
#include <string>

using namespace std;

// 1. Pass-by-Value (Tanpa &) -> Nilai asli TIDAK berubah karena difotokopi
void ubahNilaiBiasa(int nilai) {
    nilai = 999;
}

// 2. Pass-by-Reference (Pakai &) -> Nilai asli IKUT berubah
void ubahNilaiRef(int &nilai) {
    nilai = 999;
}

// 3. Const Reference (const &) -> Cepat & hemat memori, tapi terkunci (read-only)
void cetakPesan(const string &pesan) {
    cout << "Pesan: " << pesan << endl;
    // pesan = "Halo Baru"; // Eror jika diaktifkan, karena diblokir oleh const
}

// 4. Contoh praktis: Menukar 2 variabel secara langsung
void tukar(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    // ==========================================
    // A. Reference sebagai Alias Variabel Biasa
    // ==========================================
    int angka = 10;
    int &aliasAngka = angka; // aliasAngka adalah nama lain (nama panggilan) dari variabel 'angka'

    cout << "=== REFERENCE SEBAGAI ALIAS ===" << endl;
    cout << "Nilai angka       : " << angka << endl;
    cout << "Nilai aliasAngka  : " << aliasAngka << endl;

    // Mengubah alias otomatis mengubah variabel aslinya
    aliasAngka = 50;
    cout << "Setelah alias diubah jadi 50:" << endl;
    cout << "Nilai angka asli  : " << angka << " (ikut berubah)" << endl;
    cout << "Alamat &angka     : " << &angka << endl;
    cout << "Alamat &alias     : " << &aliasAngka << " (alamatnya persis sama!)" << endl;

    cout << "\n==========================================" << endl;

    // ==========================================
    // B. Reference di dalam Parameter Fungsi
    // ==========================================
    int x = 5;

    cout << "=== PASS BY VALUE VS PASS BY REFERENCE ===" << endl;
    cout << "Nilai awal x      : " << x << endl;

    ubahNilaiBiasa(x);
    cout << "Setelah coba diubah biasa (tanpa &) : " << x << " (tetap tidak berubah)" << endl;

    ubahNilaiRef(x);
    cout << "Setelah diubah lewat ref (pakai &)  : " << x << " (berhasil diubah)" << endl;

    cout << "\n==========================================" << endl;

    // ==========================================
    // C. Swap (Tukar Nilai)
    // ==========================================
    int m = 1, n = 2;
    cout << "Sebelum tukar -> m = " << m << ", n = " << n << endl;
    tukar(m, n);
    cout << "Sesudah tukar -> m = " << m << ", n = " << n << endl;

    cout << "\n==========================================" << endl;

    // ==========================================
    // D. Const Reference
    // ==========================================
    string teksBesar = "Kalimat panjang untuk pengujian const ref";
    cetakPesan(teksBesar);

    return 0;
}