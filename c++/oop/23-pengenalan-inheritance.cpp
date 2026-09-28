#include <iostream>
#include <string>

using namespace std;

class Hero {
public:
  string name;
  void sayHello() { cout << "Nama saya adalah " << this->name << endl; }
};

class HeroHealth : public Hero {
public:
};

class HeroIntel : public Hero {
public:
};

int main() {

  HeroHealth hero1 = HeroHealth();

  hero1.name = "Udin";
  hero1.sayHello();

  HeroIntel hero2 = HeroIntel();
  hero2.name = "Otong";
  hero2.sayHello();

  return 0;
}
