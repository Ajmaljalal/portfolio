import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (

      <div id = 'projects'>

        <h1>PROJECTS</h1>

        <div className = 'row p-5'> 

          <div className = 'col col-4'>
            <div class="card mb-3 shadow">
              <img class="card-img-top" src={require('../images/ishiftr.JPG')} alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">Ishiftr</h5>
                <p class="card-text text-align-left">Ishiftr is an automatic shift scheduling and schedule assignment platform. It was a group project where I worked on the back and frontend. The utilized technologies are Node, Express, MongoDB, React, Bootstrap, and Stripe.</p>
                <a href='https://github.com/Lambda-School-Labs/CS8-iShiftr' className="cardBtn" target='blank'>Code</a>
                <a href = 'https://www.ishiftr.com/' className="cardBtn" target='blank'>View</a>
              </div>
            </div>
          </div>

          <div className = 'col col-4'>
            <div class="card mb-3 shadow">
              <img class="card-img-top" src={require('../images/dice.JPG')} alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">Dice Game</h5>
                <p class="card-text">Dice game is a simple dice rolling game develope with vanilla javascript, css, and html. Whenever the player hits 1 it will lose the role or it hits double 6 it will lose the all the scores. Each player can pass the role to the other player as well.  </p>
                <a href='https://github.com/Lambda-School-Labs/CS8-iShiftr' className="cardBtn" target='blank'>Code</a>
                <a href = 'https://www.ishiftr.com/' className="cardBtn" target='blank'>View</a>
              </div>
            </div>
          </div>

          <div className = 'col col-4'>
              <div class="card mb-3 shadow">
                <img class="card-img-top" src={require('../images/notes.JPG')} alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">Lambda Notes</h5>
                  <p class="card-text">Lambda Notes is a note taking app with smart functionalities like sending notes directly to email or as a text message to mobile. Node, Express, MongoDB, React, Redux and Bootstrap are used to build this amazing app.</p>
                  <a href='https://github.com/Ajmaljalal/front-end-project-week' className="cardBtn" target='blank'>Code</a>
                  <a href = 'https://wonderful-snyder-42b641.netlify.com/' className="cardBtn" target='blank'>View</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
