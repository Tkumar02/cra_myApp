import { useRef } from "react";

export default function Refref() {
    const inputElement = useRef(null)

    const focusInput = () =>{
        console.log(inputElement.current.value)
        inputElement.current.focus()
        inputElement.current.value = 'Hunny'
    }

    return(
        <>
            <input type="text" ref={inputElement} />
            <button onClick={()=>focusInput()}>Focus and write Hunny</button>
        </>
    )
}