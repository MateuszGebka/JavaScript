const toDoList = document.querySelector('ul');
const addButton = document.getElementById("addButton");
const element = document.getElementById("toDo");

function addElement(){
    const li = document.createElement('li');
    const button = document.createElement('button');

    button.textContent = 'Delete';

    button.onclick = () => li.remove();

    li.textContent = element.value;
    li.appendChild(button);
    
    toDoList.appendChild(li);
}