cmake_minimum_required(VERSION 3.20)
project(SpaceShooter2D LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(raylib 5.0 QUIET)
if (NOT raylib_FOUND)
    find_package(raylib CONFIG QUIET)
endif()

file(GLOB_RECURSE SOURCES "src/*.cpp")

add_executable(SpaceShooter ${SOURCES})

if (TARGET raylib)
    target_link_libraries(SpaceShooter PRIVATE raylib)
else()
    target_link_libraries(SpaceShooter PRIVATE raylib opengl32 gdi32 winmm)
endif()

# Target compile options
if (MSVC)
    target_compile_options(SpaceShooter PRIVATE /W4 /O2)
else()
    target_compile_options(SpaceShooter PRIVATE -Wall -Wextra -O2)
endif()
