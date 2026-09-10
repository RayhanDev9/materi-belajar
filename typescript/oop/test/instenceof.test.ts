describe("Instanceof", () => {
  class Employe {}
  class Manager extends Employe {}

  const employee = new Employe();
  const manager = new Manager();

  console.info(typeof employee);
  console.info(typeof manager);

  console.info(employee instanceof Manager);
  console.info(manager instanceof Employe);
  it("should check if an object is an instance of a class", () => {});
});
