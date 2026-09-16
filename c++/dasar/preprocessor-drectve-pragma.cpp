// main.cpp
#include <iostream>
#include "mahasiswa.h"

// Aktifkan baris di bawah ini jika ingin masuk ke mode debug.
// Coba beri komentar (// #define MODE_DEBUG) untuk melihat perbedaannya.
#define MODE_DEBUG 

using namespace std;

int main() {
    Mahasiswa mhs = {101, "Muhamad Rayhan"};

    cout << "Program berjalan normal..." << endl;
    cout << "NIM  : " << mhs.nim << endl;
    cout << "Nama : " << mhs.nama << endl;

    // -------------------------------------------------------------
    // Penggunaan #ifdef dan #endif
    // -------------------------------------------------------------
#ifdef MODE_DEBUG
    // Blok ini hanya akan dikompilasi jika MODE_DEBUG sudah di-#define
    cout << "\n[DEBUG LOG]: Alamat memori mhs berada di " << &mhs << endl;
    cout << "[DEBUG LOG]: Ukuran struct Mahasiswa = " << sizeof(Mahasiswa) << " byte" << endl;
#endif

    return 0;
}