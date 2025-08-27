import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark, handleAddReadingTime}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{

        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))


    },[])

    return (
        <div className="flex-7">
            {/* <h1 className="text-3xl">Blogs {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleAddReadingTime={handleAddReadingTime}
                    ></Blog>)
            }
        </div>
    );
};

export default Blogs;