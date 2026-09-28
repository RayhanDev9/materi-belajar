#include <iostream>
#include <string>

using namespace std;

class Hero {
public:
  int hp;
  int baseDamage;

  void serang(int damageFisik) {
    cout << "Serang dengan pedang : " << damageFisik << " damage" << endl;
  }
  void serang(double damageTrue) {
    cout << "Serang true damage : " << damageTrue << " damage" << endl;
  }
};

class Mage : public Hero {
public:
  int magicPower;
};

class Marksman : public Hero {
public:
  using ::Hero::serang;
  void serang(string tipePeluru) {
    cout << "Menembakan panah tipe " << tipePeluru << endl;
  }
};

void baseHeal(Hero& hero) {
  hero.hp += 500;

  cout << "Heal 500 HP masuk " << endl;
}

int main() {

  Mage pharse;

  cout << "Ukuran Hero " << sizeof(Hero) << endl;
  cout << "Ukuran Mage " << sizeof(Mage) << endl;

  cout << "-----Alamat memory pharse------" << endl;

  cout << "Alamat pharse : " << &pharse << endl;
  cout << "Alamat HP : " << &pharse.hp << endl;
  cout << "Alamat baseDamage : " << &pharse.baseDamage << endl;
  cout << "Alamat magicPower : " << &pharse.magicPower << endl;

  Marksman layla;

  layla.serang("Armor Priecing");
  layla.serang(1000);

  Mage eudora;
  eudora.hp = 1000;
  eudora.magicPower = 800;

  cout << "Sebelum heal : " << eudora.hp << endl;
  baseHeal(eudora);
  cout << "Sesudah heal : " << eudora.hp << endl;

  return 0;
}
