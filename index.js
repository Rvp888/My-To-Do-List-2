const input = document.querySelector('.input');
const add = document.querySelector('.add');
const taskList = document.querySelector('.task_list')
const caution = document.querySelector('.caution');

add.addEventListener("click",() => {
    updateList();
});

function updateList() {
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

taskList.addEventListener('click',(event) => {
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove();
    }
})


