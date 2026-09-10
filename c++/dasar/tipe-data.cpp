#include <iostream>
#include <limits>
using namespace std;

int main() {
    // Bilangan Bulat
    unsigned int a = 5;
    long long b = 6LL; // Diubah ke long long (pasti 8 byte di Windows & Linux)
    short c = 7;

    // Bilangan Desimal
    float d = 1.0f;
    double e = 2.5;

    // Karakter & Boolean
    char f = 'a';
    bool g = true;

    // 1. Unsigned Int
    cout << "=== UNSIGNED INT ===" << endl;
    cout << "Nilai a        : " << a << endl;
    cout << "Ukuran         : " << sizeof(a) << " byte" << endl;
    cout << "Nilai Max      : " << numeric_limits<unsigned int>::max() << endl;
    cout << "Nilai Min      : " << numeric_limits<unsigned int>::min() << "\n" << endl;

    // 2. Long Long (Perbaikan di sini)
    cout << "=== LONG LONG ===" << endl;
    cout << "Nilai b        : " << b << endl;
    cout << "Ukuran         : " << sizeof(b) << " byte" << endl;
    cout << "Nilai Max      : " << numeric_limits<long long>::max() << endl;
    cout << "Nilai Min      : " << numeric_limits<long long>::min() << "\n" << endl;

    // 3. Short
    cout << "=== SHORT ===" << endl;
    cout << "Nilai c        : " << c << endl;
    cout << "Ukuran         : " << sizeof(c) << " byte" << endl;
    cout << "Nilai Max      : " << numeric_limits<short>::max() << endl;
    cout << "Nilai Min      : " << numeric_limits<short>::min() << "\n" << endl;

    // 4. Float
    cout << "=== FLOAT ===" << endl;
    cout << "Nilai d        : " << d << endl;
    cout << "Ukuran         : " << sizeof(d) << " byte" << endl;
    cout << "Nilai Max      : " << numeric_limits<float>::max() << endl;
    cout << "Nilai Min (Positif Terkecil): " << numeric_limits<float>::min() << "\n" << endl;

    // 5. Double
    cout << "=== DOUBLE ===" << endl;
    cout << "Nilai e        : " << e << endl;
    cout << "Ukuran         : " << sizeof(e) << " byte" << endl;
    cout << "Nilai Max      : " << numeric_limits<double>::max() << endl;
    cout << "Nilai Min (Positif Terkecil): " << numeric_limits<double>::min() << "\n" << endl;

    // 6. Char (dikonversi ke int agar tercetak angka kode ASCII)
    cout << "=== CHAR ===" << endl;
    cout << "Karakter f     : " << f << endl;
    cout << "Ukuran         : " << sizeof(f) << " byte" << endl;
    cout << "ASCII Max      : " << (int)numeric_limits<char>::max() << endl;
    cout << "ASCII Min      : " << (int)numeric_limits<char>::min() << "\n" << endl;

    // 7. Bool (true/false)
    cout << "=== BOOLEAN ===" << endl;
    cout << "Nilai g (angka): " << g << endl;
    cout << "Nilai g (teks) : " << boolalpha << g << noboolalpha << endl;
    cout << "Ukuran         : " << sizeof(g) << " byte" << endl;

    cin.get();
    return 0;
}