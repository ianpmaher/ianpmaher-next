import PostContainer from "../components/PostContainer";

const BlogPage = () => {
    return (
        <div className="mx-auto my-0 min-h-[50vh] flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center ">
                <div className="absolute right-0 left-0">
                    <PostContainer />
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
