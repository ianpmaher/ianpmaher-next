const CardBase = ({ variant, children, className }) => {
    const baseStyle = "";
    const variantStyle = {
        text: "mx-auto my-2 p-2 flex items-center justify-center text-paper-text bg-slate-200 shadow-lg dark:bg-black dark:text-dracula-text rounded-2xl text-base md:text-lg ",
        darkColors:
            "bg-opacity-70 hover:bg-opacity-100 hover:scale-110 hover:transform hover:rotate-12 hover:shadow-2xl p-1",
        lightColors:
            " bg-opacity-70 hover:bg-opacity-100 hover:scale-110 hover:transform hover:rotate-12 hover:shadow-2xl p-1",
    };

    return <div className={`${baseStyle} ${variantStyle[variant]} ${className}`}>{children}</div>;
};

export default CardBase;
