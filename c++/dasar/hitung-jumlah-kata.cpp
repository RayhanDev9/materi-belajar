#include <iostream>
#include <string>
#include <sstream>

using namespace std;

// Cara 1: Menggunakan stringstream (Paling Direkomendasikan)
int hitungKataStream(const string &kalimat) {
    stringstream ss(kalimat);
    string kata;
    int jumlah = 0;

    // Operator >> otomatis membaca kata per kata dan mengabaikan spasi berlebih
    while (ss >> kata) {
        jumlah++;
    }

    return jumlah;
}

// Cara 2: Manual menelusuri tiap karakter (Konsep Logika Dasar)
int hitungKataManual(const string &kalimat) {
    int jumlah = 0;
    bool dalamKata = false;

    for (char c : kalimat) {
        // Cek apakah karakter saat ini bukan spasi/tab/newline
        if (!isspace(c)) {
            if (!dalamKata) {
                jumlah++;
                dalamKata = true; // Menandakan kita sedang berada di dalam sebuah kata
            }
        } else {
            dalamKata = false; // Menemukan spasi, bersiap untuk kata berikutnya
        }
    }

    return jumlah;
}

int main() {
    string kalimat;

    cout << "Masukkan kalimat: ";
    getline(cin, kalimat);

    int hasil1 = hitungKataStream(kalimat);
    int hasil2 = hitungKataManual(kalimat);

    cout << "---------------------------------" << endl;
    cout << "Jumlah kata (stringstream) : " << hasil1 << endl;
    cout << "Jumlah kata (manual loop)  : " << hasil2 << endl;

    return 0;
}