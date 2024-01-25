// import Acc from "./components/MiniProj/Acc/Acc";
// import { accData } from "./components/MiniProj/Acc/content";
import FormVal from "./components/MiniProj/FormVal";

function App() {
  return (
    <>
      {/* <div>
        <div className="accordion">
          {accData.map(({title,content}, index)=>(
            <div key={index}>
            <Acc title={title} content={content}/>
            </div>
          ))}
        </div>
      </div> */}
      <FormVal/>
    </>
  );
}

export default App;
