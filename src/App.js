import React, { Component } from "react";
import {Document} from "react-pdf";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import resume from "./assets/resume.pdf"

// html layout of each section
var aboutSection = 
  <div>
    <p>Write a paragraph about myself and add a picture</p>
  </div>

var projectSection = 
  <div>
    
  </div>



var resumeSection = 
<div>
    <Document 
      file={resume}
      onLoadSuccess="true"
    >
      
    </Document>
  
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
