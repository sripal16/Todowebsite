//variables
const form = getElement('addForm');
const todoList = getElement('todos');
const todo = getElement('todo');
const filter = getElement('filter');


//functions
function getElement(id){
    return document.getElementById(id);
}

function addTodo(e){
    e.preventDefault();
    if(todo.value===''){
        alert('Put a valid Todo');
        return;
    }
    const newTodo = todo.value;
    let li= document.createElement('li'); 
    li.classList.add('todo-item');
    li.innerText = newTodo;
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button', 'delete');
    deleteButton.innerText='Delete';
    let editButton=document.createElement('button');
    editButton.classList.add('edit-button', 'edit');
    editButton.innerText='Edit';
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
    todo.value='';
}

function removeTodo(e){
    if(e.target.classList.contains('delete')){
        let result=confirm('are you sure?');
        if(result){
            let li=e.target.parentElement;
            todoList.removeChild(li);
        }
    }
}

function filterTodos(e){
    let searchText=e.target.value.toLowerCase();
    let listItems=document.getElementsByTagName('li');
    Array.from(listItems).forEach((item) => {
        let todoName = item.firstChild.textContent;
        if(todoName.toLowerCase().indexOf(searchText) != -1){
            item.style.display = 'flex';
        }
        else{
            item.style.display = 'none';
        }
    });    
}

function editTodo(e) {
    if (e.target.classList.contains('edit')) {
        let li = e.target.parentElement;
        let todoText = li.firstChild.textContent;
        let updatedTodoText = prompt('Edit Todo:', todoText);

        if (updatedTodoText !== null && updatedTodoText !== '') {
            li.firstChild.textContent = updatedTodoText;
        }
    }
}

//eventlisteners
form.addEventListener('submit', addTodo);
todoList.addEventListener('click', removeTodo);
filter.addEventListener('keyup', filterTodos);
todoList.addEventListener('click',editTodo);