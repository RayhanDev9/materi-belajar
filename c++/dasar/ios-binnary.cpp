#include <iostream>
#include <fstream>

using namespace std;

struct Mahasiswa {
    int nim;
    char nama[50];
    float nilai;
};

int main() {
    // -------------------------------------------------------------
    // 1. MENULIS DATA BINER KE DALAM SATU FILE
    // -------------------------------------------------------------
    ofstream fileTulis("data.bin", ios::binary | ios::out);

    if (!fileTulis.is_open()) {
        cout << "Gagal membuat file biner!" << endl;
        return 1;
    }

    Mahasiswa mhs1 = {101, "Muhamad Rayhan", 95.5f};
    Mahasiswa mhs2 = {102, "Muhamad Aldi", 22.3f};

    // Tulis mhs1 lalu mhs2 sebelum file ditutup
    fileTulis.write(reinterpret_cast<char*>(&mhs1), sizeof(Mahasiswa));
    fileTulis.write(reinterpret_cast<char*>(&mhs2), sizeof(Mahasiswa));
    fileTulis.close(); // Tutup setelah semua data selesai ditulis

    cout << "Data biner berhasil ditulis ke data.bin\n" << endl;

    // -------------------------------------------------------------
    // 2. MEMBACA DATA BINER SECARA BERURUTAN
    // -------------------------------------------------------------
    ifstream fileBaca("data.bin", ios::binary | ios::in);

    if (!fileBaca.is_open()) {
        cout << "Gagal membuka file biner!" << endl;
        return 1;
    }

    Mahasiswa mhsBaca1;
    Mahasiswa mhsBaca2;

    // Baca data pertama (mhs1) lalu data kedua (mhs2)
    fileBaca.read(reinterpret_cast<char*>(&mhsBaca1), sizeof(Mahasiswa));
    fileBaca.read(reinterpret_cast<char*>(&mhsBaca2), sizeof(Mahasiswa));
    fileBaca.close();

    // Tampilkan hasil pembacaan
    cout << "=== Data 1 dari Berkas Biner ===" << endl;
    cout << "NIM   : " << mhsBaca1.nim << endl;
    cout << "Nama  : " << mhsBaca1.nama << endl;
    cout << "Nilai : " << mhsBaca1.nilai << endl;

    cout << "\n=== Data 2 dari Berkas Biner ===" << endl;
    cout << "NIM   : " << mhsBaca2.nim << endl;
    cout << "Nama  : " << mhsBaca2.nama << endl;
    cout << "Nilai : " << mhsBaca2.nilai << endl;

    return 0;
}