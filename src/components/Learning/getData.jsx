import { useState } from "react"

export default function GetData() {

    const [data,setData] = useState([])
    async function getData(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const returnedData = await response.json()
        if(returnedData&&returnedData.length) setData(returnedData.slice(0,10))
        console.log(data)
        console.log(returnedData)
    }
    return <>
        <button onClick={getData}>Click here to get data</button>
        {data.map((datum,index)=>
            <li key={index}>{datum.title}</li>
        )}
    </>
}