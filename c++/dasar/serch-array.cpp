#include <iostream>
#include <vector>
#include <algorithm> // Untuk std::find dan std::binary_search

using namespace std;

// 1. Linear Search Manual (Mencari satu per satu dari depan)
int linearSearch(const vector<int> &data, int target) {
    for (size_t i = 0; i < data.size(); i++) {
        if (data[i] == target) {
            return i; // Kembalikan indeks jika ditemukan
        }
    }
    return -1; // -1 menandakan data tidak ada
}

// 2. Binary Search Manual (Wajib data terurut/sorted lebih dulu)
int binarySearchManual(const vector<int> &data, int target) {
    int kiri = 0;
    int kanan = data.size() - 1;

    while (kiri <= kanan) {
        int tengah = kiri + (kanan - kiri) / 2;

        if (data[tengah] == target) {
            return tengah; // Ditemukan
        }
        if (data[tengah] < target) {
            kiri = tengah + 1; // Cari di separuh kanan
        } else {
            kanan = tengah - 1; // Cari di separuh kiri
        }
    }
    return -1; // Tidak ditemukan
}

int main() {
    vector<int> angka = {15, 42, 8, 99, 23, 54};
    int cari = 99;

    cout << "=== 1. LINEAR SEARCH (CARA MANUAL) ===" << endl;
    int hasilLinear = linearSearch(angka, cari);
    if (hasilLinear != -1) {
        cout << "Angka " << cari << " ditemukan di indeks ke-" << hasilLinear << endl;
    } else {
        cout << "Angka tidak ditemukan" << endl;
    }

    cout << "\n=== 2. MENGGUNAKAN STD::FIND (CARA MODERN) ===" << endl;
    // std::find mengembalikan iterator
    auto it = find(angka.begin(), angka.end(), cari);
    if (it != angka.end()) {
        // Menghitung indeks menggunakan std::distance
        int index = distance(angka.begin(), it);
        cout << "Angka " << cari << " ditemukan di indeks ke-" << index << endl;
    } else {
        cout << "Angka tidak ditemukan" << endl;
    }

    cout << "\n=== 3. BINARY SEARCH (UNTUK DATA TERURUT) ===" << endl;
    // Binary search jauh lebih cepat (O(log n)), tetapi data WAJIB di-sort dulu
    sort(angka.begin(), angka.end());

    cout << "Data setelah di-sort: ";
    for (int n : angka) cout << n << " ";
    cout << endl;

    // A. Menggunakan fungsi manual
    int hasilBinary = binarySearchManual(angka, cari);
    cout << "Hasil binary search manual: indeks ke-" << hasilBinary << endl;

    // B. Menggunakan helper bawaan C++: std::binary_search (hanya return bool true/false)
    bool ada = binary_search(angka.begin(), angka.end(), cari);
    cout << "Apakah angka " << cari << " ada? " << (ada ? "Ada" : "Tidak ada") << endl;

    return 0;
}