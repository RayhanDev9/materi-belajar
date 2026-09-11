#include <iostream>

using namespace std;

// 1. GLOBAL VARIABLE
// Dideklarasikan di luar semua fungsi, bisa diakses dari mana saja di seluruh file
int angkaGlobal = 100;

void contohFungsi() {
    // 2. LOCAL VARIABLE (dalam fungsi)
    // Hanya bisa diakses di dalam fungsi contohFungsi()
    int angkaLokalFungsi = 50;

    cout << "[Di dalam contohFungsi]" << endl;
    cout << "Akses angkaGlobal      : " << angkaGlobal << endl;
    cout << "Akses angkaLokalFungsi : " << angkaLokalFungsi << endl;
    cout << endl;
}

int main() {
    // 2. LOCAL VARIABLE (dalam fungsi main)
    // Hanya berlaku di dalam scope fungsi main()
    int angkaLokalMain = 10;

    cout << "[Di dalam main]" << endl;
    cout << "Akses angkaGlobal    : " << angkaGlobal << endl;
    cout << "Akses angkaLokalMain : " << angkaLokalMain << endl;
    cout << endl;

    // Memanggil fungsi eksternal
    contohFungsi();

    // 3. BLOCK SCOPE VARIABLE
    // Dibatasi oleh tanda kurung kurawal { ... }, misalnya dalam if, loop, atau blok mandiri
    {
        int angkaBlok = 25; // Hanya hidup di dalam kurung kurawal ini
        cout << "[Di dalam Block Scope]" << endl;
        cout << "Akses angkaBlok      : " << angkaBlok << endl;
        cout << "Akses angkaLokalMain : " << angkaLokalMain << " (tetap terbaca)" << endl;
        cout << "Akses angkaGlobal    : " << angkaGlobal << " (tetap terbaca)" << endl;
    }

    // Jika baris di bawah ini diaktifkan (uncomment), akan error karena angkaBlok sudah hancur/hilang:
    // cout << angkaBlok << endl; 

    // Variable Shadowing (Scope Resolution)
    // Jika nama variabel lokal sama persis dengan variabel global:
    int angkaGlobal = 999; // Menimpa variabel global di scope lokal ini
    cout << "\n[Variable Shadowing]" << endl;
    cout << "Nilai angkaGlobal lokal              : " << angkaGlobal << endl;
    cout << "Nilai angkaGlobal asli (pakai ::)    : " << ::angkaGlobal << endl;

    return 0;
}