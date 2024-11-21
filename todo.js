 // script.js

// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add event listener for adding tasks
addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create task item
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  // Append task item to list
  taskList.appendChild(taskItem);

  // Clear input field
  taskInput.value = '';
}

function deleteTask(button) {
  // Remove the parent task item
  const taskItem = button.parentElement;
  taskList.removeChild(taskItem);
}
