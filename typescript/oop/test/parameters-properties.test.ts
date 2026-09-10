describe('Parameters Properties', () => {

  class Person {
    constructor(public name: string, public age: number) {
      // constructor kosong karena parameter properties
      // otomatis membuat dan mengisi this.name dan this.age
    }
  }

  it('should create an instance of a class with parameters', () => {
    const person = new Person("Rayhan", 20);
    console.info(person);
    // Output: Person { name: 'Rayhan', age: 20 }
  });
});