#include <iostream>
#include <fstream>
#include <string>
#include <limits>

using namespace std;

#define MAX 5

// ============================================================================
// HELPER UTILITIES
// ============================================================================
void clearScreen() {
    #ifdef _WIN32
        system("cls");
    #else
        system("clear"); 
    #endif
}

void pause() {
    cout << "\nTekan Enter untuk melanjutkan...";
    string dummy;
    getline(cin, dummy);
}

int getIntInput(const string& prompt) {
    int value;
    while (true) {
        cout << prompt;
        if (cin >> value) {
            string remainder;
            getline(cin, remainder); // Konsumsi sisa baris termasuk newline
            return value;
        } else {
            if (cin.eof()) {
                exit(0); // Keluar jika input stream tertutup (EOF)
            }
            cout << "[ERROR] Masukan harus berupa angka bulat!\n";
            cin.clear();
            string remainder;
            getline(cin, remainder);
        }
    }
}

string getStringInput(const string& prompt) {
    string str;
    cout << prompt;
    getline(cin, str);
    return str;
}

// Pratinjau isi berkas ke layar
void printFileContent(const string& filename) {
    ifstream file(filename);
    if (!file.is_open()) {
        cout << "[INFO] File tidak dapat dibuka untuk pratinjau.\n";
        return;
    }
    cout << "\n================ PRATINJAU FILE ================\n";
    cout << "Nama File: " << filename << "\n";
    cout << "------------------------------------------------\n";
    string line;
    int lineNum = 1;
    bool hasContent = false;
    while (getline(file, line)) {
        cout << "  Baris " << lineNum++ << ": " << line << "\n";
        hasContent = true;
    }
    if (!hasContent) {
        cout << "  (File kosong)\n";
    }
    cout << "================================================\n";
    file.close();
}

// ============================================================================
// 1. CLASS SINGLE STACK
// ============================================================================
class SingleStack {
private:
    int top;
    int data[MAX];

public:
    SingleStack() { top = -1; }

    bool isEmpty() const { return top == -1; }
    bool isFull() const { return top == MAX - 1; }

    void push(int value) {
        if (isFull()) {
            cout << "[ERROR] Stack Penuh (Overflow)! Indeks [0 s.d. " << (MAX - 1) << "] sudah terisi.\n";
        } else {
            top++;
            data[top] = value;
            cout << "[SUKSES] Data " << value << " berhasil dimasukkan ke Stack pada Indeks [" << top << "].\n";
        }
    }

    int pop() {
        if (isEmpty()) {
            cout << "[ERROR] Stack Kosong (Underflow)! Tidak ada data untuk dikeluarkan.\n";
            return -1;
        }
        int val = data[top];
        int idx = top;
        top--;
        cout << "[SUKSES] Data " << val << " berhasil dikeluarkan dari Stack dari Indeks [" << idx << "].\n";
        return val;
    }

    void display() const {
        cout << "\n=== STATUS ARRAY FISIK SINGLE STACK (Kapasitas: " << MAX << ") ===\n";
        for (int i = MAX - 1; i >= 0; i--) {
            cout << "Indeks [" << i << "]: ";
            if (i <= top) {
                cout << "[ " << data[i] << " ]";
                if (i == top) cout << " <-- TOP (Puncak Tumpukan)";
            } else {
                cout << "[ KOSONG ]";
            }
            cout << "\n";
        }
        cout << "------------------------------------------------\n";
        cout << "Pointer Top         : Indeks [" << top << "] " << (isEmpty() ? "(Stack Kosong)" : "") << "\n";
        cout << "Jumlah Elemen Terisi: " << (top + 1) << " dari " << MAX << " slot.\n";
    }

    void saveToFile(const string& filename) const {
        if (isEmpty()) {
            cout << "[PERINGATAN] Stack kosong, tidak ada data untuk disimpan.\n";
            return;
        }
        ofstream file(filename);
        if (!file.is_open()) {
            cout << "[ERROR] Gagal membuka file: " << filename << endl;
            return;
        }
        for (int i = 0; i <= top; i++) {
            file << data[i] << "\n";
        }
        file.close();
        cout << "[SUKSES] Data Stack berhasil disimpan ke file '" << filename << "'.\n";
        printFileContent(filename);
    }

    void loadFromFile(const string& filename) {
        ifstream file(filename);
        if (!file.is_open()) {
            cout << "[ERROR] File '" << filename << "' tidak ditemukan!\n";
            return;
        }
        top = -1; // Reset stack
        int val, count = 0;
        while (file >> val) {
            if (isFull()) {
                cout << "[PERINGATAN] Stack penuh saat membaca file! Sebagian data dilewati.\n";
                break;
            }
            top++;
            data[top] = val;
            count++;
        }
        file.close();
        cout << "[SUKSES] Berhasil memuat " << count << " data dari file '" << filename << "'.\n";
        printFileContent(filename);
    }
};


// ============================================================================
// 2. CLASS DOUBLE STACK
// ============================================================================
class DoubleStack {
private:
    int top1;
    int top2;
    int data[MAX];

public:
    DoubleStack() {
        top1 = -1;
        top2 = MAX;
    }

    bool isFull() const { return (top1 + 1 == top2); }
    bool isEmpty1() const { return top1 == -1; }
    bool isEmpty2() const { return top2 == MAX; }

    void push(int stackChoice, int value) {
        if (isFull()) {
            cout << "[ERROR] Double Stack Penuh (Overflow)! Pointer Top 1 [" << top1 << "] telah bertemu Top 2 [" << top2 << "].\n";
            return;
        }
        if (stackChoice == 1) {
            top1++;
            data[top1] = value;
            cout << "[SUKSES] Data " << value << " masuk ke Stack 1 (Sisi Kiri) pada Indeks [" << top1 << "].\n";
        } else {
            top2--;
            data[top2] = value;
            cout << "[SUKSES] Data " << value << " masuk ke Stack 2 (Sisi Kanan) pada Indeks [" << top2 << "].\n";
        }
    }

    void pop(int stackChoice) {
        if (stackChoice == 1) {
            if (isEmpty1()) {
                cout << "[ERROR] Stack 1 (Sisi Kiri) Kosong!\n";
                return;
            }
            int val = data[top1];
            int idx = top1;
            top1--;
            cout << "[SUKSES] Data " << val << " keluar dari Stack 1 (Sisi Kiri) dari Indeks [" << idx << "].\n";
        } else {
            if (isEmpty2()) {
                cout << "[ERROR] Stack 2 (Sisi Kanan) Kosong!\n";
                return;
            }
            int val = data[top2];
            int idx = top2;
            top2++;
            cout << "[SUKSES] Data " << val << " keluar dari Stack 2 (Sisi Kanan) dari Indeks [" << idx << "].\n";
        }
    }

    void display() const {
        cout << "\n=== STATUS ARRAY FISIK DOUBLE STACK (Kapasitas: " << MAX << ") ===\n";
        for (int i = 0; i < MAX; i++) {
            cout << "Indeks [" << i << "]: ";
            if (i <= top1) {
                cout << "[ " << data[i] << " ] (Stack 1)";
                if (i == top1) cout << " <-- TOP 1 (Puncak Kiri)";
            } else if (i >= top2) {
                cout << "[ " << data[i] << " ] (Stack 2)";
                if (i == top2) cout << " <-- TOP 2 (Puncak Kanan)";
            } else {
                cout << "[ KOSONG ] <--- Slot Bebas";
            }
            cout << "\n";
        }
        cout << "------------------------------------------------\n";
        cout << "Pointer Top 1 (Kiri)  : Indeks [" << top1 << "] " << (isEmpty1() ? "(Kosong)" : "") << "\n";
        cout << "Pointer Top 2 (Kanan) : Indeks [" << top2 << "] " << (isEmpty2() ? "(Kosong)" : "") << "\n";
        cout << "Sisa Slot Bebas       : " << (top2 - top1 - 1) << " slot.\n";
        cout << "Kondisi Overflow      : (Top1 + 1 == Top2)\n";
    }

    void saveToFile(const string& filename) const {
        ofstream file(filename);
        if (!file.is_open()) {
            cout << "[ERROR] Gagal membuka file: " << filename << endl;
            return;
        }
        // Simpan ukuran dan data Stack 1
        file << (top1 + 1) << "\n";
        for (int i = 0; i <= top1; i++) file << data[i] << "\n";
        // Simpan ukuran dan data Stack 2
        file << (MAX - top2) << "\n";
        for (int i = top2; i < MAX; i++) file << data[i] << "\n";
        file.close();
        cout << "[SUKSES] Data Double Stack berhasil disimpan ke file '" << filename << "'.\n";
        printFileContent(filename);
    }

    void loadFromFile(const string& filename) {
        ifstream file(filename);
        if (!file.is_open()) {
            cout << "[ERROR] File '" << filename << "' tidak ditemukan!\n";
            return;
        }
        top1 = -1;
        top2 = MAX;

        int count1, count2, val;
        if (file >> count1) {
            for (int i = 0; i < count1 && !isFull(); i++) {
                if (file >> val) { top1++; data[top1] = val; }
            }
        }
        if (file >> count2) {
            for (int i = 0; i < count2 && !isFull(); i++) {
                if (file >> val) { top2--; data[top2] = val; }
            }
        }
        file.close();
        cout << "[SUKSES] Berhasil membaca data Double Stack dari file '" << filename << "'.\n";
        printFileContent(filename);
    }
};

// ============================================================================
// 3. CLASS LINEAR QUEUE
// ============================================================================
class LinearQueue {
private:
    int front;
    int rear;
    int data[MAX];

public:
    LinearQueue() { front = -1; rear = -1; }

    bool isEmpty() const { return (front == -1 || front > rear); }
    bool isFull() const { return (rear == MAX - 1); }

    void enqueue(int value) {
        if (isFull()) {
            cout << "[ERROR] Linear Queue Penuh (Overflow)!\n";
            if (front > 0) {
                cout << ">> [PENJELASAN PRESENTASI / FALSE OVERFLOW]:\n";
                cout << "   Pointer Rear berada di indeks [" << rear << "] (ujung array).\n";
                cout << "   Padahal indeks [0 s.d. " << (front - 1) << "] KOSONG karena data sudah di-dequeue!\n";
                cout << "   Inilah bukti kelemahan Linear Queue (slot depan terbuang sia-sia).\n";
            }
            return;
        }
        if (front == -1) front = 0;
        rear++;
        data[rear] = value;
        cout << "[SUKSES] Data " << value << " berhasil masuk ke Linear Queue pada Indeks [" << rear << "].\n";
    }

    int dequeue() {
        if (isEmpty()) {
            cout << "[ERROR] Linear Queue Kosong (Underflow)!\n";
            return -1;
        }
        int val = data[front];
        int idx = front;
        front++;
        cout << "[SUKSES] Data " << val << " berhasil keluar dari Linear Queue dari Indeks [" << idx << "].\n";
        if (front > rear) {
            cout << "[INFO] Seluruh data telah habis di-dequeue. Pointer di-reset ke (Front: -1, Rear: -1).\n";
            front = -1; rear = -1;
        }
        return val;
    }

    void display() const {
        cout << "\n=== STATUS ARRAY FISIK LINEAR QUEUE (Kapasitas: " << MAX << ") ===\n";
        for (int i = 0; i < MAX; i++) {
            cout << "Indeks [" << i << "]: ";
            if (!isEmpty() && i >= front && i <= rear) {
                cout << "[ " << data[i] << " ]";
                if (i == front && i == rear) {
                    cout << " <-- FRONT & REAR";
                } else if (i == front) {
                    cout << " <-- FRONT (Depan / Siap Keluar)";
                } else if (i == rear) {
                    cout << " <-- REAR (Belakang / Terakhir Masuk)";
                }
            } else {
                if (front > 0 && i < front) {
                    cout << "[ KOSONG ] (Bekas Dequeue - Terbuang/Tidak Bisa Diisi Lagi)";
                } else {
                    cout << "[ KOSONG ] (Slot Kosong)";
                }
            }
            cout << "\n";
        }
        cout << "------------------------------------------------\n";
        cout << "Pointer Front : Indeks [" << front << "] " << (isEmpty() ? "(Queue Kosong)" : "") << "\n";
        cout << "Pointer Rear  : Indeks [" << rear << "]\n";
        if (isFull() && front > 0) {
            cout << ">> ANALISIS: Terjadi 'False Overflow' (Indeks depan kosong, tapi Rear sudah di ujung!)\n";
        }
    }

    void saveToFile(const string& filename) const {
        if (isEmpty()) {
            cout << "[PERINGATAN] Queue kosong, tidak ada data untuk disimpan.\n";
            return;
        }
        ofstream file(filename);
        if (!file.is_open()) {
            cout << "[ERROR] Gagal membuka file: " << filename << endl;
            return;
        }
        for (int i = front; i <= rear; i++) file << data[i] << "\n";
        file.close();
        cout << "[SUKSES] Data Linear Queue berhasil disimpan ke '" << filename << "'.\n";
        printFileContent(filename);
    }

    void loadFromFile(const string& filename) {
        ifstream file(filename);
        if (!file.is_open()) {
            cout << "[ERROR] File '" << filename << "' tidak ditemukan!\n";
            return;
        }
        front = -1; rear = -1;
        int val, count = 0;
        while (file >> val) {
            if (isFull()) break;
            if (front == -1) front = 0;
            rear++;
            data[rear] = val;
            count++;
        }
        file.close();
        cout << "[SUKSES] Berhasil membaca " << count << " data dari file '" << filename << "'.\n";
        printFileContent(filename);
    }
};

// ============================================================================
// 4. CLASS CIRCULAR QUEUE
// ============================================================================
class CircularQueue {
private:
    int front;
    int rear;
    int data[MAX];

public:
    CircularQueue() { front = -1; rear = -1; }

    bool isEmpty() const { return front == -1; }
    bool isFull() const { return ((rear + 1) % MAX == front); }

    void enqueue(int value) {
        if (isFull()) {
            cout << "[ERROR] Circular Queue Penuh (Overflow)! Indeks [0 s.d. " << (MAX - 1) << "] penuh terpakai.\n";
            cout << ">> Info: (Rear + 1) % MAX == Front [(" << rear << " + 1) % " << MAX << " == " << front << "]\n";
            return;
        }
        if (isEmpty()) {
            front = 0; rear = 0;
        } else {
            rear = (rear + 1) % MAX;
        }
        data[rear] = value;
        cout << "[SUKSES] Data " << value << " masuk ke Circular Queue pada Indeks [" << rear << "].\n";
        if (rear < front) {
            cout << ">> [PENJELASAN PRESENTASI / CIRCULAR WRAP]:\n";
            cout << "   Indeks berhasil MEMUTAR kembali ke indeks [" << rear << "]!\n";
            cout << "   Slot kosong di awal array berhasil dimanfaatkan (solusi Linear Queue).\n";
        }
    }

    int dequeue() {
        if (isEmpty()) {
            cout << "[ERROR] Circular Queue Kosong (Underflow)!\n";
            return -1;
        }
        int val = data[front];
        int idx = front;
        cout << "[SUKSES] Data " << val << " keluar dari Circular Queue dari Indeks [" << idx << "].\n";
        if (front == rear) {
            cout << "[INFO] Elemen terakhir telah keluar. Queue sekarang kosong (Front & Rear di-reset ke -1).\n";
            front = -1; rear = -1;
        } else {
            front = (front + 1) % MAX;
        }
        return val;
    }

    void display() const {
        cout << "\n=== STATUS ARRAY FISIK CIRCULAR QUEUE (Kapasitas: " << MAX << ") ===\n";
        for (int i = 0; i < MAX; i++) {
            cout << "Indeks [" << i << "]: ";
            bool isActive = false;
            if (!isEmpty()) {
                if (front <= rear) {
                    isActive = (i >= front && i <= rear);
                } else {
                    isActive = (i >= front || i <= rear);
                }
            }

            if (isActive) {
                cout << "[ " << data[i] << " ]";
                if (i == front && i == rear) {
                    cout << " <-- FRONT & REAR";
                } else if (i == front) {
                    cout << " <-- FRONT (Awal Antrean)";
                } else if (i == rear) {
                    cout << " <-- REAR (Akhir Antrean)";
                }
            } else {
                cout << "[ KOSONG ]";
            }
            cout << "\n";
        }
        cout << "------------------------------------------------\n";
        cout << "Pointer Front : Indeks [" << front << "] " << (isEmpty() ? "(Queue Kosong)" : "") << "\n";
        cout << "Pointer Rear  : Indeks [" << rear << "]\n";
        if (!isEmpty()) {
            int count = (front <= rear) ? (rear - front + 1) : (MAX - front + rear + 1);
            cout << "Jumlah Elemen : " << count << " dari " << MAX << " slot terpakai.\n";
            cout << "Rumus Modulus : Indeks berikutnya = (Rear + 1) % MAX = (" << rear << " + 1) % " << MAX << " = " << ((rear + 1) % MAX) << "\n";
        }
    }

    void saveToFile(const string& filename) const {
        if (isEmpty()) {
            cout << "[PERINGATAN] Circular Queue kosong, tidak ada data untuk disimpan.\n";
            return;
        }
        ofstream file(filename);
        if (!file.is_open()) {
            cout << "[ERROR] Gagal membuka file: " << filename << endl;
            return;
        }
        int i = front;
        while (true) {
            file << data[i] << "\n";
            if (i == rear) break;
            i = (i + 1) % MAX;
        }
        file.close();
        cout << "[SUKSES] Circular Queue disimpan ke file '" << filename << "'.\n";
        printFileContent(filename);
    }

    void loadFromFile(const string& filename) {
        ifstream file(filename);
        if (!file.is_open()) {
            cout << "[ERROR] File '" << filename << "' tidak ditemukan!\n";
            return;
        }
        front = -1; rear = -1;
        int val, count = 0;
        while (file >> val) {
            if (isFull()) break;
            enqueue(val);
            count++;
        }
        file.close();
        cout << "[SUKSES] Berhasil membaca " << count << " data dari file '" << filename << "'.\n";
        printFileContent(filename);
    }
};

// ============================================================================
// 5. CLASS DOUBLE ENDED QUEUE (DEQUE)
// ============================================================================
class DoubleEndedQueue {
private:
    int front;
    int rear;
    int data[MAX];

public:
    DoubleEndedQueue() { front = -1; rear = -1; }

    bool isEmpty() const { return front == -1; }
    bool isFull() const { return ((front == 0 && rear == MAX - 1) || (front == rear + 1)); }

    void insertFront(int value) {
        if (isFull()) {
            cout << "[ERROR] Deque Penuh! Tidak dapat menambahkan " << value << " di Front.\n";
            return;
        }
        if (isEmpty()) {
            front = 0; rear = 0;
        } else if (front == 0) {
            front = MAX - 1;
        } else {
            front = front - 1;
        }
        data[front] = value;
        cout << "[SUKSES] insertFront: Data " << value << " berhasil dimasukkan pada Indeks [" << front << "].\n";
    }

    void insertRear(int value) {
        if (isFull()) {
            cout << "[ERROR] Deque Penuh! Tidak dapat menambahkan " << value << " di Rear.\n";
            return;
        }
        if (isEmpty()) {
            front = 0; rear = 0;
        } else if (rear == MAX - 1) {
            rear = 0;
        } else {
            rear = rear + 1;
        }
        data[rear] = value;
        cout << "[SUKSES] insertRear: Data " << value << " berhasil dimasukkan pada Indeks [" << rear << "].\n";
    }

    int deleteFront() {
        if (isEmpty()) {
            cout << "[ERROR] Deque Kosong! Tidak ada data untuk di-deleteFront.\n";
            return -1;
        }
        int val = data[front];
        int idx = front;
        cout << "[SUKSES] deleteFront: Data " << val << " berhasil dikeluarkan dari Indeks [" << idx << "].\n";
        if (front == rear) {
            cout << "[INFO] Seluruh elemen telah habis dikeluarkan. Deque di-reset ke (Front: -1, Rear: -1).\n";
            front = -1; rear = -1;
        } else if (front == MAX - 1) {
            front = 0;
        } else {
            front = front + 1;
        }
        return val;
    }

    int deleteRear() {
        if (isEmpty()) {
            cout << "[ERROR] Deque Kosong! Tidak ada data untuk di-deleteRear.\n";
            return -1;
        }
        int val = data[rear];
        int idx = rear;
        cout << "[SUKSES] deleteRear: Data " << val << " berhasil dikeluarkan dari Indeks [" << idx << "].\n";
        if (front == rear) {
            cout << "[INFO] Seluruh elemen telah habis dikeluarkan. Deque di-reset ke (Front: -1, Rear: -1).\n";
            front = -1; rear = -1;
        } else if (rear == 0) {
            rear = MAX - 1;
        } else {
            rear = rear - 1;
        }
        return val;
    }

    void display() const {
        cout << "\n=== STATUS ARRAY FISIK DEQUE (Kapasitas: " << MAX << ") ===\n";
        for (int i = 0; i < MAX; i++) {
            cout << "Indeks [" << i << "]: ";
            bool isActive = false;
            if (!isEmpty()) {
                if (front <= rear) {
                    isActive = (i >= front && i <= rear);
                } else {
                    isActive = (i >= front || i <= rear);
                }
            }

            if (isActive) {
                cout << "[ " << data[i] << " ]";
                if (i == front && i == rear) {
                    cout << " <-- FRONT & REAR";
                } else if (i == front) {
                    cout << " <-- FRONT (Pintu Depan)";
                } else if (i == rear) {
                    cout << " <-- REAR (Pintu Belakang)";
                }
            } else {
                cout << "[ KOSONG ]";
            }
            cout << "\n";
        }
        cout << "------------------------------------------------\n";
        cout << "Pointer Front : Indeks [" << front << "] " << (isEmpty() ? "(Deque Kosong)" : "") << "\n";
        cout << "Pointer Rear  : Indeks [" << rear << "]\n";
    }

    void saveToFile(const string& filename) const {
        if (isEmpty()) {
            cout << "[PERINGATAN] Deque kosong, tidak ada data untuk disimpan.\n";
            return;
        }
        ofstream file(filename);
        if (!file.is_open()) {
            cout << "[ERROR] Gagal membuka file: " << filename << endl;
            return;
        }
        int i = front;
        while (true) {
            file << data[i] << "\n";
            if (i == rear) break;
            i = (i + 1) % MAX;
        }
        file.close();
        cout << "[SUKSES] Deque disimpan ke file '" << filename << "'.\n";
        printFileContent(filename);
    }

    void loadFromFile(const string& filename) {
        ifstream file(filename);
        if (!file.is_open()) {
            cout << "[ERROR] File '" << filename << "' tidak ditemukan!\n";
            return;
        }
        front = -1; rear = -1;
        int val, count = 0;
        while (file >> val) {
            if (isFull()) break;
            insertRear(val);
            count++;
        }
        file.close();
        cout << "[SUKSES] Berhasil membaca " << count << " data dari file '" << filename << "'.\n";
        printFileContent(filename);
    }
};

// ============================================================================
// SUB-MENU OPERASI DATA (LEVEL 3)
// ============================================================================
void runSingleStackMenu(SingleStack& st) {
    while (true) {
        clearScreen();
        cout << "======================================\n";
        cout << "         OPERASI SINGLE STACK         \n";
        cout << "======================================\n";
        cout << "1. Tambah data (Push)\n";
        cout << "2. Hapus data (Pop)\n";
        cout << "3. Lihat data (Display)\n";
        cout << "4. Menyimpan data di file\n";
        cout << "5. Membuka file\n";
        cout << "6. Kembali\n";
        cout << "--------------------------------------\n";
        int pil = getIntInput("Pilih menu [1-6]: ");

        if (pil == 1) {
            int val = getIntInput("Masukkan nilai yang ingin ditambah: ");
            st.push(val);
            pause();
        } else if (pil == 2) {
            st.pop();
            pause();
        } else if (pil == 3) {
            st.display();
            pause();
        } else if (pil == 4) {
            string fn = getStringInput("Masukkan nama file (contoh: stack.txt): ");
            if (fn.empty()) fn = "stack.txt";
            st.saveToFile(fn);
            pause();
        } else if (pil == 5) {
            string fn = getStringInput("Masukkan nama file (contoh: stack.txt): ");
            if (fn.empty()) fn = "stack.txt";
            st.loadFromFile(fn);
            pause();
        } else if (pil == 6) {
            break;
        } else {
            cout << "[ERROR] Pilihan tidak valid!\n";
            pause();
        }
    }
}

void runDoubleStackMenu(DoubleStack& ds) {
    while (true) {
        clearScreen();
        cout << "======================================\n";
        cout << "         OPERASI DOUBLE STACK         \n";
        cout << "======================================\n";
        cout << "1. Tambah data (Push)\n";
        cout << "2. Hapus data (Pop)\n";
        cout << "3. Lihat data (Display)\n";
        cout << "4. Menyimpan data di file\n";
        cout << "5. Membuka file\n";
        cout << "6. Kembali\n";
        cout << "--------------------------------------\n";
        int pil = getIntInput("Pilih menu [1-6]: ");

        if (pil == 1) {
            cout << "Pilih Stack tujuan:\n";
            cout << "  1. Stack Sisi Kiri\n";
            cout << "  2. Stack Sisi Kanan\n";
            int target = getIntInput("Pilihan Anda [1/2]: ");
            if (target == 1 || target == 2) {
                int val = getIntInput("Masukkan nilai yang ingin ditambah: ");
                ds.push(target, val);
            } else {
                cout << "[ERROR] Pilihan stack hanya 1 (Sisi Kiri) atau 2 (Sisi Kanan)!\n";
            }
            pause();
        } else if (pil == 2) {
            cout << "Pilih Stack yang ingin di-Pop:\n";
            cout << "  1. Stack Sisi Kiri\n";
            cout << "  2. Stack Sisi Kanan\n";
            int target = getIntInput("Pilihan Anda [1/2]: ");
            if (target == 1 || target == 2) {
                ds.pop(target);
            } else {
                cout << "[ERROR] Pilihan stack hanya 1 (Sisi Kiri) atau 2 (Sisi Kanan)!\n";
            }
            pause();
        } else if (pil == 3) {
            ds.display();
            pause();
        } else if (pil == 4) {
            string fn = getStringInput("Masukkan nama file (contoh: double_stack.txt): ");
            if (fn.empty()) fn = "double_stack.txt";
            ds.saveToFile(fn);
            pause();
        } else if (pil == 5) {
            string fn = getStringInput("Masukkan nama file (contoh: double_stack.txt): ");
            if (fn.empty()) fn = "double_stack.txt";
            ds.loadFromFile(fn);
            pause();
        } else if (pil == 6) {
            break;
        } else {
            cout << "[ERROR] Pilihan tidak valid!\n";
            pause();
        }
    }
}

void runLinearQueueMenu(LinearQueue& q) {
    while (true) {
        clearScreen();
        cout << "======================================\n";
        cout << "         OPERASI LINEAR QUEUE         \n";
        cout << "======================================\n";
        cout << "1. Tambah data (Enqueue)\n";
        cout << "2. Hapus data (Dequeue)\n";
        cout << "3. Lihat data (Display)\n";
        cout << "4. Menyimpan data di file\n";
        cout << "5. Membuka file\n";
        cout << "6. Kembali\n";
        cout << "--------------------------------------\n";
        int pil = getIntInput("Pilih menu [1-6]: ");

        if (pil == 1) {
            int val = getIntInput("Masukkan nilai yang ingin ditambah: ");
            q.enqueue(val);
            pause();
        } else if (pil == 2) {
            q.dequeue();
            pause();
        } else if (pil == 3) {
            q.display();
            pause();
        } else if (pil == 4) {
            string fn = getStringInput("Masukkan nama file (contoh: linear_queue.txt): ");
            if (fn.empty()) fn = "linear_queue.txt";
            q.saveToFile(fn);
            pause();
        } else if (pil == 5) {
            string fn = getStringInput("Masukkan nama file (contoh: linear_queue.txt): ");
            if (fn.empty()) fn = "linear_queue.txt";
            q.loadFromFile(fn);
            pause();
        } else if (pil == 6) {
            break;
        } else {
            cout << "[ERROR] Pilihan tidak valid!\n";
            pause();
        }
    }
}

void runCircularQueueMenu(CircularQueue& cq) {
    while (true) {
        clearScreen();
        cout << "======================================\n";
        cout << "        OPERASI CIRCULAR QUEUE        \n";
        cout << "======================================\n";
        cout << "1. Tambah data (Enqueue)\n";
        cout << "2. Hapus data (Dequeue)\n";
        cout << "3. Lihat data (Display)\n";
        cout << "4. Menyimpan data di file\n";
        cout << "5. Membuka file\n";
        cout << "6. Kembali\n";
        cout << "--------------------------------------\n";
        int pil = getIntInput("Pilih menu [1-6]: ");

        if (pil == 1) {
            int val = getIntInput("Masukkan nilai yang ingin ditambah: ");
            cq.enqueue(val);
            pause();
        } else if (pil == 2) {
            cq.dequeue();
            pause();
        } else if (pil == 3) {
            cq.display();
            pause();
        } else if (pil == 4) {
            string fn = getStringInput("Masukkan nama file (contoh: circular_queue.txt): ");
            if (fn.empty()) fn = "circular_queue.txt";
            cq.saveToFile(fn);
            pause();
        } else if (pil == 5) {
            string fn = getStringInput("Masukkan nama file (contoh: circular_queue.txt): ");
            if (fn.empty()) fn = "circular_queue.txt";
            cq.loadFromFile(fn);
            pause();
        } else if (pil == 6) {
            break;
        } else {
            cout << "[ERROR] Pilihan tidak valid!\n";
            pause();
        }
    }
}

void runDequeMenu(DoubleEndedQueue& dq) {
    while (true) {
        clearScreen();
        cout << "======================================\n";
        cout << "      OPERASI DOUBLE ENDED QUEUE      \n";
        cout << "======================================\n";
        cout << "1. Tambah data (Insert Front / Rear)\n";
        cout << "2. Hapus data (Delete Front / Rear)\n";
        cout << "3. Lihat data (Display)\n";
        cout << "4. Menyimpan data di file\n";
        cout << "5. Membuka file\n";
        cout << "6. Kembali\n";
        cout << "--------------------------------------\n";
        int pil = getIntInput("Pilih menu [1-6]: ");

        if (pil == 1) {
            cout << "1. Insert Depan (Front)\n2. Insert Belakang (Rear)\n";
            int pos = getIntInput("Pilih posisi [1/2]: ");
            int val = getIntInput("Masukkan nilai: ");
            if (pos == 1) dq.insertFront(val);
            else if (pos == 2) dq.insertRear(val);
            else cout << "[ERROR] Posisi tidak valid!\n";
            pause();
        } else if (pil == 2) {
            cout << "1. Delete Depan (Front)\n2. Delete Belakang (Rear)\n";
            int pos = getIntInput("Pilih posisi [1/2]: ");
            if (pos == 1) dq.deleteFront();
            else if (pos == 2) dq.deleteRear();
            else cout << "[ERROR] Posisi tidak valid!\n";
            pause();
        } else if (pil == 3) {
            dq.display();
            pause();
        } else if (pil == 4) {
            string fn = getStringInput("Masukkan nama file (contoh: deque.txt): ");
            if (fn.empty()) fn = "deque.txt";
            dq.saveToFile(fn);
            pause();
        } else if (pil == 5) {
            string fn = getStringInput("Masukkan nama file (contoh: deque.txt): ");
            if (fn.empty()) fn = "deque.txt";
            dq.loadFromFile(fn);
            pause();
        } else if (pil == 6) {
            break;
        } else {
            cout << "[ERROR] Pilihan tidak valid!\n";
            pause();
        }
    }
}

// ============================================================================
// MENU LEVEL 2 (JENIS STRUKTUR DATA)
// ============================================================================
void menuStack(SingleStack& ss, DoubleStack& ds) {
    while (true) {
        clearScreen();
        cout << "======================================\n";
        cout << "              MENU STACK              \n";
        cout << "======================================\n";
        cout << "1. Single Stack\n";
        cout << "2. Double Stack\n";
        cout << "3. Kembali ke Menu Utama\n";
        cout << "--------------------------------------\n";
        int pil = getIntInput("Pilih jenis stack [1-3]: ");

        if (pil == 1) {
            runSingleStackMenu(ss);
        } else if (pil == 2) {
            runDoubleStackMenu(ds);
        } else if (pil == 3) {
            break;
        } else {
            cout << "[ERROR] Pilihan tidak valid!\n";
            pause();
        }
    }
}

void menuQueue(LinearQueue& lq, CircularQueue& cq, DoubleEndedQueue& dq) {
    while (true) {
        clearScreen();
        cout << "======================================\n";
        cout << "              MENU QUEUE              \n";
        cout << "======================================\n";
        cout << "1. Linear Queue (Single)\n";
        cout << "2. Circular Queue\n";
        cout << "3. Double Ended Queue (Deque)\n";
        cout << "4. Kembali ke Menu Utama\n";
        cout << "--------------------------------------\n";
        int pil = getIntInput("Pilih jenis queue [1-4]: ");

        if (pil == 1) {
            runLinearQueueMenu(lq);
        } else if (pil == 2) {
            runCircularQueueMenu(cq);
        } else if (pil == 3) {
            runDequeMenu(dq);
        } else if (pil == 4) {
            break;
        } else {
            cout << "[ERROR] Pilihan tidak valid!\n";
            pause();
        }
    }
}

// ============================================================================
// MENU UTAMA (LEVEL 1)
// ============================================================================
int main() {
    // Objek struktur data disimpan di level main agar data tetap bertahan
    SingleStack singleStack;
    DoubleStack doubleStack;
    LinearQueue linearQueue;
    CircularQueue circularQueue;
    DoubleEndedQueue deque;

    while (true) {
        clearScreen();
        cout << "======================================\n";
        cout << "     PROGRAM BELAJAR STRUKTUR DATA    \n";
        cout << "======================================\n";
        cout << "1. Stack\n";
        cout << "2. Queue\n";
        cout << "3. Keluar\n";
        cout << "--------------------------------------\n";
        int pil = getIntInput("Pilih menu [1-3]: ");

        if (pil == 1) {
            menuStack(singleStack, doubleStack);
        } else if (pil == 2) {
            menuQueue(linearQueue, circularQueue, deque);
        } else if (pil == 3) {
            cout << "\nTerima kasih telah menggunakan program belajar struktur data!\n";
            break;
        } else {
            cout << "[ERROR] Pilihan tidak valid!\n";
            pause();
        }
    }

    return 0;
}
