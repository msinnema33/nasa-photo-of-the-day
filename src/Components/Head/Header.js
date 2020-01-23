import React from 'react';
// import logo from './Components/favicon-192.png';
import styled from 'styled-components';

const HeadText = styled.div`
    background: #424242;
    color: #fff ;
    font-size: 3rem;
    text-align: center;

`;

const HeaderInfo = props => {
    return (
    <div>
        {/* <img src={logo}></img> */}
        <HeadText>NASA APOD</HeadText>
        <h2 className = "header">{props.title}</h2>  
        <p>{props.date}</p>
        
    </div>
)
    };



export default HeaderInfo;