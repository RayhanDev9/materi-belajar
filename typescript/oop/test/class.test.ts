describe("Class", () => {
  class Customer {
    constructor(){
      console.info('Create new custumer')
    }
  }

    class Order {}


  it("should create an instance of a class", () => {
  
    const customer = new Customer();
    const order = new Order();
  });
  it("should create an instance of a class with constructor", () => {
    new Customer();
  })
});
