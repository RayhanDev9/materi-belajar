#include <iostream>

using namespace std;

int main() {
    int n;
    long long t1 = 0, t2 = 1, angkaBerikutnya = 0;

    cout << "=== DERET FIBONACCI ===" << endl;
    cout << "Masukkan jumlah suku deret: ";
    cin >> n;

    if (n <= 0) {
        cout << "Masukkan angka lebih besar dari 0." << endl;
        return 0;
    }

    cout << "\nDeret Fibonacci (" << n << " suku):" << endl;

    for (int i = 1; i <= n; i++) {
        // Cetak suku ke-1
        if (i == 1) {
            cout << t1;
            if (n > 1) cout << ", ";
            continue;
        }

        // Cetak suku ke-2
        if (i == 2) {
            cout << t2;
            if (n > 2) cout << ", ";
            continue;
        }

        // Hitung suku ke-3 dan seterusnya: penjumlahan dua suku sebelumnya
        angkaBerikutnya = t1 + t2;
        t1 = t2;
        t2 = angkaBerikutnya;

        cout << angkaBerikutnya;
        if (i < n) {
            cout << ", ";
        }
    }

    cout << endl;
    return 0;
}