import React from 'react';
// import logo from './Components/favicon-192.png';


const HeaderInfo = props => {
    return (
    <div>
        {/* <img src={logo}></img> */}
        <p>NASA LOGO</p>
        <h2 className = "header">{props.title}</h2>  
        <p>{props.date}</p>
        
    </div>
)
    };



export default HeaderInfo;