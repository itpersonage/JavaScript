// let user = {
//     name: 'Ivan',
// }

// let admin = {
//     __proto__:user,
// }

// console.log(admin.name);


////////////////////////////////////////////////////////////////


// function CreateUser(name, age) {
//     this.name = name;
//     this.age = age;
// }

// CreateUser.prototype.sayHi = function() {
//     console.log('Меня зовут:' + this.name)
// }

// let firstUser = new CreateUser('Ivan', 21);
// let secondUser = new CreateUser('Alex', 18);
// console.log(firstUser);
// console.log(secondUser);
// firstUser.sayHi();


//////////////////////////////// Task  start ////////////////////////////////////


// function Card(form, to) {
//     this.form = form;
//     this.to = to;
    
// }
// Card.prototype.show = function() {
//     console.log(this.form);
// }

// Card.prototype.setForm = function(newForm) {
//     this.form = newForm;
//     console.log(this);
// }

// const cardFun = new Card ('1212121212', '2323232323');

// console.log(cardFun);

// cardFun.show();
// cardFun.setForm('sdsdsd')


////////////////////////////////////// Task end /////////////////////////////////////////////////


// class Parent {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log('my name is ' + this.name);
//     }
// };

// const user = new Parent('Andrey');

// user.sayHi()


////////////////////////////////////////////////////////


// class Animal {
//     constructor(name, color, weight) {
//         this.name = name;
//         this.color = color;
//         this.weight = weight;
//     }
//     say() {
//         console.log(`${this.name} издает звуки`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, color, weight, breed) {
//         super(name, color, weight);
//         this.breed = breed;
//     }
//     say() {
//         console.log(`${this.name} лает`);
//     }
// }

// const dogOne = new Dog('Беляш', 'Черный', '2000', 'Такса');
// console.log(dogOne);
// dogOne.say()


///////////////////////////////////////////////////////////


class User {
    constructor(name) {
        this._name = name;
    }
    get name() {return this._name + ' пользователь'};
    set name(value) {
        if (value.length < 2) {
            console.log('имя слишком короткое');
            return;
        }
        return this._name + value;}
}

const userOne = new User('Иван');
userOne.name = '1'
console.log(userOne.name);