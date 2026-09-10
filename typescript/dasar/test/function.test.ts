describe("", () => {
  it("should be able to use function", () => {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    function sayGoodbye(name: string): void {
      console.log(`Goodbye ${name}`);
    }

    console.info(sayHello("Rayhan"));
    sayGoodbye("Rizky");
  });

  it("should default value parameter", () => {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }
    console.info(sayHello());
  });

  it("should support destructuring", () => {
    function sum(...values: number[]): number {
      return values.reduce((acc, curr) => acc + curr, 0);
    }

    console.info(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
  });

  it("should suppurt optional parameter", () => {
    function sayHello(fristName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${fristName} ${lastName}`;
      }
      return `Hello ${fristName}`;
    }
    console.info(sayHello("Rayhan"));
    console.info(sayHello("Rayhan", "Kurniawan"));
  });
  it("should support function overloading", () => {
    function callMe(value: string): string;
    function callMe(value: number): number;

    function callMe(value: any): any {
      if (typeof value === "string") {
        return `Hello ${value}`;
      }
      if (typeof value === "number") {
        return value * 2;
      }
    }
    console.info(callMe("Rayhan"));
    console.info(callMe(10));
  });

  it("should support function parameter", () => {
    function sayHello(name: string, callback: (name) => string): string {
      return callback(name);
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    console.info(sayHello("Rayhan", toUpper));
    console.info(sayHello("bambang", (name: string) => name.toLowerCase()));
  });
});
