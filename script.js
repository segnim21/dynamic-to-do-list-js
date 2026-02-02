// Wait until the HTML document has fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage or initialize empty array
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // Function to save tasks to Local Storage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Function to create and display a task
    function addTask(taskText, save = true) {

        // If taskText is not provided (button click case)
        if (!taskText) {
            taskText = taskInput.value.trim();
        }

        // Validate input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Remove task when button is clicked
        removeButton.addEventListener("click", function () {
            taskList.removeChild(li);

            // Remove task from array
            tasks = tasks.filter(task => task !== taskText);
            saveTasks();
        });

        // Append button to list item
        li.appendChild(removeButton);

        // Append list item to task list
        taskList.appendChild(li);

        // Save task to Local Storage
        if (save) {
            tasks.push(taskText);
            saveTasks();
        }

        // Clear input field
        taskInput.value = "";
    }

    // Load tasks from Local Storage on page load
    function loadTasks() {
        tasks.forEach(taskText => addTask(taskText, false));
    }

    // Add task when button is clicked
    addButton.addEventListener("click", function () {
        addTask();
    });

    // Add task when Enter key is pressed
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Initialize app
    loadTasks();

});
