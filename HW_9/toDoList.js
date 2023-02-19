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


function addTask() {
  let inputTextValue = inputText.value;
  let inputTimeValue = inputTime.value;
  if (inputTextValue !== "" && inputTimeValue !== "") {
    countId++;
    tasks.push({id: countId,
      name: inputTextValue,
      time: inputTimeValue,
    })
    const taskHTML = `
    <div class="toDo-List-item" id='${countId}'>
        <h3 class="inputTextH3">${inputTextValue}</h3>
        <div class="toDo-list-btn">
          <h3 class="inputTimeH3">${inputTimeValue}</h3>
          <button class="btn-change" data-action='change'>Изменить</button>
          <button class="btn-delete" data-action='delete'>Удалить</button>
        </div>
      </div>
    `;
    toDoList.insertAdjacentHTML('beforeend',taskHTML);
  }
  }

  // btnChange.addEventListener("click", () => {
    //   inputText.value = tasks.inputTextValue;
    //   inputTime.value = tasks.inputTimeValue;
    //   btnAdd.innerHTML = "Сохранить";
    //   btnAdd.addEventListener("click", () => {
    //     toDoListitem.remove();
    //     btnAdd.innerHTML = "Добавить";
    //   });
    // });



btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  addTask();
  inputText.value = "";
  inputTime.value = "";
})

toDoList.addEventListener('click', (event) => {
  if(event.target.dataset.action === 'delete') {
    if(confirm('Вы уверенны?')) {
      const btnDelete = event.target;
    const toDoListItemId = btnDelete.parentNode.parentNode.id;
    tasks.splice(tasks.indexOf(find( (el) => el.id == toDoListItemId)), 1)
    document.getElementById(toDoListItemId).remove()
    inputText.value = "";
    inputTime.value = "";
    console.log(tasks);
    }
  }
})
