#include <iostream>

using namespace std;

// Class untuk contoh dynamic_cast (butuh class polimorfik / minimal 1 virtual method)
class Hewan {
public:
    virtual void bersuara() {
        cout << "Suara hewan umum..." << endl;
    }
    virtual ~Hewan() = default; // Destructor virtual
};

class Kucing : public Hewan {
public:
    void bersuara() override {
        cout << "Meong!" << endl;
    }
    void cakar() {
        cout << "Kucing mencakar sofa!" << endl;
    }
};

int main() {
    // ==========================================
    // 1. static_cast (Paling Sering Digunakan)
    // ==========================================
    cout << "=== 1. STATIC_CAST ===" << endl;
    int totalNilai = 17;
    int jumlahSiswa = 5;

    // Tanpa cast: 17 / 5 = 3 (pembagian integer membuang koma)
    double rataBiasa = totalNilai / jumlahSiswa;
    cout << "Tanpa cast (salah) : " << rataBiasa << endl; // Output: 3

    // Dengan static_cast: salah satu diubah jadi double sebelum dibagi
    double rataCast = static_cast<double>(totalNilai) / jumlahSiswa;
    cout << "Pakai static_cast  : " << rataCast << endl; // Output: 3.4

    // Konversi char ke int (melihat kode ASCII)
    char huruf = 'A';
    int kodeAscii = static_cast<int>(huruf);
    cout << "Kode ASCII 'A'     : " << kodeAscii << endl << endl;

    // ==========================================
    // 2. const_cast (Menghapus Atribut const)
    // ==========================================
    cout << "=== 2. CONST_CAST ===" << endl;
    const int angkaKonstan = 100;
    // const_cast biasanya dipakai saat harus oper pointer/reference ke fungsi legacy C
    const int* ptrKonst = &angkaKonstan;
    int* ptrBiasa = const_cast<int*>(ptrKonst);

    cout << "Nilai awal ptrBiasa : " << *ptrBiasa << endl;
    cout << endl;

    // ==========================================
    // 3. dynamic_cast (Cek Tipe Objek Turunan di OOP)
    // ==========================================
    cout << "=== 3. DYNAMIC_CAST ===" << endl;
    Hewan* hewanUmum = new Kucing(); // Upcasting aman (Hewan menunjuk ke objek Kucing)

    // Downcasting: kita pastikan apakah benar 'hewanUmum' aslinya adalah Kucing
    Kucing* ptrKucing = dynamic_cast<Kucing*>(hewanUmum);

    if (ptrKucing != nullptr) {
        cout << "Validasi sukses! Objek ini memang benar seekor Kucing." << endl;
        ptrKucing->bersuara();
        ptrKucing->cakar();
    } else {
        cout << "Gagal cast: Objek bukan Kucing!" << endl;
    }

    delete hewanUmum; // Bersihkan memori
    cout << endl;

    // ==========================================
    // 4. reinterpret_cast (Level Rendah / Alamat Memori)
    // ==========================================
    cout << "=== 4. REINTERPRET_CAST ===" << endl;
    int angka = 65;
    // Mengubah pointer int menjadi pointer char mentah tanpa konversi nilai
    char* ptrChar = reinterpret_cast<char*>(&angka);

    cout << "Nilai integer asli : " << angka << endl;
    cout << "Dibaca sebagai byte: " << *ptrChar << endl; // Mencetak karakter 'A' (ASCII 65)

    return 0;
}