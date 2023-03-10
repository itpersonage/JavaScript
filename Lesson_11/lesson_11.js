// let user = {
//     name: 'Ivan',
// }

// let admin = {
//     __proto__:user,
// }

// console.log(admin.name);


//////////////////////////////////////////////

function CreateUser(name, age) {
    this.name = name;
    this.age = age;
}

let firstUser = new CreateUser('Ivan', 21);
let secondUser = new CreateUser('Alex', 18);
console.log(firstUser);
console.log(secondUser);