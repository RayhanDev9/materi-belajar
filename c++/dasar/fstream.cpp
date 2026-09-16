#include <iostream>
#include <fstream>

using namespace std;

int main () {

  ofstream myFile ;

  // ios::out =>default Operaasi Output
  // ios::app => menulis pada akhir basic_stringstream
  // ios:trunc => default, membuat file baru jika tidak ada jika ada menimpa
  myFile.open("data1.txt",ios::out);
  myFile<<"Apa itu data";

  myFile.open("data2.txt",ios::app);
myFile << "Data 2";

  myFile.open("data3.txt",ios::trunc);
myFile << "Data 3";
  cout<<"Apa itu console";
  myFile.close();


  return 0;
}