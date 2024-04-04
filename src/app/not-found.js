import Link from "next/link";
import Image from "next/image";
import Button from "./components/Button";

export default function NotFound() {
    return (
        <section className="">
            <div className="text-center mx-auto my-16 min-w-full min-h-full">
                <div className="my-0 mx-auto flex flex-col w-[65vw] justify-center items-center text-center">
                    <h1>404 - Page Not Found</h1>
                    <Image src="https://http.cat/images/404.jpg" alt="404 cat" width={750} height={600} />
                    <Link href="/">
                        <Button variant="projects" className="">
                            Return Home
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
