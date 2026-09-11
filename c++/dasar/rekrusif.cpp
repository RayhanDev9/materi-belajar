#include <iostream>

using namespace std;

// 1. Rekursif untuk Menghitung Faktorial: n! = n * (n - 1)!
long long faktorial(int n) {
    // Base Case: jika n bernilai 1 atau 0, berhenti dan kembalikan nilai 1
    if (n <= 1) {
        return 1;
    }

    // Recursive Case: memanggil dirinya sendiri dengan parameter (n - 1)
    return n * faktorial(n - 1);
}

// 2. Rekursif untuk Hitung Mundur (Countdown)
void hitungMundur(int n) {
    // Base Case: jika angka sudah di bawah 1, berhenti
    if (n < 1) {
        cout << "Waktu habis / Mulai!" << endl;
        return;
    }

    cout << n << " ... " << endl;

    // Recursive Case: panggil fungsi dengan nilai berkurang 1
    hitungMundur(n - 1);
}

int main() {
    cout << "=== CONTOH REKURSIF FAKTORIAL ===" << endl;
    int angka = 5;
    cout << "Nilai dari " << angka << "! adalah: " << faktorial(angka) << endl;
    // Cara kerja faktorial(5): 5 * (4 * (3 * (2 * 1))) = 120

    cout << "\n=== CONTOH REKURSIF COUNTDOWN ===" << endl;
    hitungMundur(5);

    return 0;
}