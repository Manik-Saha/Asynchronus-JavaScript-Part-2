const promise = new Promise(function (resolve, reject) { 
    setTimeout(function () {
        resolve({ name: 'Manik Saha', age: 20 });
     }, 1000)
});

//promise.then((data) => console.log(data))

async function getPromise() {
    const result = await promise;
    console.log(result);
}

async function getPosts() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await result.json();

    console.log(data);
}

const getData = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await result.json();

    console.log(data);
}

getPromise();
getPosts();
getData();