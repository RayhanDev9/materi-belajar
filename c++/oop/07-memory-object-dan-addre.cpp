#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

class Mahasiswa {
public:
    string nama; // std::string biasanya berukuran 24 atau 32 byte (tergantung compiler/arsitektur)
    int usia;    // int berukuran 4 byte
    char nilai;  // char berukuran 1 byte (+ padding memory alignment)

    Mahasiswa(string n, int u, char g) : nama(n), usia(u), nilai(g) {}

    void sapa() const {
        cout << "Halo, saya " << nama << ", usia " << usia << " tahun." << endl;
    }
};

int main() {
    cout << "==========================================================" << endl;
    cout << "   07. DEMO MEMORY OBJECT DAN ADDRESS DI C++             " << endl;
    cout << "==========================================================" << endl;

    // 1. Objek di Stack
    Mahasiswa mhs1("Rayhan", 20, 'A');
    Mahasiswa mhs2("Budi", 21, 'B');

    cout << "\n--- 1. UKURAN OBJEK DI MEMORI (SIZEOF) ---" << endl;
    cout << "Ukuran objek mhs1 : " << sizeof(mhs1) << " bytes" << endl;
    cout << "Ukuran string     : " << sizeof(string) << " bytes" << endl;
    cout << "Ukuran int        : " << sizeof(int) << " bytes" << endl;
    cout << "Ukuran char       : " << sizeof(char) << " bytes" << endl;
    cout << "> Catatan: Ukuran total objek mencakup *memory alignment/padding*." << endl;

    cout << "\n--- 2. ALAMAT OBJEK & MEMBER DI STACK ---" << endl;
    cout << "Alamat mhs1 (base address) : " << &mhs1 << endl;
    cout << "  - Alamat member 'nama'   : " << &(mhs1.nama) << endl;
    cout << "  - Alamat member 'usia'   : " << &(mhs1.usia) << endl;
    // Alamat char harus di-cast ke (void*) agar dicetak sebagai hex address, bukan karakter
    cout << "  - Alamat member 'nilai'  : " << (void*)&(mhs1.nilai) << endl;

    cout << "\nAlamat mhs2 (objek lain)   : " << &mhs2 << endl;
    cout << "> Perhatikan: Objek di stack dialokasikan berdekatan." << endl;

    cout << "\n--- 3. PERBANDINGAN ALAMAT STACK VS HEAP ---" << endl;
    // 2. Objek di Heap (alokasi dinamis via pointer)
    Mahasiswa* mhsHeap = new Mahasiswa("Andi", 22, 'A');

    cout << "Alamat pointer mhsHeap itu sendiri (di Stack) : " << &mhsHeap << endl;
    cout << "Alamat objek tujuan yang ditunjuk (di Heap)   : " << mhsHeap << endl;
    cout << "> Alamat Stack dan Heap berada di rentang memori yang sangat berbeda." << endl;

    cout << "\n--- 4. AKSES MEMBER VIA POINTER ---" << endl;
    // Operator panah (->) sama dengan (*pointer).member
    cout << "Akses via (*mhsHeap).nama : " << (*mhsHeap).nama << endl;
    cout << "Akses via mhsHeap->nama   : " << mhsHeap->nama << endl;

    // Bersihkan alokasi heap manual
    delete mhsHeap;
    mhsHeap = nullptr;

    cout << "\n==========================================================" << endl;
    cout << "Program selesai tanpa kebocoran memori (memory leak)." << endl;
    cout << "==========================================================" << endl;

    return 0;
}