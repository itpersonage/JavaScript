// const user = {
//   userName: "Andrey",
//   userAge: 38,
//   profit: 5000,
//   showProfit() {
//     console.log(`Доход в месяц: ${this.profit} $`);
//   },
//   showRub(rate) {
//     console.log(`${this.profit * rate} rub`);
//   },
// };

// user.showProfit();
// user.showRub(68);

// const str = 'AAa';
// const result = (n) => {
//     if (str[n] < str[n].toLowerCase()) {
//         console.log('true');
//     } else {
//         console.log('false');
//     }
// }
// result(1)

// const str1 = 'Aaa';
// const str2 = 'AAa';
// const result = () => str1.toLowerCase() === str2.toLowerCase();
// console.log(result());

// let str = 'opostol';
// let str2 = ' ';
// let result = () => {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'o') {
//             str2 = str2 + '2'
//         } else {
//             str2 = str2 + str[i]
//         }
//     }
//     return str2;
// }
// console.log(result());

// let str = 'opostol';
// let result = () => str.replaceAll('o', 'a');
// console.log(result());

// let getRandom = (min, max) => {
//     return Math.round(Math.random() * (max - min) + min);
// }
// console.log(getRandom(1,100));

////////////////////////////////////////////////////////////////////////////////////////////////

// 1
// let str = 'Каждый охотник желает знать';
// let delCharacters = (str, length) => {
//     let str2 = '';
//     for(let i = 0; i < length; i++) {
//         str2 = str2 + str[i];
//     }
//     return str = str2
// }
// console.log(delCharacters(str, 10));

// 2
// const str = 'HTML JavaScript PHP';
// const insertDash =(str) => str.toUpperCase().replaceAll(' ', '-')
// console.log(insertDash(str));

// 3
// const str = 'string not starting';
// const cursiveLetter = (str) => {
//     let str2 = str[0].toUpperCase()
//     for (let i = 1; i < str.length; i++) {
//         str2 += str[i]
//     }
//     return str = str2;
// }
// console.log(cursiveLetter(str));

// 4
// const str = 'каждый охотник желает знать';
// const capitalize = (str) => {
//     let str2 = str[0].toUpperCase();
//     for (let i = 1; i < str.length; i++) {
//         if (str[i] === ' ') {
//             str2 += str[i];
//             i++;
//             str2 += str[i].toUpperCase()
//         } else {
//             str2 += str[i]
//         }
//     }
//     return str = str2
// }
// console.log(capitalize(str));

// 5
// const str = 'КаЖдыЙ оХоТнИк ЖеЛаЕт ЗнАтЬ';
// const changeRegister = (str) => {
//     let str2 = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toLowerCase()) {
//             str2 += str[i].toUpperCase()
//         } else {
//             str2 += str[i].toLowerCase()
//         }
//     }
//     return str2;
// }
// console.log(changeRegister(str));

// 7
// let zeros = (num, len, sing) => {
//     let str = sing + num;
//     for (let i = 0; i < len; i++) {
//         str += '0'
//     }
//     return str
// }
// console.log(zeros(3, 5, '+'));

// 8
// const str1 = 'ApostoL';
// const str2 = 'apostol';
// const comparison = (str1,str2) => str1.toLowerCase() === str2.toLowerCase();
// console.log(comparison(str1, str2))

// 9
// const str1 = "NsasasasNNApostoLNNN";
// const str2 = "apoStol";
// const insensitiveSearch = (str1, str2) =>
//   str1.toUpperCase().indexOf(str2.toUpperCase());
// console.log(insensitiveSearch(str1, str2));

// 10
// let str = " I live in Costa rica 42 age ";
// const initCap = (str) => {
//   str = str.trim();
//   console.log(str);
//   let str2 = str[0].toUpperCase();
//   for (let i = 1; i < str.length; i++) {
//     if (str[i] === " ") {
//       i++;
//       str2 += str[i].toUpperCase();
//     } else {
//       str2 += str[i];
//     }
//   }
//   return str2;
// };
// console.log(initCap(str));

// 11
// let str = " ILoveCostaRicaForever ";
// let initSnake = (str) => {
//   str = str.trim();
//   let str2 = str[0].toLowerCase();
//   for (let i = 1; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       str2 += "_" + str[i].toLowerCase();
//     } else {
//       str2 += str[i].toLowerCase();
//     }
//   }
//   return str2;
// };
// console.log(initSnake(str));

// 12
// let str = "Apostol";

// const repeat = (str, n) => {
//   for (let i = 0; i < n; i++) {
//     console.log(str);
//   }
// };
// repeat(str, 5);

// const repeat = (str, n) => {
//   let str2 = "";
//   for (let i = 0; i < n; i++) {
//     str2 += str;
//   }
//   return str2;
// };
// console.log(repeat(str, 5));

// 13
// const str = "/home/user/dir/file.txt";
// const path = (str) => {
//   let str2 = "";
//   let lastCount = 0;
//   let lastSymbol = 0;
//   for (let j = 0; j < Infinity; j++) {
//     if (str[j] === undefined) {
//       lastCount = j - 1;
//       break;
//     }
//   }
//   for (let i = lastCount; i > 0; i--) {
//     if (str[i] === "/") {
//       lastSymbol = i + 1;
//       break;
//     }
//   }
//   for (let k = lastSymbol; k < str.length; k++) {
//     str2 += str[k];
//   }
//   return str2;
// };
// console.log(path(str));



// 14