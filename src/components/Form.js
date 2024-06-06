import React, { useState } from 'react'

export default function Form(props) {
    const [text, setText] = useState('');

    const UppercaseConvater = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const LowercaseConvater = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleTextareaChange = (event) => {
        setText(event.target.value);
    }

    const wordCount = text.trim() === "" ? 0 : text.split(/\s+/).length;
    const readingTime = (wordCount / (200 / 60)).toFixed(2);

    return (
        <>
            <div className="container mt-5">
                <div className="text-center">
                    <h4>{props.title}</h4>
                </div>
                <div className="row justify-content-center">ṁī
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="textBox">Text Area</label>
                                    <textarea
                                        className="form-control"
                                        id="textBox"
                                        rows="3"
                                        value={text}
                                        onChange={handleTextareaChange}
                                    ></textarea>
                                </div>
                                <button className="btn btn-primary btn-block" onClick={UppercaseConvater} >
                                    Convert To Uppercase
                                </button>
                                <button className="btn btn-primary btn-block" onClick={LowercaseConvater} >
                                    Convert To LowerCase
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <p>Total Number of Words = <samp>{wordCount}</samp></p>
                <p>Total Number of Characters = <samp>{text.length}</samp></p>
                <p>Reading Time = <samp>{readingTime}</samp> min</p>
            </div>
        </>
    );
}
