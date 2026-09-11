#include <iostream>
#include <string>

using namespace std;

int main() {
    string kata1 = "apel";
    string kata2 = "jeruk";
    string kata3 = "apel";

    // 1. Memeriksa Kesamaan (Equality)
    cout << "=== 1. UJI KESAMAAN (== dan !=) ===" << endl;
    if (kata1 == kata3) {
        cout << "\"" << kata1 << "\" SAMA DENGAN \"" << kata3 << "\"" << endl;
    }

    if (kata1 != kata2) {
        cout << "\"" << kata1 << "\" TIDAK SAMA DENGAN \"" << kata2 << "\"" << endl;
    }
    cout << endl;

    // 2. Perbandingan Leksikografis / Urutan Kamus (< dan >)
    cout << "=== 2. URUTAN ALFABET / KAMUS (< dan >) ===" << endl;
    // Huruf 'a' muncul lebih dulu di kamus dibanding huruf 'j', maka 'apel' < 'jeruk'
    if (kata2 < kata1) {
        cout << "\"" << kata2 << "\" muncul lebih dulu di kamus dibanding \"" << kata1 << "\"" << endl;
    } else {
        cout << "\"" << kata1 << "\" muncul lebih dulu di kamus dibanding \"" << kata2 << "\"" << endl;
    }
    cout << endl;

    // 3. Menggunakan method .compare()
    // Mirip strcmp() di C atau localeCompare() di JS
    cout << "=== 3. METHOD .compare() ===" << endl;
    int hasil = kata1.compare(kata3);

    if (hasil == 0) {
        cout << "Kedua string identik (sama persis)" << endl;
    } else if (hasil < 0) {
        cout << "kata1 lebih kecil secara alfabetis dibanding kata2 (hasil: " << hasil << ")" << endl;
    } else {
        cout << "kata1 lebih besar secara alfabetis dibanding kata2 (hasil: " << hasil << ")" << endl;
    }
    cout << endl;

    // 4. Catatan Penting: Case-Sensitive (Huruf Besar vs Kecil)
    cout << "=== 4. CASE-SENSITIVE ===" << endl;
    string teksKecil = "kucing";
    string teksBesar = "Kucing";

    if (teksKecil == teksBesar) {
        cout << "Teks sama" << endl;
    } else {
        cout << "\"" << teksKecil << "\" TIDAK SAMA DENGAN \"" << teksBesar << "\"" << endl;
        // Di tabel ASCII, huruf kapital bernilai lebih kecil dari huruf kecil (K = 75, k = 107)
        if (teksBesar < teksKecil) {
            cout << "Secara ASCII: 'Kucing' bernilai lebih kecil daripada 'kucing'" << endl;
        }
    }

    return 0;
}