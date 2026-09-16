#include <iostream>
#include <string>

using namespace std;


template<typename T>
void print (T data) {
  cout << data <<endl;
}

template<typename T,typename U>
T maxsimal (T a , U b) {
  return (a > b) ? a : b;
}




int main () {
print(10);
maxsimal(12,44);
cout << maxsimal<double,int>(112.333,44.44) << endl;
print(10.4);
print<int>(10.4);
  return 0;
}