import React from 'react';
import { Parallax } from 'react-parallax';

import Projects from './Projects';
import Home from './Home'
import parallax1 from '../images/parallax1.jpg';
import view from '../images/view.jpg';
import Contact from './Contact';


const ParallaxContainer = () => (
    <div>

        <Home/>
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={parallax1}
            bgImageAlt="the dog"
            strength={200}
        >
            <div style={{ height: '400px' }} />
        </Parallax>

        <Parallax   //Skills set
            bgImageAlt="the cat"
            strength={200}
        >
            <div className='row p-5' id='skills' >
                <h2 className =' col col-12 skillsH3'>SKILLS</h2>
                <div className = 'col col-12 p-2 mt-2 skillsDiv'>

                    <span className = 'col col-3 m-3 mb-5 p-3'><img src = {require('../icons/javascript.png')} alt = 'js' width='100px'/></span>

                    <span className = 'col col-3  m-3 mb-5 p-3'><img src = {require('../icons/react.png')} alt = 'rct' width='100px'/></span>

                    <span className = 'col col-3 m-3 mb-5 p-3'><img src = {require('../icons/node1.png')} alt = 'node' width='100px'/></span>

                    <span className = 'col col-3 m-3 mb-5 p-2'><img src = {require('../icons/mongoDB.png')} alt = 'mongo' width='100px'/></span>

                    <span className = 'col col-3 m-3 mb-5 p-3'><img src = {require('../icons/redux.png')} alt = 'redx' width='100px'/></span>

                    <span className = 'col col-3 m-3 mb-5 p-3'><img src = {require('../icons/bootstrap.png')} alt = 'botstrap' width='100px'/></span>

                    <span className = 'col col-3 m-3 mb-5 p-3'><img src = {require('../icons/express.png')} alt = 'expres' width='100px'/></span>

                </div>
                
            </div>
        </Parallax>

        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={parallax1}
            bgImageAlt="the dog"
            strength={200}
        >
            <div style={{ height: '500px' }} />
        </Parallax>



        <Parallax strength={300}>
            <div style={{height:'600px'}}>
            <Projects />
            </div>
        </Parallax>

        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={view}
            bgImageAlt="the dog"
            strength={200}
        >
            <div style={{ height: '500px' }} />
        </Parallax>

        <Parallax strength={300}>
            <div style={{height:'600px'}}>
                <Contact/>
            </div>
        </Parallax>
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={view}
            bgImageAlt="the dog"
            strength={200}
        >
            <div style={{ height: '100px' }} />
        </Parallax>
        
    </div>
  );

  export default ParallaxContainer;