describe("Relationship", () => {
  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  class Customer {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  it("Has One", () => {
    const person: Person = new Customer("Rayhan");

    console.info(person);
  });
});
