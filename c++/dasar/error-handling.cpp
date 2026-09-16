#include <iostream>
#include <stdexcept> // Diperlukan untuk exception bawaan seperti invalid_argument & runtime_error

using namespace std;

// Fungsi pembagian dengan validasi
double bagi(double pembilang, double penyebut) {
    if (penyebut == 0) {
        // Melempar exception jika pembagi nol
        throw runtime_error("Eror Matematika: Pembagian dengan nol tidak diperbolehkan!");
    }
    
    if (pembilang < 0 || penyebut < 0) {
        // Melempar exception jenis lain untuk input negatif
        throw invalid_argument("Eror Argumen: Angka tidak boleh bernilai negatif!");
    }

    return pembilang / penyebut;
}


int main() {
    double a = 'r';
    double b = 0; // Ubah nilai ini untuk menguji kondisi lain (misal: -5 atau 2)

    double c = 20;
    double d = 30;

    try {
        cout << "Mencoba menghitung pembagian..." << endl;
        double hasil = bagi(a, b);
        
        // Baris ini dilewati jika fungsi 'bagi' melempar throw
        cout << "Hasil pembagian: " << hasil << endl;
    }
    // Menangkap tipe invalid_argument secara spesifik
    catch (const invalid_argument& err) {
        cerr << "[Ditangkap invalid_argument]: " << err.what() << endl;
    }
    // Menangkap tipe runtime_error secara spesifik
    catch (const runtime_error& err) {
        cerr << "[Ditangkap runtime_error]: " << err.what() << endl;
    }
    // Menangkap seluruh error turunan std::exception lainnya
    catch (const exception& err) {
        cerr << "[Ditangkap exception umum]: " << err.what() << endl;
    }
    // Catch-all (mirip catch default) untuk tipe primitif non-objek
    catch (...) {
        cerr << "Terjadi kesalahan yang tidak dikenal!" << endl;
    }

   

    cout << "\nProgram tetap berjalan dengan lancar sampai selesai." << endl;
    return 0;
}