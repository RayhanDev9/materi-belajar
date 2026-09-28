#include <iostream>
#include <string>

using namespace std;

class Hero {
public:
  virtual void catSkill() {
    cout << "[Hero] menggunakan basic attack standart" << endl;
  }
};

class Gusion : public Hero {
public:
  void catSkill() {
    cout << "[Gusion] melempar 5 deggle ke arrah musuh! (magic damage) "
         << endl;
  }
};

class Layla : public Hero {
public:
  void catSkill() { cout << "[Layla] menembak melefic energy " << endl; }
};

int main() {
  Gusion player1;
  Layla player2;

  Hero *semuaPlayer[2];
  semuaPlayer[0] = &player1;
  semuaPlayer[1] = &player2;

  Hero *pointerHero = &player1;

  cout << "Alamat pelayer 1 : " << pointerHero << endl;
  pointerHero->catSkill();
  player1.catSkill();

  semuaPlayer[1]->catSkill();

  return 0;
}
