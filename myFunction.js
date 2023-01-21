let test = " Costa rica ";

// Функция удаления пробелов с начала и конца

let delTrim = (str) => {
  let str2 = "";
  let g = 0;
  let f = 0;
  for (let j = 0; j < Infinity; j++) {
    if (str[j] === undefined) {
      g = j - 1;
      break;
    }
  }

  for (let k = g; k > 0; k--) {
    f = g;
    if (str[k] !== " ") {
      f = k;
      break;
    }
  }

  for (let i = 1; i <= f; i++) {
    str2 += str[i];
  }
  return (str = str2);
};

console.log(delTrim(test));

// подсчет количества символов

let sum = (cb) => {
  let result = 0;
  for (let i = 0; i < Infinity; i++) {
    if (cb[i] !== undefined) {
      result += 1;
    } else {
      break;
    }
  }
  return result;
};

console.log(sum(delTrim(test)));