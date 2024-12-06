'use strict';

function scope() {
    const c = 'Rayhan';
    frist();

    function frist() {
        const a = 'hay';
        second()

        function second() {
            const b = 'Hi';
            third();
        }
    }

    function third() {
        const d = 'Hello';
        console.info(`${c + ' ' + d}`)
    }

    // 
    function clcAge(brithYear) {
        const age = 2037 - brithYear;

        function printAge() {
            let output = `${fristName},Umur kamu ${age}`

            if (brithYear >= 1981 && brithYear <= 1996) {
                var milenial = true;

                // Membuat variable yang sama dengan lingkup luar
                const fristName = 'Randy';

                // Menetapkan kembali variable luar
                output = 'New Menu';

                const str = `kamu lahir di tahun milinial ${fristName}`;
                console.info(str);

                function add(a, b) {
                    console.info(a + b);
                }
                add(2, 3);
            }
            console.info(milenial);
            console.info(output);

        }
        printAge();
    }
    const fristName = 'Rayhan';
    clcAge(1991);

}

scope();

function environment() {
    // const myName = 'Rayhan';

    // if (myName === 'Rayhan') {
    //     console.info(`${myName} is a ${job}`);
    //     const age = 2024 - 2025;
    //     console.info (age);
    //     const job = 'Student';
    //     console.info(x);
    // }

    // console.info(a)
    // console.info(b)
    // console.info(c)

    // var a = 1;
    // let b = 2;
    // const c = 3;

    // contoh bug di buat oleh var
    if (!product) {
        deleteProduct();
    }

    var product = 10;

    function deleteProduct() {
        console.info(`delet all product`)
    }




}
// Harus di global scope di cobanya
//  var x = 1;
//  let b = 2;
//  const c = 3;

//  console.info(x.window)

//  console.info(x === window.x);
//  console.info(b === window.b);
//  console.info(c === window.c);


environment();

function thisKeyword() {
    console.info(this)
}
// this di arrow function
const thirKeywordArrow = () => {
    console.info(this);
}
// this di global scope
console.info(this);
// this di object 
const jonas = {
    lahir: 2005,
    calcAge: function () {
        console.info(this);
        console.info(2024 - this.lahir);

        const self = this;

        // Lexical function => jika ingin mendapatkan this di arrow function
        const isMelenial = () => {
            // Cara 1
            console.info(self);
            // Cara 2
            console.info(this)
        }
        isMelenial();
    }
}
jonas.calcAge();

// Meminjam metode di object lain
const matilda = {
    lahir: 2009
}

matilda.calcAge = jonas.calcAge;
matilda.calcAge();
thisKeyword();
thirKeywordArrow();

// Arguments 
const addExpresion = function () {
    console.info(arguments);
}
addExpresion(1,2,3,4,5)

// const addExprisionArrow = () => {
//     console.info(arguments);
// }
// addExprisionArrow(1,2,3,4,5)

function primitiveTypes(params) {
    // Prmitive Types
    let lastName = 'davis';
    let nameOld = lastName;
    lastName ='andre'
    console.info(lastName,nameOld);

    // Referance Types
    const jasica = {
        fristName : 'Rayhan',
        lastName : 'Wiliams',
        age : 19
    }
    const jasicaMerid = jasica;
    jasicaMerid.lastName = 'andre';

    console.info(jasicaMerid.lastName,jasica.lastName);

    // Copiying Object
    const jasica2 = {
        fristName : 'Rayhan',
        lastName : 'Wiliams',
        age : 19,
        familiy : ['wiliam','salim']
    }
    const jasicaMerid2 = Object.assign({},jasica2);
    jasicaMerid2.lastName = 'andre';

    jasicaMerid2.familiy.push('bob')
    jasicaMerid2.familiy.push('nani')

    console.info('Before Meriid :',jasica2);
    console.info('After Meriid :',jasicaMerid2);
}

primitiveTypes();
