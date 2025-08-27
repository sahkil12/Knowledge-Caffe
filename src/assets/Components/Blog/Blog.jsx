
const Blog = ({blog}) => {
    const {author} = blog;
    return (
        <div>
            <h2 className="text-2xl">name : {author} </h2>
            
        </div>
    );
};

export default Blog;