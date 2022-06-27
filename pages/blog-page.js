import Layout from "../components/Layout"
import { Post } from "../components/Post"
import { getAllPostsData } from "../lib/posts"

export async function getStaticProps(){
  const posts = await getAllPostsData();
  return{
    props: { posts }
  };
}

const Blog = ( {posts} ) => {
  return (
    <Layout>
         <ul>
       {posts && posts.map((post) => <Post key={post.id} post={post} />)}   
    </ul>  
    </Layout>
  );
};

export default Blog;