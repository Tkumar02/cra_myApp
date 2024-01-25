// import PropsTest from "./components/propsTest";
// import User from "./components/User"
import GetData from "./components/Learning/getData";
import StatesEffects from "./components/Learning/stateEffect";
import { createContext } from "react";
import ReduceFx from "./components/Learning/reduceComponent"
import Refref from "./components/Learning/refHook";
import CustomHookComp from "./components/Learning/customHookComp";

export const ContextVar = createContext()
export const ContextVar2 = createContext()

function AppLearn() {
  const varData = 'random word'
  const varData2 = 'second word'
  return (
    <>
    
    <div className="text-blue-700">
      <h2>Welcome to React JS</h2>
      <GetData/>
    </div>
    
    <ContextVar.Provider value={varData}>
      <ContextVar2.Provider value={varData2}>
      <StatesEffects></StatesEffects>
      </ContextVar2.Provider>
    </ContextVar.Provider>

    <ReduceFx/>
    <div style={{marginTop:'20px'}}>
    <Refref/>
    </div>

    <CustomHookComp/>
    </>
  );
}

export default AppLearn;