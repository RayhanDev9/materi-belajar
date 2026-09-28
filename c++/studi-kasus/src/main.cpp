#include "core/Game.h"
#include <iostream>

int main() {
    try {
        Game game(1280, 720, "SPACE SHOOTER 2D - CYBER ASSAULT (Level 2 C++)");
        game.run();
    } catch (const std::exception& e) {
        std::cerr << "Fatal Error: " << e.what() << std::endl;
        return 1;
    }

    return 0;
}
