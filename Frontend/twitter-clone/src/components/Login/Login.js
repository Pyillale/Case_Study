import React, { useState } from 'react'
import '../../styles/Login.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useHistory } from "react-router-dom";
import axios from 'axios';

function Login() {

  const history = useHistory();

    const[signup, setSignUp] = useState(false);
    const[Name, setName] = useState("");
    const[Email, setEmail] = useState("");
    const[Password, setPassword] = useState("");
    
    const register =(e) =>{
        e.preventDefault();
        if(!Name){
            return alert("Name is Required.")
        }
        if(!Email){
            return alert("Email is Missing.")
        }
        if(!Password){
            return alert("Password is Required.")
        } 
          axios.post('http://localhost:8682/subs', {
            username: Name,
            email: Email,
            password:  Password
        }
        )
        .then(response =>{
        if(response?.data?.response=="User already exists"){
            alert("User already exists")
        }
        else{
            alert("user successfully registered")
            setSignUp(false)
        }
    } )
        setName("");
        setEmail("");
        setPassword("");
    }
    const Login =(e) =>{
        e.preventDefault();
        if(!Name){
            return alert("Name is Required.")
        }
        
        if(!Password){
            return alert("Password is Required.")
        }

        axios.post('http://localhost:8682/auth', {
            username: Name,
            password:  Password
        }
        )
    .then(response =>{
        console.log(response);
    //  var res = JSON.parse(response);
        // var res = JSON.parse(JSON.stringify(response))
        
        if(response.data.response == "Error during client Authentication" ){
            alert("Please Enter vaid username")   
        }
        else if(response.data.response == "Successfull Authentication" ){   
            history.push('/Home');
            localStorage.setItem( 'userName',Name );
        }
        
        // setName("");
        // setPassword("");
       
    } )

      
    }

    return (
        <>
      
        <div className='loginScreen'>
                 <TwitterIcon className="twitter_icon"/>
                 {
            signup === true ? ( 
                 <form onSubmit={register}>
                <input type ="text" placeholder='Name' value={Name} onChange={e=>setName(e.target.value)}/>
                <input type="email" placeholder='Email' value={Email} onChange={e=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' value={Password} onChange={e=>setPassword(e.target.value)}/>
                <p> By signing up, you agree to the Teams of Service
                     and Privacy Policy.</p>
                <input type="submit" value ="Sign up"/>
                <h4> Already a member ? <span onClick={e=>setSignUp(false)}>Login here</span></h4>
            </form> ):
            (

        <form onSubmit={Login}>
    <input type="text" placeholder='Name' value={Name} onChange={e=>setName(e.target.value)}/>
    <input type="password" placeholder='Password' value={Password} onChange={e=>setPassword(e.target.value)}/>
    <input type="submit" value ="Sign in" onClick={() => {


}}/>
    <h4>Not a member ? <span onClick={e=>setSignUp(true)}> Rigister here </span></h4>
</form>)  
            
}
            </div>
         </>
    )
}
export default Login;