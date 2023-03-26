import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import model from "./contentn/model.js";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ContactInfo from "./components/ContactInfo";
import WorkExperience from "./components/WorkExperience";
import References from "./components/Referances";
import Skills from "./components/Skills";

const App = () => {
  const {
    name,
    aboutMe,
    projects,
    workExperience,
    education,
    contactInfo,
    references,
    skills,
  } = model;

  return (
    <Container>
      <Header name={name} />
      <Main>
        <div className="content">
          <AboutMe aboutMe={aboutMe} />
          <Projects projects={projects} />
          <WorkExperience workExperience={workExperience} />
          <Education education={education} />
        </div>
        <aside>
          <ContactInfo contactInfo={contactInfo} />
          <References references={references} />
          <Skills skills={skills} />
        </aside>
      </Main>
    </Container>
  );
};

export default App;
