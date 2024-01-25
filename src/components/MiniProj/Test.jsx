import '../../style.css'
import { useState } from "react";

export default function Test(){

    const[current,setCurrent] = useState(0)
    const test = [
        {quote: 'Best poduct I have used', author:'Janie Dole'},
        {quote: 'Ok poduct for me', author:'Jason Dope'},
        {quote: 'Pretty good', author:'Jack Done'}
    ]

    const handleNext = () => {
        if(current<test.length-1){
            setCurrent(current+1) 
        }
    }

    const handlePrev = () => {
        if(current>0){
            setCurrent(current-1) 
        }
    }

    return(<div className="main">
        <div className="test">
            <div className="test-quote">{test[current].quote}</div>
            <div className="test-author">{test[current].author}</div>
            <div className="test-nav">
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    </div>)
}