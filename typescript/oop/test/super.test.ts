describe("Super", () => {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  // Subclass untuk menguji keyword super
  class Employee extends Person {
    department: string;

    constructor(name: string, department: string) {
      super(name); // Memanggil constructor milik Person
      this.department = department;
    }
  }

  it("should support super", () => {
    const employee = new Employee("Budi", "IT");

    expect(employee.name).toBe("Budi");
    expect(employee.department).toBe("IT");

    console.info(employee)
  });
});
