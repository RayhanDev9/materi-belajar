#include <iostream>

using namespace std;

int main() {
    double angka1, angka2;
    char operasi;

    cout << "=== KALKULATOR SEDERHANA ===" << endl;
    cout << "Masukkan angka pertama : ";
    cin >> angka1;

    cout << "Masukkan operator (+, -, *, /) : ";
    cin >> operasi;

    cout << "Masukkan angka kedua   : ";
    cin >> angka2;

    cout << "\nHasil: ";

    switch (operasi) {
        case '+':
            cout << angka1 << " + " << angka2 << " = " << angka1 + angka2 << endl;
            break;

        case '-':
            cout << angka1 << " - " << angka2 << " = " << angka1 - angka2 << endl;
            break;

        case '*':
            cout << angka1 << " * " << angka2 << " = " << angka1 * angka2 << endl;
            break;

        case '/':
            if (angka2 != 0) {
                cout << angka1 << " / " << angka2 << " = " << angka1 / angka2 << endl;
            } else {
                cout << "Error! Pembagian dengan angka nol tidak dapat dilakukan." << endl;
            }
            break;

        default:
            cout << "Error! Operator '" << operasi << "' tidak valid." << endl;
            break;
    }

    return 0;
}