// замыкание
// function user() {
//   const name = "Brandon";
//   const getName = () => {
//     console.log(name);
//   };
//   return getName;
// }
// const getUser = user();
// getUser();

/////////////////////////////practica_start///////////////////////////////////
// const city = {
//   name: "San Jose",
//   population: 30,
//   getName() {
//     return this.name;
//   },
//   getPopulation() {
//     return this.population;
//   },
//   setName(name) {
//     this.name = name;
//   },
// };
// const city2 = {
//   name: "Moscow",
//   population: 30,
// };
// const setNameCity2 = city.setName.bind(city2);
// setNameCity2("Santa Ana");
// console.log(city.getName());
// city.setName();
// console.log(city);
// console.log(city.getName.call(city2));
/////////////////////////////practica_end///////////////////////////////////

/////////////////////////////practica_start///////////////////////////////////
// 1
// Используя каррирование написать функцию которая будет вычислять объём
// параллелепипеда.
// function vParalepiped(a) {
//   return function (b) {
//     return function (h) {
//       return a * b * h;
//     };
//   };
// }
// console.log(vParalepiped(3)(3)(10));

// 2
// Используя замыкание написать функцию которая будет вычислять объём
// параллелепипеда с высотой 10.
// function vParalepiped(h) {
//   return function (a, b) {
//     return a * b * h;
//   };
// }
// const vParalepipedClosure = vParalepiped(10);
// console.log(vParalepipedClosure(3, 5));

// 3
// C помощью замыкания реализовать функцию счетчика. (При каждом вызове
// функции в консоль должно выводиться текущие значение счетчика).

// function getCount() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
// const countResult = getCount();
// console.log(countResult());
// console.log(countResult());
// console.log(countResult());
/////////////////////////////practica_end///////////////////////////////////

// Getter/Setter

// const user = {
//   name: "Andrei",
//   surname: "Shobonov",
//   lastName: "Vladimirovich",
//   get fullName() {
//     return `${this.surname} ${this.name} ${this.lastName}`;
//   },
//   set fullName(value) {
//     const [surname, name, lastName] = value.split(" ");
//     this.surname = surname;
//     this.name = name;
//     this.lastName = lastName;
//   },

// };
// console.log(user.fullName);
// user.fullName = "Иванов Иван Иванович";
// console.log(user);
