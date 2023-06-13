function promiseChain(obj) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;

            if (!error) {
                console.log(obj);
                resolve(obj);
            }
            else {
                reject("Error occurred!");
            }
        }, 2000);
    });
}

promiseChain({ name: "Manik Saha", age: 20 })
    .then((data) => {
        console.log(data.name);
        return data.name;
    })
    .then((name) => {
        console.log(name.length);
    })
    .catch((error) => {
        console.log(error);
    });
