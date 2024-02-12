const IconCard = ({ variant, description, children, className }) => {
    
    const baseStyle = "flex flex-col flex-wrap items-center justify-center rounded-2xl transition-all duration-300 ease-in-out hover:scale-110";
    const variantStyle = {
        primary: "bg-primary-yellow",
        secondary: "bg-gray-400 hover:bg-white p-4 shadow-xl w-24 h-24",
        projects: "rounded-2xl w-1/4 h-full bg-[rgba(0,0,0,0.3)] p-2 flex flex-col items-center justify-center",
    };
    
    return (
        <div className={`${baseStyle} ${variantStyle[variant]}`}>
            {children}
        </div>
    )

}

export default IconCard;