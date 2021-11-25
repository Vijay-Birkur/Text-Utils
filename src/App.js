import './App.css';
import Navbar from './Componets/Navbar';
import TextForm from './Componets/TextForm';
import About from './Componets/About';
import React, { useState } from 'react';
import Alert from './Componets/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
 
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      document.querySelector('div').style.color= 'white';
      showAlert("Dark Mode has been enabled","success");
      document.title='Text-Utils:DarkMode';
      // setInterval(()=>{
      //   document.title='Amazing Text-Utils';
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      document.title='Text-Utils:LightMode';
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" abouttext="AboutTU"/> */}
      <Navbar title="TextUtil" abouttext="AboutTU" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container">
          <Router>
            <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
            </Routes>
          </Router>
        </div>
    </>
    
  );
}

export default App;
