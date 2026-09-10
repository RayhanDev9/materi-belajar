describe("Error", () => {
  class ValidationError extends Error {
    constructor(public message: string) {
      super(message);
    }
  }

  function doubleit(value: number) {
    if (value < 0) {
      throw new ValidationError("value must be positive");
    }
    return value * 2;
  }

  it("should throw error", () => {
    try {
      const result = doubleit(-1);
      console.info(result);
    } catch (error) {
      if(error instanceof ValidationError) {
        console.info(error.message);
      }
    }
  });
});
