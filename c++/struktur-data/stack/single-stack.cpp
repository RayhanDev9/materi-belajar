#include <iostream>

using namespace std;

#define MAX 5

class SingleStack {
private:
  int top;
  int data[MAX];

public:
  SingleStack() { 
    top = -1; 
  }

  // Mengecek apakah stack kosong
  bool isEmpty() {
    return top == -1;
  }

  // Mengecek apakah stack penuh
  bool isFull() {
    return top == MAX - 1;
  }

  // Menambahkan data ke dalam stack
  void push(int value) {
    if (isFull()) {
      cout << "Stack Penuh (Overflow)! Tidak dapat menambahkan " << value << endl;
    } else {
      top = top + 1;
      data[top] = value;
      cout << "Data " << value << " berhasil ditambahkan." << endl;
    }
  }

  // Mengambil data teratas dari stack
  int pop() {
    if (isEmpty()) {
      cout << "Stack Kosong (Underflow)!" << endl;
      return -1;
    } else {
      int nilai_keluar = data[top];
      top = top - 1;
      cout << "Data " << nilai_keluar << " berhasil dikeluarkan." << endl;
      return nilai_keluar;
    }
  }

  // Melihat data teratas tanpa menghapusnya
  void peek() {
    if (isEmpty()) {
      cout << "Stack kosong, tidak ada data teratas." << endl;
    } else {
      cout << "Elemen teratas (Top): " << data[top] << endl;
    }
  }

  // Menampilkan seluruh isi stack
  void display() {
    if (isEmpty()) {
      cout << "Stack kosong." << endl;
    } else {
      cout << "Isi stack (dari Top ke Bottom):" << endl;
      for (int i = top; i >= 0; i--) {
        cout << "| " << data[i] << " |" << (i == top ? " <-- TOP" : "") << endl;
      }
      cout << "-------" << endl;
    }
  }
};

int main() {
  SingleStack s;

  // Uji coba operasi stack
  s.push(10);
  s.push(20);
  s.push(30);

  cout << endl;
  s.display();

  cout << endl;
  s.peek();

  cout << endl;
  s.pop();

  cout << endl;
  s.display();

  return 0;
}