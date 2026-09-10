describe("Union", () => {
  it("should be able to use union", () => {
    let value: string | number | boolean = "Rayhan";

    console.info(value);

    value = 20;
    console.info(value);

    value = false;
    console.info(value);
  });

  it("should support typeof operator for union", () => {
    function process(value: string | number | boolean) {
      if (typeof value === "string") {
        console.info("value is string");
      } else if (typeof value === "number") {
        console.info("value is number");
      } else if (typeof value === "boolean") {
        console.info("value is boolean");
      }
    }
    // Argumen bertipe string
    process("Rayhan"); // Output: value is string

    // Argumen bertipe number
    process(100); // Output: value is number

    // Argumen bertipe boolean
    process(true); // Output: value is boolean
    process(false); // Output: value is boolean
  });
});
