let todoList = [
  {
    item: "",
    dueDate: "",
  },
];
displayItem();

function addTodo() {
  let inputElement = document.querySelector("#todo_input");
  let dateElement = document.querySelector("#todo_date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";

  displayItem();
}
function displayItem() {
  let displayElement = document.querySelector(".todo_container");
  let element = "";

  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate;
    if (item != "") {
      element =
        element +
        `
    <span>${item}</span>
    <span>${dueDate || new Date().toLocaleDateString()}</span>
    <button id="todo_delete" onclick="todoList.splice(${i}, 1);
    displayItem();
    ">Delete</button>
   `;
    }
  }
  displayElement.innerHTML = element;
}
