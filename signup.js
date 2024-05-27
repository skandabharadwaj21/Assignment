// Function to send a POST request to create a new user
async function createUser(name, email) {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
            name: name,
            email: email
        });
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        return null;
    }
}

// Function to handle form submission
document.getElementById('signupForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the form from reloading the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const resultDiv = document.getElementById('result');

    const user = await createUser(name, email);
    
    if (user) {
        resultDiv.innerHTML = `<p>User created successfully! ID: ${user.id}</p>`;
    } else {
        resultDiv.innerHTML = `<p>Failed to create user.</p>`;
    }
});
