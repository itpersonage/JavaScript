// const main = document.querySelector("main");

// const footer = main.nextElementSibling;
// console.log(footer);

// const li =
//   main.previousElementSibling.lastElementChild.lastElementChild.lastElementChild
//     .lastChild;
// console.log(li);

// main.innerHTML += "<h1>Hello world!</h1>";
// // main.outerHTML += "<article>sdsdsd</article>";
// main.textContent = "<article>sdsdsd</article>";

// main.className = "not_main_page_2";
// main.classList.add("content");
// main.classList.remove("page_1");
// main.classList.toggle("page_1");
// console.log(main.className);

//////////////////////////////////////To Do List//////////////////////////////////////////////

const body = document.querySelector("body");
const header = document.createElement("header");
body.prepend(header);
header.innerHTML = "<h1>To Do List</h1>";

const content = document.createElement("content");
body.append(content);

const form = document.createElement("form");
content.prepend(form);

const input = document.createElement("input");
form.append(input);
input.type = "text";
input.id = "element";
input.value = "";
let inputId = document.getElementById("element");

const newElement = (inputId) => {
  const inputValue = inputId.value;
  console.log(inputValue);
  if (inputValue !== "") {
    const element1 = document.createElement("div");
    element1.classList.add("elem");
    element1.innerHTML = `${inputValue}`;
    content.append(element1);
  }
};

const button = document.createElement("button");
form.append(button);
button.classList.add("btn");
button.innerHTML = "ToDo";
button.type = "submit";
button.addEventListener("click", (event) => newElement(inputId));

const element1 = document.createElement("div");
element1.classList.add("elem");
element1.innerHTML = "<h3>Element_1</h3>";
content.append(element1);

const element2 = document.createElement("div");
element2.classList.add("elem");
element2.innerHTML = "<h3>Element_2</h3>";
content.append(element2);

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
