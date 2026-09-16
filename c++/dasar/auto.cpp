#include <iostream>
#include <string>

using namespace std;

template<typename T,typename U>
auto maxsimal (T a , U b) {
  return (a > b) ? a : b;
}
int main () {
  int a = 12;
  string b = "Rayhan";
  float c = 3.33;
  double d = 22.3;

cout << maxsimal(112.333,44.44) << endl;

}