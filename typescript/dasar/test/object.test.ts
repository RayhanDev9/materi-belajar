describe("Object", () => {
  it("should be able to use object", () => {
    let person: { name: string; age: number; isMarried: boolean } = {
      name: "Rayhan",
      age: 20,
      isMarried: false,
    };

    console.info(person);
  });
});
