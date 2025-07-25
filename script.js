// Step 1: Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn")

let tasks = [
  {text:"bruh",completed: true},
  {text:"cruh",completed: false}
]

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addTask();
});

clearAllBtn.addEventListener("click", () => {
  if (confirm("Clear all tasks?")) {
    tasks = [];
    saveTasks();
    renderTasks();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) {
    alert("Enter a task.");
    return;
  }
  if (tasks.some(task => task.text === taskText)) {
    alert("Task already exists!");
    return;
  }

  tasks.push({text: taskText, completed: false});
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((taskObj, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = taskObj.completed;
    checkbox.classList.add("checkBox")

    checkbox.addEventListener("change", () => {
      tasks[index].completed = checkbox.checked;
      saveTasks();
      renderTasks();
    })

    const span = document.createElement("span");
    span.innerText = taskObj.text;
    if (taskObj.completed) {
      span.style.decoration = "line-through";
      span.style.color = "rgb(6, 219, 6)";
      span.classList.add("completed")
    }
    
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "X";
    deleteBtn.style.background = "crimson";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding = "5px 10px";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.borderRadius = "3px";
    deleteBtn.style.cursor = "pointer";

    deleteBtn.addEventListener("click" , () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li)
  })
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
  const stored = localStorage.getItem("tasks");
  if (stored) {
    tasks = JSON.parse(stored);
    renderTasks();
  }
}

loadTasks();