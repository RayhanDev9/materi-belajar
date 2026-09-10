import type { Employee, Maneger } from "../src/employe";
import type { Seller } from "../src/seller";

describe("Interface", () => {
  it("should be able to use interface", () => {
    const seller: Seller = {
      id: "1",
      name: "Rayhan",
      address: "Jl. Raya No. 1",
      npwp: "1234567890",
      nib: "0987654321",
    };

    seller.id = "2";
    console.info(seller);
  });

  it("should funtion interface", () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number) =>
      value1 + value2;

    console.info(add(1, 2));
  });

  it("should interface array", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Rayhan", "Rizky", "Rizal"];
    console.info(names);
  });

  it("should interface string index", () => {
    interface StringIndex {
      [index: string]: string;
    }

    const data: StringIndex = {
      name: "Rayhan",
      address: "Jl. Raya No. 1",
      city: "Jakarta",
    };

    console.info(data);
  });

  it("should interface extend", () => {
    const employe: Employee = {
      id: 1,
      name: "Rayhan",
      position: "Developer",
      department: "IT",
      salary: 1000000,
    };

    console.info(employe);
    const manager: Maneger = {
      id: 2,
      name: "Rizky",
      position: "Manager",
      department: "IT",
      salary: 2000000,
      numberOfTeams: 5,
    };
    console.info(manager);
  });

  it("should methode function", () => {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const person: Person = {
      name: "Rayhan",
      sayHello(name: string): string {
        return `Hello ${name}, My name is ${this.name}`;
      },
    };
    console.info(person.sayHello("Rizky"));
  });

  it("should support intersection types", () => {
    interface HasName {
      name: string;
    }
    interface HasId {
      id: string;
    }

    type Domain = HasName & HasId;

    const domain: Domain = {
      name: "Rayhan",
      id: "1",
    };
    console.info(domain);
  });

  it("should support type assertions", () => {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const person : any = {
      name: "Rayhan",
      age: 20,
    }

    const person2 = person as Person;
  console.info(person2.name);
  });
});
