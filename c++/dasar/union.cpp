#include <iostream>
#include <string>

using namespace std;

// 1. Definisi Union
union Data {
    int angkaBulat;    // 4 byte
    float angkaDesimal; // 4 byte
    char huruf;         // 1 byte
};

// 2. Struct biasa sebagai perbandingan ukuran memori
struct DataStruct {
    int angkaBulat;
    float angkaDesimal;
    char huruf;
};

int main() {
    Data dataUnion;
    DataStruct dataStruct;
    // 1. BUKTI 1: SEMUA VARIABEL MEMAKAI ALAMAT MEMORI YANG SAMA PERSIS
    cout << "=== BUKTI ALAMAT MEMORI ===" << endl;
    cout << "Alamat angkaBulat   : " << &dataUnion.angkaBulat << endl;
    cout << "Alamat angkaDesimal : " << &dataUnion.angkaDesimal << endl;
    cout << "Alamat huruf        : " << (void*)&dataUnion.huruf << endl;
    cout << endl;

    // 2. BUKTI 2: NILAI 100 TERTELAN DAN RUSAK
    cout << "=== BUKTI DATA FISIK TERTELAN ===" << endl;
    dataUnion.angkaBulat = 100;
    cout << "1. Isi angkaBulat mula-mula : " << dataUnion.angkaBulat << endl;

    // Sekarang kita isi angkaDesimal
    dataUnion.angkaDesimal = 3.14f;
    cout << "2. Baru saja diisi angkaDesimal : " << dataUnion.angkaDesimal << endl;

    // Kita panggil lagi angkaBulat:
    cout << "3. Cek angkaBulat sekarang      : " << dataUnion.angkaBulat << endl;

    // A. Perbandingan Ukuran Memori (RAM)
    cout << "=== 1. PERBANDINGAN UKURAN MEMORI ===" << endl;
    cout << "Ukuran struct : " << sizeof(dataStruct) << " byte" << endl; // ~12 byte (4 + 4 + 1 + padding)
    cout << "Ukuran union  : " << sizeof(dataUnion) << " byte" << endl;  // Cuma 4 byte (mengambil tipe terbesar)
    cout << endl;

    // B. Cara Kerja Penyimpanan Union
    cout << "=== 2. MENYIMPAN NILAI KE UNION ===" << endl;

    // 1. Simpan angka bulat
    dataUnion.angkaBulat = 100;
    cout << "Isi angkaBulat   : " << dataUnion.angkaBulat << endl;

    // 2. Simpan angka desimal (nilai angkaBulat otomatis tertimpa!)
    dataUnion.angkaDesimal = 3.14f;
    cout << "Isi angkaDesimal : " << dataUnion.angkaDesimal << endl;
    
    // Coba lihat apa yang terjadi pada angkaBulat sekarang:
    cout << "Isi angkaBulat setelah ditimpa : " << dataUnion.angkaBulat << " (data rusak/korup)" << endl;
    cout << endl;

    // 3. Simpan karakter huruf
    dataUnion.huruf = 'Z';
    cout << "Isi huruf        : " << dataUnion.huruf << endl;
    cout << "Isi angkaDesimal setelah ditimpa : " << dataUnion.angkaDesimal << " (data rusak/korup)" << endl;

    return 0;
}