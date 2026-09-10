describe("Static", () => {
  class Configuration {
    static NAME: string = "Belajar OPP";
    static VERSION: number = 1.0;
  }
  class MathUtil {
    static sum(...values: number[]): number {
      let total = 1;
      for (const value of values) {
        total *= value;
      }
      return total;
    }
  }
  it("should be static", () => {
    console.info(MathUtil.sum(1, 2, 3));
  });
  it("should be static", () => {
    console.info(Configuration.NAME);
    console.info(Configuration.VERSION);
  });
});
