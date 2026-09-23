#include <iostream>
#include <string>

using namespace std;

class Player
{
public:
  string nama;

  Player(const char *nama)
  {

    Player::nama = nama;

    cout << "Player " << Player::nama << " Di buat" << endl;
  }
  ~Player()
  {
    cout << "Player " << Player::nama << " Di dalate" << endl;
  }
};

void membuatPlayerStack()
{
  Player stackPlayer = Player("Stack");
}

void membuatPlayerHeap()
{
  Player *heapPlayer = new Player("Heap");
  delete heapPlayer;
}

void membuatPlayerStackPointer(Player *&playerPointer)
{
  Player stackPlayer = Player("Stack");
  playerPointer = &stackPlayer;
}

void membuatPlayerHeaPointer(Player *&playerPointer)
{
  Player *heapPlayer = new Player("Heap");
  playerPointer = heapPlayer;
  delete heapPlayer;
}

Player createStackPlayer()
{
  Player stackPlayer = Player("create Stack");
  return stackPlayer;
}

Player *createHeapPlayer()
{
  Player *heapPlayer = new Player("create Heap");
  return heapPlayer;
}

int main()
{
  membuatPlayerStack();
  membuatPlayerHeap();

  // Simulasi memory leak
  Player *playerPointerStack;
  membuatPlayerStackPointer(playerPointerStack);

  Player *playerPointerHeap;
  membuatPlayerHeaPointer(playerPointerHeap);
  cout << playerPointerHeap->nama << endl;
  delete playerPointerHeap;
  // playerPointerHeap->nama = "Acak - Acakan";
  // cout << playerPointerHeap->nama << endl;

  cout << "\n Retrun Object \n";
  Player playerReturnStack = createStackPlayer();

  cout << playerReturnStack.nama << endl;

  return 0;
}