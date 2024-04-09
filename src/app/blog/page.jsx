import Container from "../components/Container";

const BlogPage = () => {
    // don't need to specify public folder in path because 
    // public directory is the root directory for the server
    const paths = [ "/posts/article1.md"]

    return (
        <div className="mx-auto my-0 min-h-[80vh] flex flex-col items-center justify-center">
            <div className="">
                <Container paths={paths} />
            </div>
        </div>
    );
};

export default BlogPage;
