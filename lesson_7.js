// const example = () => {
//   console.log(this);
// };

// const testObject = {
//   testMethod: example,
// };
// testObject.testMethod();

// Practice\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\start///////////////////////////////

// const city = {
//   name: "NN",
//   population: 2000000,
//   showName: function () {
//     console.log(this.name);
//   },
//   showPopulation() {
//     console.log(this.population);
//   },
//   setName(name) {
//     this.name = name;
//   },
// };
// city.setName("San Jose");
// city.showName();
// console.log(city);

// Practice\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\end///////////////////////////////

// let user1 = { name: "Вяся" };
// let user2 = { name: "Петя" };

// function say(phrase, symbol) {
//   console.log(`${this.name}, ${phrase} ${symbol}`);
// }

// say.apply(user1, ["Привет", "!"]);
// say.call(user2, "И тебе привет", "!");

// let sayBound1 = say.bind(user1);
// sayBound1("Привет");
// let sayBound2 = say.bind(user1, "Привет");
// sayBound2();

/////////////////////////////////////////////Practice_start/////////////////////////////////////////////

// const city = {
//   name: "NN",
//   population: 2000000,
//   showName: function () {
//     console.log(this.name);
//   },
//   showPopulation() {
//     console.log(this.population);
//   },
//   setName(name) {
//     this.name = name;
//   },
// };

// const city2 = {
//   name: "San Jose",
//   population: 1500000,
// };

// // city.setName("San Jose");
// // city.showName();
// city.showPopulation.call(city2);
// let test = city.showPopulation.bind(city2);
// let test2 = city.setName.bind(city2, "Santa Ana");
// test2();
// console.log(city2);
// test2("Moscow");
// console.log(city2);

// test();

/////////////////////////////////////////////Practice_end/////////////////////////////////////////////

// function example() {
//   let closure = 100;
//   return function (b) {
//     return closure + b;
//   };
// }
// let closureExample = example();
// console.log(closureExample(100));

// function sayName(name) {
//   return function massage(text) {
//     console.log(`${name}: ${text}`);
//   };
// }
// let sayDevid = sayName("Devid");
// let sayStive = sayName("Stive");
// sayDevid("Hi");
// sayStive("Goog morning");
// sayDevid("Ok");

/////////////////////////////////////////////Practice_start/////////////////////////////////////////////

// 1
// Используя замыкание написать функцию которая будет вычислять объём параллелепипеда.

// function vParal(h) {
//   return function (a, b) {
//     return h * a * b;
//   };
// }
// let showV = vParal(10);
// console.log(showV(3, 5));

/////////////////////////////////////////////Practice_end/////////////////////////////////////////////

// const user = {
//   name: "David",
//   age: 27,
//   getAge() {
//     console.log("getAge", this);
//     console.log(this.age);
//   },
//   plusAge() {
//     this.age += 1;
//     console.log(this.age);
//   },
// };

// const user2 = {
//   name: "Donna",
//   age: 40,
//   plusAge: user.plusAge,
// };

// user.plusAge();
// user2.plusAge();

///////////////////////////////////////////////////////////////////////////////////
