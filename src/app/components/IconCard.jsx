const IconCard = ({ variant, description, children, className }) => {
    
    const baseStyle = "flex flex-col flex-wrap items-center justify-center rounded-2xl transition-all duration-300 ease-in-out hover:scale-110";
    const variantStyle = {
        primary: "bg-primary-yellow",
        secondary: "bg-primary-yellow hover:bg-white",
    };
    
    return (
        <div className={`${baseStyle} ${variantStyle[variant]}`}>
            {children}
        </div>
    )

}

export default IconCard;