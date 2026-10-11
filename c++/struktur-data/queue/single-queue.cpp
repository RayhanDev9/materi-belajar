#include <iostream>

using namespace std;

#define MAX 5

class LinearQueue {
private:
  int front;
  int rear;
  int data[MAX];

public:
  LinearQueue() {
    front = -1;
    rear = -1;
  }

  // Mengecek apakah antrean kosong
  bool isEmpty() {
    return (front == -1 || front > rear);
  }

  // Mengecek apakah antrean penuh
  bool isFull() {
    return (rear == MAX - 1);
  }

  // Menambahkan elemen ke antrean (di posisi belakang)
  void enqueue(int value) {
    if (isFull()) {
      cout << "[ERROR] Queue Overflow! Tidak dapat menambahkan " << value << endl;
    } else {
      if (front == -1) {
        front = 0; // Jika data pertama masuk
      }
      rear = rear + 1;
      data[rear] = value;
      cout << "[SUKSES] Data " << value << " berhasil masuk ke Queue!" << endl;
    }
  }

  // Mengambil dan menghapus elemen dari antrean (dari posisi depan)
  int dequeue() {
    if (isEmpty()) {
      cout << "[ERROR] Queue Underflow (Kosong)!" << endl;
      return -1;
    } else {
      int value = data[front];
      front = front + 1;

      // Jika semua data sudah dikeluarkan, reset pointer
      if (front > rear) {
        front = -1;
        rear = -1;
      }

      cout << "[SUKSES] Data " << value << " berhasil keluar dari Queue!" << endl;
      return value;
    }
  }

  // Melihat elemen terdepan tanpa menghapusnya
  void peek() {
    if (isEmpty()) {
      cout << "[ERROR] Queue Kosong! Tidak ada elemen di depan." << endl;
    } else {
      cout << "Elemen terdepan (Front): " << data[front] << endl;
    }
  }

  // Menampilkan seluruh isi antrean
  void display() {
    if (isEmpty()) {
      cout << "Queue Kosong." << endl;
    } else {
      cout << "Isi Queue (Depan -> Belakang): ";
      for (int i = front; i <= rear; i++) {
        cout << "[ " << data[i] << " ] ";
      }
      cout << endl;
    }
  }
};

int main() {
  LinearQueue q;

  cout << "=== UJI COBA QUEUE LINEAR ===" << endl;

  q.enqueue(11);
  q.enqueue(22);
  q.enqueue(33);
  q.enqueue(44);
  q.enqueue(55);

  // Coba masukkan saat penuh
  q.enqueue(66);

  cout << endl;
  q.display();
  q.peek();

  cout << endl;
  q.dequeue();
  q.dequeue();

  cout << endl;
  q.display();
  q.peek();

  return 0;
}