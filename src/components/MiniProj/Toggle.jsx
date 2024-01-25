import { useState } from "react"
import "../../style.css"

export default function Toggle(){

    const [bgColour, setBgColour] = useState('white')
    const [textColour, setTextColour] = useState('black')
    const [yellowColour, setYellowColour] = useState('#1b1b1b')

    function handleChange(){
        setBgColour(bgColour === 'white' ? 'black' : 'white')
        setTextColour(textColour === 'black' ? 'white' : 'black')
        setYellowColour(textColour === 'black' ? '#ffa31a' : 'black')
    }

    return<>
    <section style={{backgroundColor: bgColour}} className="main">
        <button 
        style={{backgroundColor: bgColour, color: textColour, border: `1px solid ${yellowColour}`}} 
        onClick={handleChange} 
        className="toggle-btn">
            {bgColour === 'white' ? 'Black Theme' : 'White Theme'}
        </button>
        <h1 style={{color:yellowColour}} className="toggle-title">Welcome To <br/> A Reel World</h1>
    </section>
    </>
}