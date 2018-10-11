import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import Button from '../utils/CustomButton';

class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        ],
        linkTo: [
            '#',
            '#',
            '#'
        ],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((price, i)=>(

            <Zoom delay={this.state.delay[i]} key={i}>
                <div className='pricing_item'>
                    <div className='pricing_inner_wrapper'>
                        <div className='pricing_title'>
                            <span>${price}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className='pricing_description'>{this.state.desc[i]}</div>
                        <div className='pricing_buttons'>
                            <Button 
                                text='Purchase'
                                bck='#ffa800'
                                color='#ffffff'
                                href={this.state.linkTo[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )


    render() {
        return (
            <div className='bck_black'>
                <div className='center_wrapper pricing_section'>
                    <h2>Pricing</h2>
                    <div className='pricing_wrapper'>
                        {this.showBoxes()}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Pricing;