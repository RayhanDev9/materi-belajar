#include <iostream>

using namespace std;

#define MAX 5

class DoubleEndedQueue {
private:
  int front;
  int rear;
  int data[MAX];

public:
  DoubleEndedQueue() {
    front = -1;
    rear = -1;
  }

  // Cek apakah Deque kosong
  bool isEmpty() {
    return (front == -1);
  }

  // Cek apakah Deque penuh
  bool isFull() {
    return ((front == 0 && rear == MAX - 1) || (front == rear + 1));
  }

  // Menambahkan elemen di ujung DEPAN (Front)
  void insertFront(int value) {
    if (isFull()) {
      cout << "[ERROR] Deque Penuh! Gagal insertFront " << value << endl;
      return;
    }

    if (isEmpty()) {
      front = 0;
      rear = 0;
    } else if (front == 0) {
      front = MAX - 1; // Melingkar ke indeks terakhir
    } else {
      front = front - 1;
    }

    data[front] = value;
    cout << "[SUKSES] insertFront(" << value << ") di indeks [" << front << "]" << endl;
  }

  // Menambahkan elemen di ujung BELAKANG (Rear)
  void insertRear(int value) {
    if (isFull()) {
      cout << "[ERROR] Deque Penuh! Gagal insertRear " << value << endl;
      return;
    }

    if (isEmpty()) {
      front = 0;
      rear = 0;
    } else if (rear == MAX - 1) {
      rear = 0; // Melingkar ke indeks awal
    } else {
      rear = rear + 1;
    }

    data[rear] = value;
    cout << "[SUKSES] insertRear(" << value << ") di indeks [" << rear << "]" << endl;
  }

  // Menghapus elemen dari ujung DEPAN (Front)
  int deleteFront() {
    if (isEmpty()) {
      cout << "[ERROR] Deque Kosong! Gagal deleteFront." << endl;
      return -1;
    }

    int value = data[front];
    cout << "[SUKSES] deleteFront: Data " << value << " keluar dari indeks [" << front << "]" << endl;

    if (front == rear) { // Hanya ada 1 elemen
      front = -1;
      rear = -1;
    } else if (front == MAX - 1) {
      front = 0; // Melingkar
    } else {
      front = front + 1;
    }

    return value;
  }

  // Menghapus elemen dari ujung BELAKANG (Rear)
  int deleteRear() {
    if (isEmpty()) {
      cout << "[ERROR] Deque Kosong! Gagal deleteRear." << endl;
      return -1;
    }

    int value = data[rear];
    cout << "[SUKSES] deleteRear: Data " << value << " keluar dari indeks [" << rear << "]" << endl;

    if (front == rear) { // Hanya ada 1 elemen
      front = -1;
      rear = -1;
    } else if (rear == 0) {
      rear = MAX - 1; // Melingkar
    } else {
      rear = rear - 1;
    }

    return value;
  }

  // Melihat elemen depan
  void getFront() {
    if (isEmpty()) {
      cout << "[ERROR] Deque Kosong!" << endl;
    } else {
      cout << "Elemen Depan (Front): " << data[front] << endl;
    }
  }

  // Melihat elemen belakang
  void getRear() {
    if (isEmpty()) {
      cout << "[ERROR] Deque Kosong!" << endl;
    } else {
      cout << "Elemen Belakang (Rear): " << data[rear] << endl;
    }
  }

  // Menampilkan isi Deque
  void display() {
    if (isEmpty()) {
      cout << "Deque Kosong." << endl;
      return;
    }

    cout << "Isi Deque (Front -> Rear): ";
    int i = front;
    while (true) {
      cout << "[ " << data[i] << " ] ";
      if (i == rear) {
        break;
      }
      i = (i + 1) % MAX;
    }
    cout << endl;
  }
};

int main() {
  DoubleEndedQueue dq;

  cout << "=== UJI COBA DOUBLE ENDED QUEUE (DEQUE) ===" << endl;

  // Insert dari belakang dan depan
  dq.insertRear(10);
  dq.insertRear(20);
  dq.insertFront(5);
  dq.insertFront(1);

  cout << endl;
  dq.display();
  dq.getFront();
  dq.getRear();

  // Tambahkan satu lagi sampai penuh (kapasitas 5)
  cout << endl;
  dq.insertRear(30);
  dq.display();

  // Hapus dari kedua ujung
  cout << endl;
  cout << "--- Menghapus data dari Front dan Rear ---" << endl;
  dq.deleteFront();
  dq.deleteRear();

  cout << endl;
  dq.display();
  dq.getFront();
  dq.getRear();

  return 0;
}
