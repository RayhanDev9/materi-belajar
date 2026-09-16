#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {
    // 1. Inisialisasi ifstream dan tentukan file yang ingin dibaca
    ifstream myFile("data.txt");

    // 2. Cek apakah file berhasil dibuka/ditemukan
    if (!myFile.is_open()) {
        cout << "Gagal membuka file! Pastikan 'data1.txt' sudah ada di folder proyek." << endl;
        return 1;
    }


    string baris;
    cout << "=== Isi file data1.text ====";

    while (getline(myFile,baris)) 
    {
      cout << baris << endl;
    }
    
    // 4. Selalu tutup file setelah selesai
    myFile.close();

    return 0;
}