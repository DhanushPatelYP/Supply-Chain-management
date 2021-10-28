import React,{useState} from 'react'
import './Login.css'
import { loginRoute, signUpRoute } from '../Constants'
import axios from 'axios'

const Login=(props)=>{
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [signUpPassword,setsignUpPassword]=useState("")
    
    function openRegister() {
        var card = document.getElementById("card");
        card.style.transform = "rotateY(-180deg)";
}   

    function openLogin() {
        var card = document.getElementById("card");
        card.style.transform = "rotateY(0deg)";
}
    const loginHandler=(e)=>{
        e.preventDefault()
        axios.post(loginRoute,{username,password})
        .then(res=>{

        })
        .catch(err=>console.log(err))
    }
    const signUpHandler=(e)=>{
        e.preventDefault()
        axios.post(signUpRoute,{name,email,signUpPassword})
        .then(res=>{
          
        })
        .catch(err=>console.log(err))
    }

    return (
       <>
       <div class="container">
    <div class="card">
      <div class="inner-box" id="card">
        <div class="card-front">
          <h2>LOGIN</h2>
          <form action="">
            <input type="email" class="input-box" placeholder="example@mail.com" onChange={(e)=>setusername(e.target.value)}required />
            <input type="password" class="input-box" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}required />
            <button type="submit" class="submit-btn" onClick={loginHandler}>Submit</button>
          </form>
          <button type="button" class="btn" onClick={openRegister}>I'm New Here</button>
          <a href="#">Forgot Password</a>
        </div>

        <div class="card-back">
          <h2>SIGNUP</h2>
          <form action="">
            <input type="text" class="input-box" placeholder="Jhon" onChange={(e)=>setname(e.target.value)} required />
            <input type="email" class="input-box" placeholder="example@mail.com" onChange={(e)=>setemail(e.target.value)} required />
            <input type="password" class="input-box" placeholder="Password" onChange={(e)=>setsignUpPassword(e.target.value)} required />
            <button type="submit" class="submit-btn" onClick={signUpHandler}>Submit</button>
          </form>
          <button type="button" class="btn" onClick={openLogin}>I've an account</button>
          <a href="#">Forgot Password</a>
        </div>
      </div>
    </div>
  </div>
       
       </>
    )
}

export default Login
