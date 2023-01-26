// 14
// Реализовать объект калькулятора calculator с 3 методами. Первый метод setValues(a, b)
// присваивает значения свойствам a и b.Второй sum()(обратите внимание, что он не принимает аргументы)
//  возвращает сумму свойств a и b текущего объекта или сообщение об ошибке, если значения свойств не
//  присвоены. Третий метод mult() возвращает произведение свойств a и b текущего объекта или
//  сообщение об ошибке, если значения свойств не присвоены.

// Дополнительно: сделать в функции setValues(a, b) проверку и разрешить присвоение только чисел,
// иначе возвращать сообщение об ошибке.

// const calculator = {
//   setValues(a, b) {
//     if (!isNaN(a) && !isNaN(b)) {
//       this.a = a;
//       this.b = b;
//     } else {
//       console.log("введите число");
//     }
//   },
//   sum() {
//     if (this.a !== undefined && this.b !== undefined) {
//       console.log(this.a + this.b);
//     } else {
//       console.log("нет значения");
//     }
//   },
//   mult() {
//     if (this.a !== undefined && this.b !== undefined) {
//       console.log(this.a * this.b);
//     } else {
//       console.log("нет значения");
//     }
//   },
// };
// calculator.setValues(4, 6);
// calculator.sum();
// calculator.mult();

// 15
// Создать объект calculator2 с 3 методами. 1 метод - setVales(a, b) - создать используя метод
// из предыдущего задания(можно скопировать по ссылке метод из объекта calculator либо создать
// функцию setValues, как мы делали на лекции и присвоить обоим объектам). 2 метод - div() -
// возвращает результат деления a на b. 3 метод - diff() - возвращает разность чисел a и b.

// const calculator2 = {
//   setValues: calculator.setValues,
//   div() {
//     console.log(this.a / this.b);
//   },
//   diff() {
//     console.log(this.a - this.b);
//   },
// };

// calculator2.setValues(8, 4);
// calculator2.div();
// calculator2.diff();

// 16
// Создать объект пользователя  user1 со свойствам name, age, city, favoriteColor и
// методами setName, setAge, setCity, setFavoriteColor, которые меняют значения соответствующих
// свойств. Создать объект второго юзера user2 из существующего объекта user1. Изменить значения
// всех свойств второго юзера с помощью методов setName, setAge, setCity, setFavoriteColor.
// Вывести в консоль оба объекта и убедиться, что значения свойств разные.

// const user1 = {
//   name: "Brandon",
//   age: 33,
//   city: "San Jose",
//   favoriteColor: "blue",
//   setName(newName) {
//     this.name = newName;
//   },
//   setCity(newCity) {
//     this.city = newCity;
//   },
//   setFavoriteColor(newFavoriteColor) {
//     this.favoriteColor = newFavoriteColor;
//   },
// };

// const user2 = { ...user1 };
// user2.setCity("NN");
// user2.setName("Donna");
// user2.setFavoriteColor("green");
// console.log(user1);
// console.log(user2);

// 17
// Реализовать функцию, которая принимает в себя любое количество числовых аргументов и
// возвращает наименьшее число. (не использовать Math.min).

// const getMin = (...args) => {
//   let min = Infinity;
//   for (let value of args) {
//     if (value < min) {
//       min = value;
//     }
//   }
//   return min;
// };
// console.log(getMin(2, 1, 3, 7, 3, 5, 0));

// 18
// const func = (user) => {
//   const otherUser = { ...user };
//   otherUser.name = "Дмитрий";
//   otherUser.surName = "Сидоров";
//   return otherUser;
// };
// const firstUser = {
//   name: "Василий",
//   surName: "Иванов",
// };
// console.log(func(firstUser)); // { name: 'Дмитрий', surName: 'Сидоров' }
// console.log(firstUser); // { name: 'Василий', surName: 'Иванов' }

// 19
// Создайте объекты двух персонажей с именами(name) с числовыми характеристиками уровня(level),
// силы(strength), ловкости(agility) и интелекта(intellect).
// Для обоих персонажей создайте метод attack, который рассчитывает и возвращает урон атаки путем
// сложения силы и ловкости, и метод fireball, который возвращает урон файерболом путем умножения
// интеллекта на уровень персонажа. Далее создайте метод combo, который возвращает сумму значений,
// которые возвращают методы  attack и fireball.
// После формирования объектов персонажей создайте функцию startFight, которая принимает в себя два
// объекта и сравнивает результаты вызовов их методов combo и возвращает строку “Победил ИМЯ_ПЕРСОНАЖА”.

// const user1 = {
//   name: "Donna",
//   level: 5,
//   strength: 4,
//   agility: 3,
//   intellect: 8,
//   attack() {
//     return this.strength + this.agility;
//   },
//   fireball() {
//     return this.intellect * this.level;
//   },
//   combo() {
//     return this.attack() + this.fireball();
//   },
// };

// const user2 = {
//   name: "Stive",
//   level: 5,
//   strength: 4,
//   agility: 3,
//   intellect: 3,
//   attack() {
//     return this.strength + this.agility;
//   },
//   fireball() {
//     return this.intellect * this.level;
//   },
//   combo() {
//     return this.attack() + this.fireball();
//   },
// };

// function startFight(user1, user2) {
//   if (user1.combo() > user2.combo()) {
//     console.log("user1");
//   } else if (user1.combo() < user2.combo()) {
//     console.log("user2");
//   } else {
//     console.log("=");
//   }
// }

// startFight(user1, user2);
