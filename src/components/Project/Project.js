import React from "react";

// Front-End
import reacts from "../../logo.svg";
import HTML from "../../SVG/icon/html-5-svgrepo-com.svg";
import css from "../../SVG/icon/css-3-svgrepo-com.svg";
import angular from "../../SVG/icon/angular-svgrepo-com.svg";
import ts from "../../SVG/icon/typescript-svgrepo-com.svg";
import bootrap from "../../SVG/icon/bootstrap-svgrepo-com.svg";
import next from "../../SVG/icon/nextjs-icon-svgrepo-com.svg";
import tailwind from "../../SVG/icon/tailwind-svgrepo-com.svg";

// Back-End
import go from "../../SVG/icon/go-svgrepo-com.svg";
import node from "../../SVG/icon/node-js-svgrepo-com.svg";
import php from "../../SVG/icon/php-1-logo-svgrepo-com.svg";
import exprees from "../../SVG/icon/express-svgrepo-com.svg";
import solidity from "../../SVG/icon/light-solidity-svgrepo-com.svg";

// DB
import sqlserver from "../../SVG/icon/microsoft-sql-server-logo-svgrepo-com.svg";
import mongodb from "../../SVG/icon/mongodb-svgrepo-com.svg";
import sqlite from "../../SVG/icon/sqlite-svgrepo-com.svg";

import fair from "../../img/web/hrms.gif";
import fyt from "../../img/web/Fideyourtracks - Music Web.gif";
import nft from "../../img/web/Fideyourtracks.gif";

import shoe from "../../img/web/Shop_shop.gif";
import impatient from "../../img/web/Impatoent.gif";

const Project = ({ darkMode }) => {
  return (
    <div className="justify-center">
      <div className="px-4  sm:px-6">
        <h3 className="text-lg md:text-xl lg:text-2xl leading-4 font-bold ">
          My Portfolio
        </h3>
      </div>
      <div className="mt-1 mb-6 lg:mx-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 grid-flow-row">
          {/* project 1 */}
          <div
            className={`relative max-w-full rounded-[25px] overflow-hidden shadow-lg   ${
              darkMode ? "bg-[#2a24215f] backdrop-blur-[0.65rem] " : ""
            }`}
          >
            <a href="https://github.com/sut65/team12.git">
              <div
                className={`absolute top-1 right-1 shadow-lg px-2 py-1 m-2 rounded-[15px]  text-sm sm:text-[10px] xl:text-sm font-medium   ${
                  darkMode
                    ? "bg-[#444343] backdrop-blur-[1rem]  text-[#d5cfca]"
                    : "bg-gray-100   text-[#948888] "
                }`}
              >
                Jan - Feb 2023
              </div>
              <img
                className="w-full p-2 rounded-t-[25px]"
                src={impatient}
                alt="impatient"
              />
            </a>

            <div className="px-6 py-4">
              <div
                className={`font-bold text-xl mb-2 ${
                  darkMode ? "text-dark-secondary" : "text-[#f17c42]"
                }`}
              >
                Inpatient System
              </div>

              <p className="text-base sm:text-sm xl:text-base">
                Software Engineering Project: The hospital has given my team a
                requirement, My team and I have developed a Golang Gin RESTful
                APIs to control the transfer of data to a Typescript-powered
                React interface.
              </p>
            </div>
            <div className="static sm:static md:static px-6 py-4 inset-x-0 bottom-0">
              <span
                className={`inline-block rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2  ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={go} alt="go"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2  ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={reacts} className="h-full" alt="reacts"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2   ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={ts} className="m-1" alt="mongodb"></img>
              </span>

              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2   ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={node} className="object-cover" alt="js"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={sqlite} className="object-cover" alt="js"></img>
              </span>
            </div>
          </div>

          {/* project 2 */}
          <div
            className={`relative max-w-full rounded-[25px] overflow-hidden shadow-lg   ${
              darkMode ? "bg-[#2a24215f] backdrop-blur-[0.65rem] " : ""
            }`}
          >
            <a href="https://github.com/Ksis123/Fideyourtracks.git">
              <div
                className={`absolute top-1 right-1 shadow-lg px-2 py-1 m-2 rounded-[15px]  text-sm sm:text-[10px] xl:text-sm font-medium   ${
                  darkMode
                    ? "bg-[#444343] backdrop-blur-[1rem]  text-[#d5cfca]"
                    : "bg-gray-100   text-[#948888] "
                }`}
              >
                Aug - Oct 2023
              </div>
              <img
                className="w-full object-cover p-2 rounded-t-[25px]"
                src={fyt}
                alt="Fideyourtracks"
              />
            </a>
            <div className="px-6 py-4 ">
              <div
                className={`font-bold text-xl mb-2 ${
                  darkMode ? "text-dark-secondary" : "text-[#f17c42]"
                }`}
              >
                Fideyourtracks
              </div>
              <p className="text-base sm:text-sm xl:text-base">
                My Music Player: Web Application project, I improved my
                express.js and React skills to make my own music player for this
                project. by by developing RESTful APIs and applying Redux
                toolkit for state management.
              </p>
            </div>
            <div className="static sm:static md:static px-6 py-4 inset-x-0 bottom-0">
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2   ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={mongodb} className="object-cover" alt="mongodb"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2  ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={exprees} alt="exprees"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2  ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={reacts} className="h-full" alt="reacts"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2   ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={node} className="object-cover" alt="node"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg   ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={css} alt="css"></img>
              </span>
            </div>
          </div>

          {/* project 3 */}
          <div
            className={`relative max-w-full rounded-[25px] overflow-hidden shadow-lg   ${
              darkMode ? "bg-[#2a24215f] backdrop-blur-[0.65rem] " : ""
            }`}
          >
            <a href="https://github.com/Ksis123/Sports-Shoes-E-commerce.git">
              <div
                className={`absolute top-1 right-1 shadow-lg px-2 py-1 m-2 rounded-[15px]  text-sm sm:text-[10px] xl:text-sm font-medium   ${
                  darkMode
                    ? "bg-[#444343] backdrop-blur-[1rem]  text-[#d5cfca]"
                    : "bg-gray-100   text-[#948888] "
                }`}
              >
                Oct - Nov 2023
              </div>
              <img
                className="w-full p-2 rounded-t-[25px]"
                src={shoe}
                alt="Sunset in the mountains"
              />
            </a>

            <div className="px-6 py-4 ">
              <div
                className={`font-bold text-xl mb-2 ${
                  darkMode ? "text-dark-secondary" : "text-[#f17c42]"
                }`}
              >
                Mini e-commerce Shoe
              </div>
              <p className="text-base sm:text-sm xl:text-base">
                Project for Advanced Web Application Course: I developed a basic
                online sport shoe store using Mongodb, Angular, and Express.js,
                utilizing MEAN STACK and middleware architecture.
              </p>
            </div>
            <div className="static sm:static md:static px-6 py-4 inset-x-0 bottom-0">
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2   ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-gray-100   text-[#948888] "
                }`}
              >
                <img src={mongodb} className="object-cover" alt="mongodb"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2  ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={exprees} alt="exprees"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2  ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={angular} className="object-cover" alt="angular"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2  ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={node} className="object-cover" alt="node"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg   ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={css} alt="css"></img>
              </span>
            </div>
          </div>

          {/* project 4 */}

          <div
            className={`relative max-w-full rounded-[25px] overflow-hidden shadow-lg   ${
              darkMode
                ? "bg-[#2a24215f] backdrop-blur-[0.65rem] "
                : "bg-[#ffffff5f] backdrop-blur-[0.65rem]"
            }`}
          >
            <img
              className="w-full  object-cover p-2 rounded-t-[25px]"
              src={fair}
              alt="Fairmanpower"
            />
            <div
              className={`absolute top-1 right-1 shadow-lg px-2 py-1 m-2 rounded-[15px]  text-sm sm:text-[10px] xl:text-sm font-medium   ${
                darkMode
                  ? "bg-[#444343] backdrop-blur-[1rem]  text-[#d5cfca]"
                  : "bg-gray-100   text-[#948888] "
              }`}
            >
              Nov 2023 - Feb 2024
            </div>
            <div class="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 m-2 rounded-sm text-sm sm:text-[10px] xl:text-sm  font-medium">
              cannot be disclosed
            </div>
            <div className="px-6 py-4 ">
              <div
                className={`font-bold text-xl mb-2 ${
                  darkMode ? "text-dark-secondary" : "text-[#f17c42]"
                }`}
              >
                HRMS : Fairmanpower
              </div>
              <p className="text-base sm:text-sm xl:text-base">
                This solution, which is presently available for trial within the
                company, I attempts to establish an effective workforce
                management system to ensure accuracy in Management Employee and
                Payroll.
              </p>
            </div>
            <div className="static sm:static md:static px-6 py-4 inset-x-0 bottom-0">
              <span
                className={` inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2  ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={php} alt="php"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2  ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={HTML} alt="HTML"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2  ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={css} alt="css"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-2 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2 ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={bootrap} alt="bootrap"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-2 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg  ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={sqlserver} alt="sqlserver"></img>
              </span>
            </div>
          </div>

          {/* project 5 */}

          <div
            className={`relative max-w-full rounded-[25px] overflow-hidden shadow-lg   ${
              darkMode
                ? "bg-[#2a24215f] backdrop-blur-[0.65rem] "
                : "bg-[#ffffff5f] backdrop-blur-[0.65rem]"
            }`}
          >
            <a href="https://github.com/Ksis123/fideyourtracks_Marketplace.git">
              <div
                className={`absolute top-1 right-1 shadow-lg px-2 py-1 m-2 rounded-[15px]  text-sm sm:text-[10px] xl:text-sm font-medium   ${
                  darkMode
                    ? "bg-[#444343] backdrop-blur-[1rem]  text-[#d5cfca]"
                    : "bg-gray-100   text-[#948888] "
                }`}
              >
                Oct - Nov 2023
              </div>
              <img
                className="w-full  object-cover p-2 rounded-t-[25px]"
                src={nft}
                alt="fytnft"
              />
            </a>
            <div className="px-6 py-4 ">
              <div
                className={`font-bold text-xl mb-2 ${
                  darkMode ? "text-dark-secondary" : "text-[#f17c42]"
                }`}
              >
                Audio NFTs Marketplace
              </div>
              <p className="text-base sm:text-sm xl:text-base">
                This Fideyourtracks feature is challenging me to learn Solidity
                and Ganache in order to code tokens for listings and minting,
                wallets, and Metamask bidding for listing or purchasing audio
                NFT on marketplace.
              </p>
            </div>
            <div className="static sm:static md:static px-6 py-4 inset-x-0 bottom-0">
              <span
                className={` inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2  ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={solidity} alt="solidity"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2  ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={next} alt="next"></img>
              </span>
              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg mr-2  ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={ts} className="m-1" alt="ts"></img>
              </span>

              <span
                className={`inline-block  rounded-full p-1 w-10 h-10 lg:w-[45px] lg:h-[45px] overflow-hidden shadow-lg   ${
                  darkMode
                    ? "bg-[#69625e95] backdrop-blur-[0.65rem] "
                    : "bg-[#fdfdfdfe]"
                }`}
              >
                <img src={tailwind} alt="tailwind"></img>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
