#include <iostream>
#include <array>

using namespace std;

int main() {
    array<int, 5> deret = {10, 20, 30, 40, 50};

    // 1. For Loop Tradisional (pakai indeks i)
    cout << "=== 1. For Loop Tradisional ===" << endl;
    for (size_t i = 0; i < deret.size(); i++) {
        cout << "Index [" << i << "] = " << deret[i] << endl;
    }

    // 2. Range-based For Loop (Mirip 'for...of' di JavaScript)
    // Nilai elemen disalin ke variabel 'nilai' (read-only per salinan)
    cout << "\n=== 2. Range-based Loop (Copy) ===" << endl;
    for (int nilai : deret) {
        cout << nilai << " ";
    }
    cout << endl;

    // 3. Range-based Loop dengan Reference (&)
    // Dipakai jika ingin MENGUBAH isi elemen array secara langsung
    cout << "\n=== 3. Mengubah Nilai Pakai Reference (&) ===" << endl;
    for (int &nilai : deret) {
        nilai *= 2; // Setiap elemen dikalikan 2
    }

    // 4. Range-based Loop dengan Const Reference (const &)
    // Paling direkomendasikan jika hanya membaca: cepat, tanpa copy, dan aman
    cout << "Isi array setelah dikali 2: ";
    for (const int &nilai : deret) {
        cout << nilai << " ";
    }
    cout << endl;

    // 5. While Loop
    cout << "\n=== 5. While Loop ===" << endl;
    size_t j = 0;
    while (j < deret.size()) {
        cout << deret[j] << " ";
        j++;
    }
    cout << endl;

    return 0;
}