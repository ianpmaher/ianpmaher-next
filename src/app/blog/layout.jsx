export default function BlogPage({ children }) {
    return (
        <div className="h-full mx-auto my-0 self-center flex justify-center">
            <div className="flex self-center justify-self-center py-20">{children}</div>
        </div>
    );
}
