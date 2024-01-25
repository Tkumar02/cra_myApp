import { useState,useEffect } from "react";

const useFetchHook = (url) => {
    const [data,setData] = useState(null)

    useEffect(()=>{
        fetch(url)
            .then(res=>res.json())
            .then(d=>setData(d.slice(0,10)))
    },[url]);

    return [data];
}

export default useFetchHook;