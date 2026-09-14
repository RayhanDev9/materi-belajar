class Boc<T> {
  constructor(public content: T) {
    this.content;
  }

  getCountent(): T {
    return this.content;
  }
}

const numberBox = new Boc(1234);
const numberBox2 = new Boc<number>(1234);

console.info(numberBox);
