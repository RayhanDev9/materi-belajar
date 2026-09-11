#include <iostream>
#include <string>

using namespace std;

int main() {
    // 1. Contoh Sederhana: Menentukan Status Kelulusan
    int nilai = 75;
    string status = (nilai >= 70) ? "Lulus" : "Tidak Lulus";

    cout << "Nilai: " << nilai << endl;
    cout << "Status: " << status << endl;
    cout << "-------------------------" << endl;

    // 2. Langsung Dicetak di dalam cout (tanpa bikin variabel penampung)
    int angka = 14;
    cout << "Angka " << angka << " adalah bilangan " 
         << ((angka % 2 == 0) ? "Genap" : "Ganjil") << endl;
    cout << "-------------------------" << endl;

    // 3. Mencari Nilai Maksimum di antara Dua Angka
    int a = 40;
    int b = 65;
    int nilaiMaksimal = (a > b) ? a : b;

    cout << "Nilai terbesar: " << nilaiMaksimal << endl;
    cout << "-------------------------" << endl;

    // 4. Nested Ternary (Ternary Bersarang)
    // Cek angka: Positif, Negatif, atau Nol
    int bilangan = -5;
    string hasil = (bilangan > 0) ? "Positif" 
                 : (bilangan < 0) ? "Negatif" 
                 : "Nol";

    cout << "Bilangan " << bilangan << " adalah: " << hasil << endl;

    return 0;
}