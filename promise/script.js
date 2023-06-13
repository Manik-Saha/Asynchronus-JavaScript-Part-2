// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Hello from Promise');
//         resolve();
//     }, 1000)
// });

// promise.then(() => {
//     console.log('Promise consumed');
// })

// console.log("Hello World!");

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Hello from Promise 2");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Promise consumed 2");
// });

const getData = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ name: "Manik", education: "Bay Valley Tech" });
    } else {
      reject("Error: Something went wrong!");
    }
  }, 1000);
});

getData
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finished.");
  });
