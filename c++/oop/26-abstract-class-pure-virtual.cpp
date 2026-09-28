#include <iostream>
#include <string>

using namespace std;

// Abstract Class (Kelas Abstrak)
class Instrument {
public:
  // Pure Virtual Function (= 0)
  // Menjadikan kelas Hero sebagai Abstract Class (tidak bisa diinstansiasi
  // secara langsung)
  virtual void MakeSound() = 0;
};

class Accordian : public Instrument {
public:
  void MakeSound() { cout << "Accordian playing..." << endl; }
};

class Piano : public Instrument {
  void MakeSound() { cout << "Piano playing..." << endl; }
};

// Child Class yang wajib mengimplementasikan catSkill()

int main() {

  Instrument *l1 = new Accordian();

  // l1->MakeSound();

  Instrument *l2 = new Piano();

  // l2->MakeSound();

  Instrument *instrument[2] = {l1, l2};

  for (int i = 0; i < 2; i++)
    instrument[i]->MakeSound();

  return 0;
}
