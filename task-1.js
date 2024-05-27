const axios = require('axios');

// Function to fetch all posts
async function fetchPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data); // Log the data to the console
    } catch (error) {
        console.error('Error fetching posts:', error); // Log any errors to the console
    }
}

fetchPosts(); // Call the function