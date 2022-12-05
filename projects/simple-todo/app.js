//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
todoList.addEventListener("click", completeTodo);

//Functions
function addTodo(event) {
  event.preventDefault();
  //Div for todo
  const todoDiv = document.createElement("div");
  todoDiv.classList.add(
    "todo",
    "bg-white",
    "border",
    "flex",
    "py-6",
    "px-5",
    "rounded-lg",
    "shadow-sm",
    "mb-2"
  );

  //Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value; //value sesuai dengan input form
  newTodo.classList.add("todo-item", "flex-1");
  todoDiv.appendChild(newTodo);

  //Complete button
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completeButton.classList.add("complete-btn", "text-green-500", "mr-6");
  todoDiv.appendChild(completeButton);

  //Delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteButton.classList.add("delete-btn", "text-red-500");
  todoDiv.appendChild(deleteButton);

  //Create todolist itself
  todoList.append(todoDiv);

  todoInput.value = "";
}

function deleteTodo(event) {
  const itemDelete = event.target;
  //   console.log(item);
  if (itemDelete.classList[0] === "delete-btn") {
    itemDelete.parentElement.remove();
  }
}

function completeTodo(event) {
  const itemComplete = event.target;
  if (itemComplete.classList[0] === "complete-btn") {
    // item.classList.add("line-through");
    console.log(itemComplete.parentElement.classList);
    // itemComplete.parentElement.classList
  }
}
