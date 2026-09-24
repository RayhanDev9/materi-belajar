#include <iostream>
#include <string>
#include "Player2.hpp"

using namespace std;


int main()
{

  Player player1 = Player("Naruko");
  player1.display();
  cout << player1.getName() << endl;

  player1.addExp(20);
  player1.addExp(20);
  player1.addExp(20);
  player1.addExp(20);
  player1.addExp(20);
  player1.addExp(20);

  player1.display();
  return 0;
}