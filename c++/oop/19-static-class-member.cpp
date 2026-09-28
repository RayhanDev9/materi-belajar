#include <iostream>
#include <string>

using namespace std;

class Hero {
private:
  string name;
  double health;

public:
  static int count;

  Hero(const char *name, double health) {
    this->name = name;
    this->health = health;
    count++;
  }

  ~Hero() {
    count--;
    cout << "Alokasi memori dibebaskan" << endl;
  }

  void display() {
    cout << "name : " << name << endl;
    cout << "health : " << health << endl;
  }
};

int Hero::count = 0;

int main() {

  Hero hero1 = Hero("Udin", 100);

  hero1.display();

  cout << "Jumlah Hero : " << Hero::count << endl;

  Hero hero2 = Hero("Otong", 200);

  hero2.display();

  cout << "Jumlah Hero : " << Hero::count << endl;

  Hero *hero3 = new Hero("Budi", 300);

  hero3->display();

  cout << "Jumlah Hero : " << Hero::count << endl;
  delete hero3;

  cout << "Jumlah Hero : " << Hero::count << endl;

  return 0;
}
