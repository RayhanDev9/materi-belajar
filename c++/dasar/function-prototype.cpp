#include <iostream>
#include <string>

using namespace std;

// ==========================================
// 1. PROTOTYPE FUNGSI (Deklarasi di atas main)
// Cukup tulis tipe return, nama, dan parameternya, diakhiri titik koma (;)
// ==========================================
void sapaUser(string nama);
double hitungLuasLingkaran(double r);
int kali(int a, int b);


// ==========================================
// 2. FUNGSI UTAMA (main)
// ==========================================
int main() {
    // Memanggil fungsi-fungsi yang prototypenya sudah dideklarasikan di atas
    sapaUser("Rayhan");

    double jariJari = 7.0;
    cout << "Luas lingkaran (r = " << jariJari << ") : " << hitungLuasLingkaran(jariJari) << endl;

    int x = 5, y = 4;
    cout << "Hasil " << x << " x " << y << " = " << kali(x, y) << endl;

    return 0;
}


// ==========================================
// 3. DEFINISI FUNGSI (Isi kode sebenarnya di bawah main)
// ==========================================

void sapaUser(string nama) {
    cout << "Halo, " << nama << "! Selamat datang." << endl;
}

double hitungLuasLingkaran(double r) {
    const double PI = 3.14159;
    return PI * r * r;
}

int kali(int a, int b) {
    return a * b;
}