import React, { Component } from "react";
import { ReactPhotoCollage } from "react-photo-collage";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import marist from "./assets/marist.jpg";
import meNmia from "./assets/meNmia.jpg";
import baby from "./assets/baby.jpg";
import view from "./assets/view.jpg";
import peth from "./assets/nut4.JPG";
import wideview from "./assets/wide.jpg";
import look from "./assets/look.jpg";
import dog from "./assets/dog.jpg";
import pumpkin from "./assets/pumpkin.jpg";
import top from "./assets/top.jpg";
import meNmeg from "./assets/meNmeg.jpg";
import animation from "./assets/animationmovie.gif";
import collage from "./assets/Collage.jpg";
import portrait from "./assets/DiBella-digitalSelf-Portrait.jpg";
import logo from "./assets/logo.jpg";

// html layout of each section
var aboutSection = 
  <div className="flexbox-container">
    <img src={baby}
      className="image"
      alt="img failed to load"
    />
    <p className="aboutme">Welcome! My name is Andrew DiBella, I am a graduate from Marist College with a degree in  
    Software Development and Cyber Security. I'm an aspiring developer who has loved coding ever since I created my first
    Game of Thrones themed text-based adventure game. Through my Computer Science education, I have been able to grow as a programmer 
    and learn to develop applications like this website! Some of my favorite projects have been the ones that have challenged me the most, 
    like my COVID-19 Contact Tracer and my mock 6502a operating system. <br/>
    <br/>
    Now, I am beginning my post graduate life as a Infrastructure Senior Tech Analyst for Citibank. I am very excited to see where this path 
    takes me and look foward to getting a start on my career.  </p>
    
  </div>

var projectSection = 
  <div>
    <div className="grid-container">
      <a href="https://github.com/andrewdibs/OS-2020" rel="noopener noreferrer" target="_blank">
        <div className="grid-item">
          <h4 className="project-title">DIBSOS</h4>
          <h5>TypeScript</h5>
          <h6>fully functioning 6502 operating system that can run assembly programs</h6>
        </div>
      </a>

      <a href="https://github.com/andrewdibs/Capping-2020" rel="noopener noreferrer" target="_blank">
        <div className="grid-item grow">
          <h4 className="project-title">ContactTracer</h4>
          <h5>SwiftUI - Java</h5>
          <h6>a COVID-19 contact tracing application that alerts you if you have been in contact with another positive for the virus</h6>
        </div>
      </a>
      <a href="https://github.com/andrewdibs/andrewdibs" rel="noopener noreferrer" target="_blank">
        <div className="grid-item">
          <h4 className="project-title">andrewdibs</h4>
          <h5>Javascript - React</h5>
          <h6>well, you are already here! take a look at the source code for this website I created</h6>
        </div>
      </a>
    </div>
    <div className="grid-container">
    <a href="https://github.com/andrewdibs/Oregon" rel="noopener noreferrer" target="_blank">
        <div className="grid-item">
          <h4 className="project-title">OregonTrail</h4>
          <h5>Javascript</h5>
          <h6>my very own version of the classic Oregon Trail. You can play it if you clone this repository!</h6>
        </div>
      </a>
      <a href="https://github.com/andrewdibs/Algorithms" rel="noopener noreferrer" target="_blank">
        <div className="grid-item">
          <h4 className="project-title">Algorithms</h4>
          <h5>Java</h5>
          <h6>these projects utilize advanced data stuctures and algorithms with java to organize and manipulate data</h6>
        </div>
      </a>
      <a href="https://www.youracclaim.com/badges/230a91a9-d333-4c10-ba1b-3ad4978cbda6/linked_in_profile" rel="noopener noreferrer" target="_blank">
        <div className="grid-item">
          <h4 className="project-title">Master the Mainframe</h4>
          <h5>z/OS</h5>
          <h6>2019 IBM Master the Mainframe finisher. Click to see my digital certificate and read more about the contest</h6>
        </div>
      </a>
    </div>
  </div>
    
  
    const digsetting = {
      width: '1000px',
      height: ['500px', '470px'],
      layout: [1,3],
      photos: [
        { src: animation},
        { src: portrait},
        { src: logo},
        { src: collage}
      ],
      showNumOfRemainingPhotos: false
    };


var digitalSection = 
  <div>
    <ReactPhotoCollage {...digsetting} />
  </div>


const setting = {
  width: '900px',
  height: ['350px', '270px'],
  layout: [1,2, 4, 2, 4],
  photos: [
    { src: marist },
    { src: dog},
    { src: view },
    { src: meNmia },
    { src: peth },
    { src: pumpkin},
    { src: meNmeg},
    { src: top},
    { src: look},
    { src: wideview}

  ],
  showNumOfRemainingPhotos: false
};

var shreddingSection = 
  <div>
    <ReactPhotoCollage {...setting} />
  </div>

var footnote = 
  <div>
    <h5 className="brandname">andrewdibs</h5>
    <h5>Feel free to contact me through <a href="https://www.linkedin.com/in/andrew-dibella-961289172/" rel="noopener noreferrer" target="_blank">LinkedIn</a> or by phone/email</h5>
    <h6>732-609-3597</h6>
    <a href="mailto: andrew.dibella1@marist.edu"><h6>andrew.dibella1@marist.edu</h6></a>
  </div>
  

class App  extends Component{
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="Hey, this is me"
          subtitle={""}
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
          title="Digital Art"
          subtitle={""}
          dark={true}
          id="section3"
          content={digitalSection}
        /> 
        <Section
          title="Memories"
          subtitle={""}
          dark={false}
          id="section4"
          content={shreddingSection}
        />
        <Section
          title=""
          subtitle={""}
          dark={true}
          id="section5"
          content={footnote}
        />
      </div>
    );
  }
}

export default App;
