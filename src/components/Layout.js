import React, { useState } from "react";
import Switcher from "./DarkMode/Switch";
import Sidebar from "./Sidebar/Sidebar";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const { t } = useTranslation();

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

      <div className="py-3 pr-8 flex justify-end">
        <div className="z-50 text-[12px] xl:text-sm rounded-lg mr-2 ">
          <button className="px-2 duration-500 transition-all hover:scale-110" onClick={() => i18n.changeLanguage("th")}>
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              className="iconify iconify emojione h-6 w-6 border-2 hover:border-dark-secondary duration-500 rounded-full shadow-xl"
            >
              <g fill="#ed4c5c">
                <path d="M52.4 10C47 5 39.9 2 32 2s-15 3-20.4 8h40.8z"></path>
                <path d="M11.6 54c5.4 5 12.5 8 20.4 8s15-3 20.4-8H11.6"></path>
              </g>
              <path
                d="M2 32c0 4.3.9 8.3 2.5 12h55c1.6-3.7 2.5-7.7 2.5-12s-.9-8.3-2.5-12h-55C2.9 23.7 2 27.7 2 32"
                fill="#2a5f9e"
              ></path>

              <g fill="#f9f9f9">
                <path d="M11.6 54h40.7c3-2.8 5.5-6.2 7.1-10h-55c1.8 3.8 4.2 7.2 7.2 10"></path>
                <path d="M52.4 10H11.6c-3 2.8-5.5 6.2-7.1 10h55c-1.7-3.8-4.1-7.2-7.1-10"></path>
              </g>
            </svg>
            {t("lang_th")}
          </button>
          <button className="px-2 duration-500 transition-all hover:scale-110" onClick={() => i18n.changeLanguage("en")}>
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="iconify iconify emojione h-6 w-6 border-2 hover:border-dark-secondary duration-500 rounded-full shadow-xl "
              preserveAspectRatio="xMidYMid meet"
            >
              <g fill="#2a5f9e">
                <path d="M22 60.3V46.5l-10.3 7.6c2.9 2.7 6.4 4.8 10.3 6.2"></path>
                <path d="M42 60.3c3.9-1.4 7.4-3.5 10.3-6.2L42 46.4v13.9"></path>
                <path d="M3.7 42c.3 1 .7 1.9 1.2 2.9L8.8 42H3.7"></path>
                <path d="M55.2 42l3.9 2.9c.4-.9.8-1.9 1.2-2.9h-5.1"></path>
              </g>
              <g fill="#ffffff">
                <path d="M23.5 38H2.6c.3 1.4.7 2.7 1.1 4h5.1l-3.9 2.9c.8 1.7 1.7 3.2 2.8 4.7L18 42h4v2l-11.7 8.6l1.4 1.4L22 46.5v13.8c1.3.5 2.6.8 4 1.1V38h-2.5"></path>
                <path d="M61.4 38H38v23.4c1.4-.3 2.7-.7 4-1.1V46.5L52.3 54c1.4-1.3 2.6-2.7 3.8-4.2L45.4 42h6.8l6.1 4.5c.3-.5.6-1.1.8-1.6L55.2 42h5.1c.4-1.3.8-2.6 1.1-4"></path>
              </g>
              <g fill="#ed4c5c">
                <path d="M7.7 49.6c.8 1.1 1.6 2.1 2.5 3.1L22 44.1v-2h-4L7.7 49.6"></path>
                <path d="M45.5 42l10.7 7.8c.4-.5.7-1 1.1-1.5c.1-.1.1-.2.2-.2c.3-.5.7-1.1 1-1.6L52.2 42h-6.7"></path>
              </g>
              <g fill="#2a5f9e">
                <path d="M42 3.7v13.8l10.3-7.6C49.4 7.2 45.9 5.1 42 3.7"></path>
                <path d="M22 3.7c-3.9 1.4-7.4 3.5-10.3 6.2L22 17.6V3.7"></path>
                <path d="M60.3 22c-.3-1-.7-1.9-1.2-2.9L55.2 22h5.1"></path>
                <path d="M8.8 22l-3.9-2.9c-.4 1-.8 1.9-1.2 2.9h5.1"></path>
              </g>
              <g fill="#ffffff">
                <path d="M40.5 26h20.8c-.3-1.4-.7-2.7-1.1-4h-5.1l3.9-2.9c-.8-1.7-1.7-3.2-2.8-4.7L46 22h-4v-2l11.7-8.6l-1.4-1.4L42 17.5V3.7c-1.3-.5-2.6-.8-4-1.1V26h2.5"></path>
                <path d="M2.6 26H26V2.6c-1.4.3-2.7.7-4 1.1v13.8L11.7 10c-1.4 1.3-2.6 2.7-3.8 4.2L18.6 22h-6.8l-6.1-4.5c-.3.5-.6 1.1-.8 1.6L8.8 22H3.7c-.4 1.3-.8 2.6-1.1 4"></path>
              </g>
              <g fill="#ed4c5c">
                <path d="M56.3 14.4c-.8-1.1-1.6-2.1-2.5-3.1L42 19.9v2h4l10.3-7.5"></path>
                <path d="M18.5 22L7.9 14.2c-.4.5-.7 1-1.1 1.5c-.1.1-.1.2-.2.2c-.3.5-.7 1.1-1 1.6l6.1 4.5h6.8"></path>
                <path d="M61.4 26H38V2.6c-1.9-.4-3.9-.6-6-.6s-4.1.2-6 .6V26H2.6c-.4 1.9-.6 3.9-.6 6s.2 4.1.6 6H26v23.4c1.9.4 3.9.6 6 .6s4.1-.2 6-.6V38h23.4c.4-1.9.6-3.9.6-6s-.2-4.1-.6-6"></path>
              </g>
            </svg>
            {t("lang_en")}
          </button>
        </div>

        <Switcher toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
      <header className="flex flex-col lg:flex-row	bg-opacity-[0.08] bg-[#beb1a9] backdrop-blur-[0.5rem] shadow-xl ">
        <Sidebar darkMode={darkMode} />
        <main
          className="p-4 w-full h-full lg:h-[90%] overflow-y-auto"
          data-darkmode={darkMode ? "true" : "false"}
        >
          {React.cloneElement(children, {
            changeLanguage: i18n.changeLanguage,
            darkMode: darkMode,
          })}
        </main>
      </header>

    </div>
  );
};

export default Layout;



