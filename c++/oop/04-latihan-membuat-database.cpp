#include <iostream>
#include <string>
#include <fstream> // <--- Tambahkan baris ini!

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

 string stringfy () {
  return "\n" + nama + " " + to_string(NIM) + " " + jurusan + " " + to_string(IPK) + " ";
 }
};

class DBase {
  public : 
  ifstream in;
  ofstream out ;
  string fileName;

  DBase (const char* fileName) {
DBase::fileName = fileName;
  };

  void save (Mahasiswa data) {
    cout << "========= Mahasiswa ========" << endl;
  cout << "Nama : " << data.nama << endl;
  cout << "Jurusan  : " << data.jurusan << endl;
  cout << "NIM  : " << data.NIM << endl;
  cout << "IPK  : " << data.IPK << endl << endl;

  DBase::out.open(DBase::fileName,ios::app);
  DBase::out << data.stringfy() << endl;
  DBase::out.close();
  }

  void showAll () {
    DBase::in.open(DBase::fileName,ios::in);
    string nama,NIM,jurusan,IPK;
    int index ;

    while (!DBase::in.eof())
    {
      DBase::in>>nama;
      DBase::in>>NIM;
      DBase::in>>jurusan;
      DBase::in>>IPK;
      cout << index++ ;
      cout << nama;
      cout << NIM;
      cout << jurusan;
      cout << IPK << endl;
    }
    DBase::in.close();
  };
};



int main(int argc, char const *argv[])
{
     Mahasiswa mhs1  = Mahasiswa("Rayhan","Teknik Informatika", 123445,4.0);

    //  mhs1.tampilkanData();

   Mahasiswa mhs2  = Mahasiswa("Dadi","Teknik Informatika", 123445,4.0);
    //  mhs2.tampilkanData();
     mhs2.ubahNama("Randy");
    //  mhs2.tampilkanData();

    //  cout << mhs2.getNama()<<endl;
    //  cout << mhs2.katrolIPK(1.1)<<endl;


     

      string nama;
  string jurusan;
  double NIM ;
 double IPK ;

 cout << "===== Masukan data mahasiswa =====" << endl;

cout << "Masukan Nama : ";
getline(cin, nama); // Menangani jika nama ada spasi

cout << "Masukan Jurusan : ";
getline(cin, jurusan); // Aman membaca "Teknik Informatika"

cout << "Masukan NIM : ";
cin >> NIM;

cout << "Masukan IPK : ";
cin >> IPK;

// Bersihkan sisa tombol Enter sebelum input berikutnya jika ada
cin.ignore();

Mahasiswa mhs3 = Mahasiswa(nama, jurusan, NIM, IPK);

DBase database = DBase("data.txt");
database.save(mhs3);
database.showAll();
  return 0;
}
