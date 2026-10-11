#include <iostream>

using namespace std;

#define MAX 5

class CircularQueue {
private:
  int front;
  int rear;
  int data[MAX];

public:
  CircularQueue() {
    front = -1;
    rear = -1;
  }

  // Mengecek apakah queue kosong
  bool isEmpty() {
    return (front == -1);
  }

  // Mengecek apakah queue penuh
  bool isFull() {
    return ((rear + 1) % MAX == front);
  }

  // Menambahkan elemen ke queue
  void enqueue(int value) {
    if (isFull()) {
      cout << "[ERROR] Queue Penuh (Overflow)! Tidak dapat menambahkan " << value << endl;
      return;
    }

    if (isEmpty()) {
      front = 0;
      rear = 0;
    } else {
      rear = (rear + 1) % MAX;
    }

    data[rear] = value;
    cout << "[SUKSES] Data " << value << " masuk ke Queue di indeks [" << rear << "]." << endl;
  }

  // Mengambil dan menghapus elemen dari depan queue
  int dequeue() {
    if (isEmpty()) {
      cout << "[ERROR] Queue Kosong (Underflow)!" << endl;
      return -1;
    }

    int value = data[front];
    cout << "[SUKSES] Data " << value << " keluar dari Queue dari indeks [" << front << "]." << endl;

    // Jika hanya tersisa satu elemen, reset pointer
    if (front == rear) {
      front = -1;
      rear = -1;
    } else {
      front = (front + 1) % MAX;
    }

    return value;
  }

  // Melihat elemen paling depan
  void peek() {
    if (isEmpty()) {
      cout << "[ERROR] Queue Kosong! Tidak ada elemen di depan." << endl;
    } else {
      cout << "Elemen terdepan (Front): " << data[front] << " di indeks [" << front << "]" << endl;
    }
  }

  // Menampilkan seluruh isi queue
  void display() {
    if (isEmpty()) {
      cout << "Queue Kosong." << endl;
      return;
    }

    cout << "Isi Circular Queue (Front -> Rear): ";
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
  CircularQueue cq;

  cout << "=== UJI COBA CIRCULAR QUEUE ===" << endl;

  cq.enqueue(10);
  cq.enqueue(20);
  cq.enqueue(30);
  cq.enqueue(40);
  cq.enqueue(50);

  cout << endl;
  cq.display();

  // Coba enqueue saat penuh
  cout << endl;
  cq.enqueue(60);

  // Dequeue dua elemen untuk mengosongkan slot di depan
  cout << endl;
  cq.dequeue();
  cq.dequeue();

  cout << endl;
  cq.display();

  // Bukti circular: masukkan elemen baru lagi (akan mengisi slot depan yang kosong)
  cout << endl;
  cout << "--- Menambah data baru setelah dequeue (memanfaatkan slot kosong) ---" << endl;
  cq.enqueue(60);
  cq.enqueue(70);

  cout << endl;
  cq.display();
  cq.peek();

  return 0;
}