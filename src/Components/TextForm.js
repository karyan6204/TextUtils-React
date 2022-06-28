import React, {useState} from 'react'

export default function TextForm(props) {
   const handleUpClick = ()=>{
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Converted to Upper Case','success')
   }
   const handleLoClick = ()=>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Converted to Lower Case','success')
   }
   const handleClearClick = ()=>{
    let newText = ''
    setText(newText)
    props.showAlert('Text has been cleared','success')
   }
   const handleOnChange = (event)=>{
    setText(event.target.value)
   }
   const handleCopyClick = ()=>{
      let newText = document.getElementById('myBox');
      newText.select();
      navigator.clipboard.writeText(newText.value);
      props.showAlert('Text has been copied','success')
   }
   const handleExtraSpace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert('Extra Space has been removed','success')
   }
   const [text,setText]=useState('');
    return (
      <>
        <div  style = {{color:props.mode==='dark'?'white':'dark'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'dark'}} id="myBox" rows="8"></textarea>
        </div>
        <button className = "btn btn-primary mx-1" onClick={handleUpClick}> Convert to UpperCase </button>
        <button className = "btn btn-primary mx-1" onClick={handleLoClick}> Convert to LowerCase </button>
        <button className = "btn btn-primary mx-1" onClick={handleClearClick}> Clear Text </button>
        <button className = "btn btn-primary mx-1" onClick={handleCopyClick}> Copy Text </button>
        <button className = "btn btn-primary mx-1" onClick={handleExtraSpace}> Remove Extra space </button>
      </div>
      <br></br>
      <div style = {{color:props.mode==='dark'?'white':'dark'}}>
        <h2>Your Summary</h2>
        <p>Your Paragraph contains {text.split(" ").length} words and {text.length} characters.</p>
        <p>It will take {0.008*text.split(" ").length} minutes to read this whole paragraph.</p>
      </div>
      <div style = {{color:props.mode==='dark'?'white':'dark'}}>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something above to show preview."}</p>
      </div>
      </>
  )
}

