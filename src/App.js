
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/Textform';
import React from 'react';
import About from './Components/About';


function App() {    
  return (
    <>
    <Navbar title="Textutils" />
    <div className="container my-3"> 
    <TextForm heading="Enter your text here to analyze"/>
    <About/>
    </div>
    
    </>
   
    )
    
}

export default App;
