// Get button node and attach onclick event to function addtask
document.getElementById("addbtn").onclick = addTask;

// Get list node
const list = document.getElementById("todolist");

// Get the input (newtask) field
const newtask = document.getElementById("newtask");

// Attach onkeydown event to function enterKey
newtask.onkeydown = enterKey;

function addTask() {
  let task = document.createElement("li");
  task.innerHTML = newtask.value;
  list.appendChild(task);
  newtask.value = "";
  newtask.focus();
}

function enterKey(e) {
  if (e.code === "Enter") document.getElementById("addbtn").onclick();
}
