import "../styles/blog/blog.css";

import { Link } from "react-router-dom";

function Blog() {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                Welcome to the Blog Page!
            </div>
            <div className="overall-div">
                <div className="half-div-item left">
                    <h2>Filter:</h2>
                </div>
                <div className="half-div-item right">
                    <div className="blog-div">
                        <Link to="/Blog" className="blog-post">
                            <h1>A Review of The Mandalorian Season 1</h1>
                            <h2>The Mandalorian -- June 24th 2022</h2>
                            <hr />
                            <p>
                                Episode by episode review of the entire first
                                season of The Mandalorian
                            </p>
                        </Link>
                        <Link to="/Blog" className="blog-post">
                            <h1>
                                A Descriptive, Compelling, but Short Blog Post
                                Title
                            </h1>
                            <h2>Movie/Show Title -- June 22nd 2022</h2>
                            <hr />
                            <p>
                                More detailed explaination of the blog post in
                                around 100 characters to grab interest.
                            </p>
                        </Link>
                        <Link to="/Blog" className="blog-post">
                            <h1>
                                A Descriptive, Compelling, but Short Blog Post
                                Title
                            </h1>
                            <h2>Movie/Show Title -- June 22nd 2022</h2>
                            <hr />
                            <p>
                                More detailed explaination of the blog post in
                                around 100 characters to grab interest.
                            </p>
                        </Link>
                        <Link to="/Blog" className="blog-post">
                            <h1>
                                A Descriptive, Compelling, but Short Blog Post
                                Title
                            </h1>
                            <h2>Movie/Show Title -- June 22nd 2022</h2>
                            <hr />
                            <p>
                                More detailed explaination of the blog post in
                                around 100 characters to grab interest.
                            </p>
                        </Link>
                        <Link to="/Blog" className="blog-post">
                            <h1>
                                A Descriptive, Compelling, but Short Blog Post
                                Title
                            </h1>
                            <h2>Movie/Show Title -- June 22nd 2022</h2>
                            <hr />
                            <p>
                                More detailed explaination of the blog post in
                                around 100 characters to grab interest.
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
