//wait until the html document has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    
    // select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    // function to add a new task
    function addTask() {
        
        // get and trim input value

        const taskText = taskInput.value.trim();

        // check if input is empty
        if (taskText === '')
        {
            alert('please enter a task.');
            return;
        }

        // create a list item
        const li = document.createElement('li');
        li.textContent = taskText;
        // create remove button
         const removeButton = document.createElement('button');
         removeButton.textContent = 'Remove';
         removeButton.className = 'remove-btn';
         
         //remove task when button is clicked

         removeButton.onclick  = function () {
            taskList.removeChild(li);
            
         };
         

         // Append button to list item
         li.appendChild(removeButton);

         // Append list item to task list

         taskList.appendChild(li);

         // Clear input field

         taskInput.value = '';

    }
    // Add  task when Enter key is pressed

    taskInput.addEventListener('keypress', function (event) {

        if (event.key === 'Enter') {
            
            addTask();
        }
        
    });
});