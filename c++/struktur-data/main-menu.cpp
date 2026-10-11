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
            cout << "[ERROR] Stack Penuh (Overflow)! Tidak dapat menambahkan " << value << endl;
        } else {
            top++;
            data[top] = value;
            cout << "[SUKSES] Data " << value << " berhasil dimasukkan ke Stack.\n";
        }
    }

    int pop() {
        if (isEmpty()) {
            cout << "[ERROR] Stack Kosong (Underflow)!\n";
            return -1;
        }
        int val = data[top];
        top--;
        cout << "[SUKSES] Data " << val << " berhasil dikeluarkan dari Stack.\n";
        return val;
    }

    void display() const {
        if (isEmpty()) {
            cout << "Stack Kosong.\n";
            return;
        }
        cout << "Isi Stack (Top -> Bottom):\n";
        for (int i = top; i >= 0; i--) {
            cout << "| " << data[i] << " |" << (i == top ? " <-- Top" : "") << endl;
        }
        cout << "-------\n";
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
        cout << "[SUKSES] Berhasil membaca " << count << " data dari file '" << filename << "'.\n";
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
            cout << "[ERROR] Double Stack Penuh (Overflow)!\n";
            return;
        }
        if (stackChoice == 1) {
            top1++;
            data[top1] = value;
            cout << "[SUKSES] Data " << value << " masuk ke Stack Sisi Kiri (Stack 1).\n";
        } else {
            top2--;
            data[top2] = value;
            cout << "[SUKSES] Data " << value << " masuk ke Stack Sisi Kanan (Stack 2).\n";
        }
    }

    void pop(int stackChoice) {
        if (stackChoice == 1) {
            if (isEmpty1()) {
                cout << "[ERROR] Stack Sisi Kiri Kosong!\n";
                return;
            }
            cout << "[SUKSES] Data " << data[top1] << " keluar dari Stack Sisi Kiri.\n";
            top1--;
        } else {
            if (isEmpty2()) {
                cout << "[ERROR] Stack Sisi Kanan Kosong!\n";
                return;
            }
            cout << "[SUKSES] Data " << data[top2] << " keluar dari Stack Sisi Kanan.\n";
            top2++;
        }
    }

    void display() const {
        cout << "--- STATUS DOUBLE STACK ---\n";
        cout << "Stack 1 [Sisi Kiri]  (Top -> Dasar): ";
        if (isEmpty1()) cout << "[Kosong]";
        else {
            for (int i = top1; i >= 0; i--) cout << "[" << data[i] << "] ";
        }
        cout << "\nStack 2 [Sisi Kanan] (Top -> Dasar): ";
        if (isEmpty2()) cout << "[Kosong]";
        else {
            for (int i = top2; i < MAX; i++) cout << "[" << data[i] << "] ";
        }
        cout << "\nSisa slot kosong: " << (top2 - top1 - 1) << endl;
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
            cout << "[ERROR] Queue Penuh (Overflow)!\n";
            return;
        }
        if (front == -1) front = 0;
        rear++;
        data[rear] = value;
        cout << "[SUKSES] Data " << value << " berhasil masuk ke Linear Queue.\n";
    }

    int dequeue() {
        if (isEmpty()) {
            cout << "[ERROR] Queue Kosong (Underflow)!\n";
            return -1;
        }
        int val = data[front];
        front++;
        if (front > rear) { front = -1; rear = -1; }
        cout << "[SUKSES] Data " << val << " berhasil keluar dari Linear Queue.\n";
        return val;
    }

    void display() const {
        if (isEmpty()) {
            cout << "Linear Queue Kosong.\n";
            return;
        }
        cout << "Isi Linear Queue (Depan -> Belakang): ";
        for (int i = front; i <= rear; i++) {
            cout << "[ " << data[i] << " ] ";
        }
        cout << endl;
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
            cout << "[ERROR] Circular Queue Penuh (Overflow)!\n";
            return;
        }
        if (isEmpty()) {
            front = 0; rear = 0;
        } else {
            rear = (rear + 1) % MAX;
        }
        data[rear] = value;
        cout << "[SUKSES] Data " << value << " masuk di indeks [" << rear << "].\n";
    }

    int dequeue() {
        if (isEmpty()) {
            cout << "[ERROR] Circular Queue Kosong (Underflow)!\n";
            return -1;
        }
        int val = data[front];
        cout << "[SUKSES] Data " << val << " keluar dari indeks [" << front << "].\n";
        if (front == rear) {
            front = -1; rear = -1;
        } else {
            front = (front + 1) % MAX;
        }
        return val;
    }

    void display() const {
        if (isEmpty()) {
            cout << "Circular Queue Kosong.\n";
            return;
        }
        cout << "Isi Circular Queue (Front -> Rear): ";
        int i = front;
        while (true) {
            cout << "[ " << data[i] << " ] ";
            if (i == rear) break;
            i = (i + 1) % MAX;
        }
        cout << endl;
    }

    void saveToFile(const string& filename) const {
        if (isEmpty()) {
            cout << "[PERINGATAN] Circular Queue kosong.\n";
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
            cout << "[ERROR] Deque Penuh!\n";
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
        cout << "[SUKSES] insertFront(" << value << ") di indeks [" << front << "].\n";
    }

    void insertRear(int value) {
        if (isFull()) {
            cout << "[ERROR] Deque Penuh!\n";
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
        cout << "[SUKSES] insertRear(" << value << ") di indeks [" << rear << "].\n";
    }

    int deleteFront() {
        if (isEmpty()) {
            cout << "[ERROR] Deque Kosong!\n";
            return -1;
        }
        int val = data[front];
        cout << "[SUKSES] deleteFront: Data " << val << " dari indeks [" << front << "].\n";
        if (front == rear) {
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
            cout << "[ERROR] Deque Kosong!\n";
            return -1;
        }
        int val = data[rear];
        cout << "[SUKSES] deleteRear: Data " << val << " dari indeks [" << rear << "].\n";
        if (front == rear) {
            front = -1; rear = -1;
        } else if (rear == 0) {
            rear = MAX - 1;
        } else {
            rear = rear - 1;
        }
        return val;
    }

    void display() const {
        if (isEmpty()) {
            cout << "Deque Kosong.\n";
            return;
        }
        cout << "Isi Deque (Front -> Rear): ";
        int i = front;
        while (true) {
            cout << "[ " << data[i] << " ] ";
            if (i == rear) break;
            i = (i + 1) % MAX;
        }
        cout << endl;
    }

    void saveToFile(const string& filename) const {
        if (isEmpty()) {
            cout << "[PERINGATAN] Deque kosong.\n";
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
