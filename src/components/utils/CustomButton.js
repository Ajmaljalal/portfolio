import React from 'react';
import Button from '@material-ui/core/Button';
import ticketIcon from '../../resources/images/icons/ticket.png'

const CustomButton = (props) => {
    return (
        <Button
            href= {props.href}
            variant='contained'
            size='small'
            style={{
                background: props.bck,
                color: props.color 
            }}
        >
            <img src={ticketIcon} className='iconImage' alt='icon_button' />
            {props.text}       
        </Button>
    );
};

export default CustomButton;