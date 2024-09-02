import PostContainer from "./PostContainer";

const Container = ({ paths }) => {
  return (
    <div className=" w-auto h-auto container mx-auto px-2 ">
      {paths.map((path, index) => (
        <PostContainer key={index} path={path} />
      ))}
    </div>
  );
};

export default Container;
