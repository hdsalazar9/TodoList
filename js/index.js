function newTodo(TodoText){
  let todoList = document.getElementById('listOfTodos');
  let liElement = document.createElement('li');
  let chkElement = document.createElement('input');
  let text = document.createTextNode(TodoText);

  liElement.setAttribute('class', 'todoElement');
  chkElement.setAttribute('type', 'checkbox');
  chkElement.setAttribute('class', 'todoCheck');

  liElement.appendChild(chkElement);
  liElement.appendChild(text);
  todoList.appendChild(liElement);
}

function markAllTodos(markTodos){
  let todoCheckboxes = document.getElementsByClassName('todoCheck');
  for(let chk of todoCheckboxes)
    chk.checked = markTodos;
}

function deleteAllTodos(){
  var listaFunebre = document.getElementById("listOfTodos");
	while (listaFunebre.firstChild) {
	    listaFunebre.removeChild(listaFunebre.firstChild);
	}
}

//Adds an element to the todo list
let submitButton = document.getElementsByClassName("submitButton");
submitButton[0].addEventListener("click", function(event){
  event.preventDefault();
  let TodoText = document.getElementById("newTodo").value;
  if(TodoText === ''){
    alert("You may want to write something...");
  }
  else{
    newTodo(TodoText);
  }
});

//Clear all the checkboxes of the todo list
let clearButton = document.getElementsByClassName("clearButton");
clearButton[0].addEventListener("click", function(event){
  markAllTodos(false);
});

//Mark all the checkboxes of the todo list
let markAllButton = document.getElementsByClassName("markAllButton");
markAllButton[0].addEventListener("click", function(event){
  markAllTodos(true);
});

//Delete all the todo list elements
let deleteButton = document.getElementsByClassName("deleteButton");
deleteButton[0].addEventListener("click", function(event){
  deleteAllTodos();
});
