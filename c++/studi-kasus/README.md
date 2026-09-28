# 🎮 Level 2: Game 2D Grafis dengan C++
### Menggunakan Library SFML / Raylib

---

## 📌 Deskripsi Proyek

Proyek ini merupakan studi kasus **Level 2** dalam pembelajaran C++, yaitu membangun sebuah **game 2D interaktif** dengan menggunakan library grafis. Game yang akan dibuat adalah **Space Shooter 2D** — sebuah game klasik di mana pemain mengendalikan pesawat luar angkasa untuk menghancurkan musuh yang datang dari berbagai arah.

Game ini akan mencakup:
- Grafik interaktif dengan sprite 2D
- Animasi karakter dan efek visual
- Sistem suara dan musik latar
- Deteksi tabrakan (Collision Detection)
- Game loop yang stabil dan terstruktur

---

## 🧰 Teknologi & Tools

| Komponen        | Pilihan                          |
|----------------|----------------------------------|
| Bahasa          | C++17                            |
| Library Utama   | SFML 2.6 atau Raylib 5.x         |
| Build System    | CMake 3.20+                      |
| IDE             | VS Code / Visual Studio 2022     |
| Asset Generator | Kenney Assets / OpenGameArt      |
| Version Control | Git                              |

> **Rekomendasi:** Gunakan **Raylib** untuk pemula karena API-nya lebih sederhana dan tidak memerlukan banyak konfigurasi. Gunakan **SFML** untuk proyek yang lebih kompleks dan terstruktur secara OOP.

---

## 🎯 Fitur yang Akan Diimplementasikan

### 1. 🔁 Game Loop
Sistem inti yang mengatur alur permainan secara konsisten.

- **Fixed Timestep** — memastikan logika game berjalan pada kecepatan yang sama di semua perangkat
- **Delta Time** — kalkulasi waktu antar frame untuk gerakan yang smooth
- **State Management** — pengelolaan state: MENU, PLAYING, PAUSED, GAME_OVER
- **FPS Control** — pembatasan frame rate (60 FPS target)

### 2. 💥 Collision Detection
Sistem pendeteksian tabrakan antara objek-objek dalam game.

- **AABB (Axis-Aligned Bounding Box)** — deteksi tabrakan kotak sederhana
- **Circle Collision** — deteksi tabrakan berbasis lingkaran untuk objek bulat
- **Broad Phase & Narrow Phase** — optimasi pengecekan tabrakan
- **Collision Response** — reaksi saat tabrakan terjadi (destroy, bounce, damage)

### 3. 🖼️ Sprite Renderer
Sistem rendering untuk menampilkan gambar dan animasi 2D.

- **Texture Management** — loading dan caching tekstur dari file
- **Sprite Sheet Animation** — animasi berbasis sprite sheet (frame-by-frame)
- **Layer Rendering** — rendering berlapis (background, entities, UI, particles)
- **Parallax Scrolling** — efek kedalaman pada background
- **Particle System** — efek ledakan, asap, dan efek visual lainnya

### 4. 🔊 Audio Controller
Sistem pengelolaan suara dan musik dalam game.

- **Sound Effects (SFX)** — suara tembakan, ledakan, power-up
- **Background Music (BGM)** — musik latar yang bisa loop
- **Volume Control** — pengaturan volume SFX dan BGM secara terpisah
- **Audio Pooling** — pengelolaan multiple suara secara bersamaan

---

## 🗂️ Struktur Direktori Proyek

```
space-shooter-2d/
|
+-- assets/
|   +-- sprites/          # Gambar sprite (player, enemy, bullet, dll)
|   +-- audio/            # File suara (.wav, .ogg)
|   |   +-- sfx/
|   |   +-- music/
|   +-- fonts/            # Font untuk UI
|   +-- backgrounds/      # Gambar latar belakang
|
+-- src/
|   +-- main.cpp                  # Entry point
|   |
|   +-- core/
|   |   +-- Game.h / Game.cpp     # Kelas utama game (game loop)
|   |   +-- GameState.h           # Enum dan interface state
|   |   +-- ResourceManager.h     # Manajemen loading asset
|   |
|   +-- systems/
|   |   +-- CollisionSystem.h     # Sistem collision detection
|   |   +-- RenderSystem.h        # Sistem rendering sprite
|   |   +-- AudioSystem.h         # Sistem audio controller
|   |   +-- ParticleSystem.h      # Sistem partikel/efek visual
|   |
|   +-- entities/
|   |   +-- Entity.h              # Base class untuk semua objek
|   |   +-- Player.h / Player.cpp # Objek pemain
|   |   +-- Enemy.h / Enemy.cpp   # Objek musuh
|   |   +-- Bullet.h / Bullet.cpp # Proyektil
|   |   +-- PowerUp.h             # Item power-up
|   |
|   +-- states/
|   |   +-- MenuState.h           # State menu utama
|   |   +-- PlayState.h           # State gameplay utama
|   |   +-- PauseState.h          # State jeda
|   |   +-- GameOverState.h       # State game over
|   |
|   +-- ui/
|       +-- HUD.h                 # Heads-Up Display (skor, HP, dll)
|       +-- Button.h              # Komponen tombol UI
|
+-- CMakeLists.txt                # Konfigurasi build
+-- README.md                     # Dokumentasi proyek ini
+-- .gitignore
```

---

## 📅 Rencana Pengerjaan (Timeline)

### 🗓️ Fase 1 — Setup & Fondasi (Hari 1–2)
- [x] Install dan konfigurasi library (Raylib 5.5)
- [x] Setup project dengan CMake & Makefile & Build.bat
- [x] Buat window dasar dan game loop pertama
- [x] Implementasi delta time dan FPS control (60 FPS Fixed Timestep)
- [x] Buat kelas `Game` sebagai entry point utama

### 🗓️ Fase 2 — Sprite Renderer (Hari 3–4)
- [x] Load dan render sprite pertama (player)
- [x] Implementasi `ResourceManager` untuk caching & procedural vector rendering
- [x] Buat sistem sprite animation & engine thruster particles
- [x] Implementasi parallax scrolling untuk 3-layer background
- [x] Tambahkan layer rendering (background → entities → particles → UI)

### 🗓️ Fase 3 — Gameplay & Entities (Hari 5–6)
- [x] Buat kelas `Entity` sebagai base class
- [x] Implementasi player movement (WASD / Arrows input with banking physics)
- [x] Sistem penembakan peluru (5 weapon tiers, lasers, missiles)
- [x] Spawn dan pergerakan musuh (Scout, Cruiser, Kamikaze, Asteroids, Boss)
- [x] Implementasi power-up system (Shield, Weapon Upgrade, Health, Nuke, Speed)

### 🗓️ Fase 4 — Collision Detection (Hari 7)
- [x] Implementasi AABB & Circle collision detection
- [x] Collision antara bullet <-> enemy
- [x] Collision antara enemy <-> player
- [x] Collision response (damage, destroy, score, screen shake, spark particles)
- [x] Uji coba dan debug sistem collision

### 🗓️ Fase 5 — Audio Controller (Hari 8)
- [x] Load dan mainkan sound effect (laser, explosion, shield hit, powerup)
- [x] Implementasi procedural cyberpunk synth background music
- [x] Buat `AudioSystem` dengan kontrol volume dan pitch variation
- [x] Tambahkan audio pooling & dynamic intensity scaler

### 🗓️ Fase 6 — Game States & UI (Hari 9)
- [x] Implementasi State Machine (Menu, Play, Pause, GameOver)
- [x] Buat HUD (skor rolling, hull health, shield, weapon stars, bombs, wave banner)
- [x] Buat layar Menu dengan tombol interaktif & ship showcase
- [x] Buat layar Game Over dengan breakdown skor akhir & retry
- [x] Implementasi sistem high score (simpan ke file `highscore.dat`)

### 🗓️ Fase 7 — Polish & Finalisasi (Hari 10)
- [x] Tambahkan particle system (ledakan, trail mesin, shockwave, floating text)
- [x] Balancing gameplay (kecepatan, spawn rate, boss fight curve)
- [x] Testing dan bug fixing (Clean build with zero warnings)
- [x] Dokumentasi kode lengkap dan build script

---

## 📐 Diagram Arsitektur

```
+--------------------------------------------------+
|                    main.cpp                      |
|                 (Entry Point)                    |
+------------------------+-------------------------+
                         |
+------------------------v-------------------------+
|                  Game (Core)                     |
|  +------------+  +----------+  +--------------+ |
|  |  GameLoop  |  |  States  |  |   Resource   | |
|  | (Update /  |  | Manager  |  |   Manager    | |
|  |  Render)   |  +----------+  +--------------+ |
|  +------------+                                  |
+--------+-----------------------------------------+
         |
         +--------------------------------------+
         |                                      |
+--------v-----------+             +------------v--------+
|      Systems       |             |      Entities        |
| +--------------+   |             | +-----------------+  |
| | Collision    |   |             | | Player          |  |
| | System       |   |             | | Enemy (Scout,   |  |
| +--------------+   |             | |  Cruiser,       |  |
| | Render       |   |             | |  Kamikaze,      |  |
| | System       |   |             | |  Asteroid,      |  |
| +--------------+   |             | |  Boss)          |  |
| | Audio        |   |             | | Bullet          |  |
| | System       |   |             | | PowerUp         |  |
| +--------------+   |             | +-----------------+  |
| | Particle     |   |             +---------------------+
| | System       |   |
| +--------------+   |
+--------------------+
```

---

## 📚 Konsep C++ yang Dipelajari

| No | Konsep                    | Implementasi dalam Proyek                           |
|----|---------------------------|-----------------------------------------------------|
| 1  | **OOP & Inheritance**     | Base class `Entity` -> `Player`, `Enemy`, `Bullet`, `PowerUp` |
| 2  | **Polymorphism**          | Virtual method `update()`, `render()`, `takeDamage()`, `onDeath()` |
| 3  | **Smart Pointers**        | `std::unique_ptr` untuk entity vector dan state stack |
| 4  | **STL Containers**        | `std::vector`, `std::unordered_map` untuk manajemen objek |
| 5  | **Design Pattern**        | State Pattern, Singleton Pattern (Systems)          |
| 6  | **File I/O**              | Menyimpan dan membaca high score binary (`highscore.dat`) |
| 7  | **Delta Time Math**       | Kalkulasi gerakan fisika berbasis waktu             |
| 8  | **Enum Class**            | Strongly-typed Game states, TextureID, SoundID      |

---

## 🚀 Cara Menjalankan Proyek

### ⚡ Cara Cepat (Windows Batch Script):
```cmd
# 1. Compile project
build.bat

# 2. Jalankan game
run.bat
# atau langsung double click SpaceShooter.exe
```

### 🛠️ Menggunakan MinGW Make:
```bash
make
./SpaceShooter.exe
```

### 📦 Menggunakan CMake:
```bash
mkdir build && cd build
cmake ..
cmake --build .
./SpaceShooter.exe
```

---

## 🏆 Kriteria Keberhasilan

- [x] Game dapat dijalankan tanpa crash
- [x] Game loop berjalan stabil di 60 FPS
- [x] Sprite dapat ditampilkan dan dianimasikan
- [x] Collision detection bekerja dengan akurat
- [x] Audio/suara & dynamic BGM terdengar saat gameplay
- [x] Ada 4 game state lengkap (Menu, Play, Pause, GameOver)
- [x] Skor dapat ditampilkan dan disimpan ke binary file

---

## 📖 Referensi & Sumber Belajar

- SFML Official Documentation : https://www.sfml-dev.org/documentation/
- Raylib Official Documentation : https://www.raylib.com/cheatsheet/cheatsheet.html
- Game Programming Patterns (buku gratis) : https://gameprogrammingpatterns.com/
- Kenney Game Assets (gratis) : https://kenney.nl/assets
- OpenGameArt (aset gratis) : https://opengameart.org/

---

> Tip: Mulailah dari yang sederhana. Buat window, lalu tampilkan satu sprite, lalu tambahkan satu fitur per sesi. Jangan mencoba membuat semuanya sekaligus!

---

*Dibuat sebagai bagian dari kurikulum belajar C++ — Level 2: Game 2D Grafis*
