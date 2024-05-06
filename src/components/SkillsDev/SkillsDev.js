import React from "react";
import "./skill.css";
// Front-End
import reacts from "../../logo.svg";
import next from "../../SVG/icon/nextjs-icon-svgrepo-com.svg";
import angular from "../../SVG/icon/angular-svgrepo-com.svg";
import vue from "../../SVG/icon/vue-svgrepo-com.svg";
import laravel from "../../SVG/icon/laravel-svgrepo-com.svg";
import HTML from "../../SVG/icon/html-5-svgrepo-com.svg";
import css from "../../SVG/icon/css-3-svgrepo-com.svg";
import js from "../../SVG/icon/javascript-svgrepo-com.svg";
import ts from "../../SVG/icon/typescript-svgrepo-com.svg";
import tatilwind from "../../SVG/icon/tailwind-svgrepo-com.svg";
import figma from "../../SVG/icon/figma-svgrepo-com.svg";
import bootrap from "../../SVG/icon/bootstrap-svgrepo-com.svg";

// Back-End
import git from "../../SVG/icon/git-svgrepo-com.svg";
import linedev from "../../SVG/icon/dev-svgrepo-com.svg";
import solidity from "../../SVG/icon/light-solidity-svgrepo-com.svg";
import go from "../../SVG/icon/go-svgrepo-com.svg";
import python from "../../SVG/icon/python-svgrepo-com.svg";
import node from "../../SVG/icon/node-js-svgrepo-com.svg";
import php from "../../SVG/icon/php-1-logo-svgrepo-com.svg";
import exprees from "../../SVG/icon/express-svgrepo-com.svg";
import c from "../../SVG/icon/c.svg";
import cshap from "../../SVG/icon/c-sharp-programming-language-icon.svg";
import java from "../../SVG/icon/java-svgrepo-com.svg";
import docker from "../../SVG/icon/docker-svgrepo-com.svg";

// DB
import mysql from "../../SVG/icon/mysql-logo-svgrepo-com.svg";
import mongodb from "../../SVG/icon/mongodb-svgrepo-com.svg";
import sqlite from "../../SVG/icon/sqlite-svgrepo-com.svg";
import sqlserver from "../../SVG/icon/microsoft-sql-server-logo-svgrepo-com.svg";

import { useTranslation } from 'react-i18next';


const SkillsDev = ({ changeLanguage, darkMode }) => {

  const { t } = useTranslation();


  return (
    <div className="justify-center">
      <div className="px-4 sm:px-6">
        <h3 className="text-lg md:text-xl lg:text-2xl leading-4 font-bold ">
          {t('skill')}
        </h3>
      </div>
      <div className=" mt-3 mb-6 lg:mx-8 ">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-4 grid-flow-row">
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group   ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-full h-full duration-500 transition-all group-hover:opacity-0"
                  src={reacts}
                  alt="React"
                ></img>
                <h2 className="absolute  uppercase overflow-visible	 text-sm opacity-0 duration-500  group-hover:opacity-100 ">
                  {t('1y')} 
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              React
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-full h-full duration-500 transition-all group-hover:opacity-0"
                  src={next}
                  alt="Next"
                ></img>
                <h2 className="absolute uppercase text-[12px] opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('6m')} 
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Next.js
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-3/4 h-3/4 duration-500 transition-all group-hover:opacity-0"
                  src={angular}
                  alt="Angular"
                ></img>
                <h2 className="absolute uppercase text-[12px] opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('6m')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Angular
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className="z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-3/4 h-3/4 duration-500 transition-all group-hover:opacity-0"
                  src={vue}
                  alt="Vue"
                ></img>
                <h2 className="absolute uppercase text-[12px] opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('6m')} 
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Vue.js
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-4/6 h-4/6 duration-500 transition-all group-hover:opacity-0"
                  src={laravel}
                  alt="Laravel"
                ></img>
                <h2 className="absolute uppercase text-[12px] opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('6m')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Laravel
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover drop-shadow-lg w-3/4 h-3/4 duration-500 transition-all group-hover:opacity-0"
                  src={tatilwind}
                  alt="Tailwind"
                ></img>
                <h2 className="absolute uppercase text-sm opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('1y')}
                </h2>
                <span className="absolute text-[12px] mt-6 opacity-0 duration-500 transition-all group-hover:opacity-100">
                {t('expert')}
                </span>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Tailwind
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-3/4 h-3/4 duration-500 transition-all group-hover:opacity-0"
                  src={HTML}
                  alt="HTML"
                ></img>
                <h2 className="absolute uppercase text-sm opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('3y')} 
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              HTML5
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover drop-shadow-md w-3/4 h-3/4 duration-500 transition-all group-hover:opacity-0"
                  src={css}
                  alt="CSS3"
                ></img>
                <h2 className="absolute uppercase text-sm opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('3y')}
                </h2>
                <span className="absolute text-[12px] mt-6 opacity-0 duration-500 transition-all group-hover:opacity-100">
                {t('expert')}
                </span>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              CSS3
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-4/6 h-4/6 duration-500 transition-all group-hover:opacity-0"
                  src={figma}
                  alt="Figma"
                ></img>
                <h2 className="absolute uppercase text-[12px] opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('6m')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Figma
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover shadow-sm shadow-[#261b39] rounded-md w-4/6 h-4/6 duration-500 transition-all group-hover:opacity-0"
                  src={bootrap}
                  alt="Bootrap"
                ></img>
                <h2 className="absolute uppercase text-sm opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('1y')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Bootrap
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-4/6 h-4/6 duration-500 transition-all group-hover:opacity-0"
                  src={js}
                  alt="Profile"
                ></img>
                <h2 className="absolute uppercase text-sm opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('1y')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              JavaScript
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-4/6 h-4/6 duration-500 transition-all group-hover:opacity-0"
                  src={ts}
                  alt="Typescript"
                ></img>
                <h2 className="absolute uppercase text-sm opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('1y')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Typescript
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-3/4 h-3/4 duration-500 transition-all group-hover:opacity-0"
                  src={git}
                  alt="Github"
                ></img>
                <h2 className="absolute uppercase text-center text-sm opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                {t('basic')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Github
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-4/6 h-4/6 duration-500 transition-all group-hover:opacity-0"
                  src={linedev}
                  alt="LINEDeveloper"
                ></img>
                <h2 className="absolute uppercase text-[12px] opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('6m')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              LINE Developer
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-3/4 h-3/4 duration-500 transition-all group-hover:opacity-0"
                  src={solidity}
                  alt="Solidity"
                ></img>
                <h2 className="absolute uppercase text-[12px] opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('6m')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Solidity
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-3/4 h-3/4 duration-500 transition-all group-hover:opacity-0"
                  src={go}
                  alt="Golang"
                ></img>
                <h2 className="absolute uppercase text-sm opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('1y')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Golang
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-3/4 h-3/4 duration-500 transition-all group-hover:opacity-0"
                  src={python}
                  alt="Profile"
                ></img>
                <h2 className="absolute uppercase text-sm opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                {t('2y')} 
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Python
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-3/4 h-3/4 duration-500 transition-all group-hover:opacity-0"
                  src={php}
                  alt="php"
                ></img>
                <h2 className="absolute uppercase text-[12px] opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('4m')} 
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              PHP
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-3/7 h-3/4 duration-500 transition-all group-hover:opacity-0"
                  src={node}
                  alt="Node"
                ></img>
                <h2 className="absolute uppercase text-sm opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('1y')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Node.js
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-3/4 h-3/4 duration-500 transition-all group-hover:opacity-0"
                  src={exprees}
                  alt="Express"
                ></img>
                <h2 className="absolute uppercase text-[12px] opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('4m')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Express.js
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-4/6 h-4/6 duration-500 transition-all group-hover:opacity-0"
                  src={c}
                  alt="cplus"
                ></img>
                <h2 className="absolute uppercase text-[12px] opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('4m')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              C/C++
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-4/6 h-4/6 duration-500 transition-all group-hover:opacity-0"
                  src={cshap}
                  alt="cshap"
                ></img>
                <h2 className="absolute uppercase text-[12px] opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('4m')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              C#
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-4/6 h-4/6 duration-500 transition-all group-hover:opacity-0"
                  src={java}
                  alt="java"
                ></img>
                <h2 className="absolute uppercase text-[12px] opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('4m')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Java
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-4/6 h-4/6 duration-500 transition-all group-hover:opacity-0"
                  src={docker}
                  alt="docker"
                ></img>
                <h2 className="absolute uppercase text-[12px] opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('6m')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Docker
            </div>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-full h-full duration-500 transition-all group-hover:opacity-0"
                  src={mysql}
                  alt="mysql"
                ></img>
                <h2 className="absolute uppercase text-sm opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('1y')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              Mysql
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-3/4 h-3/4 duration-500 transition-all group-hover:opacity-0"
                  src={mongodb}
                  alt="MongoDB"
                ></img>
                <h2 className="absolute uppercase text-[12px] opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('4m')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              MongoDB
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-3/4 h-3/4 duration-500 transition-all group-hover:opacity-0"
                  src={sqlite}
                  alt="SQLite"
                ></img>
                <h2 className="absolute uppercase text-[12px] opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                {t('8m')} 
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              SQLite
            </div>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <div
              className={`skill shadow-lg  w-[5rem] h-[5rem] group  ${
                darkMode ? "bg-[#4a4848] " : "bg-white"
              }`}
            >
              <div className=" z-[3] absolute rounded-[50%] flex flex-col justify-center items-center duration-500 transition-all hover:border-light-primary border-2 inset-1  overflow-hidden">
                <img
                  className="object-cover w-3/4 h-3/4 duration-500 transition-all group-hover:opacity-0"
                  src={sqlserver}
                  alt="sqlserver"
                ></img>
                <h2 className="absolute uppercase text-[12px] opacity-0 duration-500 transition-all group-hover:opacity-100 ">
                  {t('4m')}
                </h2>
              </div>
            </div>
            <div className="text-center text-[12px] md:text-sm xl:text-base">
              SQL Server
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default SkillsDev;
