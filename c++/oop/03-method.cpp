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


 }

 void tampilkanData () {
  cout << "========= Mahasiswa ========" << endl;
  cout << "Nama : " << nama << endl;
  cout << "Jurusan  : " << jurusan << endl;
  cout << "NIM  : " << NIM << endl;
  cout << "IPK  : " << IPK << endl << endl;
 }

 void ubahNama (string nama ) {
  Mahasiswa::nama = nama;
 } 

 string getNama () {
  return Mahasiswa::nama;
 }

 double katrolIPK (const double &tambahNilai) {
  return (Mahasiswa::IPK + tambahNilai);
 } 
};


int main(int argc, char const *argv[])
{
     Mahasiswa mhs1  = Mahasiswa("Rayhan","Teknik Informatika", 123445,4.0);

     mhs1.tampilkanData();

   Mahasiswa mhs2  = Mahasiswa("Dadi","Teknik Informatika", 123445,4.0);
     mhs2.tampilkanData();
     mhs2.ubahNama("Randy");
     mhs2.tampilkanData();

     cout << mhs2.getNama()<<endl;
     cout << mhs2.katrolIPK(1.1)<<endl;


  return 0;
}
