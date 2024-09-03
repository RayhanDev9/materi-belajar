export class Person{
    constructor (name){
        this.name = name;
    }
    sayHello(name){
        console.info(`Hello ${name},My name is ${this.name}`);
    }
}