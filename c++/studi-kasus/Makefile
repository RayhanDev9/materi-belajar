CXX = g++
CXXFLAGS = -std=c++17 -Wall -Wextra -O2
LDFLAGS = -lraylib -lopengl32 -lgdi32 -lwinmm

SRC = $(wildcard src/*.cpp) $(wildcard src/core/*.cpp) $(wildcard src/systems/*.cpp) $(wildcard src/entities/*.cpp) $(wildcard src/states/*.cpp) $(wildcard src/ui/*.cpp)
OBJ = $(SRC:.cpp=.o)
TARGET = SpaceShooter.exe

all: $(TARGET)

$(TARGET): $(OBJ)
	$(CXX) $(OBJ) -o $(TARGET) $(LDFLAGS)
	@echo Build complete: $(TARGET)

%.o: %.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

clean:
	rm -f $(OBJ) $(TARGET)
	@echo Cleaned build artifacts.
