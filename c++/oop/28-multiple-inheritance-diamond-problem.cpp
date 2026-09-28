#include <iostream>
#include <string>

using namespace std;

// Base Class teratas
class Entity {
public:
  int id = 100;
  Entity() { cout << "Entity Constructor" << endl; }
};

class Entity2 {
public:
  int id = 100;
  Entity2() { cout << "Entity 2 Constructor" << endl; }
};

class Student2 : virtual public Entity2 {
public:
  Student2() { cout << "Student 2 Constructor" << endl; }
};

// Derived Class 1 (menggunakan virtual inheritance untuk mencegah Diamond
// Problem)
class Student : virtual public Entity {
public:
  Student() { cout << "Student Constructor" << endl; }
};

class Employee2 : virtual public Entity2 {
public:
  Employee2() { cout << "Employee 2 Constructor" << endl; }
};

// Derived Class 2 (menggunakan virtual inheritance)
class Employee : virtual public Entity {
public:
  Employee() { cout << "Employee Constructor" << endl; }
};

// Final Derived Class (Multiple Inheritance dari Student & Employee)
class TeachingAssistant : public Student, public Employee {
public:
  TeachingAssistant() { cout << "TeachingAssistant Constructor" << endl; }
};

class TeachingAssistant2 : public Student2, public Employee2 {
public:
  TeachingAssistant2() { cout << "TeachingAssistant 2 Constructor" << endl; }
};

int main() {
  cout << "=== Multiple Inheritance & Diamond Problem ===" << endl << endl;

  TeachingAssistant ta;
  cout << "ID Entity: " << ta.id << endl;

  TeachingAssistant2 ta2;
  cout << "ID Entity 2: " << ta2.id << endl;

  return 0;
}
