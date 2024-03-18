const Carousel = ({children}) => {
    return (
        <div className="carousel wrapper relative overflow-hidden flex items-center py-0 px-2 w-full min-h-10 before:absolute after:absolute after:rotate-180 before:left-0 before:top-0 after:right-0 after:top-0">
                {children}
            
        </div>
    );
};

export default Carousel;
