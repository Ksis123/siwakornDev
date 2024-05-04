import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import SkillsDev from "./components/SkillsDev/SkillsDev";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import Layout from "./components/Layout";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><AboutMe /></Layout>} />
        <Route path="/aboutMe" element={<Layout><AboutMe /></Layout>} />
        <Route path="/skillsDev" element={<Layout><SkillsDev /></Layout>} />
        <Route path="/experience" element={<Layout><Experience /></Layout>} />
        <Route path="/projects" element={<Layout><Project /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
