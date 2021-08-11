// function hello() {
//     alert('hello world')
// }

// hello()

// function expression

// let myFunction = function() {
//     alert('hello');
// }

// myFunction()

// let goodbye = function bye(name="bashir") {
//     alert(`good by ${name}`)
// };

// goodbye("dauda")

// Arrow function

// console.log(add(2, 6))
// const subtract = (x, y) => x - y;
// console.log(subtract(2, 6))
// const multi = (x, y, z) => x * y * z;
// console.log(multi(2, 6, 5))

// const alertus = () => alert('Welcome user')

// const tax = (salary) => {
//     const taxable = salary - 8000;
//     const lowerRate = 0.25 * taxable;
//     taxable = taxable - 20000;
//     const higherRate = 0.4 * taxable;
//     return lowerRate + higherRate;
// }


// hoist();
// // javascript interpreter move all function declaration to the top of the scope
// function hoist(){
//     console.log('hoist me')
// }

// const arrayOne = ["John Doe", "Mary", "Isaaic"];
// const arrayTwo = ["Said", "Aisha", "Umar"];

// const concatArray = [...arrayOne, ...arrayTwo];
// concatArray.forEach(name => {
//     console.log(name.toUpperCase())
// })

// const address = {
//     city: 'LA',
//     country: 'USA',
//     postCode: 'LA44'
// }

// const name = {
//     firstName: "Andy",
//     lastName: "Jones"
// }

// const person = { ...address, ...name }
// console.log(JSON.stringify(person,null, 3))

// const hello = () => {
//     const es6 = 'ES6';
//     return `hello ${es6}`
// }

// const powers = [1,2,3,4,5].map((number, index) => 
//     Math.pow(number, index)
// );


// const add = (n1, n2) => n1 + n2;

// const milesToken = miles => miles * 1.60934;

// const person = { 
//     name: "Alex",
//     cars: ["Ferrari", "Lambo"],
//     toString: function() {
//         //console.log(`${this.name} has ${this.cars}`)
//         this.cars.forEach(car => {
//             console.log(`${this.name} has ${this.car}`)
//         })

// }

// }
// person.toString()

////// Enhanced Object Property //////
// Enhanced Object Property
const calculator = (name, number) => {
    return {
        name,
        number,
        add(n1, n2){
            return n1 + n2
        }
    }
}

const calc = calculator('casio', 234)
console.log(calc)
console.log(calc.add(3,5))
