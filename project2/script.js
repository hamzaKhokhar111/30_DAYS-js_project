const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

// Load saved tasks when page loads
document.addEventListener('DOMContentLoaded', loadTasks);

function addtask() {
    if(inputbox.value.trim() === '') {
        alert("Please enter a valid task");
        return;
    }
    
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${inputbox.value}</span>
        <span class="actions">
            <button class="complete-btn">✓</button>
            <button class="delete-btn">✕</button>
        </span>
    `;
    
    // Add event listeners for buttons
    li.querySelector('.delete-btn').addEventListener('click', deleteTask);
    li.querySelector('.complete-btn').addEventListener('click', toggleComplete);
    
    listcontainer.appendChild(li);
    inputbox.value = "";
    saveData();
}

function deleteTask(e) {
    const li = e.target.closest('li');
    li.remove();
    saveData();
}

function toggleComplete(e) {
    const li = e.target.closest('li');
    li.classList.toggle('completed');
    saveData();
}

function saveData() {
    const tasks = [];
    document.querySelectorAll('#list-container li').forEach(li => {
        tasks.push({
            text: li.querySelector('.task-text').textContent,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task-text">${task.text}</span>
            <span class="actions">
                <button class="complete-btn">✓</button>
                <button class="delete-btn">✕</button>
            </span>
        `;
        if(task.completed) li.classList.add('completed');
        
        li.querySelector('.delete-btn').addEventListener('click', deleteTask);
        li.querySelector('.complete-btn').addEventListener('click', toggleComplete);
        
        listcontainer.appendChild(li);
    });
} 