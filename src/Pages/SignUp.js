import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [file, setFile] = useState();

  const navigate = useNavigate();

  const register = () => {
    console.log("Hello")
    console.log(userName);
    console.log(email);
    console.log(password);
    console.log(file)
    let formData = new FormData();
    formData.append("name",userName)
    formData.append("email",email)
    formData.append("password",password)
    formData.append("image",file)

    fetch("http://localhost:4000/api/v1/register",
    {
        body: formData,
        method: "post"
    }).then(res=>res.json()).then(data=>console.log(data));
 navigate("/login")
  };



  function handleChange(event) {
    setFile(event.target.files[0])
  }

  return (
    <div className="signUp flex">
    <input type={"file"} onChange={handleChange}/>
      <input
        type={"text"}
        placeholder="Enter Your UserName"
        onChange={(e) => setUserName(e.target.value)}
      />
        <input
        type={"text"}
        placeholder="Enter Your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type={"password"}
        placeholder="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>SignUp</button>
    </div>
  );
}

export default SignUp;
