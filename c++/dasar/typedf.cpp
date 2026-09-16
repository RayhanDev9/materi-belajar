#include <iostream>

using namespace std;

int main(){
  typedef int iVector[2];
  typedef unsigned long ulong;
  using vector = double[2];

  iVector b = {1,2};
  ulong c = 123455678;
  iVector d = {1,2};


  cout << b[0] << b[1];
  cout << c;
  cout << d[0] << d[1];
  return 0;
}