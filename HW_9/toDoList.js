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
  if(inputTextValue !== "" && inputTimeValue !== "") {
    countId++;
    tasks.push({id: countId,
      name: inputTextValue,
      time: inputTimeValue,
    })
  }
}

function renderTask(obj) {
    const taskHTML = `
    <div class="toDo-List-item" id=${obj.id}>
        <h3 class="inputTextH3">${obj.name}</h3>
        <div class="toDo-list-btn">
          <h3 class="inputTimeH3">${obj.time}</h3>
          <button class="btn-change" data-action='change'>Изменить</button>
          <button class="btn-delete" data-action='delete'>Удалить</button>
        </div>
      </div>
    `;
    toDoList.insertAdjacentHTML('beforeend',taskHTML);
  }

function addTask(event) {
  event.preventDefault();
  let inputTextValue = inputText.value;
  let inputTimeValue = inputTime.value;
  if(inputTextValue !== "" && inputTimeValue !== "") {
    addArray(inputText, inputTime);
    toDoList.innerHTML = '';
    tasks.map((el) => renderTask(el))
    inputText.value = "";
    inputTime.value = "";
    console.log(tasks, 'add');
}
}



btnAdd.addEventListener("click", addTask)

toDoList.addEventListener('click', (event) => {
  if(event.target.dataset.action === 'delete') {
    if(confirm('Вы уверенны?')) {
      const btnDelete = event.target;
      const toDoListItemId = btnDelete.parentNode.parentNode.id;
      const objTask = tasks.find( (el) => el.id == toDoListItemId);
      const objId = tasks.indexOf(objTask)
      tasks.splice(objId, 1)
      toDoList.innerHTML = '';
      tasks.map((el) => renderTask(el))
      inputText.value = "";
      inputTime.value = "";
      console.log(tasks, 'delete');
    }
  } else if (event.target.dataset.action === 'change') {
    
      const btnChange = event.target;
      const toDoListItemId = btnChange.parentNode.parentNode.id;
      const objTask = tasks.find( (el) => el.id == toDoListItemId)
      inputText.value = objTask.name;
      inputTime.value = objTask.time;
      btnAdd.removeEventListener('click', addTask)
      btnAdd.innerHTML = "Сохранить";
      console.log(tasks, 'change');

      function saveChange() {
      //   toDoList.innerHTML = '';
      //   const objId = tasks.indexOf(objTask)
      //   console.log(tasks, 'save');
      //   tasks.splice(objId, 1)
      //   addArray();
      //   tasks.map((el) => {
      //     renderTask(el)
      // })
      console.log(tasks, 'save');

}
      btnAdd.addEventListener("click", saveChange);

      btnAdd.innerHTML = "Добавить";
      btnAdd.removeEventListener('click', saveChange)
}
})

