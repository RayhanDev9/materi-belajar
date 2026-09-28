#include <iostream>
#include <string>

using namespace std;

class Hero {
public:
  string name;
  int *health;

  // Standard Constructor
  Hero(string name, int hp) {
    this->name = name;
    this->health = new int(hp);
  }

  // Copy Constructor (Deep Copy)
  Hero(const Hero &other) {
    this->name = other.name;
    // Mengalokasikan memori baru (Deep Copy), bukan sekadar menyalin alamat
    // pointer
    this->health = new int(*other.health);
  }

  // Hero(const Hero &other) {
  //   this->name = other.name;
  //   this->health = new int(*other.health);
  // }

  // Destruktor
  ~Hero() { delete health; }
};

int main() {
  cout << "=== Copy Constructor (Deep Copy vs Shallow Copy) ===" << endl
       << endl;

  Hero h1("Balmond", 100);
  Hero h2 = h1; // Memanggil Copy Constructor

  Hero h3 = h2;

  cout << "HP Hero 1: " << *h1.health << endl;
  cout << "HP Hero 2: " << *h2.health << endl;

  cout << "HP Hero 3: " << *h3.health << endl;

  return 0;
}
