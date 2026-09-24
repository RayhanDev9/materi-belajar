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

  void display()
  {
    cout << "Name : " << name << endl;
    cout << "Healthe : " << healthe << endl;
  }
};

int main()
{

  Hero *hero1 = new Hero();
  hero1->display();
  Hero *hero2 = new Hero("reandy");
  hero2->display();

  Hero *hero3 = new Hero("reandy", 1222);
  hero3->display();

  // Bersihkan memori heap
  delete hero1;
  delete hero2;
  delete hero3;

  return 0;
}
