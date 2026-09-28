#include <iostream>
#include <string>

using namespace std;

class Player {
private:
  string nama_belakang;
  string nama_tengah;
  string nama_depan;

public:
  Player() {
    nama_depan = "Depan";
    this->nama_tengah = "Tengah";
    (*this).nama_belakang = "Belakang";
  }

  Player &setNamaDepan(const char *nama_depan) {
    (*this).nama_depan = nama_depan;
    return *this;
  }

  Player &setNamaTengah(const char *nama_tengah) {
    (*this).nama_tengah = nama_tengah;
    return *this;
  }

  Player &setNamaBelakang(const char *nama_belakang) {
    (*this).nama_belakang = nama_belakang;
    return *this;
  }

  void display() {
    cout << "nama : " << nama_depan << " " << this->nama_tengah << " "
         << this->nama_belakang << endl;
  }
};

int main() {

  Player *player1 = new Player();

  player1->setNamaDepan("Udin");
  player1->setNamaTengah("Tampan");
  player1->setNamaBelakang("Tampan");
  player1->display();

  player1->setNamaDepan("Udin").setNamaTengah("Jaki").setNamaBelakang("Nunung");

  player1->display();

  Player player2 = Player();
  player2.setNamaDepan("Aep").setNamaTengah("Buser").setNamaBelakang("Mep");
  player2.display();

  return 0;
}
