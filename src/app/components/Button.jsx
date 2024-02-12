const Button = ({ variant, children }) => {
    const baseStyle = "px-4 py-2 rounded-xl";
    const variantStyle = {
        primary:
            "bg-primary-turquoise transition transform duration-300 all text-black hover:opacity-100 tran hover:outline-white hover:outline-solid hover:outline-1/4 hover:scale-110",
        secondary: "bg-gray-300 text-gray-700",
        projects: "flex flex-col m-1 justify-center items-center min-w-6 bg-[#EEA47F] color-[#00539C] text-sm p-0.5 outline outline-2 outline-[#00539C] hover:text-[#EEA47F] hover:bg-[#00539C] hover:outline-[#EEA47F] hover:scale-110",
    };

    return (
        <button className={`${baseStyle} ${variantStyle[variant]}`}>
            {children}
        </button>
    )
};

export default Button;
