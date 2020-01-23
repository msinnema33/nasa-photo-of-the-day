import React, {useState, useEffect} from "react";
import axios from "axios";
import HeaderInfo from "./Components/Head/Header.js";
import FooterInfo from './Components/Foot/Footer.js';
import styled from 'styled-components';

import "./App.css";

const Description = styled.p`
background: "lightgrey";
font-size: .7rem;


`;

function App() {
  const [pic, setPic] = useState([]);  
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=d1B4kVuXZArzbcfeelnoUJO2MjRUv7ElunXnjSoI' )

      .then((result) => {
        console.log(result);
        setPic(result.data);
      })
      .catch((err) => {
        console.log('the data was not returned', err); 
      });
  }, []);


  return (
    <div className="App">
     <HeaderInfo /> 
      <Description>Description:  {pic.explanation}</Description>
      <img src={pic.url}/>
      
      <FooterInfo />
    </div>
  );
}

export default App;
