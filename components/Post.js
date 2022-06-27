export const Post = ({ post }) => {
return(
    <div>
        <span>{post.id}</span>
        {" : "}
        <span className="cursour-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
            {post.title}です
        </span>
    </div>
)
}