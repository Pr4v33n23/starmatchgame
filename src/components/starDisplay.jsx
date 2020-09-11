import React from 'react';
import { utils } from '../util/utils';

const StarDisplay = (props) => {

    let starStytles = {
        display: 'inline-block',
        margin: '12px 15px',
        '&::after':{
          content: '\\2605',
          fontSize: '40px'
        }
    }
    return (
        <>
            {utils.range(1, props.count).map(starId =><i key={starId} className="fa fa-star fa-3x" style={starStytles} aria-hidden="true"></i> )}
        </>
    
    )
}

export default StarDisplay;



