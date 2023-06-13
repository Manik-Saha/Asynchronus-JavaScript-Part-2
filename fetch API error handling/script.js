// fetch('https://api.github.com/users1')
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`${response.status} ${response.statusText}`);
//         }
//         response.json()
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

fetch("https://api.github.com/users")
  .then((response) => {
    if (response.status == 403 || response.status == 404) {
      throw new Error("Not Found");
    } else if (response.status == 500) {
      throw new Error("Server error");
    } else if (response.status != 200) {
      throw new Error("error");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));