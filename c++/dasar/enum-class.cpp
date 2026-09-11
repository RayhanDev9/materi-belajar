#include <iostream>
#include <string>

using namespace std;

// 1. Definisi enum class
enum class StatusPengiriman {
    Diproses,   // bernilai 0 di balik layar
    Dikirim,    // bernilai 1
    Selesai,    // bernilai 2
    Dibatalkan  // bernilai 3
};

// 2. Fungsi pembantu untuk mengubah enum menjadi teks yang mudah dibaca
string getNamaStatus(StatusPengiriman status) {
    switch (status) {
        case StatusPengiriman::Diproses:
            return "Pesanan sedang diproses di gudang.";
        case StatusPengiriman::Dikirim:
            return "Paket sedang dalam perjalanan bersama kurir.";
        case StatusPengiriman::Selesai:
            return "Paket telah diterima oleh pembeli.";
        case StatusPengiriman::Dibatalkan:
            return "Pesanan dibatalkan.";
    }
    return "Status tidak dikenal.";
}

int main() {
    // Membuat variabel bertipe enum
    StatusPengiriman statusPaket = StatusPengiriman::Diproses;

    cout << "Status 1 : " << getNamaStatus(statusPaket) << endl;

    // Mengubah status paket
    statusPaket = StatusPengiriman::Dikirim;
    cout << "Status 2 : " << getNamaStatus(statusPaket) << endl;

    // Pengecekan kondisi menggunakan enum
    if (statusPaket == StatusPengiriman::Dikirim) {
        cout << "Peringatan: Pastikan nomor HP aktif untuk dihubungi kurir!" << endl;
    }

    // Mengintip nilai integer aslinya menggunakan static_cast
    cout << "\nNilai biner/integer dari StatusPengiriman::Dikirim adalah : " 
         << static_cast<int>(statusPaket) << endl;

    return 0;
}