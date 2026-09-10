describe("Abstract Class", () => {
  abstract class Customer {
    readonly id: number;
    abstract name: string;
    constructor(id: number) {
      this.id = id;
    }

    hello() {
      console.info("hello");
    }

    abstract sayHello(name: string): void;
  }

  class RegulerCustomer extends Customer {
    name: string;

    constructor(id: number, name: string) {
      super(id);
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should be instance of Customer", () => {
    const customer = new RegulerCustomer(1, "Rayhan");
    console.info(customer);

    customer.sayHello("Budi");
  });
});
