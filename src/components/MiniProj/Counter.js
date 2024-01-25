import React from "react";
import { useState, useEffect } from "react";
import "../../style.css"

export default function Counter() {

    const[count,setCount] = useState(0)

    const increment = () => setCount(count+1)


    const decrement = () => {
        setCount(count-1)
    }

    return (
        <>
            <div className="container-counter">
                <h1 className="number" style={{marginLeft:'20px'}}>{count}</h1>
                <div className="btnS">
                    <button className="changeValue" onClick={increment} style={{marginRight: '20px'}}>+</button>
                    <button className="changeValue" onClick={decrement}>-</button>
                </div>
            </div>
        </>
    )
}