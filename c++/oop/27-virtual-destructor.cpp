#include <iostream>
#include <string>

using namespace std;

class Base {
public:
  Base() { cout << "Base Constructor" << endl; }
  virtual ~Base() { cout << "Base Destructor" << endl; }
};

class Derived : public Base {
public:
  Derived() { cout << "Derived Constructor" << endl; }
  ~Derived() { cout << "Derived Destructor" << endl; }
};

class Book {
  string Title;
  string Author;
  int *Rates;
  int RatesCounter;

public:
  Book(string title, string author) {
    Title = title;
    Author = author;

    RatesCounter = 2;
    Rates = new int[RatesCounter];
    Rates[0] = 10;
    Rates[1] = 20;
    cout << Title + "Constructor\n";
  }

  ~Book() {
    delete[] Rates;
    Rates = nullptr;
    cout << Title + "Destuctor\n";
  }
};

int main() {
  Base *ptr = new Derived();
  delete ptr;

  Book book1("Millionaire Fastlane", "M. J. DeMarco");
  Book book2("C++ Lambda Story", "Bartek Filipek");

  return 0;
}
