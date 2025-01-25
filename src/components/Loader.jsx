import React from "react";

const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-[rgba(0,0,0,0.5)]">
      <div className="w-16 aspect-square rounded-full border-8 border-white border-r-transparent animate-spin">
      </div>
    </div>
  );
};

export default Loader;
