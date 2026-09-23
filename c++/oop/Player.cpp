#include <iostream>
#include <string>
#include "player.h"

void Player::setName(const char *name)
{
  this->name = name;
}

std::string Player::getName()
{
  return this->name;
}

void Player::display()
{
  std::cout << "Nama player " << name << std::endl;
}

Player::Player(const char *name)
{
  this->name = name;
}