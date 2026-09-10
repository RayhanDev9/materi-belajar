#include <iostream>

using namespace std;

int main() {
    int a = 3;
    int b = 2;

    cout << "=== OPERATOR LOGIKA ===" << endl;
    cout << "Nilai a = " << a << ", Nilai b = " << b << "\n" << endl;

    // 1. NOT (!) - Membalik nilai logika (true jadi false, false jadi true)
    cout << "--- 1. Operator NOT (!) ---" << endl;
    cout << "!(a == b) : " << !(a == b) << " (karena a == b itu false, dibalik jadi true)" << endl;
    cout << "!(a > b)  : " << !(a > b)  << " (karena a > b itu true, dibalik jadi false)\n" << endl;

    // 2. AND (&&) - Bernilai 1 (true) HANYA JIKA kedua kondisi benar
    cout << "--- 2. Operator AND (&&) ---" << endl;
    cout << "(a > b) && (b == 2) : " << ((a > b) && (b == 2)) << " (true AND true -> true)" << endl;
    cout << "(a > b) && (b == 5) : " << ((a > b) && (b == 5)) << " (true AND false -> false)" << endl;
    cout << "(a < b) && (b == 2) : " << ((a < b) && (b == 2)) << " (false AND true -> false)" << endl;
    cout << "(a < b) && (b == 5) : " << ((a < b) && (b == 5)) << " (false AND false -> false)\n" << endl;

    // 3. OR (||) - Bernilai 1 (true) JIKA SALAH SATU atau kedua kondisi benar
    cout << "--- 3. Operator OR (||) ---" << endl;
    cout << "(a > b) || (b == 2) : " << ((a > b) || (b == 2)) << " (true OR true -> true)" << endl;
    cout << "(a > b) || (b == 5) : " << ((a > b) || (b == 5)) << " (true OR false -> true)" << endl;
    cout << "(a < b) || (b == 2) : " << ((a < b) || (b == 2)) << " (false OR true -> true)" << endl;
    cout << "(a < b) || (b == 5) : " << ((a < b) || (b == 5)) << " (false OR false -> false)" << endl;

    cin.get();
    return 0;
}