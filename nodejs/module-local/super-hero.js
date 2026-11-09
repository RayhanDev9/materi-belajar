class Superhero {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.info(this.name);
  }
  setName(value) {
    this.name = value;
  }
}

module.exports = Superhero;
