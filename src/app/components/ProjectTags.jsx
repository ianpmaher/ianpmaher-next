const ProjectTags = (props) => {
    const tagsList = props.tags.map((tag) => 
        <div key={tag} className="bg-white text-black mx-[0.1rem] my-[0.3rem] rounded-lg shadow-xl cursor-default transition-all duration-300 ease-out hover:bg-black hover:text-white">
            <p className=" text-sm m-[0.2rem] p-[0.1rem] font-bold">{tag}</p>
        </div>
    );

    return (
        <div className="flex flex-row flex-wrap sm:gap-0.5 items-center justify-center list-none mx-auto my-0">
            {tagsList}
        </div>
    );
}

export default ProjectTags;