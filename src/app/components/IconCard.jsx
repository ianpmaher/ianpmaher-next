const IconCard = ({ variant, description, children, className }) => {
    
    const baseStyle = "flex flex-col flex-wrap items-center justify-center rounded-2xl transition-all duration-200 ease-out object-contain";
    const variantStyle = {
        primary: "bg-dracula-blue bg-opacity-70 hover:bg-dracula-orange hover:bg-opacity-100 hover:scale-110",
        secondary: " bg-slate-100 hover:scale-125 p-0 hover:outline hover:outline-blue-400 shadow-2xl w-28 md:h-28 h-24 transition-all duration-300 ease-out mr-4",
        projects: "rounded-2xl text-lg bg-white dark:bg-black text-black dark:text-white shadow-xl p-2 flex-grow flex flex-col items-center justify-center",
        container: "rounded-2xl bg-[#4A4C60] shadow-xl p-2 flex flex-col items-center justify-center",
        darkColors: "bg-opacity-70 hover:bg-opacity-100 hover:scale-110 hover:transform hover:rotate-12 hover:shadow-2xl p-1",
        lightColors: " bg-opacity-70 hover:bg-opacity-100 hover:scale-110 hover:transform hover:rotate-12 hover:shadow-2xl p-1",
    };
    
    return (
        <div className={`${baseStyle} ${variantStyle[variant]} ${className}`}>
            {children}
        </div>
    )

}

export default IconCard;