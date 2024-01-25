import React from 'react';

const ValidPassword = () => <h1>Valid PW</h1>
const InvalidPassword = () => <h1>Invalid PW</h1>
const x = 2

const Check = ({isValid}) => {
    return isValid ? <ValidPassword/> : <InvalidPassword/>
}

const Password = () => {
    return(
        <div>
            <Check isValid={false}></Check>
            {x>1 && <h2 style={{color:'blue', bold:'700'}}>Check If</h2> }
        </div>
        
    )
}

export default Password;
   