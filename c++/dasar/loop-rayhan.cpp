#include <iostream>

using namespace std;

int main() {
    int tinggi = 7; // Jumlah baris vertikal

    for (int i = 0; i < tinggi; i++) {
        
        // --- Huruf R ---
        for (int j = 0; j < 5; j++) {
            if (j == 0 || 
               ((i == 0 || i == 3) && j < 4) || 
               (j == 4 && (i == 1 || i == 2)) || 
               (j == i - 2 && i >= 3)) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
        cout << "  "; // Jarak antar-huruf

        // --- Huruf A ---
        for (int j = 0; j < 5; j++) {
            if (((j == 0 || j == 4) && i != 0) || 
                (i == 0 && j > 0 && j < 4) || 
                (i == 3)) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
        cout << "  ";

        // --- Huruf Y ---
        for (int j = 0; j < 5; j++) {
            if (((j == i || j == 4 - i) && i <= 2) || 
                (j == 2 && i > 2)) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
        cout << "  ";

        // --- Huruf H ---
        for (int j = 0; j < 5; j++) {
            if (j == 0 || j == 4 || i == 3) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
        cout << "  ";

        // --- Huruf A ---
        for (int j = 0; j < 5; j++) {
            if (((j == 0 || j == 4) && i != 0) || 
                (i == 0 && j > 0 && j < 4) || 
                (i == 3)) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
        cout << "  ";

        // --- Huruf N ---
        for (int j = 0; j < 7; j++) {
            if (j == 0 || j == 6 || j == i) {
                cout << "*";
            } else {
                cout << " ";
            }
        }

        // Pindah baris
        cout << endl;
    }

    return 0;
}