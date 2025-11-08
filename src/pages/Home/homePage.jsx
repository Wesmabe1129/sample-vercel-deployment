import React from "react";

const Home = () => {
  const handleStart = () => {
    alert("Start button clicked!");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-900 text-gray-300 font-sans">
      <h1 className="text-5xl">
        Hello <span className="text-lime-400">World!</span>
      </h1>
      <button
        className="mt-5 flex items-center gap-2 text-lime-400 text-xl cursor-pointer bg-transparent border-none"
        onClick={handleStart}
      >
        <div
          className="w-0 h-0 border-l-[8px] border-l-lime-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"
        ></div>
        start
      </button>
    </div>
  );
};

export default Home;
