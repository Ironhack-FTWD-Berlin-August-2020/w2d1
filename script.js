/*
// console.log(document.body);

// const todoList = document.getElementById('todo-list');
// console.log(todoList);

// returns an HTML collection - it is not
// an array but can be treated like one
const todoListItems = document.getElementsByTagName('li');
console.log(todoListItems[4]);

console.log(todoListItems[4].innerText)
todoListItems[5].innerText = 'Clean kitchen'

// turn all todolist items to uppercase

// for (let item of todoListItems)

// target all elements where the class
// is 'todo-container'

// const container = document.getElementsByClassName('todo-container');
// console.log(container[0]);

// use querySelector
// selects an item using a css query - returns a node list

const container = document.querySelector('.todo-container')
// console.log(container);

const listItems = document.querySelectorAll('#todo-list li');

const firstItem = document.querySelector('#todo-list li');
*/
// const property = 'backgroundColor';

// firstItem.style.backgroundColor = 'red';
// firstItem.style[property] = 'red';

// firstItem.className = 'checked';

// firstItem.classList.add('checked')
// firstItem.classList.remove('checked');
// firstItem.classList.toggle('checked');

// firstItem.setAttribute('id', 'first-item');
// document.querySelector('img').setAttribute(
//     'src',
//     'https://images.unsplash.com/photo-1516708274537-6f91e34ccaf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
// );
// document.querySelector('img').style.width = '200px';


// let's add a heading

// const todoList = document.getElementById('todo-list');

const heading = document.createElement('h1');
heading.innerText = 'My Todo List';
// console.log(heading);

const parentElement = document.querySelector('.todo-container');

// parentElement.insertBefore(heading, todoList)

const paragraph = document.querySelector('p');
// console.log(paragraph);

parentElement.removeChild(paragraph);

// create a new list item;
const newListItem = document.createElement('li');
newListItem.innerHTML = 'watch <strong>Dark</strong> on netflix';

// function trigger() {
//     console.log('trigger');
// }

// add it to the todolist
const todoList = document.getElementById('todo-list');
todoList.appendChild(newListItem);

document.getElementById('add-todo').onclick = addTodo;

function addTodo() {
    // create a list item
    const newTodo = document.createElement('li');
    // set the innerHTML to the user input from the input field
    const input = document.querySelector('input');
    // console.log(input.value);
    newTodo.innerText = input.value;
    newTodo.onclick = toggleTodo;
    // console.log(newTodo);
    // then get the todo-list and append the list item as a child
    const parent = document.getElementById('todo-list');
    parent.appendChild(newTodo);
    input.value = '';
}

document.querySelectorAll('#todo-list li').forEach(function (item) {
    item.onclick = toggleTodo;
});

function toggleTodo(event) {
    console.log(event);
    event.currentTarget.classList.toggle('checked');
    // const ul = event.currentTarget.parentNode;
    // ul.removeChild(event.currentTarget);
}

// for the lab:
/*
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
    state.pepperoni = !state.pepperoni;
    renderEverything();
});
// is the same as:
document.querySelector('.btn.btn-pepperoni').onclick = function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
};
*/



















