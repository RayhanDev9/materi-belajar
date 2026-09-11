#include <iostream>
#include <string>

using namespace std;

// 1. Struct anak/bagian dalam
struct Alamat {
    string jalan;
    string kota;
    int kodePos;

    // Overloading operator << untuk struct Alamat
    friend ostream& operator<<(ostream &os, const Alamat &a) {
        os << a.jalan << ", " << a.kota << " (" << a.kodePos << ")";
        return os;
    }
};

// 2. Struct induk/utama
struct Mahasiswa {
    string nim;
    string nama;
    Alamat alamat;

    // Overloading operator << untuk struct Mahasiswa utuh
    friend ostream& operator<<(ostream &os, const Mahasiswa &m) {
        os << "=== DATA MAHASISWA ===" << endl;
        os << "NIM      : " << m.nim << endl;
        os << "Nama     : " << m.nama << endl;
        os << "Alamat   : " << m.alamat; // Otomatis manggil overloading milik Alamat
        return os;
    }
};

int main() {
    Mahasiswa mhs;

    mhs.nim = "2024001";
    mhs.nama = "Rayhan";
    mhs.alamat.jalan = "Jl. Raya Sudirman No. 10";
    mhs.alamat.kota = "Serang";
    mhs.alamat.kodePos = 42111;

    // Sekarang kamu bisa cetak alamatnya saja langsung:
    cout << "Cetak Alamat Saja: " << mhs.alamat << endl << endl;

    // Atau cetak seluruh objek Mahasiswa sekaligus:
    cout << mhs << endl;

    return 0;
}