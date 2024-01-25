import { useState, useContext } from "react";
import { ContextVar,ContextVar2 } from "../../AppLearn";

export default function StatesEffects() {
    const varData = useContext(ContextVar)
    const varData2 = useContext(ContextVar2)

    const [username,setUsername]=useState('')
    const[count,setCount] = useState(0)
    const handleChange = (event) => {
        setUsername(event.target.value)
    }

    const handleSubmit = (event) =>{
        setCount(count+1)
        event.preventDefault()
        console.log(count)
        setUsername('')
        alert(`You have submitted ${username} and in total made ${count} submissions`)
    }


    return(
        <>  
        <h1>
            This is the first: {varData} and this the second: {varData2}
        </h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                value={username}
                onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

