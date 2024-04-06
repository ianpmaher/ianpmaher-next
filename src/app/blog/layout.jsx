const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen my-0 mx-auto">
            {children}
        </div>
    )
}

export default Layout;