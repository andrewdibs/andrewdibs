import React from 'react';
import {Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import maristImg from '../assets/marist.jpg';

const Styles = styled.div`
  .jumbo{
    background: url(${maristImg}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    height:200px;
    position: relative;
    z-index: 0;
  }

  .tint{
    backround-color: black;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    opacity: .6;
    z-index: 1;
  }
`;

export const Jumbotron = () =>(
  <Styles>
    <Jumbo className="jumbo" fluid>
      <div className="tint"></div>
      <Container>
        <h1>YERRRRR</h1>
      </Container>
    </Jumbo>

  </Styles>
);
