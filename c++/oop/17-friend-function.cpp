#include <iostream>
#include <string>

using namespace std;

// Forward Declaration (pemberitahuan awal ke compiler tentang keberadaan kelas Intel)
class Intel;

class Strength {
private:
    string name;
    double health;

public:
    Strength(const string& name) {
        this->name = name;
        this->health = 100;
    }

    // Deklarasi Friend Function (memberikan akses ke member private kelas Strength)
    friend bool compare(const Strength& hero1, const Intel& hero2);
    friend bool compare(const Intel& hero1, const Strength& hero2);
};

class Intel {
private:
    string name;
    double health;

public:
    // Constructor Intel (sebelumnya ada typo tertulis Strenght)
    Intel(const string& name) {
        this->name = name;
        this->health = 80;
    }

    // Deklarasi Friend Function (memberikan akses ke member private kelas Intel)
    friend bool compare(const Strength& hero1, const Intel& hero2);
    friend bool compare(const Intel& hero1, const Strength& hero2);
};

// Implementasi Friend Function (Bisa mengakses member private .health dan .name dari Strength & Intel)
bool compare(const Strength& hero1, const Intel& hero2) {
    cout << "\n[Friend Function] Membandingkan Health:" << endl;
    cout << "  - " << hero1.name << " (Strength) : " << hero1.health << " HP" << endl;
    cout << "  - " << hero2.name << " (Intel)    : " << hero2.health << " HP" << endl;
    return hero1.health > hero2.health;
}

bool compare(const Intel& hero1, const Strength& hero2) {
    cout << "\n[Friend Function] Membandingkan Health:" << endl;
    cout << "  - " << hero1.name << " (Intel)    : " << hero1.health << " HP" << endl;
    cout << "  - " << hero2.name << " (Strength) : " << hero2.health << " HP" << endl;
    return hero1.health > hero2.health;
}

int main() {
    cout << "==========================================================" << endl;
    cout << "      17. DEMO FRIEND FUNCTION DI C++ (OOP)              " << endl;
    cout << "==========================================================" << endl;

    Strength heroStrength("Udin (Strength)");
    Intel heroIntel("Otong (Intel)");

    if (compare(heroStrength, heroIntel)) {
        cout << "Hasil: Hero Strength memiliki HP lebih besar daripada Hero Intel." << endl;
    } else {
        cout << "Hasil: Hero Intel memiliki HP lebih besar atau sama dengan Hero Strength." << endl;
    }

    if (compare(heroIntel, heroStrength)) {
        cout << "Hasil: Hero Intel memiliki HP lebih besar daripada Hero Strength." << endl;
    } else {
        cout << "Hasil: Hero Strength memiliki HP lebih besar atau sama dengan Hero Intel." << endl;
    }

    return 0;
}