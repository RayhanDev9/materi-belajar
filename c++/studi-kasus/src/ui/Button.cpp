#include "Button.h"
#include "../systems/AudioSystem.h"
#include <algorithm>

Button::Button(Rectangle bounds, const std::string& text, int fontSize)
    : bounds(bounds), text(text), fontSize(fontSize) {}

void Button::setPosition(Vector2 pos) {
    bounds.x = pos.x;
    bounds.y = pos.y;
}

void Button::update(float dt) {
    Vector2 mousePos = GetMousePosition();
    hovered = CheckCollisionPointRec(mousePos, bounds);

    if (hovered && !wasHovered) {
        AudioSystem::getInstance().playSound(SoundID::BUTTON_HOVER, 0.4f);
    }
    wasHovered = hovered;

    // Smooth hover animation transition
    if (hovered) {
        hoverAnim = std::min(1.0f, hoverAnim + 8.0f * dt);
    } else {
        hoverAnim = std::max(0.0f, hoverAnim - 8.0f * dt);
    }

    clicked = hovered && IsMouseButtonPressed(MOUSE_BUTTON_LEFT);
    if (clicked) {
        AudioSystem::getInstance().playSound(SoundID::BUTTON_CLICK, 0.6f);
    }
}

void Button::render() {
    // Button background with glassmorphism / cyber aesthetic
    Color bgColor = Color{
        (unsigned char)(20 + 30 * hoverAnim),
        (unsigned char)(28 + 60 * hoverAnim),
        (unsigned char)(50 + 100 * hoverAnim),
        230
    };

    Color borderColor = Color{
        (unsigned char)(60 + 195 * hoverAnim),
        (unsigned char)(140 + 115 * hoverAnim),
        255,
        (unsigned char)(180 + 75 * hoverAnim)
    };

    // Draw expanded background when hovered
    Rectangle drawRec = {
        bounds.x - 2.0f * hoverAnim,
        bounds.y - 2.0f * hoverAnim,
        bounds.width + 4.0f * hoverAnim,
        bounds.height + 4.0f * hoverAnim
    };

    DrawRectangleRounded(drawRec, 0.25f, 4, bgColor);
    DrawRectangleRoundedLines(drawRec, 0.25f, 4, borderColor);

    // Glow line on top
    DrawLine((int)drawRec.x + 8, (int)drawRec.y + 2, (int)(drawRec.x + drawRec.width - 8), (int)drawRec.y + 2, borderColor);

    // Center text
    int textW = MeasureText(text.c_str(), fontSize);
    int textX = (int)(bounds.x + (bounds.width - textW) / 2.0f);
    int textY = (int)(bounds.y + (bounds.height - fontSize) / 2.0f);

    Color txtCol = hovered ? Color{255, 255, 255, 255} : Color{200, 225, 255, 230};
    DrawText(text.c_str(), textX, textY, fontSize, txtCol);
}

bool Button::isClicked() const {
    return clicked;
}
