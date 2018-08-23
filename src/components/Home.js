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
              <h1 className="display-3">Welcome!</h1>
              <br />
              <p className="lead">
                My name is Ajmal Jalal, I am here to form a partnership with you
                in giving beautiful shapes to those great ideas you have.
              </p>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/ajmal.jalal2" target="blank">
                <i class="fa fa-facebook-f" style={{ fontSize: 24 + 'px' }} />
              </a>
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
