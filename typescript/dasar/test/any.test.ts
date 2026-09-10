describe("Any", () => {
  it("should any", () => {
    const person: any = {
      nama: "rayhan",
      umur: 20,
      isMarried: false,
    };

    person.city = "Banten";
    console.info(person);
  });
});
