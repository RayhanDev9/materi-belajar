#include <iostream>
#include <string>

using namespace std;

// 1. Fungsi void: Hanya menjalankan aksi/mencetak, tanpa mengembalikan nilai
void cetakGaris() {
    cout << "------------------------------------" << endl;
}

// 2. Fungsi void dengan parameter: Menerima input dari pemanggil
void sapaUser(string nama) {
    cout << "Halo, " << nama << "! Selamat datang." << endl;
}

// 3. Fungsi dengan return value: Menghitung luas persegi panjang (p x l)
double hitungLuasPersegiPanjang(double panjang, double lebar) {
    double luas = panjang * lebar;
    return luas; // Mengembalikan hasil perhitungan
}

// 4. Fungsi pengecekan kondisi: Mengembalikan nilai boolean (true/false)
bool isGenap(int angka) {
    return (angka % 2 == 0);
}

int main() {
    cetakGaris();
    sapaUser("Rayhan");
    cetakGaris();

    // Memanggil fungsi hitung dan menyimpan hasilnya di variabel
    double p = 10.5;
    double l = 4.0;
    double hasilLuas = hitungLuasPersegiPanjang(p, l);
    cout << "Luas persegi panjang (" << p << " x " << l << ") = " << hasilLuas << endl;

    cetakGaris();

    // Menggunakan fungsi boolean langsung di dalam percabangan if
    int nilai = 7;
    if (isGenap(nilai)) {
        cout << "Angka " << nilai << " adalah bilangan GENAP." << endl;
    } else {
        cout << "Angka " << nilai << " adalah bilangan GANJIL." << endl;
    }

    cetakGaris();
    return 0;
}
