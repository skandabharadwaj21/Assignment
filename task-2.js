const axios = require('axios')

async function fetchSpecificPost(){
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Make HTTP GET request using axios
        const posts = response.data;
        let found = false;
        for(let i=0;i < posts.length;i++){
            if(posts[i].id === 5){
                console.log(posts[i]); 
                found = true;
                break;
            }
        }
        if(!found){
            console.log("Post with ID 5 does not exist.");
        }
    }catch(error){
        console.error("Error fetching posts, error"); // Log any error to the console
    }
}

fetchSpecificPost()