#include <string>


class Player
{
public:
  std::string name;

  Player(const char *name);

  void display();

  std::string getName();

  void setName(const char *name);
};
