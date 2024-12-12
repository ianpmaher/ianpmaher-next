const CardHover = ({ children, className }) => {
  return (
    <div class={`${className} flex items-center justify-center min-h-screen bg-gray-900`}>
      <div class="flex items-center justify-center gap-12 flex-wrap">
        <div class="relative w-80 h-96 bg-gray-700 rounded-2xl overflow-hidden group">
          <div class="absolute inset-0 rounded-[18px] bg-gray-700/75"></div>
          <div class="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 opacity-0 bg-[radial-gradient(#fff,transparent,transparent)] transition-opacity duration-500 group-hover:opacity-100"></div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardHover;