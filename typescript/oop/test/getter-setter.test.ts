// 1. Definisi Class
class User {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // Getter & Setter untuk 'name'
  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.trim().length === 0) {
      throw new Error("Nama tidak boleh kosong");
    }
    this._name = newName;
  }

  // Getter & Setter untuk 'age'
  get age(): number {
    return this._age;
  }

  set age(newAge: number) {
    if (newAge < 0) {
      throw new Error("Umur tidak boleh negatif");
    }
    this._age = newAge;
  }
}

// 2. Unit Test
describe("Getter and Setter", () => {
  it("should create an instance of a class with getter and setter", () => {
    // Inisialisasi instance baru
    const user = new User("Alex", 25);

    // Pengujian Getter (membaca data awal)
    expect(user.name).toBe("Alex");
    expect(user.age).toBe(25);

    // Pengujian Setter (mengubah nilai secara valid)
    user.name = "John";
    user.age = 30;

    // Verifikasi nilai setelah diubah
    expect(user.name).toBe("John");
    expect(user.age).toBe(30);

    // Verifikasi validasi pada Setter (memastikan melempar error saat input salah)
    expect(() => {
      user.name = "   ";
    }).toThrow("Nama tidak boleh kosong");

    expect(() => {
      user.age = -5;
    }).toThrow("Umur tidak boleh negatif");

    console.info(user);
  });
});
