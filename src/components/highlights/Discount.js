import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import CustomButton from '../utils/CustomButton';

class Discount extends Component {
    state = {
        discount: 0,
        limit: 30    
    }

    discount = () => {
        if(this.state.discount < this.state.limit) {
            this.setState({
                discount: this.state.discount + 1
            });
        }
    }

    componentDidUpdate(){
        setTimeout(()=>this.discount(), 25)
    }

    render() {
        return (
            <div className='center_wrapper'>
                <div className='discount_wrapper'>

                    <Fade
                        onReveal={()=>this.discount()}
                    >
                        <div className='discount_porcentage'>
                            <span>{this.state.discount}%</span>
                            <span>off</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className='discount_description'>
                            <h3>Purchase tickets before 20th Oct</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            <CustomButton text='Purchase now' href='https://www.google.com' bck='red' color='#ffffff'/>
                        </div> 
                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;