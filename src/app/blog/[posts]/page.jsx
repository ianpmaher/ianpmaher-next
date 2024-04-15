
export default async function Page({ params }) {
    const paths = ["/posts/article1.md"];
    
    const id = params.id;

    // const articles = await fetchBlogArticles();
    const article = paths.find((article) => article.id === id);

    // const moreArticles = articles.filter((article) => article.slug !== slug);

    return (
        <main>
            <h1>
                adsdsa
            </h1>
            <p>{params.id}</p>
            <p>{article}</p>
        </main>
    );
}

export async function generateStaticParams() {
    try {
        // const articles = await fetch("blog-articles");
        const paths = ["/posts/article1.md"]
        


        return paths.map((path) => ({
            path: path.id,
        }));
    } catch (err) {
        console.log("Error fetching slugs for articles", err);
    }
}

// export async function getStaticProps({ params }) {
//     const articles = await fetchBlogArticles();
//     const article = articles.find((article) => article.slug === params.slug);

//     return {
//         props: {
//             article,
//         },
//     };
// }