import '../../../style.css'
import { useState } from 'react'

export default function Acc({title,content}) {

    const[isActive, setIsActive]=useState(false)

    return(
        <div className="acc-main">
            <section className="accordion-card">
                <div onClick={()=>setIsActive(!isActive)} className="header">
                    <div class="acc-card-title">{title}</div>
                    <p className="acc-icon">{isActive ? '-' : '+'}</p>
                </div>
                <div className="content">
                    {isActive && <p className='acc-card-info'>{content}</p>}
                </div>
            </section>
        </div>
    )
}