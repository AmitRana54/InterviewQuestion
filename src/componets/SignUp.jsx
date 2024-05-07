import React,{useContext, useState} from "react";
import UserContext from "../context/Usercontext";
import { Link } from "react-router-dom";

const Signup = () => {
  const {addUser ,isLoged} = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e?.preventDefault();
      const issignup = addUser(email,password)
      if (issignup) {
        console.log("Signing up with:", email, password);
      }
      else{
        console.log("errot bsdk");
      }
     
    };
    if(isLoged) return ( <h1> basdk ho gaya h tu log in chal ab shoping  kar maa chuda apni   </h1>)
  
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button onClick={handleSubmit}><Link to= "/items"> Sign Up </Link></button>
        </form>
      </div>
    );
  }
  export default Signup