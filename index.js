// Step 1: Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Step 2: Handle button click

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        const taskText = taskInput.value.trim();
    }
})

// Step 3: Create a new list item
    const li = document.createElement("li");
    li.innerText = taskText

// Step 4: Add a delete button
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete";
    deleteBtn.style.background = "crimson";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding = "5px 10px";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.borderRadius = "3px";
    deleteBtn.style.cursor = "pointer";

 // Step 5: Delete logic
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

// Step 6: Clear input
    taskInput.value = "";

});