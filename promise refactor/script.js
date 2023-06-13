const posts = [
  { title: "post one", content: "This is a post one" },
  { title: "post two", content: "This is a post two" },
  { title: "post three", content: "This is a post three" },
  { title: "post four", content: "This is a post four" }
];

function addPost(post) {
  return new Promise((resolve, reject) => { 
    let error = false;

    if (!error) { 
      setTimeout(function () {
        posts.push(post);
        resolve()
      }, 7000)
    }
    else {
      reject('Error occurred!')
    }
  })  
}

function printCallback() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> - ${post.content}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}

function showError(error) {
  const h3 = document.createElement("h3");
  h3.innerHTML = `<strong>${error}</strong`;
  document.querySelector("#posts").appendChild(h3);
}

addPost({ title: "post five", content: "This is a post five" })
  .then(printCallback)
  .catch(showError)