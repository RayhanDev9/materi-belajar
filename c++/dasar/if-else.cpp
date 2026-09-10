#include <iostream>

using namespace std;

int main() {
    int nilai;

    cout << "=== PROGRAM CEK KELULUSAN ===" << endl;
    cout << "Masukkan nilai ujian (0 - 100): ";
    cin >> nilai;

    // Struktur percabangan if, else if, else
    if (nilai >= 85 && nilai <= 100) {
        cout << "Predikat: A (Sangat Memuaskan)" << endl;
    } 
    else if (nilai >= 70 && nilai < 85) {
        cout << "Predikat: B (Memuaskan)" << endl;
    } 
    else if (nilai >= 55 && nilai < 70) {
        cout << "Predikat: C (Cukup)" << endl;
    } 
    else if (nilai >= 0 && nilai < 55) {
        cout << "Predikat: D (Tidak Lulus)" << endl;
    } 
    else {
        // Blok ini dieksekusi jika angka di luar rentang 0 - 100
        cout << "Input tidak valid! Masukkan angka antara 0 sampai 100." << endl;
    }

    return 0;
}