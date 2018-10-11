import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>
        <iframe 
            title = 'google-location'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.3652916148826!2d-121.4148396851415!3d38.594461679618476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ada39f2eaf6f3%3A0x2131540a5dcf3534!2s1601+Hood+Rd%2C+Sacramento%2C+CA+95825!5e0!3m2!1sen!2sus!4v1538000872150" 
            width="100%" 
            height="500px" 
            frameBorder="0"  
            allowFullScreen
        >
        </iframe>

        <div className='location_tag'>
            <div>Location</div>
        </div>
            
        </div>
    );
};

export default Location;