const axios = require('axios')
        async function createUser() {
            try {
                // Data for the new user
                const userData = {
                    name: "Imeuswe App",
                    email: "imeuswe@example.com"
                };

                // Make an HTTP POST request to create a new user
                const response = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
                console.log(response.data); // Log the response data to the console
            } catch (error) {
                console.error('Error creating the user:', error);  // Log any errors to the console
            }
        }

createUser();  // Call the function