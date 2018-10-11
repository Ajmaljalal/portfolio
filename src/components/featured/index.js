import React from 'react';
import Introduction from './Introduction';

const Featured = () => {
  return (
      <React.Fragment>
        <div className = 'carrousel_wrapper'
            style={{
                background: 'green',
                height: `${window.innerHeight}px`,
                position: 'relative'
            }}>
        </div>
        <Introduction />
    </React.Fragment>
  )
}

export default Featured;
