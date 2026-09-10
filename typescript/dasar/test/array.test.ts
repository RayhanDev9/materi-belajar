describe("", () => {
  it("should be able to use array", () => {
    let array: number[] = [1, 2, 3, 4, 5];
    console.info(array);
  });

  it("read only arraray", () => {
    let hobbies: ReadonlyArray<string> = ["Membaca", "Menulis", "Berenang"];

    // hobbies[0] = "Bermain";
  });

  it("tuple", () => {
    const person: readonly [string, number, boolean] = ["Rayhan", 21, false];

    console.info(person);
  });
});
