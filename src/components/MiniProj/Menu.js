import axios from "axios"
import { useState, useEffect } from "react"
import "../../style.css"

export default function Menu(){
    const [items,setItems] = useState([])
    const[info,setInfo] = useState('')
    const[show,setShow] = useState(false)
    const[btnDisp,setBtnDisp] = useState('Show all Info')
    const[itemShow,setItemShow] = useState(false)

    function showAllInfo() {
        setShow(!show)
        if(!show){
            setBtnDisp('Hide all info')
            setItemShow(false)
        }
        else{
            setBtnDisp('Show all info')
        }
    }

    function handleDetail(item,id) {
        setItemShow(!itemShow)
        if(item.idMeal === id){
            setInfo(item.strMeal)
        }
    }

    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then((res)=>{
                setItems(res.data.meals)
                console.log(res.data.meals[0])
            })
    },[])

    return(
        <>
            <div>
                <button onClick={()=>showAllInfo()}>{btnDisp}</button>
            </div>
            <div className="menu-main">
            {items.map((item)=>(
                <section className="menu-card" key={item.idMeal}>
                    <img className="menu-img" src={item.strMealThumb} alt='no text'/>
                    {!show && <button onClick={()=>handleDetail(item, item.idMeal)}>More info</button>}
                    {itemShow && info===item.strMeal && <p>{info}</p>}
                    <section className="menu-content">
                    {show && <p>{item.strMeal}</p>}
                    </section>
                </section>
            ))}
            </div>
        </>
    )
}