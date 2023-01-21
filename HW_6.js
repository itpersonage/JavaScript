// 1
// Удаление указанного количества символов из строки
// Напишите функцию delete_characters(str, length), которая возвращает подстроку,
// состоящую из указанного количества символов.

// let str = "Каждый охотник желает знать";
// const delete_characters = (str, length) =>
//   str.split("").slice(0, length).join("");
// console.log(delete_characters(str, 10));

// 2
// Вставить тире между словами строки
// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и
// вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний
// регистр.

// const str = "HTML JavaScript PHP";
// const insertDash = (str) => str.split(" ").join("-").toUpperCase();
// console.log(insertDash(str));

// 3

// Сделать первую букву строки прописной
// Напишите функцию, которая принимает строку в качестве аргумента и преобразует
// регистр первого символа строки из нижнего регистра в верхний.

// const str = "string not starting with capital";
// const getStr = (str) => {
//   str.split(" ");
//   let str2 = str[0].toUpperCase();
//   console.log(str2);
//   for (let i = 1; i < str.length; i++) {
//     if (str[i] === " ") {
//       str2 += str[i];
//       i++;
//       console.log(str[i]);
//       str2 += str[i].toUpperCase();
//     } else {
//       str2 += str[i];
//     }
//   }

//   return str2.split();
// };

// console.log(getStr(str));

// 1
// Используя метод map() напишите код, который получает из массива строк новый массив,
// содержащий их длины.
// const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
// const arrLength = (vegetables) => vegetables.map((el) => el.length);
// console.log(arrLength(vegetables));

// 2
// Использую метод reduce() напишите функцию currentSums(numbers),
// которая возвращает новый массив из такого же числа элементов, в котором на
// каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
// const currentSums = (numbers) => {
//   let result = [];
//   numbers.reduce((sum, el, i) => {
//     return (result[i] = sum + el);
//   }, []);
//   return result;
// };
// console.log(currentSums(numbers));

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
// const currentSum = (numbers) => {
//   return numbers.reduce((sum, el, index) => {
//     if (index === 0) {
//       sum.push(el);
//     } else {
//       sum.push(sum[index - 1] + el);
//     }
//     return sum;
//   }, []);
// };
// console.log(currentSum(numbers));

// 3
// const arr = [0, 1, 2, 3, 4, 5, 6, 7];
// const sumSeven = (arr) => {
//   let result = [];
//   let result2 = "";
//   for (let i = 0; i < arr.length; i++) {
//     let item1 = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       let item2 = arr[j];
//       if (item1 + item2 !== 7) {
//         continue;
//       } else {
//         result2 += `${item1}:${item2} `;
//       }
//     }
//   }
//   return result2.trim().split(" ");
// };
// console.log(sumSeven(arr));

// const arr = [0, 1, 2, 3, 4, 5, 6, 7];

// function sumSeven(arr) {
//   let resArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 7) {
//         resArray.push(`${arr[i]}:${arr[j]}`);
//       } else {
//         continue;
//       }
//     }
//   }
//   return resArray;
// }

// console.log(sumSeven(arr));

// 4
// Перед вами переменная, содержащая строку. Напишите код, создащий массив,
// который будет состоять из первых букв слов строки str.
// const str = "Каждый охотник желает знать, где сидит фазан";

// const getArray = (str) => str.split(" ").map((el) => el[0]);
// console.log(getArray(str));

// function getResult (str) {
//     let array = str.split('');
//     let str2 = [str[0]];
//     for(let i = 1; i < array.length; i++) {
//         if (array[i] === ' ') {
//             i ++;
//             str2.push(array[i])
//         }
//     }
//     return str2;
// }
// console.log(getResult(str));

// 5
// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк,
// состоящих из предыдущего, текущего и следующего символа строки str.
// const str = "JavaScript";

// function getResult (str) {
//     const array = str.split('')
//     let result = [];
//     array.map((el, index) => {
//         if(array[index - 1] === undefined) {
//             result.push(el + array[index +1])
//         } else if (array[index + 1] === undefined) {
//             result.push(array[index -1] + el)
//         } else {
//             result.push(array[index - 1] + el + array[index + 1]);
//         }
//     })
//     return console.log(result);
// };
// getResult(str);

// const result = (str) => {
//     return str.split("").map((el, index) => {
//       return (str[index - 1] || "") + el + (str[index + 1] || "");
//     });
//   };
//   console.log(result(str));

// 6

// Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно,
// в массив цифр расположенных по убыванию их значений.
// const numbers = [5, 7, 2, 9, 3, 1, 8];

// const getMaxNumber =(numbers) => {
//     let array = [];
//     numbers.forEach(() => {
//         let array2 = numbers.filter((el) => array.indexOf(el) === -1)
//         console.log(array2);
//         array.push(Math.max(...array2))
//     })
//     return array
// }
// console.log(getMaxNumber(numbers));

// 7

// Напишите код, объединяющий три массива цифр, и располагающий цифры,
// в полученном массиве, в порядке убывания их значений.
// const a = [1,2,3];
// const b = [4,5,6];
// const c = [7,8,9];
// function getArr(a, b, c) {

// const newArray = [].concat(a, b, c).reverse()

//     const newArray = [].concat(a, b, c);
//     const resArray = [];
//     newArray.forEach(() => {
//         const array2 = newArray.filter((el) => resArray.indexOf(el) === -1);
//         resArray.push(Math.max(...array2))
//     })
//     return resArray;
// }
// console.log(getArr(a, b, c));

// 8

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива.
// Массив, конечно же, может быть произвольным. Показать решение.
// const arr = [
//     [1, [5, 7]],
//     [7, 0, 2],
//     [3],
// ]

// function getSumArr (arr) {
//     const arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             arr2.push(arr[i][j])
//         }
//     }
//     return arr2.reduce((sum,el) => sum + el)
// }
// console.log(getSumArr(arr));

// const getSumArr = (arr) => arr.flat(2).reduce((sum, el) => sum + el);
// console.log(getSumArr(arr));

// 10

// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
// const arr = [1, 4, 7, 3];
// const resultArr = [];
// const getReverseArr = (arr) => {
//     for(let i = arr.length - 1; i >= 0; i--) {
//         resultArr.push(arr[i])
//     }
//     return resultArr
// }
// console.log(getReverseArr(arr));

// 11

// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
// чтобы в сумме получилось больше 10-ти.

// const arr = [1, 4, 5, 5, 7, 6, 9, 5, 2];

// function sumNumbersArr(arr) {
//   let count = 0;
//   let sum = 0;
//   for (let value of arr) {
//     if (sum < 10) {
//       sum += value;
//       count++;
//     }
//   }
//   return `elements ${count}, ${sum}`;
// }

// const sumNumbersArr = (arr) =>
//   arr.reduce((sum, el, index) =>
//     sum > 10 ? console.log("Нужно чисел", index - 1) : sum + el
//   );

//     if (sum > 10) {
//       console.log("Нужно чисел", index - 1);
//       return;
//     } else {
//       return sum + el;
//     }
//   });
// };

// sumNumbersArr(arr);

// 12

// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
// Первым параметром функция принимает значение, которым заполнять массив, а вторым -
// сколько элементов должно быть в массиве. Пример: arrayFill('x', 5)
// сделает массив ['x', 'x', 'x', 'x', 'x'].

// const arrayFill = (value, length) => {
//   const array = [];
//   for (let i = 0; i < length; i++) {
//     array.push(value);
//   }
//   return array;
// };
// console.log(arrayFill(5, 7));

// const arrayFill = (value, length) => {
//   const arr = new Array(length).fill(value);
//   return arr;
// };
// console.log(arrayFill(5, 3));

// 13

// Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора.
// Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.
// const obj = {
//   name: "user",
//   age: 12,
// };
// const obj2 = Object.assign({}, obj);
// const obj3 = { ...obj };
// obj.age = 2222;
// console.log(obj.age);
// console.log(obj3.name);

// 14

// Создайте функцию, которая принимает 1 аргумент - объект пользователя user
// со свойствами name, age, city. Функция должна возвращать новый объект пользователя
// с измененным полем name, при этом оригинальный объект user должен остаться неизменным.

// const user = {
//   name: "Andrey",
//   age: 38,
//   city: "NN",
// };
// function getObject(obj) {
//   const newObject = { ...obj };
//   newObject.name = "Nike";
//   return newObject;
// }
// console.log(getObject(user));

// 15

// Написать функцию которая будет принимать n-ое количество аргументов,
// в качестве результата функция будет возвращать сумму всех четных элементов.
// Для решения использовать цикл for (... of ...).

// function getEvenSum(...args) {
//   let sum = 0;
//   for (let value of args) {
//     if (value % 2 === 0) {
//       sum += value;
//     } else {
//       continue;
//     }
//   }
//   return sum;
// }
// console.log(getEvenSum(1, 4, 7, 2));

// 16

// Написать функцию, которая принимает слово и возвращает true,
// если слово является палиндромом.
// const str = "топоТ";

// const result = (str) => {
//   let str2 = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     str2 += str[i];
//   }
//   return str.toLowerCase() === str2.toLowerCase();
// };
// console.log(result(str));

// const result = (str) =>
//   str.split("").reverse().join("").toLowerCase() === str.toLowerCase();
// console.log(result(str));

// 17

// Написать функцию которая будет принимать два массива, и в качестве
// результата будет возвращать только те значения которые есть и в первом и во втором массиве.

// const arrRemoveDuplicates = (arr) => {
//   const arrResult = [];
//   arr.forEach((el) => {
//     if (arrResult.indexOf(el) === -1) {
//       arrResult.push(el);
//     }
//   });
//   return arrResult;
// };

// const arr1 = [2, 4, 5, 5, 7];
// const arr2 = [2, 4, 3, 5, 9];

// const arrCompare = (arr1, arr2, cb) => {
//   return cb(arr1.filter((el) => arr2.indexOf(el) !== -1));
// };

// console.log(arrCompare(arr1, arr2, arrRemoveDuplicates));
