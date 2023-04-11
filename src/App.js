
import React, { useState } from 'react';
import './App.css'

function App() {
  const [ArrIndex, setArrIndex] = useState(0);
  const [ImgArr, setImgArr] = useState([
    "congratulations",
    "Happy Birthday",
    "Good Morning",
    "Good Afternoon",
    "Good Evening",
    "Good Night",

  ]);

  const handleChange = () => {
    const len = ImgArr.length - 1;
    if (ArrIndex === len) {
      setArrIndex(ArrIndex - len);
    } else {
      setArrIndex(ArrIndex + 1);
    }
  };

  return (
    <div className="container">
    <div className='sub-coontainer'>
    <div className='head'>
    <h1>{ImgArr[ArrIndex]}</h1>
    </div>
      
      <div className='btn'>
        <button onClick={handleChange} className="btn">
          Change Greeting
        </button>
      </div>
    </div>
    </div>
  );
}



export default App;
