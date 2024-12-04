let r = new Promise((resolve) => {
    resolve("Completed");
});

r.then((value) => {
    console.log(value); // This will print: Completed
}).catch((error) => {
    console.error(error);
});
