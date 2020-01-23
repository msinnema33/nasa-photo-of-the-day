import React, {useState, useEffect} from "react";
import axios from "axios";
import HeaderInfo from "./Components/Head/Header.js";
import FooterInfo from './Components/Foot/Footer.js';

import "./App.css";

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
      <p>Description:  {pic.explanation}</p>
      <img src={pic.url}/>
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
      </p>

      <FooterInfo />
    </div>
  );
}

export default App;
