#include <iostream>
#include <string>

using namespace std;

// 1. Fungsi mengganti SATU kata pertama yang cocok
bool gantiSatuKata(string &teks, const string &cari, const string &ganti) {
    size_t pos = teks.find(cari);
    if (pos != string::npos) {
        // teks.replace(posisi_mulai, panjang_kata_lama, kata_baru)
        teks.replace(pos, cari.length(), ganti);
        return true;
    }
    return false; // Kata target tidak ditemukan
}

// 2. Fungsi mengganti SEMUA kata yang cocok (Replace All)
void gantiSemuaKata(string &teks, const string &cari, const string &ganti) {
    if (cari.empty()) return;

    size_t pos = 0;
    while ((pos = teks.find(cari, pos)) != string::npos) {
        teks.replace(pos, cari.length(), ganti);
        // Geser posisi pencarian berikutnya agar tidak looping tanpa henti
        pos += ganti.length();
    }
}

int main() {
    // Kasus 1: Substitusi Manual / Berdasarkan Posisi
    string teks1 = "Saya suka kopi hitam";
    cout << "Teks awal 1 : " << teks1 << endl;

    // Ganti kata "kopi" (mulai indeks 10, panjang 4 huruf) jadi "teh"
    teks1.replace(10, 4, "teh");
    cout << "Hasil 1     : " << teks1 << "\n\n";

    // Kasus 2: Substitusi Dinamis (Satu Kata Pertama)
    string teks2 = "Belajar JavaScript itu seru. JavaScript itu fleksibel.";
    cout << "Teks awal 2 : " << teks2 << endl;

    gantiSatuKata(teks2, "JavaScript", "C++");
    cout << "Hasil 2     : " << teks2 << "\n\n";

    // Kasus 3: Substitusi Global (Ganti Semua Kata)
    string teks3 = "kucing makan ikan bersama kucing lain dan anak kucing.";
    cout << "Teks awal 3 : " << teks3 << endl;

    gantiSemuaKata(teks3, "kucing", "harimau");
    cout << "Hasil 3     : " << teks3 << endl;

    return 0;
}