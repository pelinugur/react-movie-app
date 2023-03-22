import React from 'react'
import { Container } from 'react-bootstrap'
const Login = ({mail, setMail, password, setPassword, open, setOpen}) => {
    const mailChange = (e) => {
        setMail(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    const controllerClick = (e) => {
        e.preventDefault()
        if(mail === "pelin@gmail.com" && password === "123"){
          setOpen(!open)
         
        } else{
            
        }
      }   
  return (
    <div className='LoginPage' style={{ color: "beige" }}>
      <div className='LoginPageInput'>
        <input type="email" placeholder="enter your email..." value={mail} onChange={mailChange} />
        <input type="password" placeholder="enter your password ..." value ={password} onChange = {passwordChange} />
      </div>
      <div>
        <button onClick={controllerClick} >Login</button>
      </div>
    </div>
  )
}

export default Login 