import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import fileGraduate from "../../static/media/Graduate_Certificate.pdf";
import resume from "../../static/media/Resume_Siwakorn_0657313223.pdf";
import cv from "../../static/media/CV_Siwakorn_0657313223.pdf";
import MultiTyping from "./MultiTyping";


const AboutMe = ({ changeLanguage, darkMode }) => {
  const [activeTab, setActiveTab] = useState("Introduction");
  const { t } = useTranslation();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="justify-center">
      <div className="space-y-8 mx-1 mt-3 mb-6 lg:mx-8 flex flex-wrap gap-6 ">
        <div className="xl:w-96 w-[300px] mx-auto mr-2">
          <button
            onClick={() => handleTabClick("Introduction")}
            className={`text-sm xl:text-lg ${activeTab === "Introduction"
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
            {t('tabmenu1')}
          </button>
          <button
            onClick={() => handleTabClick("personal")}
            className={`text-sm xl:text-lg ${activeTab === "personal"
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
            {t('tabmenu2')}
          </button>

          <button
            onClick={() => handleTabClick("education")}
            className={`text-sm xl:text-lg ${activeTab === "education"
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
            {t('tabmenu3')}
          </button>
        </div>
      </div>
      <div className=" mx-1 mt-3 mb-6 lg:mx-8 ">
        {activeTab === "Introduction" && (
          <>
            <div className="flex flex-col  gap-8 z-10 items-center justify-center mx-auto">
              <span className="md:text-3xl text-2xl font-bold text-[#faab84]">
                {t('title')}
              </span>
              <div className="w-max">
                    <MultiTyping />
              </div>

              <p className="md:max-w-[700px] max-w-[450px] leading-5 text-left">
                {t('welcome_message')}
                <br />
                <br />
                {t('welcome_message_final')}
              </p>
              <div className="flex  w-full items-center justify-center gap-4">
                <a
                  className="text-white text-center text-[12px] sm:text-md md:text-base rounded-full bg-light-primary shadow-lg hover:bg-orange-500 transition-all duration-300 w-fit sm:px-5 sm:py-3 px-3 py-1 font-medium "
                  href={cv}
                  download="CV_SIWAKORN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <label className="fixed  invisible sm:relative sm:visible cursor-pointer">
                    {t('download')}
                  </label> CV
                </a>
                <a
                  className="text-white text-center text-[12px] sm:text-md md:text-base rounded-full bg-light-primary shadow-lg hover:bg-orange-500 transition-all duration-300 w-fit sm:px-5 sm:py-3 px-3 py-1 font-medium "
                  href={resume}
                  download="Resume_SIWAKORN"

                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <label className="fixed invisible sm:relative  sm:visible cursor-pointer">
                    {t('download')}
                  </label> Resume
                </a>

                <Link
                  to="/projects"
                  className="animate-bounce text-center text-[12px] sm:text-md md:text-base rounded-full border-2 border-orange-400 shadow-lg hover:bg-orange-500 transition-all duration-300 font-medium w-fit px-5 py-1 sm:px-5 sm:py-3"
                >
                  {t('my_portfolio')}
                </Link>
              </div>
            </div>
          </>
        )}
        {activeTab === "personal" && (
          <>
            <div className="shadow  overflow-hidden  rounded-lg ">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-2xl leading-4 font-bold text-light-primary">
                  {t('p_title')}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  {t('p_detail')}.
                </p>
              </div>
              <div className="border-t px-4 py-5 sm:p-0">
                <dl>
                  <div className="py-3 sm:py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium md:text-base text-light-primary">
                      {t('p1')}
                    </dt>
                    <dd className="mt-1 text-sm md:text-base sm:mt-0 sm:col-span-2">
                      {t('a1')}
                    </dd>
                  </div>
                  <div className="py-3 sm:py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium md:text-base text-light-primary">
                      {t('p2')}
                    </dt>
                    <dd className="mt-1 text-sm md:text-base sm:mt-0 sm:col-span-2">
                      {new Date().getFullYear() - 2002} {t('a2')}
                    </dd>
                  </div>
                  <div className="py-3 sm:py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium md:text-base text-light-primary">
                      {t('p3')}
                    </dt>
                    <dd className="mt-1 text-sm md:text-base sm:mt-0 sm:col-span-2">
                      <a target="blank" href="mailto:khemkhemsiwa555@gmail.com">
                        khemkhemsiwa555@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div className="py-3 sm:py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium md:text-base text-light-primary">
                      {t('p4')}
                    </dt>
                    <dd className="mt-1 text-sm md:text-base sm:mt-0 sm:col-span-2">
                      (+66) 65-731-3223
                    </dd>
                  </div>
                  <div className="py-3 sm:py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium md:text-base text-light-primary">
                      {t('p5')}
                    </dt>
                    <dd className="mt-1 text-sm md:text-base sm:mt-0 sm:col-span-2">
                      <span className="flex gap-2">
                        {t('a5')}
                      </span>
                    </dd>
                  </div>
                  <div className="py-3 sm:py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium md:text-base text-light-primary">
                      {t('p6')}
                    </dt>
                    <dd className="mt-1 text-sm md:text-base sm:mt-0 sm:col-span-2">
                      {t('a6')}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </>
        )}

        {activeTab === "education" && (
          <>
            <div className="-my-6 ">
              <div className="relative pl-8 sm:pl-32 py-6 group ">
                <div className="font-bold text-xl md:text-xl  mb-1 sm:mb-0 text-dark-secondary ">
                  {t('edu1')}
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-light-primary sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-light-text1 after:border-[3px] after:box-content after:border-light-primary after:rounded-full after:shadow-lg after:shadow-orange-500/50	 sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-light-secondary bg-light-text1 rounded-[5px]">
                    {t('y1')}
                  </time>
                  <div className="text-lg font-bold ">
                    {t('major1')}
                  </div>
                </div>
                <div className="opacity-80">
                  {t('province1')} <br />
                  {t('someting1')}
                  <br />
                  <a
                    className="px-2 rounded-[10px] w-1/2 border-2 sm:w-[100px] justify-center bg-light-primary duration-500 hover:border-dark-primary hover:bg-[#ffffff2f] hover:text-dark-secondary"
                    href={fileGraduate}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-file-pdf"></i>
                    {t('graduate')}
                  </a>
                </div>
              </div>

              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-bold text-xl md:text-xl  mb-1 sm:mb-0 text-dark-secondary ">
                  {t('edu2')}
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-light-primary sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-light-text1 after:border-[3px] after:box-content after:border-light-primary after:rounded-full after:shadow-lg after:shadow-orange-500/50	 sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-light-secondary bg-light-text1 rounded-[5px]">
                    {t('y2')}
                  </time>
                  <div className="text-lg font-bold ">
                    {t('major2')}
                  </div>
                </div>
                <div className="opacity-80">
                  {t('province2')} <br />
                  {t('someting2')} <br />
                </div>
              </div>

              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-bold text-xl md:text-xl  mb-1 sm:mb-0 text-dark-secondary ">
                  {t('edu3')}
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-light-primary sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-light-text1 after:border-[3px] after:box-content after:border-light-primary after:rounded-full after:shadow-lg after:shadow-orange-500/50	 sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-light-secondary bg-light-text1 rounded-[5px]">
                    {t('y3')}
                  </time>
                  <div className="text-lg font-bold ">
                    {t('major3')}
                  </div>
                </div>
                <div className="opacity-80">
                  {t('province3')} <br />
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
