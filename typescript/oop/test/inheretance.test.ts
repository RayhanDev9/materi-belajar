describe("Inheretance", () => {
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class Drector extends Employee {}
  it("should create an instance of a class with inheretance", () => {
    const manager = new Manager("Rayhan");
    console.info(manager);

    const drector = new Drector("Dadi");
    console.info(drector);
  });
});
