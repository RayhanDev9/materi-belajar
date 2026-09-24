#include <iostream>
#include <string>
#include "Mahasiswa.h"

Mahasiswa::Mahasiswa(const char *name)
{
  std::cout << "Nama saya adalah " << this->namePrivate << std::endl;
}

void Mahasiswa::showPublic()
{
  std::cout << "Nama saya adalah " << this->namePrivate << std::endl;
}

void Mahasiswa::showPrivate()
{
  std::cout << "Nama saya adalah " << this->namePrivate << std::endl;
}
