#include <iostream>
#include <string>

using namespace std;

class Player {
public:
    string nama;

    // Constructor
    Player(const string& nama) {
        this->nama = nama;
        cout << "Player " << this->nama << " Dibuat" << endl;
    }

    // Destructor
    ~Player() {
        cout << "Player " << this->nama << " Dihapus" << endl;
    }
};

void membuatPlayerStack() {
    cout << "\n--- 1. Player di Stack ---" << endl;
    Player stackPlayer = Player("Stack");
    // Destructor dipanggil secara otomatis saat keluar dari scope fungsi ini
}

void membuatPlayerHeap() {
    cout << "\n--- 2. Player di Heap ---" << endl;
    Player* heapPlayer = new Player("Heap");
    // Destructor dipanggil saat keyword 'delete' dieksekusi secara manual
    delete heapPlayer;
}

void membuatPlayerStackPointer(Player*& playerPointer) {
    cout << "\n--- 3. Player Stack Pointer (Dangling Pointer Demo) ---" << endl;
    Player stackPlayer = Player("Stack Pointer");
    playerPointer = &stackPlayer; // Menunjuk ke alamat memori stack lokal
    // stackPlayer dihancurkan saat keluar dari fungsi ini
}

void membuatPlayerHeapPointer(Player*& playerPointer) {
    cout << "\n--- 4. Player Heap Pointer ---" << endl;
    Player* heapPlayer = new Player("Heap Pointer");
    playerPointer = heapPlayer; // Heap memory tetap valid sampai di-delete di main
}

Player createStackPlayer() {
    Player stackPlayer = Player("Create Stack");
    return stackPlayer;
}

Player* createHeapPlayer() {
    Player* heapPlayer = new Player("Create Heap");
    return heapPlayer;
}

int main() {
    cout << "==========================================================" << endl;
    cout << "   08. DEMO DESTRUCTOR & MEMORY MANAGEMENT DI C++       " << endl;
    cout << "==========================================================" << endl;

    // 1 & 2. Heap vs Stack Lifecycle
    membuatPlayerStack();
    membuatPlayerHeap();

    // 3. Stack Pointer Hazards (Dangling Pointer)
    Player* playerPointerStack = nullptr;
    membuatPlayerStackPointer(playerPointerStack);
    // playerPointerStack sekarang menjadi dangling pointer (memori stack sudah di-deallocate)

    // 4. Heap Pointer via Reference
    Player* playerPointerHeap = nullptr;
    membuatPlayerHeapPointer(playerPointerHeap);
    cout << "Mengakses heap player dari main: " << playerPointerHeap->nama << endl;
    delete playerPointerHeap; // Wajib di-delete agar tidak memory leak
    playerPointerHeap = nullptr;

    // 5. Return Object (Stack vs Heap)
    cout << "\n--- 5. Return Object ---" << endl;

    cout << "\na. Return Stack Object:" << endl;
    Player playerReturnStack = createStackPlayer();
    cout << "Nama player: " << playerReturnStack.nama << endl;

    cout << "\nb. Return Heap Object:" << endl;
    Player* playerReturnHeap = createHeapPlayer();
    cout << "Nama player: " << playerReturnHeap->nama << endl;
    delete playerReturnHeap; // Wajib di-delete
    playerReturnHeap = nullptr;

    cout << "\n--- SELESAI MAIN ---" << endl;
    return 0;
}