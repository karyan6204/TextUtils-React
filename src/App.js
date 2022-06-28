import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
// import Alert from './Components/Alert';
import React,{useState} from 'react'
import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  // const [alert, setAlert]=useState('');
  // const showAlert = (message,type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  // }

  const [mode,setMode]=useState('light')
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0e1138';
      // showAlert('Dark Mode enabled','success')
      document.title = 'TextUtils - Dark Mode ';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert('Dark Mode enabled','success');
      document.title = 'TextUtils - Light Mode ';
    }
  }
  
  return (
    <>
    {/* <Router> */}
    <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>  
    {/* <Alert alert = {alert}/> */}
    <div className = "container my-3">
    {/* <Routes>
        <Route exact path="/about" element = {<About/>} />
        <Route exact path="/" element = {<TextForm showAlert = {showAlert} heading = "Enter your Text Below" mode = {mode}/>} />
      </Routes> */}
      {/* <TextForm showAlert = {showAlert} heading = "Enter your Text Below" mode = {mode}/> */}
      <TextForm heading = "Enter your Text Below" mode = {mode}/>
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
