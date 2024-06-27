import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import profileLight from "../../img/B6311223_grey_full.jpg";
import profileDark from "../../img/4.jpg";

const Sidebar = ({ changeLanguage, darkMode }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={` z-50 h-1/6 sm:h-1/4  lg:h-full rounded-t-[25px] lg:rounded-[25px] duration-300 shadow-2xl xl:backdrop-blur-[0.6rem] xl:bg-opacity-60 
       ${darkMode ? "bg-[#292726]" : "bg-[#ffffff]"} 
        }`}
    >
      <div
        className={`rounded-t-[25px] h-1/6 sm:h-3-6 lg:h-20 text-sm md:text-md xl:text-lg shadow-xl  ${
          darkMode ? "bg-[#ff9661]" : "bg-[#ff9661]"
        }`}
      >
        <div className="py-2 px-8 flex sm:py-2 lg:py-4 lg:items-center  lg:justify-center ">
          <div
            className={`shadow-xl border-2  rounded-full p-1 mt-2 w-[4rem] h-[4rem] sm:mt-0 sm:w-[5rem] sm:h-[5rem]  lg:w-[8.5rem] lg:h-[8.5rem] transition-transform duration-300 transform-gpu hover:scale-110  ${
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
              {t('sidebar_name')}
          </h3>
          <span className="invisible  md:visible md:text-[0.75rem] leading-[1rem] opacity-50 block">
            Front-End Developer <br /> <h6>· Software Developer</h6>
          </span>
        </div>

        {/* Menu */}
        <ul>
          <li className="fixed left-[100px] md:left-[230px] top-[35px] lg:relative flex   lg:flex-col items-center mx-4 lg:w-[222px] lg:left-0  ">
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
                {t('menu1')}

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
                  {t('menu2')}

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
                {t('menu3')}
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
                {t('menu4')}

                </label>
              </button>
            </Link>
          </li>
        </ul>

        {/* copyright */}
        <div className="flex-col invisible   xl:visible  lg:m-10 lg:fixed lg:bottom-0  lg:flex-col opacity-[0.7] ">
          <h5 className=" text-center text-sm  sm:!mb-0 md:text-lg">
            <p className=" text-center text-sm sm:!mb-0 md:text-base">
              © {new Date().getFullYear()} SiwakornDev.
            </p>
          </h5>
          <div>
            <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-3">
              <li>
                <a
                  target="blank"
                  href="https://github.com/Ksis123"
                  className="text-base font-medium  hover:text-light-primary"
                  data-tooltip-target="github"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-8 w-8 duration-500 hover:scale-110"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/siwakorn-kaewmala-234381276/"
                  className="text-base font-medium  hover:text-light-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 duration-500 hover:scale-110"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://discord.com/users/877517165312507985"
                  className="text-base font-bold  hover:text-light-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -28.5 256 256"
                    fill="currentColor"
                    className="h-8 w-8 duration-500 hover:scale-110"
                    aria-hidden="true"
                  >
                    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="mailto:khemkhemsiwa555@gmail.com"
                  className="text-base font-medium  hover:text-light-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="h-8 w-8 duration-500 hover:scale-110"
                    aria-hidden="true"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
