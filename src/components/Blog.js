import "../styles/blog/blog.css";

function Blog() {
    return (
        <div className="blog-div">
            <div className="blog-post">
                <h1>Blog Title</h1>
                <hr />
                <h2>Blog Date</h2>
                <hr />
                <p>Short explaination and description of the blog post</p>
            </div>
            <div className="blog-post">
                <h1>Blog Title</h1>
                <h2>Blog Date</h2>
                <p>Short explaination and description of the blog post</p>
            </div>
            <div className="blog-post">
                <h1>Blog Title</h1>
                <h2>Blog Date</h2>
                <p>Short explaination and description of the blog post</p>
            </div>
        </div>
    );
}

export default Blog;
