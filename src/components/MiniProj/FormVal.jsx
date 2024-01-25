import '../../style.css'
import { useState } from 'react'

export default function FormVal(){

    const[username,setUsername] = useState('')
    const[nameColour, setNameColour] = useState('black')
    const[nameError,setNameError] = useState(false)

    const[pw,setPw] = useState('')
    const[pwColour, setPwColour] = useState('black')
    const[pwError,setPwError] = useState(false)

    const[email,setEmail] = useState('')
    const[emailColour, setEmailColour] = useState('black')
    const[emailError,setEmailError] = useState(false)

    const[confirmPw,setConfirmPw] = useState('')
    const[confirmPwColour, setConfirmPwColour] = useState('black')
    const[confirmPwError,setConfirmPwError] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        if(username.length<8){
            setNameColour('red')
            setNameError(true)
        }else{
            setNameColour('green')
            setNameError(false)
        }
        if(!email.includes('@')){
            setEmailError(true)
            setEmailColour('red')
        }
        else{
            setEmailColour('green')
        }
        if(pw.length<8){
            setPwColour('red')
            setPwError(true)
        }else{
            setNameColour('green')
            setNameError(false)
        }
        if(confirmPw!==pw){
            setConfirmPwError(true)
            setConfirmPwColour('red')
        }
    }

    return(
        <div className='body-form'>
        
        <form className='form-main' onSubmit={handleSubmit}>
        <div className='form-image'></div>
            <div className='form-card'>
                <input type="text" 
                placeholder='Username'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                style={{color: nameColour}}
                />
                <br/>
                {nameError && <p>Username has to be at least 8 characters long</p>}

                <input type="text" 
                placeholder='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                style={{color: emailColour}}
                />
                <br/>
                {emailError && <p>Please use a valid email address</p>}

                <input type="password" 
                placeholder='Password'
                value={pw}
                onChange={(e)=>setPw(e.target.value)}
                style={{color: pwColour}}
                />
                <br/>
                {pwError && <p>Password has to be at least 8 characters long and cannot be the same as your username</p>}

                <input type="password" 
                placeholder='Confirm Password'
                value={confirmPw}
                onChange={(e)=>setConfirmPw(e.target.value)}
                style={{color: confirmPwColour}}
                />
                <br/>
                {confirmPwError && <p>Passwords do not match</p>}
                <br/>
                <button type='submit'>Submit</button>
            </div>
        </form>
        
        </div>
    )
}