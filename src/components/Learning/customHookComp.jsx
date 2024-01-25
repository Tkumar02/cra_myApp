import useFetchHook from "../../useFetchHook"
export default function CustomHookComp() {

   const[data] = useFetchHook('https://jsonplaceholder.typicode.com/todos')

    return(
        <>
            <h2 style={{color:'blue'}}>Checking out placeholder data with custom hook ups</h2>
            {data && data.map(item=>{
                return <li key={item.id}>{item.title}</li>
            })}
        </>
    )
}