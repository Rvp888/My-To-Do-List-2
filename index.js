const input = document.querySelector('.input');
const add = document.querySelector('.add');
const taskList = document.querySelector('.task_list')
const caution = document.querySelector('.caution');


let todoItems = [];

add.addEventListener("click",() => {
    updateList();
});

todoItems = JSON.parse(localStorage.getItem("todo"));
renderTodos(todoItems);

function updateList() {
    if(input.value === ""){
        caution.style.display = 'inline-block';
        return;
    }
    
    caution.style.display = 'none';

    const task = input.value;

    todoItems.push({task});
    localStorage.setItem("todo", JSON.stringify(todoItems));
    renderTodos(todoItems);

    input.value = "";
    
}


function renderTodos(todos) {
    taskList.innerHTML = "";
    todos.map(
        (todo) => {
            taskList.innerHTML += `<li class="item">${todo.task}<button class="delete">Delete</button></li>`
        }
    );
}

taskList.addEventListener('click',(event) => {
    console.log(event);
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove();
    }
})



/*

function updateList_1() {
    if(input.value == ""){
        caution.style.display = 'inline-block';
    }
    else{
        caution.style.display = 'none';

        const item = document.createElement('li');
        item.classList.add('item');
        item.innerText = input.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerText = 'Delete';

        item.appendChild(deleteBtn);
        taskList.appendChild(item);

        input.value = "";

    }
}



*/
