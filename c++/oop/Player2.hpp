#include <iostream>
#include <string>

class Player
{
private:
  std::string name;
  double attackPower;
  int level;
  int exp;

public:
  Player(const char *name);

  std::string getName();

  void addExp(int expValue);

  void display();
};
