import React from 'react';



const FooterInfo = props => {
    return(
    <div>
        <h4 className = "footer">{props.copyright} </h4>  
        <p> Copyright 2020</p>
    </div>
);

    };

export default FooterInfo;