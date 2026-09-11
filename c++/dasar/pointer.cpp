#include <iostream>

using namespace std;

// Fungsi yang menerima parameter berupa pointer
// Tujuannya agar bisa mengubah nilai variabel asli dari dalam fungsi
void ubahNilai(int *ptr) {
    *ptr = 99; // Mengubah nilai pada alamat memori yang ditunjuk
}

int main() {
    int angka = 10;

    // 1. Deklarasi Pointer
    // Tanda '*' menandakan 'ptrAngka' adalah variabel pointer bertipe int
    // Operator '&' (Address-of) digunakan untuk mengambil alamat memori variabel 'angka'
    int *ptrAngka = &angka;

    cout << "=== DASAR POINTER ===" << endl;
    cout << "Nilai dari 'angka'                 : " << angka << endl;
    cout << "Alamat memori 'angka' (&angka)     : " << &angka << endl;
    cout << "Isi variabel pointer 'ptrAngka'    : " << ptrAngka << " (sama dengan alamat &angka)" << endl;

    // 2. Dereference Operator (*)
    // Mengakses atau membaca isi nilai yang ada di alamat memori tersebut
    cout << "Nilai yang ditunjuk (*ptrAngka)    : " << *ptrAngka << endl;

    cout << "\n=== MENGUBAH NILAI LEWAT POINTER ===" << endl;
    // Mengubah nilai variabel 'angka' tanpa menyentuh variabel 'angka' secara langsung
    *ptrAngka = 50;
    cout << "Nilai baru dari 'angka'            : " << angka << endl;
    cout << "Nilai dari (*ptrAngka)             : " << *ptrAngka << endl;

    cout << "\n=== PASS BY POINTER KE FUNGSI ===" << endl;
    // Mengirim alamat memori variabel ke fungsi
    ubahNilai(&angka);
    cout << "Nilai 'angka' setelah ubahNilai()  : " << angka << endl;

    return 0;
}