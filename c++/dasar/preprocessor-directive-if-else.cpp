#include <iostream>


#define ID 1
#if ID == 1 
#define BAHASA "Indonesia"
#else 
#define BAHASA "Inggris"
#endif 

using namespace std;

int main () {
  
  cout << "Bahasa : "<<BAHASA << endl;

  return 0;
}