#include <iostream>
#include <cmath> // Pustaka standar fungsi matematika C++

using namespace std;

/*
  DAFTAR FUNGSI PUSTAKA <cmath>:
  ceil(x)       <- pembulatan ke atas
  floor(x)      <- pembulatan ke bawah
  round(x)      <- pembulatan ke bilangan bulat terdekat
  fabs(x)       <- nilai absolut (mutlak / selalu positif) pecahan
  fmod(x, y)    <- sisa bagi (modulus) bilangan desimal
  pow(x, y)     <- perpangkatan (x pangkat y)
  sqrt(x)       <- akar kuadrat
  cbrt(x)       <- akar pangkat tiga
  exp(x)        <- eksponen e pangkat x (e ≈ 2.71828)
  log(x)        <- logaritma natural (basis e / ln)
  log10(x)      <- logaritma basis 10
  sin(x)        <- sinus (sudut dalam radian)
  cos(x)        <- cosinus (sudut dalam radian)
  tan(x)        <- tangen (sudut dalam radian)
*/

int main() {
    cout << "=== DEMO FUNGSI MATEMATIKA (<cmath>) ===" << endl;

    // 1. Pembulatan
    cout << "ceil(4.2)      = " << ceil(4.2) << "   (dibulatkan ke atas)" << endl;
    cout << "floor(4.8)     = " << floor(4.8) << "   (dibulatkan ke bawah)" << endl;
    cout << "round(4.5)     = " << round(4.5) << "   (dibulatkan ke terdekat)" << endl;

    cout << "\n";

    // 2. Pangkat dan Akar
    cout << "pow(2, 3)      = " << pow(2, 3) << "     (2 pangkat 3)" << endl;
    cout << "sqrt(64)       = " << sqrt(64) << "     (akar kuadrat dari 64)" << endl;
    cout << "cbrt(27)       = " << cbrt(27) << "     (akar pangkat 3 dari 27)" << endl;

    cout << "\n";

    // 3. Nilai Mutlak & Modulus Desimal
    cout << "fabs(-7.8)     = " << fabs(-7.8) << "   (menghilangkan tanda negatif)" << endl;
    cout << "fmod(7.5, 2.0) = " << fmod(7.5, 2.0) << "   (sisa bagi 7.5 dibagi 2.0)" << endl;

    cout << "\n";

    // 4. Eksponen & Logaritma
    cout << "exp(1)         = " << exp(1) << " (nilai bilangan e)" << endl;
    cout << "log(2.71828)   = " << log(2.71828) << " (ln dari e ≈ 1)" << endl;
    cout << "log10(1000)    = " << log10(1000) << "     (log basis 10 dari 1000)" << endl;

    cout << "\n";

    // 5. Trigonometri (Input sudut harus dalam satuan radian)
    double pi = 3.14159265;
    cout << "sin(pi / 2)    = " << sin(pi / 2) << "     (sin 90 derajat)" << endl;
    cout << "cos(0)         = " << cos(0) << "     (cos 0 derajat)" << endl;
    cout << "tan(pi / 4)    = " << tan(pi / 4) << " (tan 45 derajat)" << endl;

    return 0;
}