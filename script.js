// Step 1: Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn")

let tasks = []

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
  if (tasks.includes(taskText)) {
    alert("Task already exists!");
    return;
  }

  tasks.push(taskText);
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach(taskText => {
    const li = document.createElement("li");
    li.innerText = taskText;
    
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
      tasks = tasks.filter(task => task !== taskText);
      saveTasks();
      renderTasks();
    });

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