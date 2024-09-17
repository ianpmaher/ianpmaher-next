const GPALayout = ({ children }) => {
  return (
    <div className="bg-paper-bg text-paper-text h-full md:w-full mx-auto my-8 self-center flex justify-center ">
      <main className="flex self-start justify-self-center sm:pt-16">{children}</main>
    </div>
  );
};

export default GPALayout;
