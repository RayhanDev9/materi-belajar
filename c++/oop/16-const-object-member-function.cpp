#include <iostream>
#include <string>

using namespace std;

class Hero
{
private:
  string name;
  double healthe;

public:
  Hero(const char *name = "Player", double healthe = 1223)
  {
    this->name = name;
    this->healthe = healthe;
  }

  void setName(const char *name)
  {
    this->name = name;
  }

  string getName() const
  {
    return this->name;
  }

  void display() const
  {
    cout << "Name : " << name << endl;
    cout << "Healthe : " << healthe << endl;
  }
};

int main()
{

  Hero *hero1 = new Hero();
  hero1->display();
  hero1->setName("Joko");
  hero1->display();
  const Hero *hero2 = new Hero("reandy");
  hero2->display();
  // hero2->setName("Joko");
  hero2->display();
  hero2->getName();

  // Bersihkan memori heap
  delete hero1;
  delete hero2;

  return 0;
}
