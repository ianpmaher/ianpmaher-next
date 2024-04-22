export default function BlogPage({ children }) {
    return (
        <div className="h-full mx-auto md:pt-12 my-0 self-center flex justify-center">
            <div className="flex self-center justify-self-center">{children}</div>
        </div>
    );
}
