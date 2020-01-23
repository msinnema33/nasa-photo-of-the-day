import React from 'react';
import styled from 'styled-components';


const FootText = styled.div`
    background: #424242;
    color: #fff ;
    font-size: 2rem;
    text-align: center;

`;


const FooterInfo = props => {
    return(
    <div>
        <h4 className = "footer">{props.copyright} </h4>  
        <FootText> Copyright 2020</FootText>
    </div>
);

    };

export default FooterInfo;