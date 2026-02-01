const todoList = JSON.parse(localStorage.getItem('ToDo')) || [];

renderTodoList();

function renderTodoList() {

    let todoListHtml = '';

    todoList.forEach((todoObject, index) => {
      const {name, dueDate} = todoObject;
      const html =`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
      `;


      todoListHtml += html;
    });
    
    document.querySelector('.js-todo-list').innerHTML = todoListHtml;

    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index,1);
        saveToStorage();
        renderTodoList();
      });
    });
  }

    document.querySelector('.js-add-todo-button').addEventListener('click', () => {
      addTodo();
    });

function addTodo() {
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;
 const dateInputElement = document.querySelector('.js-due-date-input');
 const dueDate = dateInputElement.value;

 if (name === '') return;

 todoList.push({
   //name: name , 
   //dueDate : dueDate,
   name,
   dueDate
 });
 

 inputElement.value = '';
 dateInputElement.value = '';
 
 saveToStorage();
 renderTodoList();
}

function saveToStorage(){
  localStorage.setItem('ToDo', JSON.stringify(todoList));
}