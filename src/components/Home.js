import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import ajmal from '../images/ajmal.jpg';
import Navbar from './Navbar';

const Home = props => {
  return (
    <React.Fragment>
      <div className="container">
        <Jumbotron fluid className="costum-jumbotron">
          <Container fluid>
            <div className="avatar-container">
              <img src={ajmal} className="avatar" alt="Ajmal Jalal" />
            </div>
            <div className="introduction">
              <h1 className="display-3">Hi</h1>
              <br />
              <p className="lead">
                After 3 years of working in the legal field I realized I wanted to solve problems in the community by writing programs. After a 6+ month program that covered CS fundamentals and Web Development I learned Node, Express, React, Redux, MongoDB, CSS3, and HTML5. I am passionate about learning new technologies and exploring new ways to find solutions for emerging problems.
              </p>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/ajmaljalal/" target='blank'>
                <i class="fa fa-linkedin" style={{ fontSize: 24 + 'px' }} />
              </a>
              <a href="https://github.com/Ajmaljalal" target='blank'>
                <i class="fa fa-github" style={{ fontSize: 24 + 'px' }} />
              </a>
            </div>
          </Container>
        </Jumbotron>
      </div>
      <Navbar/>
    </React.Fragment>
  );
};

export default Home;
