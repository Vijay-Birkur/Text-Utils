import React, { useState } from 'react'

export default function TextForm(props) {
    const upClick = () => {
        console.log("Uppercase button clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }
    const lowClick = () => {
        console.log("Lowercase button clicked" + text);
        setText(text.toLowerCase())
        props.showAlert("Converted to lowercase","success");
    }
    const clearClick = () => {
        console.log("Lowercase button clicked" + text);
        setText('')
        props.showAlert("Cleared the text","success");
    }
    const handleonChange = (event) => {
        console.log("on Change action");
        setText(event.target.value)
    }
    const copyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied","success");
    }
    const extraSpace = () => {
        var nText = text.split(/[ ]+/);
        setText(nText.join(" "));
        props.showAlert("Extra spaces in the text are removed","success");
    }
    const [text, setText] = useState('Enter text here');
    return (
        <div className="container" Style={`color:${props.mode === 'dark' ? 'white' : 'black'}`} >
            <h1 >{props.heading}</h1>
            <div class="mb-3">
                <textarea className="form-control" onChange={handleonChange} value={text} id="myBox" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={upClick}>Upper-case</button>
            <button className="btn btn-warning mx-1" onClick={lowClick}>Lower-case</button>
            <button className="btn btn-danger mx-1" onClick={clearClick}>Clear</button>
            <button className="btn btn-success mx-1" onClick={copyClick}>Copy</button>
            <button className="btn btn-secondary mx-1" onClick={extraSpace}>Remove Extra Space</button>
            <div className="container my-3" >
                <h3>Keywords in your description</h3>
                <p>words:{text.split(" ").length} and characters: {text.length}</p>
                <p>{0.008 * text.split(" ").length}Minutes</p>
                <h3>Preview:</h3>
                <p>{text.length > 0 ? text : "Enter something to preview"}</p>
            </div>
        </div>
    )
}
