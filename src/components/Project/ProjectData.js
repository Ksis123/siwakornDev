import fair from "../../img/web/hrms.gif";
import fyt from "../../img/web/Fideyourtracks - Music Web.gif";
import nft from "../../img/web/Fideyourtracks.gif";
import shoe from "../../img/web/Shop_shop.gif";
import impatient from "../../img/web/Impatoent.gif";

import go from "../../SVG/icon/go-svgrepo-com.svg";

// // Front-End
import reacts from "../../logo.svg";
import HTML from "../../SVG/icon/html-5-svgrepo-com.svg";
import css from "../../SVG/icon/css-3-svgrepo-com.svg";
import angular from "../../SVG/icon/angular-svgrepo-com.svg";
import ts from "../../SVG/icon/typescript-svgrepo-com.svg";
import bootrap from "../../SVG/icon/bootstrap-svgrepo-com.svg";
import next from "../../SVG/icon/nextjs-icon-svgrepo-com.svg";
import tailwind from "../../SVG/icon/tailwind-svgrepo-com.svg";

// Back-End
import node from "../../SVG/icon/node-js-svgrepo-com.svg";
import php from "../../SVG/icon/php-1-logo-svgrepo-com.svg";
import exprees from "../../SVG/icon/express-svgrepo-com.svg";
import solidity from "../../SVG/icon/light-solidity-svgrepo-com.svg";

// DB
import sqlserver from "../../SVG/icon/microsoft-sql-server-logo-svgrepo-com.svg";
import mongodb from "../../SVG/icon/mongodb-svgrepo-com.svg";
import sqlite from "../../SVG/icon/sqlite-svgrepo-com.svg";



const projectsdata = [
    {
        time: "port_time1",
        titleKey: "port1",
        image: impatient,
        descriptionKey: "port_des1",
        link: "https://github.com/sut65/team12.git",
        tool:[go,reacts,ts, node, sqlite]
    },
    {
        time: "port_time2",
        titleKey: "port2",
        image: fyt,
        descriptionKey: "port_des2",
        link: "https://github.com/Ksis123/Fideyourtracks.git",
        tool:[mongodb,exprees,reacts, node, tailwind]

    },
    {
        time: "port_time3",
        titleKey: "port3",
        image: shoe,
        descriptionKey: "port_des3",
        link: "https://github.com/Nok012/Sell-Sports-Shoes-WebApp.git",
        tool:[mongodb,exprees,angular, node, css]

    },
    {
        time: "port_time4",
        titleKey: "port4",
        image: fair,
        descriptionKey: "port_des4",
        link: "/",
        tool:[php,HTML,css, bootrap, sqlserver]

    },
    {
        time: "port_time5",
        titleKey: "port5",
        image: nft,
        descriptionKey: "port_des5",
        link: "https://github.com/Ksis123/fideyourtracks_Marketplace.git",
        tool:[solidity,next,tailwind, ts]

    },
];

export default projectsdata;
