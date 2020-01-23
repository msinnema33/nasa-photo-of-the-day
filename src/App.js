import React, {useState, useEffect} from "react";
import axios from "axios";
import HeaderInfo from "./Components/Head/Header";
import FooterInfo from './Components/Foot/Footer';

import "./App.css";

function App() {
  const [pic, setPic] = useState([]);  
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' )

      .then((result) => {
        console.log(result);
        setPic(result.data);
        // console.log(setPic);
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
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>

      {/* <FooterInfo /> */}
    </div>
  );
}

export default App;
