import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
//import About from './components/About';
//import {
  //BrowserRouter as Router,
  //Switch,
  //Route,
  //Link
//} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setalert] = useState(null)

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }
  

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert('dark mode has been enabled','success')
      
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert('light mode has been enabled','success')
    }
  }
  
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    {/*<Router>*/}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/*<Switch>*/}
          {/*<Route  exec path="/about">
            <About />
  </Route>*/}
         
          {/*<Route exec path="/">*/}
          <Textform heading="Enter the text to analyze below"  mode={mode}/>
            
         {/* </Route>*/}
        {/*</Switch>*/}
        </div>
        {/*</Router>*/}
    
    {/*<About/>*/}
   
    </> 
  );
  }

export default App
  
