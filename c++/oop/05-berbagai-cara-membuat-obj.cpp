#include <iostream>
#include <string>
#include <memory> // Dibutuhkan untuk std::unique_ptr dan std::make_unique

using namespace std;

class Mahasiswa {
public:
    string nama;
    int usia;

    // Default Constructor
    Mahasiswa() : nama("Anonim"), usia(0) {
        cout << "[Constructor] Mahasiswa default dibuat" << endl;
    }

    // Parameterized Constructor
    Mahasiswa(string n, int u) : nama(n), usia(u) {
        cout << "[Constructor] Mahasiswa dibuat: " << nama << endl;
    }

    // Destructor (membuktikan kapan objek hancur dari memori)
    ~Mahasiswa() {
        cout << "[Destructor] Mahasiswa dihancurkan: " << nama << endl;
    }

    void sapa() const {
        cout << "Halo, nama saya " << nama << ", usia " << usia << " tahun." << endl;
    }
};

// Struct untuk contoh Aggregate Initialization
struct Titik {
    int x;
    int y;
};

// Fungsi pembantu untuk menguji objek sementara (temporary object)
void cetakInfo(const Mahasiswa& m) {
    cout << ">> Info diterima: " << m.nama << endl;
}

int main() {
    cout << "=== 1. ALOKASI DI STACK ===" << endl;
    // a. Default Constructor (Perhatian: jangan tulis 'Mahasiswa m1();')
    Mahasiswa m1;
    m1.sapa();

    

    // b. Direct Initialization
    Mahasiswa m2("Budi", 21);
    m2.sapa();


    // c. Uniform / Brace Initialization (Modern C++11)
    Mahasiswa m3{"Siti", 20};
    m3.sapa();



    cout << "\n=== 2. ALOKASI DI HEAP (MANUAL DENGAN NEW/DELETE) ===" << endl;
    // Alokasi manual menggunakan pointer
    Mahasiswa* ptr = new Mahasiswa("Andi", 22);
    ptr->sapa(); // Akses member pointer menggunakan panah (->)
 

    // Wajib delete manual agar tidak memory leak
    delete ptr;
    ptr = nullptr;

    cout << "\n=== 3. ALOKASI DI HEAP SECARA MODERN (SMART POINTER) ===" << endl;
    {
        // Masuk ke scope khusus {}
        // make_unique otomatis melakukan delete saat keluar dari tanda kurung kurawal ini
        auto smartPtr = make_unique<Mahasiswa>("Rina", 19);
        smartPtr->sapa();
        cout << "-- Keluar dari scope smart pointer --" << endl;

        auto smartPtrr = make_unique<Mahasiswa>("Rina",22);
    } 

    cout << "\n=== 4. OBJEK SEMENTARA (TEMPORARY / ANONYMOUS OBJECT) ===" << endl;
    // Dibuat langsung pada argumen fungsi, langsung hancur setelah fungsi selesai
    cetakInfo(Mahasiswa("Anonim Sementara", 18));

    cout << "\n=== 5. AGGREGATE INITIALIZATION (STRUCT / CLASS TANPA CONSTRUCTOR) ===" << endl;
    Titik koordinat{10, 25};
    Titik koordinat2{21,43};
    cout << "Koordinat titik: X = " << koordinat.x << ", Y = " << koordinat.y << endl;

    cout << "\n=== PROGRAM UTAMA SELESAI (Objek di stack mulai dihancurkan) ===" << endl;
    return 0;
}