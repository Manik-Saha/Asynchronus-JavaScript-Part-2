const getPosts = async () => {
    try {
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!posts.ok) {
            throw new Error("Error Occured!");
        }
        const result = await posts.json();

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const getPosts2 = async () => {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await posts.json();

    console.log(result);
};

getPosts();
getPosts2().catch(err => console.log(err));