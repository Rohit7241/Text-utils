import { useState } from "react"
import React  from 'react'

export default function Textarea(props) {
  const [text,setText]=useState("");
   const handlechange=(event)=>{
       let newtext=event.target.value;
       setText(newtext);
   } 
   //to upper case
   const handleUp=()=>{
    if(text===""){
      props.showalert("Please Provide Some text","warning");
      return;
    }
   let newtext=text.toUpperCase();
   setText(newtext);
   props.showalert("Converted to UpperCase","success");
   }

   //to lower case
   const handleLow=()=>{
    if(text===""){
      props.showalert("Please Provide Some text","warning");
      return;
    }
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to LowerCase","success");
    }

    //to clear
    const handleclr=()=>{
      if(text===""){
        props.showalert("Please Provide Some text","warning");
        return;
      }
      setText("");
      props.showalert("Cleared the TextBox","success");
      }

      //to copy
      const handlecopy=()=>{
        if(text===""){
          props.showalert("Please Provide Some text","warning");
          return;
        }
       navigator.clipboard.writeText(text);
      
       props.showalert("Copied to Clipboard!","success");
      }
    //to handle extra spaces
    const handlespace=()=>{
      if(text===""){
        props.showalert("Please Provide Some text","warning");
        return;
      }
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showalert("Removed Extra Space","success");
    }

      //to toggle case
      const handletgl=()=>{
        if(text===""){
          props.showalert("Please Provide Some text","warning");
          return;
        }
        let newtext="";
        for(let i=0;i<text.length;i++){
          if(text[i]===text[i].toUpperCase()){
            newtext+=text[i].toLowerCase();
          }
          else {
            newtext+=text[i].toUpperCase();
          }
        }
        setText(newtext);
        props.showalert("Toggled The Case","success");
        }
        //main return
  return (
    <><div className="container my-5" >
      <h3>{props.heading}</h3>
    <div className="mb-3">
  <textarea className="form-control border border-2 border-black" value={text} id="mytext" rows="8" onChange={handlechange} placeholder="Enter here"></textarea>
  <button className={`my-2 btn btn-${props.change}`}onClick={handleUp} >Convert to uppercase</button>
  <button className={`my-2 mx-2 btn btn-${props.change}`} onClick={handleLow} >Convert to Lowercase</button>
  <button className={`my-2  mx-2 btn btn-${props.change}`} onClick={handletgl} >Toggle Case</button>
  <button className={`my-2 mx-2 btn btn-${props.change}`} onClick={handlecopy} >Copy text</button>
  <button className={`my-2 mx-2 btn btn-${props.change}`} onClick={handlespace} >Remove Extra Spaces</button>
  <button className={`my-2 mx-2 btn btn-${props.change}`} onClick={handleclr} >Clear</button>

</div>
    </div>
    <div className="container my-4">
      <h4>Your text Summary</h4>
      <p>Your text has {text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    </div>
    </>
  )
}
