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
let inputId = document.getElementById("element");

const button = document.createElement("button");
form.append(button);
button.classList.add("btn");
button.innerHTML = "ToDo";
button.type = "submit";

const newElement = (inputId) => {
  const inputValue = inputId.value;
  if (inputValue !== "") {
    const element = document.createElement("div");
    element.classList.add("elem");
    content.append(element);
    const h3 = document.createElement("h3");
    h3.innerHTML = `${inputValue.toUpperCase()}`;
    element.append(h3);
    const divBtn = document.createElement("divBtn");
    element.append(divBtn);
    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "Del";
    divBtn.append(buttonDelete);
    const buttonClose = document.createElement("button");
    buttonClose.innerHTML = "X";
    divBtn.append(buttonClose);
    buttonClose.addEventListener("click", () => {
      element.classList.add("elemClose");
      h3.classList.add("h3Close");
    });
    buttonDelete.addEventListener("click", () => {
      element.remove();
    });
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  newElement(inputId);
  input.value = "";
});
