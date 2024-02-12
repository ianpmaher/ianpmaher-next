const Button = ({ variant, children }) => {
    const baseStyle = "px-4 py-2 rounded-xl";
    const variantStyle = {
        primary:
            "bg-primary-turquoise transition transform duration-300 all text-black hover:opacity-100 tran hover:outline-white hover:outline-solid hover:outline-1/4 hover:scale-110",
        secondary: "bg-gray-300 text-gray-700",
        projects: "min-w-6 max-w-8 bg-[#EEA47F] color-[#00539C] p-0.5 outline outline-0.5 outline-[#00539C] hover:outline-[#EEA47F] hover:scale-110",
    };

    return (
        <button className={`${baseStyle} ${variantStyle[variant]}`}>
            {children}
        </button>
    )
};

export default Button;
