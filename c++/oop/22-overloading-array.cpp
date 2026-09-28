#include <array>
#include <initializer_list>
#include <iostream>
#include <stdexcept>
#include <string>

using namespace std;

class Array {

public:
  class Proxy {
  private:
    int &element;

  public:
    Proxy(int &dataElement) : element(dataElement) {}

    operator int() const { return this->element; }

    int &operator=(int value) {
      this->element = value;
      return this->element;
    }
  };

private:
  int *data;
  size_t size;

public:
  Array(int arrarSize) {
    if (arrarSize > 0) {
      this->size = arrarSize;
      this->data = new int[arrarSize]{};
    } else {
      throw invalid_argument("Size harus lebih besar dari 0");
    }
  }

  Array(initializer_list<int> list) {
    this->size = list.size();
    this->data = new int[this->size];
    int i = 0;

    for (auto value : list) {
      this->data[i++] = value;
    }
  }

  ~Array() { delete[] data; }

  Proxy operator[](int index) {
    if (index < 0 || index >= this->size) {
      throw out_of_range("Index di luar jangkauan");
    }
    return Proxy(this->data[index]);
  }

  int getSize() { return this->size; }

  friend ostream &operator<<(ostream &output, const Array &array) {
    output << "[ ";
    for (size_t i = 0; i < array.size; i++) {
      output << array.data[i] << " ";
      if (i < array.size - 1) {
        output << ", ";
      }
    }
    output << "]";
    return output;
  }
};

int main() {
  Array data_array(5);
  Array data_array2 = {1, 2, 3, 4, 5, 6, 4, 3, 2};

  data_array[3] = 10;
  data_array[0] = 120;
  cout << data_array[0] << endl;
  cout << data_array[3] << endl;
  cout << "Size : " << data_array.getSize() << endl;

  cout << "Data Array 2 " << endl;
  cout << data_array2[3] << endl;
  cout << data_array2.getSize() << endl;

  cout << data_array2 << endl;

  return 0;
}
