// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const number = 3;
//     if (number > 4) {
//       resolve(number);
//     }
//     reject(number);
//   }, 2000);
// });

// promise
//   .then((value) => console.log(`ура цифра ${value}  больше пяти`))
//   .catch((value) => console.log(` К сожалению цифра ${value} меньше пяти`));


const asyncFn = async() => {
    await 'Success';
}

console.log(asyncFn());

