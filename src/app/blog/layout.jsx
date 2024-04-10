export default function BlogPage({ children }) {
    return (
        <div className="mx-auto my-20 h-full outline outline-red-400 ">
            <div className="flex self-center justify-self-center ">{children}</div>
        </div>
    );
}
