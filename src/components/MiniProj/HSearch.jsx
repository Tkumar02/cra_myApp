import { useState } from 'react'
import '../../style.css'
import {FaSearch} from 'react-icons/fa'

export default function HSearch(){
    const[hsearch,setHsearch] = useState(false)
    const [bgColour, setBgColour] = useState('white')

    const handleClick = (e) => {
        setBgColour('#1a1a1a')
        setHsearch(true)
        if(e.target.className === "search-container") {
            setHsearch(false);
            setBgColour('#fff')
        }
    }

    return(<>
        <section onClick={handleClick} style={{backgroundColor: bgColour}} className="search-container">
            {hsearch ? (
                <input className='search-input' type='text' placeholder='Search...'/>
            ):(
                <FaSearch onClick={()=> setHsearch(true)}/>
            )}
        </section>
    </>)
}