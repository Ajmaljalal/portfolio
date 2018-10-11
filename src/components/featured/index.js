import React from 'react';
import Introduction from './Introduction';

const Featured = () => {
  return (
    <div style={{position: 'relative'}}>
        <Introduction />
        <div className = 'artist_name'>
            <div className = 'wrapper'>
                Ajmal Jalal
            </div>
        </div>
      
    </div>
  )
}

export default Featured;
