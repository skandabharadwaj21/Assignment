// (a) Function to add two numbers
function addTwoNumbers(a, b) {
    return a + b;
}

// (b) Function to return the current date in the format "Year/Month/Day"
function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
}

// Export the functions
module.exports = {
    addTwoNumbers,
    getCurrentDate
};
