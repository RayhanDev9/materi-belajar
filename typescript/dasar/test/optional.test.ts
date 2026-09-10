describe("Optional", () => {
  it("should be able to use optional", () => {
    function sayHello(name?: string | null) {
      return `Hello ${name ?? "Guest"}`;
    }

    console.info(sayHello("Rayhan"));

    const name: string | undefined = undefined;

    console.info(sayHello(name));
    console.info(sayHello(null));
  });
});
