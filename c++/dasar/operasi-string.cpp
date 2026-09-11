#include <string>
#include <iostream>
using namespace std;

int main() {
string kata("cat");

// Menampilkan karakter
cout << kata << endl;

cout << kata[0] << endl;
cout << kata[1] << endl;
cout << kata[2] << endl;  
cout << kata[3] << endl;  

kata[0] = 'e';

cout << kata << endl;

// Menyambung

string kata2("dog");
kata = kata + kata2;
cout << kata << endl;

}