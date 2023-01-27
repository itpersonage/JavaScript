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
