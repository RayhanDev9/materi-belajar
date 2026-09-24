#include <iostream>
#include <string>
#include "Mahasiswa.h"
using namespace std;

int main()
{

  Mahasiswa *mhs1 = new Mahasiswa("Deni");

  cout << mhs1->namePublic << endl;
  // cout << mhs1->namePrivate << endl;

  Mahasiswa *mhs2 = new Mahasiswa("Melisa");
  mhs2->showPublic();
  // mhs2->showPrivate();
  return 0;
}