#include <iostream>

using namespace std;

// 1. Fungsi menerima pointer untuk mengubah nilai asli (Pass by Pointer)
void kalikanDua(int *ptr) {
    // Mengecek apakah pointer tidak kosong (null check)
    if (ptr != nullptr) {
        *ptr = (*ptr) * 2; // Mengalikan isi nilai di alamat tersebut
    }
}

// 2. Fungsi menukar dua data lewat pointer
void tukarData(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// 3. Fungsi memproses array menggunakan pointer
// Nama array di C++ otomatis meluruh menjadi pointer ke elemen pertamanya
void cetakArray(const int *arr, int ukuran) {
    for (int i = 0; i < ukuran; i++) {
        // Mengakses data bisa pakai *(arr + i) atau arr[i]
        cout << *(arr + i) << " ";
    }
    cout << endl;
}

// 4. Fungsi mengembalikan pointer (Return Pointer)
// Mengembalikan pointer ke elemen angka terbesar di dalam array
int* cariMaksimum(int *arr, int ukuran) {
    if (ukuran <= 0) return nullptr;

    int *ptrMaks = &arr[0];
    for (int i = 1; i < ukuran; i++) {
        if (arr[i] > *ptrMaks) {
            ptrMaks = &arr[i]; // Simpan alamat elemen yang lebih besar
        }
    }
    return ptrMaks;
}

int main() {
    // --- Uji Coba 1: Mengubah Nilai ---
    int angka = 15;
    cout << "Nilai awal angka              : " << angka << endl;
    
    kalikanDua(&angka); // Mengirim alamat memori variabel 'angka'
    cout << "Setelah kalikanDua(&angka)    : " << angka << endl;

    cout << "\n----------------------------------------\n" << endl;

    // --- Uji Coba 2: Menukar Nilai ---
    int x = 10, y = 50;
    cout << "Sebelum tukar : x = " << x << ", y = " << y << endl;
    tukarData(&x, &y);
    cout << "Setelah tukar : x = " << x << ", y = " << y << endl;

    cout << "\n----------------------------------------\n" << endl;

    // --- Uji Coba 3: Array & Return Pointer ---
    int data[] = {12, 45, 7, 89, 23};
    int n = sizeof(data) / sizeof(data[0]);

    cout << "Isi array: ";
    cetakArray(data, n); // Mengirim nama array (berlaku sebagai pointer)

    // Memanggil fungsi yang mengembalikan pointer
    int *ptrHasil = cariMaksimum(data, n);
    if (ptrHasil != nullptr) {
        cout << "Nilai terbesar di array       : " << *ptrHasil << endl;
        cout << "Alamat memori angka terbesar  : " << ptrHasil << endl;
    }

    return 0;
}