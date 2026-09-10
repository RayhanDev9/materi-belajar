describe("Visibilaty", () => {
  class Counter {
    // private counter: number = 0;
    protected counter: number = 0;

    public increment(): void {
      this.counter++;
    }
    public getCounter(): number {
      return this.counter;
    }
  }

  class DoubleCounter extends Counter {
    public increment(): void {
      // super.increment();
      // super.increment();
      this.counter += 2;
    }
  }

  it("should create an instance of a class with private properties", () => {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    counter.increment();

    console.info(counter.getCounter());
  });
  it("should create an instance of a class with protected properties", () => {
    const counter = new DoubleCounter();
    counter.increment();
    counter.increment();
    counter.increment();

    console.info(counter.getCounter());
  });
});
