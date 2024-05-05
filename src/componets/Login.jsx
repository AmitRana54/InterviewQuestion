import React,{useContext, useState} from "react";
import UserContext from "../context/Usercontext";
import { Link } from "react-router-dom";

const Login = () => {
  const {checkUser ,isLoged} = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [result , setResult]  = useState(true)
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setResult(true)
        const check = checkUser(email,password)
        setResult(check)
        if(check) {
          console.log("Logging in with:", email, password);
        }
        else{
          console.log("ganta hua h tu login");
        }
      
    };
    if(isLoged)  return (
      <h1> login h tu bsdk</h1>
    )
  
    return (
      <>
      <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
        <Link   to="/signup"     >    <button     class="signup-button">Sign Up</button>          </Link>
        {!result && <h1 className="error-message">bsdk sahi data daal tu pls</h1>}
      </form>
    </div>
    
    </>
    );
  }
export default Login