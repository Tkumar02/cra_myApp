import { useState } from "react"
import "../../style.css"

export default function Calc(){
    const[inputValue,setInputValue] = useState('')
    function display(value){
        setInputValue(inputValue+value)
    }

    function calculate(){
        setInputValue(eval(inputValue))
    }

    return(
        <>
        <div className="calc-body">
            <form name='calc' className="calculator">
                <input
                type='text'
                className="value"
                value={inputValue}
                />
                <span onClick={()=>setInputValue('')} className="num clear">C</span>
                <span onClick={()=>display('/')}>/</span>
                
                <span onClick={()=>display('7')}>7</span>
                <span onClick={()=>display('8')}>8</span>
                <span onClick={()=>display('9')}>9</span>
                <span onClick={()=>display('*')}>*</span>
           
                <span onClick={()=>display('4')}>4</span>
                <span onClick={()=>display('5')}>5</span>
                <span onClick={()=>display('6')}>6</span>
                <span onClick={()=>display('-')}>-</span>
                
                <span onClick={()=>display('1')}>1</span>
                <span onClick={()=>display('2')}>2</span>
                <span onClick={()=>display('3')}>3</span>
                <span onClick={()=>display('+')}>+</span>
                <span onClick={()=>display('0')} className="zero">0</span>
                <span onClick={()=>display('.')}>.</span>
                <span onClick={()=>calculate()} className="num equal">=</span>
                
            </form>
        </div>
        </>
    )
}