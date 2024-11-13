const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoListUL = document.getElementById('todo-list');

let allTodos = getTodos();

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    addTodo();
})

function addTodo(){
    const todoText = todoInput.value.trim();
    if(todoText.length > 0){
        const todoObject = {
            text: todoText,
            complete: false
        }
        allTodos.push(todoObject);
        updateTodoList();
        saveTodos();
        todoInput.value = "";
    }
}

function createTodoItem(todo, todoIndex){
    const todoId = "todo-"+todoIndex;
    const todoLI = document.createElement("li");
    const todoText = todo.text;
    todoLI.className = "todo";

    const deleteButton = todoLI.querySelector(".delete-button");
    deleteButton.addEventListener("click", ()=>{
        deleteTodoItem(todoIndex);
    })
    const checkbox = todoLI.querySelector("input");
    checkbox.addEventListener("change", ()=>{
        allTodos[todoIndex].completed = checkbox.checked;
        saveTodos(); 
    })
   
}