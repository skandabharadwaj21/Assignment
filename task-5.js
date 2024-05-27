const axios = require('axios');

async function fetchTodos() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos');
        const todos = response.data;

        // (a) Use .filter to get all todos that are completed
        const completedTodos = todos.filter(todo => todo.completed);

        console.log("Completed todos:");
        console.log(completedTodos);

        // (b) Use .map to create new data with "done" field instead of "completed"
        const newData = todos.map(todo => {
            return {
                ...todo,
                done: todo.completed,
                // Remove the completed field
                completed: undefined
            };
        });

        console.log("New data with 'done' field:");
        console.log(newData);
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}

fetchTodos();
