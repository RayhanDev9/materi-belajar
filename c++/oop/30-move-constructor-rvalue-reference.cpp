#include <iostream>
#include <string>
#include <utility>

using namespace std;

class Hero {
public:
  string name;
  int *data;

  // Standard Constructor
  Hero(string name) {
    this->name = name;
    this->data = new int(100);
    cout << "Constructor: " << this->name << endl;
  }

  // Move Constructor (C++11 Rvalue Reference)
  Hero(Hero &&other) noexcept {
    this->name = other.name;
    this->data = other.data; // Memindahkan kepemilikan pointer

    other.data =
        nullptr; // Mengosongkan pointer sumber agar tidak ter-delete ganda
    cout << "Move Constructor: " << this->name << endl;
  }

  ~Hero() { delete data; }
};

int main() {
  cout << "=== Move Constructor & Move Semantics (C++11) ===" << endl << endl;

  Hero h1("Eudora");
  Hero h2 = move(h1); // Memindahkan kepemilikan h1 ke h2

  return 0;
}
