#include <iostream>
#include <string>
// #include "Mahasiswa.cpp"

class Mahasiswa
{
public:
  std::string namePublic;

private:
  std::string namePrivate;

public:
  Mahasiswa(const char *name);

  void showPublic();

private:
  void showPrivate();
};
