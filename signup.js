document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signup-btn').addEventListener('click', async (event) => {
        event.preventDefault();

        const email = document.getElementById('new-email').value;
        const password = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;

        if (password !== confirmPassword) {
            document.getElementById('message').innerText = 'Passwords do not match';
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/userCreation', { email, firstName, lastName, password });

            if (response.status === 200) {
                window.location.href = 'login.html';
            }
        } catch (error) {
            const errorMessage = error.response?.data?.msg || 'Signup failed';
            document.getElementById('message').innerText = errorMessage;
        }
    });
});
