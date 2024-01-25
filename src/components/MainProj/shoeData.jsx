import { useState } from "react"

export default function ShoeData() {
  const [shoeInfo,setShoeInfo] = useState([])

  const createList = () => {
    let tempList = []
    const brands = ['adidas','nike','reebok','birkenstock']
    const types = ['leisure','sport','lounge','flats', 'boots']

    for(let x=0;x<15;x++){
        tempList[x] = {}
        tempList[x].cost = Math.floor(Math.random() * 200)
        tempList[x].brand = brands[Math.floor(Math.random()*brands.length)]
        tempList[x].type = types[Math.floor(Math.random()*types.length)]
      }
    setShoeInfo(tempList)
  }

  return (
    <>
      <button onClick={createList}>click here</button>
      {shoeInfo.map((item,index)=>(
        <div style={{display: 'flex', gap: '20px'}} key={index}>
            <h2>{index+1}: </h2>
          <h3>{item.brand}</h3>
          <h3>{item.type}</h3>
          <h3>{item.cost}</h3>
        </div>
      ))}
    </>
  );
}

