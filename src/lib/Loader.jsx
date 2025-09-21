const Loader = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#f0eeea]">
        
      <div className="flex flex-col items-center space-y-6 animate-ping delay-100">
        <img
          src="/logo.webp"
          alt="Logo"
          className="w-32 h-32 rounded-full shadow-xl animate-pulse"
        />
      
      </div>
    </div>
  );
};

export default Loader;
