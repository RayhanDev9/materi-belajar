#include <string>
#include <iostream>
using namespace std;

int main() {
  string str = "Hello, World!";
  cout << str << endl;

  string inputData ;

  cout << "Masukkan string: ";
  getline(cin,inputData);
  cin.ignore();
  cout << "String yang dimasukkan: " << inputData << endl;
  return 0;
}