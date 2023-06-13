function createPost(post) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: post.title,
      body: post.body,
    }),
    headers: {
      "Content-Type": "application/json",
      token: "abc123",
    },
  })
    .then(function (response) {
      response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

createPost({ title: 'New post', body: 'This is new post content'});
