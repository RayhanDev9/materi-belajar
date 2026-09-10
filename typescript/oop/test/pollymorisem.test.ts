describe("", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee) {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else {
      console.info(`Hello Employee ${employee.name}`);
    }
  }
  function sayHelloWrong(employee: Employee) {
    if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else {
      console.info(`Hello Employee ${employee.name}`);
    }
  }

  it("should check if an object is an instance of a class", () => {
    let employee: Employee = new Employee("Budi");
    console.info(employee);

    employee = new Manager("Rayhan");
    console.info(employee);

    employee = new VicePresident("Dadi");
    console.info(employee);
  });

  it("should check if an object is an instance of a class", () => {
    sayHello(new Employee("Budi"));
    sayHello(new Manager("Rayhan"));
    sayHello(new VicePresident("Dadi"));
  });

  it("should check if an object is an instance of a class wrong", () => {
    sayHelloWrong(new Employee("Budi"));
    sayHelloWrong(new Manager("Rayhan"));
    sayHelloWrong(new VicePresident("Dadi"));
  });
});
