// 14
// Реализовать объект калькулятора calculator с 3 методами. Первый метод setValues(a, b)
// присваивает значения свойствам a и b.Второй sum()(обратите внимание, что он не принимает аргументы)
//  возвращает сумму свойств a и b текущего объекта или сообщение об ошибке, если значения свойств не
//  присвоены. Третий метод mult() возвращает произведение свойств a и b текущего объекта или
//  сообщение об ошибке, если значения свойств не присвоены.

// Дополнительно: сделать в функции setValues(a, b) проверку и разрешить присвоение только чисел,
// иначе возвращать сообщение об ошибке.

const calculator = {
  setValues(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
      this.a = a;
      this.b = b;
    } else {
      console.log("введите число");
    }
  },
  sum() {
    if (this.a !== undefined && this.b !== undefined) {
      console.log(this.a + this.b);
    } else {
      console.log("нет значения");
    }
  },
  mult() {
    if (this.a !== undefined && this.b !== undefined) {
      console.log(this.a * this.b);
    } else {
      console.log("нет значения");
    }
  },
};

calculator.setValues(4, 6);
calculator.sum();
calculator.mult();
