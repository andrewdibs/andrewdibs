import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar{
    background-color: #383939;
  }

  .navbar-brand,.navbar-nav{
    color: #33FFB5;
    font-family: "Brush Script MT", cursive;
    font-size: 32px; 
    &:hover{
        color: white;
    } 
  }

  .navbar-nav .nav-link{
    color: white;
    size: relative;
    padding-left: 15px;
    padding-right: 15px;
    font-family:"Comic Sans MS";
    font-size: 18px;
    &:hover{
        color: #33FFB5;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">andrewdibs</Navbar.Brand>
      <Navbar.Toggle aria-controls ="basic-navbar-nav" />
      <Navbar.Collapse id="light-navbar-nav">
        <Nav class-name="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
        </Nav>
        <Nav class-name="mr">
          <Nav.Item><Nav.Link href="http://www.github.com/andrewdibs" target="_blank">GitHub</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="https://www.linkedin.com/in/andrew-dibella-961289172/" target="_blank">LinkedIn</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);