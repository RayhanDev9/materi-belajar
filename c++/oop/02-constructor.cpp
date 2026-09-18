#include <iostream>
#include <string>

using namespace std;
class Mahasiswa {
  public : 
  string nama;
  string jurusan;
  double NIM ;
 double IPK ;

 Mahasiswa (string nama , string jurusan, double NIM, double IPK) {
  Mahasiswa::nama = nama;
  Mahasiswa::jurusan = jurusan;
  Mahasiswa::NIM = NIM;
  Mahasiswa::IPK = IPK;

  cout << "========= Mahasiswa ========" << endl;
  cout << "Nama : " << Mahasiswa::nama << endl;
  cout << "Jurusan  : " << Mahasiswa::jurusan << endl;
  cout << "NIM  : " << Mahasiswa::NIM << endl;
  cout << "IPK  : " << Mahasiswa::IPK << endl << endl;
 }
};

int main ( ){

   Mahasiswa mhs1  = Mahasiswa("Rayhan","Teknik Informatika", 123445,4.0);
   Mahasiswa mhs2  = Mahasiswa("Dadi","Teknik Informatika", 123445,4.0);

  return 0;
}