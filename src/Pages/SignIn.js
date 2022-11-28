import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import details from "../Context";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {setUser} = useContext(details)

  const logIn = () => {
    console.log(email);
    console.log(password);
    const dataObj = {
      email: email,
      password: password,
    };

    (async () => {
      const response = await fetch("http://localhost:4000/api/v1/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj),
      });
      const res = await response.json();
      console.log(res.user);
      if (res.success === true) {
        navigate("/product");
      setUser(res.user);
      } else {
        alert("Please check your details");
      }
    })();
  };

  return (
    <div className="signIn flex">
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={logIn}>Login</button>
    </div>
  );
}

export default SignIn;
