import PostContainer from "../components/PostContainer";

const BlogPage = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center ">
                <h1>Blog</h1>
                <PostContainer />
            </div>
        </div>
    );
};

export default BlogPage;
