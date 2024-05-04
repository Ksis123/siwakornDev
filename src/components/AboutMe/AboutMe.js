import React, { useState } from "react";
import { Link } from "react-router-dom";

import filetranscript from "../../static/media/Transcript.pdf";
import resume from "../../static/media/Siwakorn_Resume.pdf";

const AboutMe = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("Introduction");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="justify-center">
      <div className="space-y-8 mx-1 mt-3 mb-6 lg:mx-8 flex flex-wrap gap-6 ">
        <div className="xl:w-96 w-[300px] mx-auto mr-2">
          <button
            onClick={() => handleTabClick("Introduction")}
            className={`text-sm xl:text-lg ${
              activeTab === "Introduction"
                ? "bg-[#f78851] duration-500 text-white"
                : "text-[#fa9867] duration-500 hover:bg-[#fdb896] hover:text-white"
            } px-2 py-1 rounded-2xl  focus:outline-none`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="-mt-1 mr-1 inline-block xl:h-5 xl:w-5 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            Intro
          </button>
          <button
            onClick={() => handleTabClick("personal")}
            className={`text-sm xl:text-lg ${
              activeTab === "personal"
                ? "bg-[#f78851] duration-500 text-white"
                : "text-[#fa9867] duration-500 hover:bg-[#fdb896] hover:text-white"
            } px-2 py-1 rounded-2xl  focus:outline-none`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="-mt-1 mr-1 inline-block xl:h-5 xl:w-5 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
              />
            </svg>
            Profile
          </button>

          <button
            onClick={() => handleTabClick("education")}
            className={`text-sm xl:text-lg ${
              activeTab === "education"
                ? "bg-[#f78851] duration-500 text-white"
                : "text-[#fa9867] duration-500 hover:bg-[#fdb896] hover:text-white"
            } px-2 py-1 rounded-2xl  focus:outline-none`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="-mt-1 mr-1 inline-block xl:h-5 xl:w-5 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
            Education
          </button>
        </div>
      </div>
      <div className=" mx-1 mt-3 mb-6 lg:mx-8 ">
        {activeTab === "Introduction" && (
          <>
            <div className="flex flex-col  gap-8 z-10 items-center justify-center mx-auto">
              <span className="md:text-3xl text-2xl font-bold text-[#faab84]">
                Hi Guy, I'm Siwakorn
              </span>
              <div className="w-max">
                <h1 className="mx-8 animate-typing overflow-hidden whitespace-nowrap border-r-4    md:text-6xl sm: text-3xl font-bold text-[#fe945f]">
                  Front End Developer
                </h1>
              </div>

              <p className="md:max-w-[700px] max-w-[450px] leading-5 text-left">
                My work is based on the principles of simplicity and user
                satisfaction. I use agile techniques while working in teams to
                create excellent products. I enjoy sharing with other people. I
                know how to use technology such as CSS frameworks and
                JavaScript. I'm an expert in responsive design and have
                experimented with blockchain and NFT projects.
                <br />
                <br />
                Lastly, if you're in need of a front-end developer, I'm
                confident I can collaborate with you to build the web
                application that is most suited for users.
              </p>
              <div className="flex w-full items-center justify-center gap-4">
                <a
                  className="text-white text-center text-[12px] sm:text-md md:text-base rounded-full bg-light-primary shadow-lg hover:bg-orange-500 transition-all duration-300 w-fit sm:px-5 sm:py-3 px-3 py-1 font-medium "
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>

                <Link
                  to="/projects"
                  className="animate-bounce text-center text-[12px] sm:text-md md:text-base rounded-full border-2 border-orange-400 shadow-lg hover:bg-orange-500 transition-all duration-300 font-medium w-fit px-5 py-1 sm:px-5 sm:py-3"
                >
                  My Portfolio
                </Link>
              </div>
            </div>
          </>
        )}
        {activeTab === "personal" && (
          <>
            <div class="shadow  overflow-hidden  rounded-lg ">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-2xl leading-4 font-bold text-light-primary">
                  Personal info
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  This is some information about me.
                </p>
              </div>
              <div class="border-t px-4 py-5 sm:p-0">
                <dl>
                  <div class="py-3 sm:py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium md:text-base text-light-primary">
                      Full name
                    </dt>
                    <dd class="mt-1 text-sm md:text-base sm:mt-0 sm:col-span-2">
                      Siwakorn Kaewmala (Khem)
                    </dd>
                  </div>
                  <div class="py-3 sm:py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium md:text-base text-light-primary">
                      Age{" "}
                    </dt>
                    <dd class="mt-1 text-sm md:text-base sm:mt-0 sm:col-span-2">
                      {new Date().getFullYear() - 2002}
                    </dd>
                  </div>
                  <div class="py-3 sm:py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium md:text-base text-light-primary">
                      Email address
                    </dt>
                    <dd class="mt-1 text-sm md:text-base sm:mt-0 sm:col-span-2">
                      <a target="blank" href="mailto:khemkhemsiwa555@gmail.com">
                        khemkhemsiwa555@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div class="py-3 sm:py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium md:text-base text-light-primary">
                      Phone number
                    </dt>
                    <dd class="mt-1 text-sm md:text-base sm:mt-0 sm:col-span-2">
                      (+66) 65-731-3223
                    </dd>
                  </div>
                  <div class="py-3 sm:py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium md:text-base text-light-primary">
                      Address
                    </dt>
                    <dd class="mt-1 text-sm md:text-base sm:mt-0 sm:col-span-2">
                      <span className="flex gap-2">
                        Khun Tan, Chiang Rai 
                        <svg
                          width="800px"
                          height="800px"
                          viewBox="0 0 64 64"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          class="iconify iconify--emojione"
                          preserveAspectRatio="xMidYMid meet"
                          className="h-6 w-6"
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
                      </span>
                    </dd>
                  </div>
                  <div class="py-3 sm:py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium md:text-base text-light-primary">
                      Military Status
                    </dt>
                    <dd class="mt-1 text-sm md:text-base sm:mt-0 sm:col-span-2">
                      Exempted
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </>
        )}

        {activeTab === "education" && (
          <>
            <div class="-my-6 ">
              <div class="relative pl-8 sm:pl-32 py-6 group ">
                <div className="font-bold text-xl md:text-xl  mb-1 sm:mb-0 text-dark-secondary ">
                  Suranaree University of Technology
                </div>
                <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-light-primary sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-light-text1 after:border-[3px] after:box-content after:border-light-primary after:rounded-full after:shadow-lg after:shadow-orange-500/50	 sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-light-secondary bg-light-text1 rounded-[5px]">
                    2020 - 2024
                  </time>
                  <div class="text-lg font-bold ">
                    Institute of Engineering, Bachelor of Engineering (Computer
                    Engineering)
                  </div>
                </div>
                <div class="opacity-80">
                  Nakhon Ratchasima, Thailand <br />
                  Second Class Honors with 3.43 GPAX.
                  <br />
                  <a
                    className="px-2 rounded-[10px] w-1/2 border-2 sm:w-[100px] justify-center bg-light-primary duration-500 hover:border-dark-primary hover:bg-[#ffffff2f] hover:text-dark-secondary"
                    href={filetranscript}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-solid fa-file-pdf"></i>
                    Transcript
                  </a>
                </div>
              </div>

              <div class="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-bold text-xl md:text-xl  mb-1 sm:mb-0 text-dark-secondary ">
                  Princess Chulabhorn Science High School Chiang Rai
                </div>
                <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-light-primary sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-light-text1 after:border-[3px] after:box-content after:border-light-primary after:rounded-full after:shadow-lg after:shadow-orange-500/50	 sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-light-secondary bg-light-text1 rounded-[5px]">
                    2017 - 2020
                  </time>
                  <div class="text-lg font-bold ">
                    Regional Science School Program
                  </div>
                </div>
                <div class="opacity-80">
                  Chiang Rai, Thailand <br />
                  Graduated with 3.38 GPAX <br />
                </div>
              </div>

              <div class="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-bold text-xl md:text-xl  mb-1 sm:mb-0 text-dark-secondary ">
                  Thoengwittayakhom School.
                </div>
                <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-light-primary sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-light-text1 after:border-[3px] after:box-content after:border-light-primary after:rounded-full after:shadow-lg after:shadow-orange-500/50	 sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-light-secondary bg-light-text1 rounded-[5px]">
                    2014 - 2017
                  </time>
                  <div class="text-lg font-bold ">
                    Science and mathematics Program
                  </div>
                </div>
                <div class="opacity-80">
                  Chiang Rai, Thailand <br />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
