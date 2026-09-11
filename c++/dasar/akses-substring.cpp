#include <iostream>
#include <string>

using namespace std;

int main() {
    string kalimat = "Pemrograman C++ Menyenangkan";

    cout << "Kalimat Asli : " << kalimat << "\n\n";

    // 1. Mengambil dari indeks tertentu dengan panjang tertentu
    // Mulai dari indeks 0, ambil sebanyak 11 karakter -> "Pemrograman"
    string kataPertama = kalimat.substr(0, 11);
    cout << "1. Kata Pertama        : " << kataPertama << endl;

    // 2. Mengambil kata di tengah
    // Mulai dari indeks 12, ambil sebanyak 3 karakter -> "C++"
    string kataTengah = kalimat.substr(12, 3);
    cout << "2. Kata Tengah         : " << kataTengah << endl;

    // 3. Mengambil hingga karakter paling ujung (tanpa parameter kedua)
    // Mulai dari indeks 16 sampai akhir kalimat -> "Menyenangkan"
    string kataAkhir = kalimat.substr(0);
    cout << "3. Sampai Akhir        : " << kataAkhir << endl;

    // 4. Kombinasi praktis: Mengambil domain dari alamat email menggunakan .find()
    string email = "rayhan@example.com";
    size_t posisiAt = email.find('@');

    if (posisiAt != string::npos) {
        // Ambil nama user (dari indeks 0 sebanyak posisi '@')
        string username = email.substr(0, posisiAt);

        // Ambil domain (mulai dari karakter setelah '@' sampai ujung)
        string domain = email.substr(posisiAt + 1);

        cout << "\n=== Studi Kasus Email ===" << endl;
        cout << "Email    : " << email << endl;
        cout << "Username : " << username << endl;
        cout << "Domain   : " << domain << endl;
    }

    return 0;
}