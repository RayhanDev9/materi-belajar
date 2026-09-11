#include <iostream>
#include <array>     // Pustaka wajib untuk std::array
#include <algorithm> // Untuk std::sort

using namespace std;

// Fungsi menerima std::array menggunakan const reference agar hemat memori & aman
void cetakArray(const array<int, 5> &arr) {
    // Range-based for loop (mirip 'for of' di JavaScript)
    for (int nilai : arr) {
        cout << nilai << " ";
    }
    cout << endl;
}

int main() {
    // 1. Deklarasi dan Inisialisasi: array<tipe_data, jumlah_elemen>
    array<int, 5> nilai = {5, 1, 9, 3, 4};

    cout << "=== INFORMASI DASAR ===" << endl;
    // Mengetahui panjang array langsung pakai .size()
    cout << "Panjang array : " << nilai.size() << endl;
    cout << "Elemen pertama: " << nilai.front() << endl;
    cout << "Elemen terakhir: " << nilai.back() << endl;

    cout << "\nIsi array awal : ";
    cetakArray(nilai);

    cout << "\n=== AKSES & MODIFIKASI DATA ===" << endl;
    // Cara 1: Menggunakan operator index [] biasa
    nilai[0] = 10;

    // Cara 2: Menggunakan .at() (JAUH LEBIH AMAN dari array primitif)
    // .at() akan melempar exception out_of_range jika index salah, bukan bikin crash
    nilai.at(1) = 20;

    cout << "Setelah indeks 0 dan 1 diubah: ";
    cetakArray(nilai);

    cout << "\n=== FITUR TAMBAHAN ===" << endl;
    // Mengurutkan elemen menggunakan library <algorithm>
    sort(nilai.begin(), nilai.end());
    cout << "Setelah di-sort : ";
    cetakArray(nilai);

    // Mengisi seluruh elemen dengan angka yang sama
    array<int, 5> dataKosong;
    dataKosong.fill(0); // Mengisi semua slot dengan nilai 0
    cout << "Array hasil fill(0): ";
    cetakArray(dataKosong);

    return 0;
}