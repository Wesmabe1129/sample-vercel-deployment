// import React from "react";

// const Home = () => {
//   const handleStart = () => {
//     alert("Start button clicked!");
//   };

//   return (
//     <div className="flex flex-col items-center w-screen min-h-screen bg-gray-100 font-sans">
//       {/* Cover Photo */}
//       <div className="w-full h-32 sm:h-48 l:h-60 bg-gray-300 relative ">
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
    <div className="min-h-screen w-screen bg-gray-100 flex justify-center items-start sm:px-12 text-black">
      <div className="bg-black-100 w-full max-w-4xl">
        {/* Header */}
        <div className="bg-[#16476A] h-32 sm:h-48 relative">
          <img
            src={profilePic}
            alt="Wilson Esmabe smiling in a professional portrait"
            className="absolute left-2 sm:left-8 -bottom-8 sm:-bottom-16 w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white object-cover"
          />
          {/* Profile Info */}
          <div className="absolute left-2 -bottom-24 sm:left-40 sm:-bottom-12 text-black">
            <h1 className="text-lg sm:2xl font-bold">Wilson Esmabe</h1>
            <h2 className="sm:pl-2 whitespace-nowrap overflow-hidden border-r border-black text-xl font-bold font-mono w-[13.2ch] animate-typeErase animate-blink">
              <span>Web </span>
              <span className="text-green-800">Developer</span>
            </h2>
          </div>
        </div>

        {/* Content Placeholders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-28 sm:px-8 sm:py-16 sm:mb-8">
          <div className="h-48 bg-gray-200 rounded-lg"></div>
          <div className="h-48 bg-gray-200 rounded-lg"></div>
        </div>

        {/* Floating Navigation could go here */}
      </div>
    </div>
  );
};

export default Home;

