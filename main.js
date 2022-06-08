const add = document.getElementById('add');
const list = document.getElementById('list');
let indexOfToDo = 0;

const addToDo = () => {
  const title = document.getElementById('input').value;
  if (title !== '') {
    indexOfToDo++;
    let todo = document.createElement('div');
    let p = document.createElement('p');
    let deletebtn = document.createElement('button');
    deletebtn.className = 'delete';
    deletebtn.innerHTML = 'X';
    todo.className = 'todo';
    p.className = 'title';
    p.append(title);
    todo.append(p, deletebtn);
    list.append(todo);
    p.onclick = () => {
      p.classList.toggle('checked');
    };
    deletebtn.onclick = () => {
      todo.style.display = 'none';
    };
    console.log(p.classList);
    document.getElementById('input').value = '';
  } else {
    alert('Type something');
  }
};

add.addEventListener('click', addToDo);
