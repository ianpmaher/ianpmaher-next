import Container from "../components/Container";

const BlogPage = () => {
    // don't need to specify public folder in path because
    // public directory is the root directory for the server
    const paths = ["/posts/article1.md"];

    return (
        <section className=" grid place-content-center ">
            <Container paths={paths} />
        </section>
    );
};

export default BlogPage;
