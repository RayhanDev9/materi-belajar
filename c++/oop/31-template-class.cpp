#include <iostream>
#include <string>

using namespace std;

// Template Class (Generic Class)
template <typename T>

// template <typename P>

class Container {
private:
  T data;

public:
  Container(T data) : data(data) {}

  T getData() const { return this->data; }
};

int main() {
  cout << "=== Class Template / Generic Class ===" << endl << endl;

  Container<bool> boolContainer(true);

  Container<int> intContainer(100);
  Container<string> stringContainer("Hello C++ Template");

  cout << "Int Data: " << intContainer.getData() << endl;
  cout << "String Data: " << stringContainer.getData() << endl;
  cout << "Bool data : " << boolContainer.getData();

  return 0;
}
