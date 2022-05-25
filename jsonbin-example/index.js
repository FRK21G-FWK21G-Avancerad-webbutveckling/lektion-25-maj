const API_KEY = '$2b$10$1fPTSf/G4E6SNwAMMbhp6.rBZ8I2KEMJcsb8dZkQp6vy7GtFnx3L6';

async function getTodos() {
    const response = await fetch('https://api.jsonbin.io/b/628e1ad605f31f68b3a6a38e/latest', {
        headers: {
            'X-Master-Key': API_KEY
        }
    });
    const data = await response.json();
    
    return data.todos;
}

async function updateTodo() {
    const todos = await getTodos();
    const todo = { todo: 'Koda', id: 5 };

    todos.push(todo);

    const response = await fetch('https://api.jsonbin.io/b/628e1ad605f31f68b3a6a38e', {
        method: 'PUT',
        body: JSON.stringify({ todos: todos }),
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': API_KEY
        }
    });
    const data = await response.json();
    console.log(data);
}

getTodos();
updateTodo();