#include <iostream>
#include <string>
#include "Player2.hpp"

Player::Player(const char *name)
{
  this->name = name;
  this->attackPower = 100;
  this->level = 1;
  this->exp = 0;
}


std::string
Player::getName()
{
  return this->name;
}

void Player::addExp(int expValue)
{
  int maxExp = 100;
  this->exp += expValue;
  if (maxExp <= this->exp)
  {
    this->level++;
    this->attackPower += 100;
    std::cout << "Level Up" << std::endl;
    this->exp = 0;
  }
}

void Player::display()
{
  std::cout << "Name \t: " << this->name << std::endl;
  std::cout << "Level : " << this->level << "Exp : " << this->exp << std::endl;
  std::cout << "Attack\t :" << this->attackPower << std::endl;
}
