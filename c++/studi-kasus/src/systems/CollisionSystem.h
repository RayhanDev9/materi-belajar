#pragma once

#include <raylib.h>
#include <cmath>

class CollisionSystem {
public:
    static bool checkAABB(Rectangle a, Rectangle b) {
        return CheckCollisionRecs(a, b);
    }

    static bool checkCircle(Vector2 c1, float r1, Vector2 c2, float r2) {
        return CheckCollisionCircles(c1, r1, c2, r2);
    }

    static bool checkCircleRec(Vector2 center, float radius, Rectangle rec) {
        return CheckCollisionCircleRec(center, radius, rec);
    }

    static float getDistance(Vector2 p1, Vector2 p2) {
        float dx = p1.x - p2.x;
        float dy = p1.y - p2.y;
        return sqrtf(dx * dx + dy * dy);
    }

    static float getDistanceSqr(Vector2 p1, Vector2 p2) {
        float dx = p1.x - p2.x;
        float dy = p1.y - p2.y;
        return dx * dx + dy * dy;
    }
};
