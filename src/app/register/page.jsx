 "use client"
import { useState } from "react";
export default function register () {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
 function handleRegister(){
    e.preventDefault();
    console.log(username, password);

  } 
  return ( 
<div>
<form onSubmit={handleRegister}>
  <input onChange={(e) =>setUsername(e.target.value)} 
  value={username} 
  placeholder="Username"/>
  <input onChange={(e) =>setPassword(e.target.value)} 
  value={password} 
  placeholder="password.."type="password"/>


  <button>Register</button>
</form>

  </div>
);
  } 




/*   import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    const message = `Username: ${username}\nPassword: ${password}`;
    window.alert(message);

    toast.success("Registration successful!");

    toast("Thank you for registering!", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  }

  return (
    <div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
} */




  