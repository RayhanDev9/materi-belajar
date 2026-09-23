#include <iostream>
#include <string>

#include "player.h"

using namespace std;

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
