describe("If", () => {
  it("should be able to use if statement", () => {
    const exampla = 10;

    if (exampla > 5) {
      console.info("Greater than 5");
    } else if (exampla < 5) {
      console.info("Less than 5");
    } else {
      console.info("Equal to 5");
    }
  });

  it("should ternary operator", () => {
    console.info(10 > 5 ? "Greater than 5" : "Less than 5");
  })

  it("shoudl support switch statement", () => {
    function sayHello (name: string) {
      switch (name){
        case "Rayhan":
          console.info("Hello Rayhan");
          break;
        case "Rizky":
          console.info("Hello Rizky");
          break;
          default:
          console.info("Hello Guest");
          break;
      }
    }

    sayHello("Rayhan");
    sayHello("Rizky");
    sayHello("Guest");
  })
});
