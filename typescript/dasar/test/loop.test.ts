describe("Loop", () => {
  it("should be able to use for loop", () => {
    const names: string[] = ["Rayhan", "Rizky", "Rizal"];
    for (let i = 0; i < names.length; i++) {
      console.info(names[i]);
    }

    for (const name of names) {
      console.info(name);
    }

    for (const index in names) {
      console.info(names[index]);
    }
  });

  it("should support while loop", () => {
    let cnt: number = 5;

    while (cnt > 0) {
      console.info(cnt);
      cnt--;
    }
  });
});
