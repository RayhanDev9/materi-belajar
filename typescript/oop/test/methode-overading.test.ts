describe("Method Overading", () => {
  class Employe {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
    sayHello(name: string) {
      console.info(`Hello ${this.name}, my name is ${name}`);
    }
  }

  class Manager extends Employe {
    sayHello(name: string): void {
      // console.info(`Hello ${this.name}, my name is ${name}. I'm manager`);

      super.sayHello(name);
      console.info('and i am manager')
    }
  }

  it("should support overloading", () => {
    const employee = new Employe("Budi");
    const manager = new Manager("Rayhan");

    employee.sayHello("Joko");
    manager.sayHello("Joko");
  });
});
