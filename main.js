const list = document.getElementById('list');
const add = document.getElementById('add');

const preventReloading = () => {
  event.preventDefault();
};

const addToDo = () => {
  let inputValue = document.getElementById('input-title').value;
  if (inputValue !== '') {
    let todo = document.createElement('div');
    todo.className = 'todo';
    let title = document.createElement('li');
    let checkmark = document.createElement('button');
    checkmark.onclick = () => {
      todo.classList.toggle('completed');
    };
    let trash = document.createElement('button');
    trash.onclick = () => {
      todo.classList.add('deleted');
      todo.addEventListener('transitionend', () => {
        todo.remove();
      });
    };
    title.className = 'title';
    title.innerText = inputValue;
    checkmark.className = 'checkmark';
    checkmark.innerHTML = '<i class="fa-solid fa-check"></i>';
    trash.className = 'trash';
    trash.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
    todo.append(title, checkmark, trash);
    list.append(todo);
    document.getElementById('input-title').value = '';
  } else {
    alert('Type something');
  }
};

add.addEventListener('click', addToDo);
