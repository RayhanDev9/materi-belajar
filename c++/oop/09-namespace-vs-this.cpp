#include <iostream>
#include <string>

using namespace std;

class ClassTypes
{
public:
  string dataStr;
  double dataDouble;
  double m_dataDouble;

  ClassTypes(const char *dataStr, double dataDouble)
  {
    ClassTypes::dataStr;
    cout << this << endl;
  }
};

class Player
{
public:
  string name;
  double power;
  int health;

  Player(const char *name, double power)
  {
    this->setName(name);
    this->setPower(power);
  }

  void setName(const char *name)
  {
    this->name = name;
  }
  void setPower(double power)
  {
    this->power = power;
  }

  void setHealth(int);
};

void Player::setHealth(int value)
{
  this->health = value;
}

int main()
{

  ClassTypes *obj1 = new ClassTypes("Randy", 2.44);

  cout << obj1 << endl;

  cout << obj1->dataDouble;

  Player *player1 = new Player("Ucup", 100);
  cout << player1->name << endl;
  player1->setHealth(10);
  cout << player1->health << endl;

  return 0;
}