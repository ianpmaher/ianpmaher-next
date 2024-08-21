const Button = ({ variant, children, className }) => {
    const baseStyle = "";
    const variantStyle = {
        primary:
            "max-w-fit md:max-w-full bg-opacity-80 md:bg-opacity-100 bg-primary-turquoise transition transform duration-300 all text-black hover:opacity-100 hover:outline-white hover:outline-solid hover:outline-1/4 hover:scale-110 md:text-xl text-[0.6rem]",
        secondary: "bg-gray-300 text-gray-700",
        projects: " px-4 py-2 rounded-xl flex flex-col m-1 justify-center transition duration-300 ease-out items-center min-w-6 bg-[#EEA47F] color-[#00539C] text-sm p-0.5 outline outline-2 outline-[#00539C] hover:text-[#EEA47F] hover:bg-[#00539C] hover:outline-[#EEA47F] hover:scale-110",
        darkColors: "bg-dracula-text hover:bg-dracula-green hover:scale-110 hover:transform hover:rotate-12 hover:shadow-2xl hover:outline hover:outline-white flex flex-col flex-wrap items-center justify-center rounded-2xl transition-all duration-200 ease-out object-contain",
        lightColors: "bg-paper-subalt hover:bg-dracula-orange hover:scale-110 hover:transform hover:rotate-12 hover:shadow-2xl hover:outline hover:outline-white flex flex-col flex-wrap items-center justify-center rounded-2xl transition-all duration-200 ease-out object-contain",
    };

    return (
        <button className={`${baseStyle} ${variantStyle[variant]} ${className}`}>
            {children}
        </button>
    )
};

export default Button;
