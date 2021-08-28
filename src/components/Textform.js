import React,{useState} from 'react'



export default function Textform(props) {
    const handleUpClick =()=>{
            console.log("upperCase was clicked"+text)
            let newText=text.toUpperCase()
            
            settext(newText)
           
            
    }
    const handlowclick =()=>{
        console.log("upperCase was clicked"+text)
        let newText=text.toLowerCase()
        
        settext(newText)}

        const clear =()=>{
            
            settext(" ")
        }
  

    const handleOnChange =(event)=>{
        console.log("on change")
        settext(event.target.value)
}
    const [text, settext] = useState("Enter text here");
    
    return (
    <>
        <div className="container" style={{color:props.mode==='light'?'Dark':'light'}}>

<div className="mb-3" style={{color:props.mode==='light'?'Dark':'light'}}>
    <h1>{props.heading}</h1>
  
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary" onClick={handlowclick}>Convert to Lowercase</button>
<button className="btn btn-primary" onClick={clear}>Cleare your text</button>

        </div>
        <div className="container my-2">
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
