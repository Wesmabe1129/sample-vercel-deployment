import React from "react";

import homeImg from "../../assets/home.png";
import aboutImg from "../../assets/about.png";
import projectsImg from "../../assets/projects.png";
import skillsImg from "../../assets/skills.png";
import contactsImg from "../../assets/contacts.png";

const NavigationComponents = () => {
  return (
    <div className="fixed w-full px-18 sm:w-auto sm:px-0 justify-center bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-4 bg-blur p-2 sm:p-4 rounded-[12px] shadow-lg z-50 overflow-x-auto">
      {/* Home */}
      <button className="p-2 sm:p-3 rounded-[4px] sm:rounded-[8px] bg-teal-600 hover:bg-teal-700 transition flex items-center gap-4 sm:gap-4">
        <img src={homeImg} alt="Home" className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="hidden sm:inline text-white">Home</span>
      </button>

      {/* About */}
      <button className="p-2 sm:p-3 rounded-[4px] sm:rounded-[8px] bg-teal-600 hover:bg-teal-700 transition flex items-center gap-2 sm:gap-4">
        <img src={aboutImg} alt="About" className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="hidden sm:inline text-white">About</span>
      </button>

      {/* Projects */}
      <button className="p-2 sm:p-3 rounded-[4px] sm:rounded-[8px] bg-teal-600 hover:bg-teal-700 transition flex items-center gap-2 sm:gap-4">
        <img src={projectsImg} alt="Projects" className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="hidden sm:inline text-white">Projects</span>
      </button>

      {/* Skills */}
      <button className="p-2 sm:p-3 rounded-[4px] sm:rounded-[8px] bg-teal-600 hover:bg-teal-700 transition flex items-center gap-2 sm:gap-4">
        <img src={skillsImg} alt="Skills" className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="hidden sm:inline text-white">Skills</span>
      </button>

      {/* Contacts */}
      <button className="p-2 sm:p-3 rounded-[4px] sm:rounded-[8px] bg-teal-600 hover:bg-teal-700 transition flex items-center gap-2 sm:gap-4">
        <img src={contactsImg} alt="Contacts" className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="hidden sm:inline text-white">Contacts</span>
      </button>
    </div>
  );
};

export default NavigationComponents;
