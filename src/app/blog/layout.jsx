const Layout = ({ children }) => {
    return (
        <div className="flex items-center justify-center h-full w-full my-0 mx-auto ">
            <div className="w">{children}</div>
        </div>
    );
};

export default Layout;
