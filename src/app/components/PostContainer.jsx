import Markdown from "react-markdown";

// export default function PostContainer({ post }) {
//     return (
//         <article className="mx-auto my-16 w-full max-w-[65vw]">
//             <h1 className="text-4xl font-bold text-center">{post.title}</h1>
//             <div className="text-center my-4">
//                 <p className="text-gray-500">{post.date}</p>
//             </div>
//             <div className="prose mx-auto">
//                 <Markdown>{post.content}</Markdown>
//             </div>
//         </article>
//     );
// }

export default function PostContainer(props) {
    return (
        <article className="mx-auto my-16 w-full max-w-[65vw]">
            <h1 className="text-4xl font-bold text-center">Title</h1>
            <div className="text-center my-4">
                <p className="text-gray-500">asd</p>
            </div>
            <div className="prose mx-auto">
                <Markdown>asddsa</Markdown>
            </div>
        </article>
    );
}
