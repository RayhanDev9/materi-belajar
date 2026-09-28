@echo off
echo ===================================================
echo   Compiling Space Shooter 2D (C++17 + Raylib 5.5)
echo ===================================================

g++ -std=c++17 -O2 -Wall src/*.cpp src/core/*.cpp src/systems/*.cpp src/entities/*.cpp src/states/*.cpp src/ui/*.cpp -o SpaceShooter.exe -lraylib -lopengl32 -lgdi32 -lwinmm

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [SUCCESS] Build completed successfully: SpaceShooter.exe
    echo Run 'run.bat' or 'SpaceShooter.exe' to play!
) else (
    echo.
    echo [ERROR] Build failed! Check compiler output above.
)
