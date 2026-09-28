#include <iostream>
#include <string>

using namespace std;

class Hero {
public:
  string name;
  double health;
  int power;

  Hero(string name = "Default", double health = 100, int power = 20) {
    this->name = name;
    this->health = health;
    this->power = power;
  }

  // 1. Operator Stream Output (<<) & Input (>>)
  friend ostream &operator<<(ostream &output, const Hero &hero);
  friend istream &operator>>(istream &input, Hero &hero);

  // 2. Operator Aritmatika (+) -> Menggabungkan status 2 Hero
  Hero operator+(const Hero &other) {
    Hero temp;
    temp.name = this->name + " & " + other.name + " (Team)";
    temp.health = this->health + other.health;
    temp.power = this->power + other.power;
    return temp;
  }

  // 3. Operator Perbandingan (== dan >)
  bool operator==(const Hero &other) const {
    return (this->health == other.health && this->power == other.power);
  }

  bool operator>(const Hero &other) const {
    return (this->health + this->power) > (other.health + other.power);
  }

  // 4. Operator Assignment (+=) -> Menambah Health
  Hero &operator+=(double addHealth) {
    this->health += addHealth;
    return *this;
  }

  // 5. Operator Increment (++ Prefix) -> Power Up (+10 Power)
  Hero &operator++() {
    this->power += 10;
    return *this;
  }
};

// Overloading Operator Stream Output (cout << hero)
ostream &operator<<(ostream &output, const Hero &hero) {
  output << "[Hero: " << hero.name << " | HP: " << hero.health << " | ATK: " << hero.power << "]";
  return output;
}

// Overloading Operator Stream Input (cin >> hero)
istream &operator>>(istream &input, Hero &hero) {
  cout << "Masukkan Nama Hero : ";
  input >> hero.name;
  cout << "Masukkan Health    : ";
  input >> hero.health;
  cout << "Masukkan Power     : ";
  input >> hero.power;
  return input;
}

int main() {
  cout << "==========================================================" << endl;
  cout << "       20. DEMO VARIASI OPERATOR OVERLOADING DI C++       " << endl;
  cout << "==========================================================" << endl;

  Hero hero1("Udin", 100, 30);
  Hero hero2("Otong", 80, 50);

  cout << "\n--- 1. Stream Operator Output (<<) ---" << endl;
  cout << hero1 << endl;
  cout << hero2 << endl;

  cout << "\n--- 2. Operator Aritmatika (+) ---" << endl;
  Hero hero3 = hero1 + hero2;
  cout << "Hasil (hero1 + hero2):" << endl;
  cout << hero3 << endl;

  cout << "\n--- 3. Operator Perbandingan (== dan >) ---" << endl;
  if (hero1 > hero2) {
    cout << hero1.name << " lebih kuat dibanding " << hero2.name << endl;
  } else {
    cout << hero2.name << " lebih kuat atau setara dibanding " << hero1.name << endl;
  }

  cout << "\n--- 4. Operator Assignment (+=) ---" << endl;
  cout << "Sebelum (hero1 += 50 HP) : " << hero1 << endl;
  hero1 += 50;
  cout << "Setelah (hero1 += 50 HP) : " << hero1 << endl;

  cout << "\n--- 5. Operator Increment (++ Prefix) ---" << endl;
  cout << "Sebelum (++hero1) : " << hero1 << endl;
  ++hero1;
  cout << "Setelah (++hero1) : " << hero1 << endl;

  return 0;
}


