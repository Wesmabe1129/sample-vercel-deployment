// import React from "react";

// const Home = () => {
//   const handleStart = () => {
//     alert("Start button clicked!");
//   };

//   return (
//     <div className="flex flex-col items-center w-screen min-h-screen bg-gray-100 font-sans">
//       {/* Cover Photo */}
//       <div className="w-full h-32 md:h-48 l:h-60 bg-gray-300 relative ">
//         {/* Profile Picture */}
//         <div className="absolute left ml-8 -bottom-24 transform -translate-x-1 w-32 h-32 rounded-full bg-gray-400 border-4 border-white"></div>
        
//         {/* Name and Title */}
//         <div className="absolute left ml-40 -bottom-16 text-black">
//           <div className="">
//             <h1 className="text-3xl font-bold">Wilson Esmabe</h1>
//           </div>
//           <div className="">
//             <h2 className="pl-2 whitespace-nowrap overflow-hidden border-r border-black text-xl font-bold font-mono w-[13.2ch] animate-typeErase animate-blink">
//               <span className="">Web </span><span className="text-green-800">Developer</span>
//             </h2>
//           </div>
//         </div>
//       </div>

//       {/* Profile Section */}
//       <div className="mt-20 flex flex-col items-center">
//         <h1 className="text-3xl font-semibold text-gray-800">Hello <span className="text-lime-600">World!</span></h1>

//         <button
//           className="mt-5 flex items-center gap-2 text-lime-600 text-xl cursor-pointer bg-transparent border-none"
//           onClick={handleStart}
//         >
//           <div
//             className="w-0 h-0 border-l-[8px] border-l-lime-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"
//           ></div>
//           start
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;



import React from "react";

import profilePic from "../../assets/profiles.jpg";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-start px-[12rem] text-black">
      <div className="bg-black-100 w-full">
        <div>
          {/* Header */}
          <div className="bg-[#16476A] h-32 md:h-48 l:h-60 relative">
            <img
              src={profilePic}
              alt="Wilson Esmabe smiling in a professional portrait"
              className="text-white absolute left ml-8 -bottom-20 transform -translate-x-1 w-32 h-32 rounded-full bg-[#132440] border-4 border-white"
            />
            {/* Profile Info */}
            <div className="absolute left ml-40 -bottom-16 text-black">
              <div className="">
                <h1 className="text-2xl font-bold">Wilson Esmabe</h1>
              </div>
              <div className="">
                <h2 className="pl-2 whitespace-nowrap overflow-hidden border-r border-black text-xl font-bold font-mono w-[13.2ch] animate-typeErase animate-blink">
                  <span className="">Web </span><span className="text-green-800">Developer</span>
                </h2>
              </div>
            </div>
            
          </div>

          {/* <div className="mt-16 px-8 pb-8">
            <h1 className="text-2xl font-bold">Wilson Esmabe</h1>
            <p className="text-gray-500 whitespace-nowrap overflow-hidden w-[13.2ch] animate-typeErase animate-blink">Web Developer</p>
          </div> */}
        </div>

        {/* Content Placeholders */}
        <div className="flex gap-6 px-8 py-32 mb-8">
          <div className="flex-1 h-48 bg-gray-200 rounded-lg"></div>
          <div className="flex-1 h-48 bg-gray-200 rounded-lg"></div>
        </div>

        {/* Navigation using assets */}
        
      </div>
    </div>
  );
};

export default Home;
