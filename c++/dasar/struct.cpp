#include <iostream>
#include <string>
#include <iomanip>

using namespace std;

// 1. Definisi Struct
struct Mahasiswa {
    string nim;
    string nama;
    string jurusan;
    double nilaiTugas;
    double nilaiUts;
    double nilaiUas;

    // Member function di dalam struct untuk menghitung nilai akhir
    double hitungNilaiAkhir() const {
        return (nilaiTugas * 0.2) + (nilaiUts * 0.3) + (nilaiUas * 0.5);
    }
};

// 2. Fungsi Input Data (menggunakan pass-by-reference '&' agar nilai langsung terisi)
void inputMahasiswa(Mahasiswa &mhs, int nomor) {
    cout << "=== Input Data Mahasiswa ke-" << nomor << " ===" << endl;
    
    cout << "Masukkan NIM         : ";
    getline(cin, mhs.nim);

    cout << "Masukkan Nama        : ";
    getline(cin, mhs.nama);

    cout << "Masukkan Jurusan     : ";
    getline(cin, mhs.jurusan);

    cout << "Masukkan Nilai Tugas : ";
    cin >> mhs.nilaiTugas;

    cout << "Masukkan Nilai UTS   : ";
    cin >> mhs.nilaiUts;

    cout << "Masukkan Nilai UAS   : ";
    cin >> mhs.nilaiUas;
    cin.ignore(); // Membersihkan karakter newline dari buffer

    cout << endl;
}

// 3. Fungsi Menampilkan Data
void tampilkanMahasiswa(const Mahasiswa &mhs, int nomor) {
    cout << "------------------------------------------" << endl;
    cout << "Data Mahasiswa ke-" << nomor << endl;
    cout << "------------------------------------------" << endl;
    cout << "NIM         : " << mhs.nim << endl;
    cout << "Nama        : " << mhs.nama << endl;
    cout << "Jurusan     : " << mhs.jurusan << endl;
    cout << fixed << setprecision(2);
    cout << "Nilai Akhir : " << mhs.hitungNilaiAkhir() << endl;
    cout << endl;
}

int main() {
    const int JUMLAH_MHS = 2;
    Mahasiswa daftarMhs[JUMLAH_MHS];

    // Proses Input
    for (int i = 0; i < JUMLAH_MHS; i++) {
        inputMahasiswa(daftarMhs[i], i + 1);
    }

    // Proses Output
    cout << "==========================================" << endl;
    cout << "          LAPORAN DATA MAHASISWA          " << endl;
    cout << "==========================================" << endl;

    for (int i = 0; i < JUMLAH_MHS; i++) {
        tampilkanMahasiswa(daftarMhs[i], i + 1);
    }

    return 0;
}