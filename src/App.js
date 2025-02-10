import './App.css';
import Alert from './components/alert';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react';
function App() {
  const[alert,setalert]=useState(null);
  const showalert=(message,type)=>{
  setalert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setalert(null);
  }, 1000);
  }
 
  const [nav,setnav]=useState("dark");
  const changenav=(chgcol)=>{
     if(chgcol==="white")
      setnav("secondary");
    else if(chgcol==="#393e47")
      setnav("dark")
    else if(chgcol==="#2C0B0E")
      setnav("danger")
    else if(chgcol==="#031633")
      setnav("info")
  }
  const [btn,setbtn]=useState("success");
  const changebtn=(chgcol)=>{
    if(chgcol==="white"){
      setbtn("dark");
    }
    else if(chgcol==="#393e47"){
      setbtn("success");
    }
    else if(chgcol==="#2C0B0E"){
      setbtn("warning");
    }
    else if(chgcol==="#031633")
      setbtn("success")
  }
 
  const changetheme=(chgcol)=>{
    changebtn(chgcol);
    changenav(chgcol);
   document.body.style.backgroundColor=chgcol;
   document.body.style.color=chgcol==="white"?"black":"white";
  }
  
  return (
   <>
  <Navbar title="Text Utils" about="About" mode={nav} Change={changetheme}  />
  <Alert alert={alert}></Alert>
   <Textarea   heading="Enter your text here" showalert={showalert} change={btn}/>
   </>
  );
}

export default App;
