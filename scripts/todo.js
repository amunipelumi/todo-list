// Logic for the Todo List 
let todoArray = [];

const todoFunction = (elem1, elem2) => {
  let todoInput = elem1.value;
  let dueDate = elem2.value;
  // let obj = {};

  if (todoInput.length > 0 || dueDate){
    // obj.todoInput = todoInput;
    // obj.dueDate = dueDate;
    // todoArray.push(obj);
    todoArray.push({todoInput, dueDate});
  }
  elem1.value = '';
  elem2.value = '';
}

// 
function todoList(){
  const inputElem = document.querySelector('.js-todo');
  const dateElem = document.querySelector('.js-todo-date');
  let prgHTML = '';

  todoFunction(inputElem, dateElem);
  // console.log(todoArray);

  // for (let i = 0; i < todoArray.length; i++){
  //   const todoObj = todoArray[i]
  //   // console.log(todoObj);
  //   prgHTML += `
  //   <div>
  //     ${todoObj.todoInput}
  //   </div>
  //   <div>  
  //     ${todoObj.dueDate}
  //   </div>
  //   <button
  //     class="delete-button" 
  //     onclick="
  //       todoArray.splice(${i}, 1); 
  //       todoList();
  //     ">
  //       Delete
  //   </button>
  //   `;
  // }

  todoArray.forEach(
    x => {
      prgHTML += `
      <div>${x.todoInput}</div>
      <div>${x.dueDate}</div>
      <button class="delete-button js-delete">
        Delete
      </button>`;
    }
  );

  document.querySelector('.js-show-todo').innerHTML = prgHTML;

  document.querySelectorAll('.js-delete').forEach((y, z) => {
    y.addEventListener('click', () => {
      todoArray.splice(z, 1); 
      todoList();
    });
  });
}

const addButton = document.querySelector('.js-add')
addButton.addEventListener('click', () => {
  todoList();
});
