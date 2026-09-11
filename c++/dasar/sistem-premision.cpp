#include <iostream>
#include <bitset>
#include <cstdint>

using namespace std;

// 1. Tentukan bit flag untuk tiap permission
const uint8_t PERM_READ    = 1 << 0; // 00000001 (1)
const uint8_t PERM_WRITE   = 1 << 1; // 00000010 (2)
const uint8_t PERM_EXECUTE = 1 << 2; // 00000100 (4)

// Fungsi helper untuk mengecek izin
bool hasPermission(uint8_t userPerm, uint8_t targetPerm) {
    // Jika hasil bitwise AND bukan 0, berarti izin tersebut aktif
    return (userPerm & targetPerm) != 0;
}

// Fungsi helper untuk mencetak status hak akses
void cetakStatus(uint8_t perm) {
    cout << "Biner izin  : " << bitset<8>(perm) << endl;
    cout << "Bisa Read   : " << (hasPermission(perm, PERM_READ) ? "YA" : "TIDAK") << endl;
    cout << "Bisa Write  : " << (hasPermission(perm, PERM_WRITE) ? "YA" : "TIDAK") << endl;
    cout << "Bisa Execute: " << (hasPermission(perm, PERM_EXECUTE) ? "YA" : "TIDAK") << endl;
    cout << "------------------------------------------" << endl;
}

int main() {
    // Inisialisasi: Pengguna baru belum punya izin apa pun
    uint8_t userPermission = 0; // 00000000

    cout << "=== 1. PERMISSION AWAL ===" << endl;
    cetakStatus(userPermission);

    // Operasi 1: Berikan izin READ dan WRITE (Gunakan Bitwise OR '|')
    // 00000001 | 00000010 = 00000011
    userPermission = userPermission | PERM_READ | PERM_WRITE;
    cout << "=== 2. SETELAH DIBERI READ & WRITE ===" << endl;
    cetakStatus(userPermission);

    // Operasi 2: Tambahkan izin EXECUTE (Shorthand '|=')
    userPermission |= PERM_EXECUTE;
    cout << "=== 3. SETELAH DITAMBAH EXECUTE ===" << endl;
    cetakStatus(userPermission);

    // Operasi 3: Cabut izin WRITE (Gunakan '& ~')
    // ~PERM_WRITE membalik 00000010 jadi 11111101, lalu di-AND-kan
    userPermission &= ~PERM_WRITE;
    cout << "=== 4. SETELAH IZIN WRITE DICABUT ===" << endl;
    cetakStatus(userPermission);

    // Operasi 4: Toggle izin READ (Jika aktif jadi nonaktif, jika nonaktif jadi aktif via '^=')
    userPermission ^= PERM_READ;
    cout << "=== 5. SETELAH PERM_READ DI-TOGGLE (MATI) ===" << endl;
    cetakStatus(userPermission);

    return 0;
}