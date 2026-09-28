#include <array>
#include <cstddef>
#include <iomanip>
#include <iostream>
#include <string>

using namespace std;

int main() {

  array<int, 10> nilai = {
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  };

  cout << " Masukan panjang arrar : " << nilai.size() << endl;

  cout << "Index" << setw(15) << "Nilai" << endl;

  for (size_t i = 0; i < nilai.size(); i++) {
    cout << setw(5) << i;
    cout << setw(15) << nilai[i] << endl;
  }

  cout << "\n Operator at 3 = " << nilai.at(3) << endl;
  cout << "\n Operator [ ] 3 = " << nilai[3] << endl;
  cout << "\n Operator Front = " << nilai.front() << endl;
  cout << "\n Operator back = " << nilai.back() << endl;
  cout << "\n Operator data = " << nilai.data() << endl;

 array<int, 10> nilai2 = {
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  };

  bool is_sama = {nilai == nilai2};
  cout << "Apakah sama arrarnya ? " << is_sama << endl;


  return 0;
}
