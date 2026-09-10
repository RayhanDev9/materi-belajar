import { CustomerType, type Customer } from "../src/enum";

describe("Enum", () => {
  it("should be able to use enum", () => {
    const customer: Customer = {
      id: "1",
      name: "Rayhan",
      type: CustomerType.Platinum,
    };
    console.info(customer);
  });
});
