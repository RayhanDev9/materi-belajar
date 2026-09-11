#include <iostream>
#include <vector>
#include <algorithm> // Wajib untuk std algorithm
#include <numeric>   // Untuk std::accumulate (mirip reduce di JS)

using namespace std;

int main() {
    vector<int> angka = {40, 10, 5, 25, 90, 15};

    cout << "=== DATA AWAL ===" << endl;
    for (int n : angka) cout << n << " ";
    cout << "\n\n";

    // 1. std::sort -> Mengurutkan data (Ascending)
    // Mirip: angka.sort((a, b) => a - b) di JS
    sort(angka.begin(), angka.end());
    cout << "1. Setelah sort (Ascending):" << endl;
    for (int n : angka) cout << n << " ";
    cout << "\n\n";

    // Mengurutkan Descending menggunakan fungsi lambda
    sort(angka.begin(), angka.end(), [](int a, int b) {
        return a > b;
    });
    cout << "2. Setelah sort (Descending):" << endl;
    for (int n : angka) cout << n << " ";
    cout << "\n\n";

    // 2. std::find -> Mencari elemen tertentu
    // Mengembalikan iterator (mirip pointer)
    auto it = find(angka.begin(), angka.end(), 25);
    if (it != angka.end()) {
        cout << "3. Angka 25 ditemukan di indeks ke-" << distance(angka.begin(), it) << endl;
    } else {
        cout << "3. Angka tidak ditemukan" << endl;
    }
    cout << "\n";

    // 3. std::count_if -> Menghitung elemen berdasarkan kondisi
    // Mirip: angka.filter(x => x > 20).length di JS
    int jumlahLebihDari20 = count_if(angka.begin(), angka.end(), [](int n) {
        return n > 20;
    });
    cout << "4. Jumlah angka > 20: " << jumlahLebihDari20 << endl;
    cout << "\n";

    // 4. std::min_element & std::max_element -> Mencari nilai terkecil & terbesar
    auto minVal = min_element(angka.begin(), angka.end());
    auto maxVal = max_element(angka.begin(), angka.end());
    cout << "5. Nilai Terkecil: " << *minVal << endl;
    cout << "   Nilai Terbesar: " << *maxVal << endl;
    cout << "\n";

    // 5. std::transform -> Mengubah tiap elemen (Mirip Array.map() di JS)
    vector<int> angkaDikalikanDua(angka.size());
    transform(angka.begin(), angka.end(), angkaDikalikanDua.begin(), [](int n) {
        return n * 2;
    });

    cout << "6. Hasil transform (dikali 2):" << endl;
    for (int n : angkaDikalikanDua) cout << n << " ";
    cout << "\n\n";

    // 6. std::reverse -> Membalik urutan
    reverse(angka.begin(), angka.end());
    cout << "7. Setelah reverse:" << endl;
    for (int n : angka) cout << n << " ";
    cout << endl;

    return 0;
}