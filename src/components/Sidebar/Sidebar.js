import React from "react";
import { Link, useLocation } from "react-router-dom";
import profileLight from "../../img/2.jpg";
import profileDark from "../../img/4.jpg";

const Sidebar = ({ darkMode }) => {
  const location = useLocation();

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={` z-50 h-1/4  lg:h-full rounded-t-[25px] lg:rounded-[25px] duration-300 shadow-2xl xl:backdrop-blur-[0.6rem] xl:bg-opacity-60 
       ${darkMode ? "bg-[#292726]" : "bg-[#ffffff]"} 
        }`}
    >
      <div
        className={`rounded-t-[25px] h-[40px] sm:h-[20px] lg:h-20 text-sm md:text-md xl:text-lg shadow-xl  ${
          darkMode ? "bg-[#ff9661]" : "bg-[#ff9661]"
        }`}
      >
        <div className="py-2 px-8 flex sm:py-2 lg:py-4 lg:items-center  lg:justify-center ">
          <div
            className={`shadow-xl border-2  rounded-full p-1 w-[4.5rem] h-[4.5rem] sm:w-[5rem] sm:h-[5rem] lg:w-[8.5rem] lg:h-[8.5rem] transition-transform duration-300 transform-gpu hover:scale-110  ${
              darkMode ? "border-[#ffffffdc]" : "border-[#ffd2b1]"
            }`}
          >
            <img
              src={darkMode ? profileDark : profileLight}
              alt="Profile"
              className="w-full h-full shadow-2xl rounded-full object-cover "
            />
            <span className=" absolute bottom-4 right-1 lg:right-[15px] bg-[#1bd546] rounded-full w-3 h-3 border-2 border-white "></span>
          </div>
        </div>
        <div className=" fixed top-5 sm:left-[120px] sm:top-[1.5rem] lg:relative lg:left-0 lg:top-0 lg:flex lg:flex-col lg:items-center lg:pb-2">
          <h3
            className={`invisible  md:visible  ${
              darkMode ? "text-dark-text " : "text-[#f18b47] "
            }`}
          >
            Siwakorn Kaewmala
          </h3>
          <span className="invisible  md:visible md:text-[0.75rem] leading-[1rem] opacity-50 block">
            Front-End Developer <br /> <h6>· UX / UI Designer</h6>
          </span>
        </div>

        {/* Menu */}
        <ul>
          <li className="fixed left-[100px] md:left-[250px] top-[50px] lg:relative flex   lg:flex-col items-center mx-4 lg:w-[222px] lg:left-0  ">
            <Link to="/aboutMe">
              <button
                className={`flex flex-wrap items-center gap-1 sm:flex-nowrap md:gap-3  rounded-[10px] w-[35px] h-[25px] sm:w-[110px] md:h-[30px] md:w-[110px]  lg:h-[40px]  lg:w-[200px] lg:text-base mt-1 justify-center ${
                  isActivePath("/aboutMe")
                    ? darkMode
                      ? "bg-gradient-to-br from-dark-primary to-dark-secondary duration-500 hover:scale-110 active:bg-dark-secondary shadow-xl shadow-[#ff966138]"
                      : "bg-gradient-to-br from-[#fcd1a8] to-light-primary  duration-500 hover:scale-110 active:bg-light-primary shadow-xl shadow-[#ff96616d]"
                    : ""
                }`}
              >
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="h-4 w-4 pt-1 sm:pt-0"
                    aria-hidden="true"
                  >
                    <path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z" />
                  </svg>
                </span>
                <label className="invisible  sm:visible cursor-pointer">
                  About me
                </label>
              </button>
            </Link>
            <Link to="/skillsDev">
              <button
                className={`flex flex-wrap items-center gap-1 sm:flex-nowrap md:gap-3  rounded-[10px] w-[35px] h-[25px] sm:w-[110px] md:h-[30px] md:w-[110px]  lg:h-[40px]  lg:w-[200px] lg:text-base mt-1 justify-center ${
                  isActivePath("/skillsDev")
                    ? darkMode
                      ? "bg-gradient-to-br from-dark-primary to-dark-secondary duration-500 hover:scale-110 active:bg-dark-secondary shadow-xl shadow-[#ff966138]"
                      : "bg-gradient-to-br from-[#fcd1a8] to-light-primary  duration-500 hover:scale-110 active:bg-light-primary shadow-xl shadow-[#ff96616d]"
                    : ""
                }`}
              >
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    fill="currentColor"
                    className="h-5 w-5 pt-1 sm:pt-0"
                    aria-hidden="true"
                  >
                    <path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />{" "}
                  </svg>
                </span>
                <label className="invisible  sm:visible cursor-pointer">
                  {" "}
                  Skills Dev
                </label>
              </button>
            </Link>
            <Link to="/experience">
              <button
                className={`flex flex-wrap items-center gap-1 sm:flex-nowrap md:gap-3  rounded-[10px] w-[35px] h-[25px] sm:w-[110px] md:h-[30px] md:w-[110px]  lg:h-[40px]  lg:w-[200px] lg:text-base mt-1 justify-center ${
                  isActivePath("/experience")
                    ? darkMode
                      ? "bg-gradient-to-br from-dark-primary to-dark-secondary duration-500 hover:scale-110 active:bg-dark-secondary shadow-xl shadow-[#ff966138]"
                      : "bg-gradient-to-br from-[#fcd1a8] to-light-primary  duration-500 hover:scale-110 active:bg-light-primary shadow-xl shadow-[#ff96616d]"
                    : ""
                }`}
              >
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="h-4 w-4 pt-1 sm:pt-0"
                    aria-hidden="true"
                  >
                    <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" />{" "}
                  </svg>
                </span>
                <label className="invisible  sm:visible cursor-pointer">
                  {" "}
                  Experience
                </label>
              </button>
            </Link>
            <Link to="/projects">
              <button
                className={`flex flex-wrap items-center gap-1 sm:flex-nowrap md:gap-3  rounded-[10px] w-[35px] h-[25px] sm:w-[110px] md:h-[30px] md:w-[110px]  lg:h-[40px]  lg:w-[200px] lg:text-base mt-1 justify-center ${
                  isActivePath("/projects")
                    ? darkMode
                      ? "bg-gradient-to-br from-dark-primary to-dark-secondary duration-500 hover:scale-110 active:bg-dark-secondary shadow-xl shadow-[#ff966138]"
                      : "bg-gradient-to-br from-[#fcd1a8] to-light-primary  duration-500 hover:scale-110 active:bg-light-primary shadow-xl shadow-[#ff96616d]"
                    : ""
                }`}
              >
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="h-4 w-4 pt-1 sm:pt-0"
                    aria-hidden="true"
                  >
                    <path d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z" />
                  </svg>
                </span>
                <label className="invisible  sm:visible cursor-pointer">
                  {" "}
                  My Portfolio
                </label>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
