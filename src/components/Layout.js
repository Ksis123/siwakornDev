import React, { useState } from "react";
import Switcher from "./DarkMode/Switch";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/footer";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const root = document.documentElement;
    root.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen  ${darkMode ? "dark" : "light"}`}>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className="py-4 pr-8 flex justify-end">
        <Switcher toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
      <header className="flex flex-col lg:flex-row	bg-opacity-[0.08] bg-[#beb1a9] backdrop-blur-[0.5rem] shadow-xl ">
        <Sidebar  darkMode={darkMode} />
        <main
          className="p-4 w-full h-full lg:h-[90%] overflow-y-auto"
          data-darkmode={darkMode ? "true" : "false"}
        >
          {React.cloneElement(children, { darkMode: darkMode })}
        </main>
        
      </header>
      <div className="p-3 px-20">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
