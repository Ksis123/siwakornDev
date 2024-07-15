import React from "react";

import { useTranslation } from "react-i18next";
import projectsdata from "./ProjectData";

const Project = ({ changeLanguage, darkMode }) => {
  const { t } = useTranslation();


  const translatedProjectsData = projectsdata.map(project => ({
    ...project,
    time: t(project.time),
    title: t(project.titleKey),
    description: t(project.descriptionKey),
  }));
  return (
    <div className="justify-center">
      <div className="px-4  sm:px-6">
        <h3 className="text-lg md:text-xl lg:text-2xl leading-4 font-bold ">
          {t("port_title")}
        </h3>
      </div>
      <div className="mt-1 mb-6 lg:mx-4 ">
        <div className="container">
          <div className="flex flex-wrap ">

            {translatedProjectsData.map((project, index) => (
              <div key={index} className='w-full  md:w-1/2 lg:w-1/2 xl:w-1/3 p-2'>
                <div
                  className={`relative max-w-full rounded-[20px] overflow-hidden shadow-lg backdrop-blur-[0.65rem]    ${darkMode ? "bg-[#3230305f] " : "bg-[#9592925f] "
                    }`}
                >
                  <div
                    className={`absolute -top-1 right-0 shadow-lg px-2 py-1 m-2 rounded-[15px]  text-sm sm:text-[10px] xl:text-sm font-medium   ${darkMode
                      ? "bg-[#444343] backdrop-blur-[1rem]  text-[#d5cfca]"
                      : "bg-gray-100   text-[#948888] "
                      }`}
                  >
                    {project.time}
                  </div>
                  <img src={project.image} alt="" className="w-full  rounded-t-sm " />
                  <div className="absolute z-50 inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-90 text-white font-medium rounded-lg opacity-0 transform transition duration-500 hover:opacity-100 hover:scale-105">
                    <h4 className="text-md lg:text-lg font-bold  text-light-secondary my-1">{project.title}</h4>
                    <hr className="w-full" />
                    <p className="text-[13px] p-2 sm:text-sm xl:text-[13px]">{project.description}</p>
                    <a className=" duration-200 bg-light-secondary hover:bg-[#ffffff19] border hover:border-light-secondary font-semibold text-sm py-1 px-2 rounded-lg " href={project.link}>Github</a>
                  </div>
                  {project.tool && (
                    <div className="flex flex-wrap m-2">
                      {project.tool.map((tool, toolIndex) => (
                        <span key={index}
                          className={`inline-block rounded-full p-1 w-10 h-10 lg:w-[40px] lg:h-[40px] overflow-hidden shadow-lg mr-2  ${darkMode
                            ? "bg-[#5e5957f6] backdrop-blur-[0.65rem] "
                            : "bg-[#fdfdfdfe]"
                            }`}
                        >
                          <img key={toolIndex} className="object-cover w-8 h-8 sm:w-8 sm:h-8" src={tool} alt={`Tool ${toolIndex + 1}`} />
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>      
        </div>
    </div>
  );
};
export default Project;
