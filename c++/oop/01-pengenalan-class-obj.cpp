#include <iostream>
#include <string>

using namespace std;

class Mahasiswa {
  public : 
  string nama;
 double NIM ;
  string jurusan;
 double IPK ;
};

int main () {

  Mahasiswa mhs1 ;
  mhs1.nama = "Rayhan";
  mhs1.NIM = 1234555;
  mhs1.jurusan = "Teknik informatika";
  mhs1.IPK = 3.44;

  cout << "Mahasiswa pertama adalah : " << mhs1.nama << endl;
  cout << "IPK Mahasiswa pertama adalah : " << mhs1.IPK << endl;
  return 0;

}