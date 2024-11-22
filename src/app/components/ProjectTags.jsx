const ProjectTags = (props) => {
    const tagsList = props.tags.map((tag) => 
        <div key={tag} className="bg-white text-black m-[0.1rem] rounded-lg border border-gray-400 cursor-default transition-all duration-500 ease-out hover:bg-black hover:text-white dark:hover:bg-primary-turquoise dark:hover:text-black">
            <p className=" text-sm m-[0.2rem] p-[0.1rem] font-bold">{tag}</p>
        </div>
    );

    return (
        <div className={`${props.className} flex flex-row flex-wrap sm:gap-0.5 items-center justify-center list-none mx-auto my-0`}>
            {tagsList}
        </div>
    );
}

export default ProjectTags;