const IconCard = ({ variant, description, children, className }) => {
    
    const baseStyle = "flex flex-col flex-wrap items-center justify-center rounded-2xl transition-all duration-300 ease-in-out hover:scale-110 object-contain";
    const variantStyle = {
        primary: "bg-primary-yellow",
        secondary: "bg-gray-400 hover:bg-white p-4 shadow-xl w-24 h-24",
        projects: "rounded-2xl bg-[#4A4C60] shadow-xl p-2 flex flex-col items-center justify-center hover:scale-100",
    };
    
    return (
        <div className={`${baseStyle} ${variantStyle[variant]}`}>
            {children}
        </div>
    )

}

export default IconCard;