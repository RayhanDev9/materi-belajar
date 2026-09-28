@echo off
if not exist SpaceShooter.exe (
    echo SpaceShooter.exe not found! Compiling first...
    call build.bat
)

if exist SpaceShooter.exe (
    echo Starting Space Shooter 2D...
    start "" SpaceShooter.exe
)
