// ДЗ: Создать ToDo лист, где каждая запись хранит в себе ид, название, статус
// выполнения (выполнено или нет), срок выполнения. На экране должна быть форма для добавления
// записи название и срок, кнопка "Добавить". В списке выводятся название задачи, дата и 2 кнопки
// редактировать и удалить. При удаление должно появляться окно для подтверждения удаления
// (можно использовать confirm).  Редактировать заполняет поля в форме создания и кнопка добавить
// меняется на кнопку "Сохранить". При клике на название задачи она переходит в статус выполнена и
// визуально отображается.  Для задач завести массив в котором хранятся объекты описывающие задачу.
// Для всего создать функции. Перерисовывать на экране все задачи при любом изменение
// (например изменился статус или добавили задачу, меняем его в объекте, затем перерисовываем
// весь список).



const inputText = document.getElementById("inputText");
const inputTime = document.getElementById("inputTime");
const toDoList = document.getElementById("toDoList");
const btnAdd = document.getElementById("btnAdd");
const tasks = [];
let countId = 0;

function addArray(inputText, inputTime) {
  let inputTextValue = inputText.value;
  let inputTimeValue = inputTime.value;
    countId++;
    tasks.push({id: countId,
      name: inputTextValue,
      time: inputTimeValue,
    })
    console.log(tasks);
}

function randerElement(cb, array) {

  if (inputTextValue !== "" && inputTimeValue !== "") {
    cb()

    // toDoList.classList.add("toDoList");
    // const toDoListitem = document.createElement("div");
    // toDoListitem.classList.add("toDo-List-item");
    // toDoListitem.id = countId;
    // toDoList.append(toDoListitem);

    // const toDoListBtn = document.createElement("div");
    // toDoListBtn.classList.add("toDo-list-btn");
    // toDoListitem.append(toDoListBtn);

    // const inputTextH3 = document.createElement("h3");
    // inputTextH3.classList.add("inputTextH3");
    // inputTextH3.innerHTML = `${tasks.inputTextValue}`;
    // toDoListitem.prepend(inputTextH3);

    // const inputTimeH3 = document.createElement("h3");
    // inputTimeH3.classList.add("inputTimeH3");
    // inputTimeH3.innerHTML = `Срок ${tasks.inputTimeValue} мин`;
    // toDoListBtn.append(inputTimeH3);

    // const btnChange = document.createElement("button");
    // btnChange.classList.add("btn-change");
    // btnChange.innerHTML = "Изменить";
    // toDoListBtn.append(btnChange);

    // const btnDelete = document.createElement("button");
    // btnDelete.classList.add("btn-delete");
    // btnDelete.innerHTML = "Удалить";
    // toDoListBtn.append(btnDelete);

    // btnChange.addEventListener("click", () => {
    //   inputText.value = tasks.inputTextValue;
    //   inputTime.value = tasks.inputTimeValue;
    //   btnAdd.innerHTML = "Сохранить";
    //   btnAdd.addEventListener("click", () => {
    //     toDoListitem.remove();
    //     btnAdd.innerHTML = "Добавить";
    //   });
    // });

    // btnDelete.addEventListener("click", () => {
    //   toDoListitem.remove();
    //   toDoList.classList.remove("toDoList");
    // });
  }
   
  }



btnAdd.addEventListener("click", (event) => {
  event.preventDefault();

  randerElement(addArray, tasks);
  inputText.value = "";
  inputTime.value = "";
})
