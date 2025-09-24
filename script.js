// Todo App State
let todos = [];
let currentFilter = 'all';

// DOM Elements
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');
const clearCompletedBtn = document.getElementById('clearCompleted');
const filterBtns = document.querySelectorAll('.filter-btn');

// Service Navigation
function showTodoApp() {
    document.querySelector('.services').style.display = 'none';
    document.getElementById('todoApp').style.display = 'block';
    loadTodos();
}

function showServices() {
    document.querySelector('.services').style.display = 'block';
    document.getElementById('todoApp').style.display = 'none';
}

// Todo Functions
function addTodo() {
    const text = todoInput.value.trim();
    if (text === '') return;

    const todo = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date()
    };

    todos.push(todo);
    todoInput.value = '';
    saveTodos();
    renderTodos();
    updateTodoCount();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
    updateTodoCount();
}

function toggleTodo(id) {
    todos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos();
    renderTodos();
    updateTodoCount();
}

function clearCompleted() {
    todos = todos.filter(todo => !todo.completed);
    saveTodos();
    renderTodos();
    updateTodoCount();
}

function filterTodos() {
    switch (currentFilter) {
        case 'active':
            return todos.filter(todo => !todo.completed);
        case 'completed':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}

function renderTodos() {
    const filteredTodos = filterTodos();
    todoList.innerHTML = '';

    if (filteredTodos.length === 0) {
        const emptyMsg = document.createElement('li');
        emptyMsg.className = 'empty-message';
        emptyMsg.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #666;">
                ${currentFilter === 'all' ? 'No tasks yet. Add one above!' : `No ${currentFilter} tasks.`}
            </div>
        `;
        todoList.appendChild(emptyMsg);
        return;
    }

    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} 
                   onchange="toggleTodo(${todo.id})">
            <span class="todo-text">${escapeHtml(todo.text)}</span>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
        `;
        
        todoList.appendChild(li);
    });
}

function updateTodoCount() {
    const activeTodos = todos.filter(todo => !todo.completed).length;
    const totalTodos = todos.length;
    
    if (activeTodos === 0 && totalTodos === 0) {
        todoCount.textContent = 'No tasks';
    } else if (activeTodos === 0) {
        todoCount.textContent = 'All tasks completed!';
    } else {
        todoCount.textContent = `${activeTodos} task${activeTodos !== 1 ? 's' : ''} remaining`;
    }
}

function setFilter(filter) {
    currentFilter = filter;
    
    // Update filter buttons
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });
    
    renderTodos();
}

function saveTodos() {
    localStorage.setItem('myserve-todos', JSON.stringify(todos));
}

function loadTodos() {
    const savedTodos = localStorage.getItem('myserve-todos');
    if (savedTodos) {
        todos = JSON.parse(savedTodos);
        renderTodos();
        updateTodoCount();
    }
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Event Listeners
addTodoBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

clearCompletedBtn.addEventListener('click', clearCompleted);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setFilter(btn.dataset.filter);
    });
});

// Service Connection API (placeholder for future universal service connections)
const ServiceConnector = {
    // Future methods for connecting to external services
    connectToService: function(serviceName, config) {
        console.log(`Connecting to ${serviceName} with config:`, config);
        // Implementation for universal service connection
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ status: 'connected', service: serviceName });
            }, 1000);
        });
    },
    
    // Method to register new services
    registerService: function(serviceConfig) {
        console.log('Registering new service:', serviceConfig);
        // Implementation for service registration
        return { success: true, serviceId: Date.now() };
    },
    
    // Method to get available services
    getAvailableServices: function() {
        return [
            { name: 'Todo Manager', status: 'active', description: 'Task management service' },
            { name: 'Note Keeper', status: 'coming-soon', description: 'Note taking service' },
            { name: 'Calendar', status: 'coming-soon', description: 'Calendar management service' }
        ];
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('MyServe Landing Page Initialized');
    console.log('Available services:', ServiceConnector.getAvailableServices());
    
    // Load saved todos when the page loads
    loadTodos();
});

// Demo function for service connection (can be called from console)
window.demoServiceConnection = function() {
    ServiceConnector.connectToService('ExternalAPI', { apiKey: 'demo', endpoint: 'https://api.example.com' })
        .then(result => {
            console.log('Service connection demo:', result);
        });
};