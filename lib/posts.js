import fetch from "node-fetch";
const apiURL="https://jsonplaceholder.typicode.com/posts"

export async function getAllPostsData(){
    const res = await fetch(new URL(apiURL))
        const posts = await res.json();
    return posts;
}