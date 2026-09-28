#pragma once

#include <raylib.h>
#include <string>

class Button {
public:
    Button(Rectangle bounds, const std::string& text, int fontSize = 22);

    void update(float dt);
    void render();
    bool isClicked() const;

    void setPosition(Vector2 pos);
    void setText(const std::string& newText) { text = newText; }

private:
    Rectangle bounds;
    std::string text;
    int fontSize;

    bool hovered = false;
    bool clicked = false;
    float hoverAnim = 0.0f; // 0.0 to 1.0 smooth interpolation
    bool wasHovered = false;
};
