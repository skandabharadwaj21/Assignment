const axios = require('axios')

        async function deleteUser() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                
                const users = response.data;

                let userExists = false;

                // Iterate over the array of users to find the user with ID 2
                for (let i = 0; i < users.length; i++) {
                    const user = users[i];  // Get the current user
                    // Check if the current user has an ID of 2
                    if (user.id === 2) {
                        // If the user with ID 2 is found, set userExists to true and break out of the loop
                        userExists = true;
                        break;
                    }
                }

                // Check if the user with ID 2 exists
                if (userExists) {
                    // If the user exists, make an HTTP DELETE request to delete the user
                    const deleteResponse = await axios.delete('https://jsonplaceholder.typicode.com/users/2');
                    console.log(deleteResponse.data);  // Log the response data to the console
                } else {
                    // If the user does not exist, log a message to the console
                    console.log('User with ID 2 does not exist');
                }
            } catch (error) {
                console.error('Error deleting the user:', error);  // Log any errors to the console
            }
        }

deleteUser();

