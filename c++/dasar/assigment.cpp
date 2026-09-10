#include <iostream>

using namespace std;

int main() {
    int a = 10;

    cout << "=== OPERATOR PENUGASAN (ASSIGNMENT OPERATOR) ===" << endl;
    cout << "Nilai awal a = " << a << "\n" << endl;

    // 1. Basic Assignment (=)
    a = 20;
    cout << "a  = 20  -> a sekarang: " << a << endl;

    // 2. Addition Assignment (+=) -> a = a + 5
    a += 5;
    cout << "a += 5   -> a sekarang: " << a << endl;

    // 3. Subtraction Assignment (-=) -> a = a - 3
    a -= 3;
    cout << "a -= 3   -> a sekarang: " << a << endl;

    // 4. Multiplication Assignment (*=) -> a = a * 2
    a *= 2;
    cout << "a *= 2   -> a sekarang: " << a << endl;

    // 5. Division Assignment (/=) -> a = a / 4
    a /= 4;
    cout << "a /= 4   -> a sekarang: " << a << endl;

    // 6. Modulus Assignment (%=) -> a = a % 5
    a %= 5;
    cout << "a %= 5   -> a sekarang: " << a << endl;

    return 0;
}