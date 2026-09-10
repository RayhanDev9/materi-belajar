describe("Properties", () => {
  const Customer = class {
    readonly id: number;
    name: string = 'Guest';
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  };
  it("should create an instance of a class with properties", () => {
    const customer = new Customer(1, "Rayhan");
    customer.age = 20;
    console.info(customer);
  });
});
