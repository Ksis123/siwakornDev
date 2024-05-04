import React from "react";
import "./Switch.css";

const Switcher = ({ toggleDarkMode, darkMode }) => {
  return (
    <>
      <label
        className={`relative inline-flex cursor-pointer select-none items-center ${
          darkMode ? "md:justify-end" : ""
        }`}
      >
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="sr-only"
        />

        <span
          className={`slider flex h-8 w-[70px] items-center drop-shadow-xl rounded-full p-1 duration-200 ${
            darkMode ? "bg-[#ff8c62]" : "bg-[rgba(114,179,236,0.71)]"
          }`}
        >
          <i className="moon"></i>
          <i className="sun ml-[15px]"></i>
          <span
            className={`dot h-6 w-6 rounded-full bg-white drop-shadow-xl duration-200 absolute ${
              darkMode ? "translate-x-[37px]" : "translate-x-0"
            }`}
          ></span>
        </span>
      </label>
    </>
  );
};

export default Switcher;
