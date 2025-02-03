'use strict';

/*
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never to this!
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // };
}

const jones = new Person('jones', 2000);
console.info(jones);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jones instanceof Person);

const jaka = new Person('jaka', 2009);

console.info(jaka);

////////////////////////////
// Prototype

console.info(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}
jaka.calcAge();
jones.calcAge();
matilda.calcAge();
console.info(jones.__proto__);
console.info(Person.prototype);
console.info(jones.__proto__ === Person.prototype);
console.info(Person);
console.info(jones);

console.info(Person.prototype.isPrototypeOf(jones));
console.info(Person.prototype.isPrototypeOf(matilda));
console.info(Person.prototype.isPrototypeOf(Person));
// .prototyeOfLinkedObjects

Person.prototype.species = 'boy';
console.info(jones.species)
console.info(matilda.species)
console.info(jones);

console.info(jones.hasOwnProperty('firstName'));
console.info(jones.hasOwnProperty('species'));

////////////////////////
// Prototypal Inheritance on Built-In Objects
console.info(jones.__proto__);
// Object.prototype (top of prototype chain)
console.info(jones.__proto__.__proto__);
console.info(jones.__proto__.__proto__.__proto__);

const arr = [1,1,2, 2, 3,3,4, 4,5, 5,6, 6,7, 7,8, 8];
console.info(arr.__proto__);
console.info(arr.__proto__.__proto__);
console.info(arr.__proto__.__proto__.__proto__);

console.info(Array.prototype);
console.info(arr.__proto__ === Array.prototype);

// tidak boleh digunakan cara ini,karena ada aslasanya 
Array.prototype.unique = function () {
    return [...new Set(this)];
}
console.info(Array.prototype);
console.info(arr.unique());

const h1 = document.querySelector('h1');
console.dir(()=> 1*1)
*/

////////////////////
/*
// Class

//Class expression
// const PersonCl = class {}

// Class declration
// class PersonCl {}

class PersonCl {
    constructor(fullName, britYear) {
        this.fullName = fullName;

        this.britYear = britYear;
    }

    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.info(2037 - this.britYear);
    }

    great() {
        console.info(`hey ${this.fullName}`);
    }
    // Set a property that already exists
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there 👋');
        console.log(this);
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, britYear, course) {
        super(fullName, britYear);
        this.course = course;
    }
    introduce = function () {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    };
    calcAge() {
        console.info(2037 - this.britYear, 'baru')
    }


}

const mike = new StudentCl('mike marten', 2020, 'javascript');
console.info(mike);
mike.introduce();
mike.calcAge();
*/


// PersonCl.prototype.great = function () {
//     console.info(`hey ${this.fristName}`);
// }
/*

const jesica = new PersonCl('Jesica Devis', 2010);
console.info(jesica);
jesica.calcAge();
jesica.great();
console.info(jesica.fullName);

console.info(PersonCl.prototype === jesica.__proto__);

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode


const account = {
    fristName: 'jones',
    movmenst: [120, 343, 400, 300],
    get latest() {
        return this.movmenst.slice(-1).pop();
    },
    set latest(mov) {
        this.movmenst.push(mov)
    }
}

console.info(account.latest);
account.latest = 50;
console.info(account.movmenst);


class PersonMeCl {
    constructor(fullName, britYear) {
        this.fullName = fullName;
        this.britYear = britYear;
    }

    get fullNameCheck() {
        if (this.fullName.includes(' ')) return this.fullName;
        else alert('Itu bukan nama panjang');
    }
    set addFullName(mov) {
        return this.britYear = this.britYear + mov;
    }
}

const rayhan = new PersonMeCl('Muhamad Rayhan', 2005);
console.info(rayhan.fullNameCheck);

rayhan.addFullName = 10
console.info(rayhan.britYear);


// Object create
const PersonProto = {
    calcAge () {
        console.info(2037 - this.birthYear )
    },
    init (fristName,birthYear) {
        this.fristName = fristName;
        this.birthYear = birthYear;
        console.info(this);
    }
}

const sarah = Object.create(PersonProto);
sarah.fristName = 'Sarah';
sarah.birthYear = 2010;
sarah.calcAge();

const steven = Object.create(PersonProto);
steven.init('steven',2021);
steven.calcAge();

console.info(steven.__proto__);
console.info(PersonProto);
console.info(PersonProto === steven.__proto__);
*/

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
/*
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  };
  
  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  
  const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
  };
  
  // Linking prototypes
  Student.prototype = Object.create(Person.prototype);
  
  Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };

  
  const mike = new Student('Mike', 2020, 'Computer Science');
  mike.introduce();
  mike.calcAge();
  console.dir(Student.__proto__);
  console.dir(mike.__proto__.__proto__);
  console.dir(Person.__proto__.__proto__);
  
  console.log(mike.__proto__);
  console.log(mike.__proto__.__proto__);
  
  console.log(mike instanceof Student);
  console.log(mike instanceof Person);
  console.log(mike instanceof Object);
  
  Student.prototype.constructor = Student;
  console.dir(Student.prototype.constructor);
  */

///////////////////////////////////////
// Inheritance Between "Classes": Object.create
/*
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

console.info(PersonProto);
console.info(StudentProto);

StudentProto.introduce = function () {
    // BUG in video:
    // console.log(`My name is ${this.fullName} and I study ${this.course}`);

    // FIX:
    console.log(`My name is ${this.firstName} and I study ${this.course}`);

};
console.info(StudentProto);
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

console.info(jay);

const marco = Object.create(jay);
marco.init('marco',2019,'Otomasi Industri');
console.info(marco);
*/

///////////////////////////////////////
/*
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// STATIC version of these 4


class account {
    bank = 'Bankist';
    #movments = [];
    #pin;
    constructor(owner, crreuncy, pin) {
        this.owner = owner;
        this.crreuncy = crreuncy;
        this.#pin = pin;
        // this.movments = [];
        this.locale = navigator.language;

        console.info(`Hello ${this.owner}`);

    }
    // Public interface (API)

    getMovments() {
        return this.#movments;
        // Not chaninable
    }

    deposit(val) {
        this.#movments.push(val);
        return this;

    }
    mithdrawel(val) {
        this.deposit(-val);
        return this;
    }
    #approveLoan(val) {
        // Metode fake
        return true;
    }
    requestLoat(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.info(`Pinjaman berhasil`);
        }
        return this;
    }
    static test() {
        console.info('test');
    }
}

const acc1 = new account('jones', 'ERU', 1111);

acc1.deposit(300);
acc1.mithdrawel(200);
acc1.requestLoat(1000);
// acc1.#approveLoan(1000);
account
    .test();
console.info(acc1);

// Chaining metode
acc1.deposit(100).mithdrawel(200).requestLoat(200).getMovments();
*/