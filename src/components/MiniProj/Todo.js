import { useState } from "react"

export default function Todo() {
    const[todos,setTodos] = useState([])
    const[input, setInput] = useState("")

    function generateId() {
        return Math.floor(Math.random()*100)
    }

    const handleSubmit = () =>{
        setTodos((todos)=>
            todos.concat({
                text:input,
                id:generateId(),
            })
        );
        setInput('')
        console.log(input)
    }

    const deleteTodo = (id) =>
        setTodos((todos)=> todos.filter((t)=>t.id!==id));

    return(
        <>
        <div className="container-todos">
            <div className="enter-todo">
                <h1>Todo Component</h1>
                <input
                className="todo-input"
                type="te]xt"
                placeholder="new todo"
                onChange={(e)=>setInput(e.target.value)}
                value={input}
                />
                <button className="todoButton" onClick={handleSubmit}>Submit</button>
            
                <h2>Todo List</h2>
                {todos.map(({text,id})=>(
                <div key={id} className="todoList">
                <h3>{text}</h3>
                <button className="close" onClick={()=>deleteTodo(id)}>X</button>
                </div>))}
            </div>
        </div>
        </>
    )
}