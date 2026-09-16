#include <iostream>

// macro variabel
#define PI 3.1111
#define BAHASA "indonesia"

// macro untuk fungsi
#define KUADRAT(X) X*X
#define MAX(A,B) ((A>B) ? A : B)
using namespace std;
int main () {

  cout << BAHASA;
cout << KUADRAT(5);
  cout << PI;
  cout << MAX(4,9);
  return 0;
}