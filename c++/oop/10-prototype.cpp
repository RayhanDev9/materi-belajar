#include <iostream>
#include <string>

using namespace std;

class Player
{
public:
  string name;

  Player(const char *name);

  void display();

  string getName();

  void setName(const char *name);
};

int main()
{
  Player *player1 = new Player("Rendy");

  player1->display();

  cout << "get name " << player1->getName() << endl;

  cout << "Ubah nama ";
  player1->setName("Isabela");
  player1->display();

  return 0;
}

void Player::setName(const char *name)
{
  this->name = name;
}

string Player::getName()
{
  return this->name;
}

void Player::display()
{
  cout << "Nama player " << name << endl;
}

Player::Player(const char *name)
{
  this->name = name;
}