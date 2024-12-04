function sayHello() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject("An error has occurred"), 1000);
    });
    return promise;
}

async function handleSayHello() {
    try {
        let result = await sayHello();
        console.log(result);
    } catch (error) {
        console.error(error); // This will print: An error has occurred
    }
}

handleSayHello();
