const IconCard = ({ variant, description, children, className }) => {
    
    const baseStyle = "flex flex-col flex-wrap items-center justify-center rounded-2xl transition-all duration-200 ease-out object-contain";
    const variantStyle = {
        primary: "bg-white hover:bg-primary-turquoise hover:scale-110",
        secondary: "bg-[rgba(255,255,255,1)] hover:scale-125 p-0 hover:outline hover:outline-blue-400 shadow-2xl md:w-32 md:h-32 w-24 h-24 transition-all duration-300 ease-out",
        projects: "rounded-2xl text-lg bg-white dark:bg-black text-black dark:text-white shadow-xl p-2 flex-grow flex flex-col items-center justify-center",
        container: "rounded-2xl bg-[#4A4C60] shadow-xl p-2 flex flex-col items-center justify-center",
    };
    
    return (
        <div className={`${baseStyle} ${variantStyle[variant]}`}>
            {children}
        </div>
    )

}

export default IconCard;