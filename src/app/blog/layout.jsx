export default function BlogPage({ children }) {
    return (
        <div className="h-full w-full mx-auto my-8 self-center flex justify-center">
            <div className="flex self-start justify-self-center md:pt-16 ">{children}</div>
        </div>
    );
}
