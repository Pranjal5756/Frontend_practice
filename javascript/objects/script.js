// const obj1 = {
//     firstName : "pranjal",
//     lastName : "pratik",
//     age : 18,
//     class : "bca"

// }

// console.log(`firstName is ${obj1.firstName} and lastName is ${obj1.lastName}`)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1. This example creates an empty JavaScript object, and then adds 4 properties:

// let person = {};
// let person1 = new Object()

// person.firstName = "rahul"
// person.lastName = "sharam"
// person1.firstName = "rahul"
// person1.lastName = "sharam"


// 2. how to delete properties above

// delete person.lastName;
// delete person1.lastName
// console.log(person)
// console.log(person1)


// Nested Objects

// const obj1 = {
//     firstName : "pranjal",
//     lastName : "pratik",
//     age : 18,
//     class : "bca",
//     car : {
//         model : "new model",
//         name : "scorpio"
//     }
// }

// console.log(obj1.car.name)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JavaScript Object Methods

// const obj1 = {
//     firstName : "pranjal",
//     lastName : "pratik",
//     age : 18,
//     class : "bca",
//     fullName : () => {
//         return `${obj1.firstName} ${obj1.lastName}`
//     },
//     fullName1 : function(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// console.log(obj1.fullName)
// document.getElementById("demo").innerHTML = obj1.fullName()
// console.log(obj1.fullName1)
// document.getElementById("demo").innerHTML = obj1.fullName1()

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: () => {
//         return `${person.firstName} ${person.lastName}`;
//     }
// };
// document.getElementById("demo").innerHTML = person.fullName()
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Getter and Setter

// Getter 

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get lang() {
//       return this.language;
//     }
//   };
  
//   // Display data from the object using a getter:
//   document.getElementById("demo").innerHTML = person.lang;

// //  Setter

// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "",
//     set lang1(lang1) {
//       this.language = lang1.toUpperCase();
//     }
//   };
  
//   // Set a property using set:
//   person1.lang1 = "en";
  
//   // Display data from the object:
//   document.getElementById("demo1").innerHTML = person1.language;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// JavaScript Object Constructors

// function Person(a, b, c, d){
//     this.first = a;
//     this.secon = b;
//     this.third = c;
//     this.forth = d;
//     this.fullname = function(){
//         return this.first + " " + this.secon;
//     }
// }

// const obj = new Person("pranjal", "pratik", 40, "bca")

// // obj.fullname = function(){
// //     return this.first + " " + this.secon;
// // }

// console.log(obj.fullname())

// document.getElementById("demo").innerHTML = obj.fullname();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




