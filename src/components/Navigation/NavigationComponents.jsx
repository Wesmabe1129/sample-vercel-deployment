// import React from "react";
// import { Link } from "react-router-dom";

// import homeImg from "../../assets/home.png";
// import aboutImg from "../../assets/about.png";
// import projectsImg from "../../assets/projects.png";
// import skillsImg from "../../assets/skills.png";
// import contactsImg from "../../assets/contacts.png";

// const NavigationComponents = () => {
//   return (
//     <div className="fixed min-w-[400px] px-18 sm:py-4 justify-center bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 bg-blur p-2 sm:p-4 rounded-[12px] shadow-lg z-50 overflow-x-auto">
//       {/* Home */}
//       <Link to="/" className="p-2 sm:p-3 rounded-[4px] sm:rounded-[8px] bg-teal-600 hover:bg-teal-700 transition flex items-center gap-4 sm:gap-4">
//         <img src={homeImg} alt="Home" className="w-6 h-6 sm:w-8 sm:h-8" />
//         <span className="hidden xl:inline text-white">Home</span>
//       </Link>

//       {/* About */}
//       <Link to="/about" className="p-2 sm:p-3 rounded-[4px] sm:rounded-[8px] bg-teal-600 hover:bg-teal-700 transition flex items-center gap-2 sm:gap-4">
//         <img src={aboutImg} alt="About" className="w-6 h-6 sm:w-8 sm:h-8" />
//         <span className="hidden xl:inline text-white">About</span>
//       </Link>

//       {/* Projects */}
//       <Link to="/projects" className="p-2 sm:p-3 rounded-[4px] sm:rounded-[8px] bg-teal-600 hover:bg-teal-700 transition flex items-center gap-2 sm:gap-4">
//         <img src={projectsImg} alt="Projects" className="w-6 h-6 sm:w-8 sm:h-8" />
//         <span className="hidden xl:inline text-white">Projects</span>
//       </Link>

//       {/* Skills */}
//       <Link to="/skills" className="p-2 sm:p-3 rounded-[4px] sm:rounded-[8px] bg-teal-600 hover:bg-teal-700 transition flex items-center gap-2 sm:gap-4">
//         <img src={skillsImg} alt="Skills" className="w-6 h-6 sm:w-8 sm:h-8" />
//         <span className="hidden xl:inline text-white">Skills</span>
//       </Link>

//       {/* Contacts */}
//       <Link to="/contacts" className="p-2 sm:p-3 rounded-[4px] sm:rounded-[8px] bg-teal-600 hover:bg-teal-700 transition flex items-center gap-2 sm:gap-4">
//         <img src={contactsImg} alt="Contacts" className="w-6 h-6 sm:w-8 sm:h-8" />
//         <span className="hidden xl:inline text-white">Contacts</span>
//       </Link>
//     </div>
//   );
// };

// export default NavigationComponents;


import React from "react";

import homeImg from "../../assets/home.png";
import aboutImg from "../../assets/about.png";
import projectsImg from "../../assets/projects.png";
import skillsImg from "../../assets/skills.png";
import contactsImg from "../../assets/contacts.png";

const NavigationComponents = () => {
  return (
    <div className="fixed w-screen p-4 md:px-20  bottom-4 left-1/2 -translate-x-1/2">
      
      {/* Inner flex container for nav items */}
      <div className="flex p-2 sm:mx-8 md:mx-20 lg:mx-60 xl:mx-72 justify-between items-center gap-4 border-2 border-[#3B9797] rounded-[12px] shadow-lg z-50 bg-white/10 backdrop-blur-md">
        {/* Home */}
        <a href="#home" className="p-2 sm:p-3 rounded-lg bg-teal-600 hover:bg-teal-700 transition flex items-center gap-2">
          <img src={homeImg} alt="Home" className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="hidden xl:inline text-white">Home</span>
        </a>

        {/* About */}
        <a href="#about" className="p-2 sm:p-3 rounded-lg bg-teal-600 hover:bg-teal-700 transition flex items-center gap-2">
          <img src={aboutImg} alt="About" className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="hidden xl:inline text-white">About</span>
        </a>

        {/* Projects */}
        <a href="#projects" className="p-2 sm:p-3 rounded-lg bg-teal-600 hover:bg-teal-700 transition flex items-center gap-2">
          <img src={projectsImg} alt="Projects" className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="hidden xl:inline text-white">Projects</span>
        </a>

        {/* Skills */}
        <a href="#skills" className="p-2 sm:p-3 rounded-lg bg-teal-600 hover:bg-teal-700 transition flex items-center gap-2">
          <img src={skillsImg} alt="Skills" className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="hidden xl:inline text-white">Skills</span>
        </a>

        {/* Contacts */}
        <a href="#contacts" className="p-2 sm:p-3 rounded-lg bg-teal-600 hover:bg-teal-700 transition flex items-center gap-2">
          <img src={contactsImg} alt="Contacts" className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="hidden xl:inline text-white">Contacts</span>
        </a>
      </div>

    </div>

  );
};

export default NavigationComponents;
