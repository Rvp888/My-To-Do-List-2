const input = document.querySelector('.input');
const add = document.querySelector('.add');
const taskList = document.querySelector('.task_list')
const caution = document.querySelector('.caution');

let todoItems = JSON.parse(localStorage.getItem("todoList"));
if (!todoItems) todoItems = [];
renderTodos(todoItems);


add.addEventListener("click",() => {
    updateList();
});


function updateList() {
    if(input.value === ""){
        caution.style.display = 'inline-block';
        return;
    }
    
    caution.style.display = 'none';

    let task = input.value;
    let id = Date.now();

    todoItems.push({task,id});
    localStorage.setItem("todoList", JSON.stringify(todoItems));
    renderTodos(todoItems);

    input.value = "";
    
}


function renderTodos(todos) {
    taskList.innerHTML = "";
    if (!todos) return;
    todos.map(
        (todo) => {
            taskList.innerHTML += `<li id="${todo.id}" class="item">${todo.task}<button id="delete">Delete</button></li>`;
        }
    );
};


taskList.addEventListener('click',(event) => {
    console.log(event)
    if(event.target.id === "delete"){
        let item = event.target.parentElement;
        
        todoItems.forEach((todo) => {
            if(todo.id == Number(item.id)){
                todoItems.splice(todo, 1);
                
                renderTodos(todoItems);
                localStorage.setItem("todoList", JSON.stringify(todoItems));
                return;
            }
        })
        
    }
        
})














// function updateList() {
//     if(input.value == ""){
//         caution.style.display = 'inline-block';
//     }
//     else{
//         caution.style.display = 'none';

//         const item = document.createElement('li');
//         item.classList.add('item');
//         item.innerText = input.value;

//         const deleteBtn = document.createElement('button');
//         deleteBtn.classList.add('delete');
//         deleteBtn.innerText = 'Delete';

//         item.appendChild(deleteBtn);
//         taskList.appendChild(item);

//         input.value = "";

//     }
// }




