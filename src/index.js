import React from 'react';
import ReactDOM from 'react-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

ReactDOM.render(
    <ParallaxProvider>
        <App />
    </ParallaxProvider>,
    document.getElementById('root'));
