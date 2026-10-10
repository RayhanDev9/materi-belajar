#include <iostream>

using namespace std;

#define MAX 5

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

  // Mengecek apakah kedua stack sudah saling bertemu (penuh)
  bool isFull() {
    return (top1 + 1 == top2);
  }

  // Mengecek apakah Stack 1 kosong
  bool isEmpty1() {
    return top1 == -1;
  }

  // Mengecek apakah Stack 2 kosong
  bool isEmpty2() {
    return top2 == MAX;
  }

  // ================= OPERASI STACK 1 =================
  int push1(int item) {
    if (isFull()) {
      cout << "[Peringatan] Stack Penuh (Overflow)! Tidak dapat menambahkan " << item << " ke Stack 1." << endl;
      return -1;
    } else {
      top1 = top1 + 1;
      data[top1] = item;
      cout << "[Sukses] Data " << item << " berhasil ditambahkan ke Stack 1." << endl;
      return 0;
    }
  }

  int pop1() {
    if (isEmpty1()) {
      cout << "[Peringatan] Stack 1 Kosong (Underflow)!" << endl;
      return -1;
    } else {
      int nilai_keluar = data[top1];
      top1 = top1 - 1;
      cout << "[Sukses] Data " << nilai_keluar << " berhasil dikeluarkan dari Stack 1." << endl;
      return nilai_keluar;
    }
  }

  void peek1() {
    if (isEmpty1()) {
      cout << "Stack 1 Kosong, tidak ada data teratas." << endl;
    } else {
      cout << "Elemen teratas (Top) Stack 1: " << data[top1] << endl;
    }
  }

  void display1() {
    if (isEmpty1()) {
      cout << "Stack 1 Kosong." << endl;
    } else {
      cout << "Isi Stack 1 (dari Top ke Bottom):" << endl;
      for (int i = top1; i >= 0; i--) {
        cout << "| " << data[i] << " |" << endl;
      }
      cout << "-------" << endl;
    }
  }

  // ================= OPERASI STACK 2 =================
  int push2(int item) {
    if (isFull()) {
      cout << "[Peringatan] Stack Penuh (Overflow)! Tidak dapat menambahkan " << item << " ke Stack 2." << endl;
      return -1;
    } else {
      top2 = top2 - 1;
      data[top2] = item;
      cout << "[Sukses] Data " << item << " berhasil ditambahkan ke Stack 2." << endl;
      return 0;
    }
  }

  int pop2() {
    if (isEmpty2()) {
      cout << "[Peringatan] Stack 2 Kosong (Underflow)!" << endl;
      return -1;
    } else {
      int nilai_keluar = data[top2];
      top2 = top2 + 1;
      cout << "[Sukses] Data " << nilai_keluar << " berhasil dikeluarkan dari Stack 2." << endl;
      return nilai_keluar;
    }
  }

  void peek2() {
    if (isEmpty2()) {
      cout << "Stack 2 Kosong, tidak ada data teratas." << endl;
    } else {
      cout << "Elemen teratas (Top) Stack 2: " << data[top2] << endl;
    }
  }

  void display2() {
    if (isEmpty2()) {
      cout << "Stack 2 Kosong." << endl;
    } else {
      cout << "Isi Stack 2 (dari Top ke Bottom):" << endl;
      for (int i = top2; i < MAX; i++) {
        cout << "| " << data[i] << " |" << endl;
      }
      cout << "-------" << endl;
    }
  }
};

int main() {
  DoubleStack ds;

  cout << "=== UJI COBA DOUBLE STACK ===" << endl;

  // Mengisi data ke Stack 1
  ds.push1(10);
  ds.push1(20);
  ds.push1(30);

  // Mengisi data ke Stack 2
  ds.push2(99);
  ds.push2(88);

  // Coba tambah data saat penuh (kapasitas total MAX = 5 sudah terpenuhi)
  ds.push1(40);

  cout << endl;
  ds.display1();

  cout << endl;
  ds.display2();

  cout << endl;
  ds.peek1();
  ds.peek2();

  cout << endl;
  ds.pop1();
  ds.pop2();

  cout << endl;
  ds.display1();
  ds.display2();

  return 0;
}