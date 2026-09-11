#include <iostream>

using namespace std;

int main() {
    // 1. Contoh Dasar: Mengembalikan Nilai Paling Kanan
    // (a = 5 dijalankan, b = 10 dijalankan, lalu hasilnya adalah a + b)
    int a, b;
    int hasil = (a = 5, b = 10, a + b);

    cout << "=== 1. CONTOH DASAR ===" << endl;
    cout << "Nilai a     : " << a << endl;
    cout << "Nilai b     : " << b << endl;
    cout << "Hasil akhir : " << hasil << endl; // Output: 15
    cout << endl;

    // 2. Penggunaan Paling Populer: Multi-Variabel di dalam Loop 'for'
    // Menggerakkan dua variabel sekaligus dalam satu iterasi loop
    cout << "=== 2. POPULER DI FOR LOOP ===" << endl;
    for (int i = 0, j = 5; i < j; i++, j--) {
        cout << "i: " << i << " | j: " << j << endl;
    }
    cout << endl;



    // 3. Side Effect: Mengubah Variabel Sebelum Diambil Nilainya
    int x = 10;
    int y = (x += 5, x * 2); // x ditambah 5 jadi 15, lalu dievaluasi x * 2 = 30

    cout << "=== 3. SIDE EFFECT ===" << endl;
    cout << "Nilai x : " << x << endl; // 15
    cout << "Nilai y : " << y << endl; // 30

    return 0;
}