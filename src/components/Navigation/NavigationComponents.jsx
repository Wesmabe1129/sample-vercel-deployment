import React from "react";

import homeImg from "../../assets/home.png";
import aboutImg from "../../assets/about.png";
import projectsImg from "../../assets/projects.png";
import skillsImg from "../../assets/skills.png";
import contactsImg from "../../assets/contacts.png";

const NavigationComponents = () => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6 bg-white p-4 rounded-[12px] shadow-lg z-50">
      <button className="p-3 rounded-[8px] bg-teal-600 hover:bg-teal-700 transition">
        <div className="flex items-center gap-4 text-white">
          <img src={homeImg} alt="Home" className="w-8 h-8" />
          <span>Home</span>
        </div>
      </button>

      <button className="p-3 rounded-[8px] bg-teal-600 hover:bg-teal-700 transition">
        <div className="flex items-center gap-4 text-white">
          <img src={aboutImg} alt="About" className="w-8 h-8" />
          <span>About</span>
        </div>
      </button>

      <button className="p-3 rounded-[8px] bg-teal-600 hover:bg-teal-700 transition">
        <div className="flex items-center gap-4 text-white">
          <img src={projectsImg} alt="Projects" className="w-8 h-8" />
          <span>Projects</span>
        </div>
      </button>

      <button className="p-3 rounded-[8px] bg-teal-600 hover:bg-teal-700 transition">
        <div className="flex items-center gap-4 text-white">
          <img src={skillsImg} alt="Skills" className="w-8 h-8" />
          <span>Skills</span>
        </div>
      </button>

      <button className="p-3 rounded-[8px] bg-teal-600 hover:bg-teal-700 transition">
        <div className="flex items-center gap-4 text-white">
          <img src={contactsImg} alt="Contacts" className="w-8 h-8" />
          <span>Contacts</span>
        </div>
      </button>
    </div>
  );
};

export default NavigationComponents;
