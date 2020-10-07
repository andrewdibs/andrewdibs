import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import resume from "./assets/resume.jpg";
import meNmia from "./assets/meNmia.jpeg";

// html layout of each section
var aboutSection = 
  <div className="flexbox-container">
    <img src={meNmia}
      className="image"
      alt="img failed to load: myself and sister Mia"
    />
    <p className="aboutme">Write a paragraph about myself and add a picture</p>
    
  </div>

var projectSection = 
  <div>
    <div className="grid-container">
      <div className="grid-item">1</div>
      <div className="grid-item">2</div>
      <div className="grid-item">3</div>
    </div>
    <div className="grid-container">
      <div className="grid-item">4</div>
      <div className="grid-item">5</div>
      <div className="grid-item">6</div>
    </div>
  </div>
    
  



var resumeSection = 
<div className="imageBackground">
  <img src={resume}
    className="resumeimg"
    alt="img failed to load: resume"
  />
  
</div>


var shreddingSection = 
<div>
  
</div>


class App  extends Component{
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="Hey this is me"
          subtitle={"a quick overview of myself and interests"}
          dark={true}
          id="section1"
          content={aboutSection}
        />
        <Section
          title="Projects"
          subtitle={""}
          dark={false}
          id="section2"
          content={projectSection}
        />
        <Section
          title="Resume"
          subtitle={""}
          dark={true}
          id="section3"
          content={resumeSection}
        /> 
        <Section
          title="Shredding"
          subtitle={""}
          dark={false}
          id="section4"
          content={shreddingSection}
        />
        <Section
          title="idk yet..."
          subtitle={""}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
