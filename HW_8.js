// 1
// Реализовать объект пользователя с полями name, lastname ,surname, birthDate.
// Реализовать геттер/сеттер fullname, который возвращает одной строкой полное имя
// пользователя и записывает имя, фамилию и отчество при присвоении значения.
// Реализовать геттер age, который возвращает возраст используя данные даты рождения.

// const user = {
//   firstName: "Andrei",
//   lastname: "Shobonov",
//   surname: "Vladimirovich",
//   bithday: "21 august 1984",

//   get fullName() {
//     return `${this.lastname} ${this.firstName} ${this.surname}`;
//   },
//   set fullName(value) {
//     [lastname, firstName, surname] = value.split(" ");
//     this.lastname = lastname;
//     this.firstName = firstName;
//     this.surname = surname;
//   },
//   get birtdayDate() {
//     return this.bithday;
//   },
// };
// console.log(user.fullName);
// user.fullName = "Ivanov Ivan Ivanovich";
// console.log(user);
// console.log(user.birtdayDate);

// 2
// С помощью замыкания реализовать реализуйте генератор случайных чисел в указанном промежутке
// (min и max). Важное условие: при генерировании чисел они не должны повторяться.

// function randomNumber(min, max) {
//   const arr = [];
//   return function getRandom() {
//     let result = Math.round(Math.random() * (max - min) + min);
//     switch (arr.indexOf(result)) {
//       case -1:
//         console.log(result);
//         arr.push(result);
//         break;
//       default:
//         if (arr.length < max - min + 1) {
//           getRandom();
//         } else {
//           console.log("Выведенны все числа");
//         }
//     }
//   };
// }

// let getRandomResult = randomNumber(3, 9);
// getRandomResult();
// getRandomResult();
// getRandomResult();
// getRandomResult();
// getRandomResult();
// getRandomResult();
// getRandomResult();

// 5
// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать
// user.loginOk/loginFail в зависимости от ответа.
// В текущей реализации Сообщение не соответствует тому, что мы ожидаем
// увидеть(“Имя пользователя  logged in” или “Имя пользователя failed to log in”)
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: "Вася",
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 6
// Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func
// всегда указывал на value
// var elem = { value: "Привет" };
// function func(surname, name) {
//   console.log(this.value + ", " + surname + " " + name);
// }
// //Тут напишите конструкцию с bind()
// let boundFunc = func.bind(elem);
// boundFunc("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'
// boundFunc("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'

// 7
// Есть функция const sum = (a, b, c) => a + b + c, которая складывает три числа.
// Выполните каррирование. Т.е. напишите вспомогательную функцию currySum, в которую вы
// передадите функцию sum, и которую можно будет вызвать слуедующим образом -  currySum(a)(b)(c).
// const sum = (a, b, c) => a + b + c;
// function currySum(func) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return func(a, b, c);
//       };
//     };
//   };
// }
// console.log(currySum(sum)(1)(2)(3));

// 8
// 8. Напишите функцию создания задачи(createTask), принимающая название задачи, которая возвращает
// функцию смены статуса задачи.
// При вызове функции смены статуса возвращается строка с названием задачи и текущим статусом.
// Список статусов: “Не назначена”, “В работе”, “Тестирование”, “Завершена’. Статус
// Завершена - присваивается только после передачи флага true и только после тестирования.
// Статус Не назначена - только при первом вызове.

// function createTask(nameTask) {
//   const statusList = {
//     status1: "Не назначена",
//     status2: "В работе",
//     status3: "Тестирование",
//     status4: "Завершена",
//     getStatus1() {
//       console.log(`${nameTask} - ${this.status1}`);
//     },
//     getStatus2() {
//       console.log(`${nameTask} - ${this.status2}`);
//     },
//     getStatus3() {
//       console.log(`${nameTask} - ${this.status3}`);
//     },
//     getStatus4() {
//       console.log(`${nameTask} - ${this.status4}`);
//     },
//   };
//   let status = statusList.status1;
//   return function (flag) {
//     if (status === statusList.status1) {
//       statusList.getStatus1();
//       status = statusList.status2;
//     } else if (status === statusList.status2 && flag !== true) {
//       statusList.getStatus2();
//       status = statusList.status3;
//     } else if (status === statusList.status3) {
//       statusList.getStatus3();
//       status = statusList.status2;
//     } else if (flag === true && status === statusList.status2) {
//       statusList.getStatus4();
//       status = statusList.status4;
//     } else {
//       console.log(`${nameTask} - ${statusList.status4}`);
//     }
//   };
// }
// const task = createTask("application");
// task();
// task();
// task();
// task();
// task();
// task();
// task();
// task(true);