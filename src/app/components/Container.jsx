import PostContainer from "./PostContainer";

const Container = ({ paths }) => {
    return (
        <div className=" container mx-auto px-5  ">
            {paths.map((path, index) => (
                <PostContainer key={index} path={path} />
            ))}
        </div>
    );
};

export default Container;
