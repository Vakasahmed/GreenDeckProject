import React from "react";
import {useNavigate} from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const signUp = ()=>{
        navigate("/register");
    }

    const signIn = () =>{
        navigate("/login");
    }

  return (
    <div className="home">
      <h1 className="h1">WELCOME</h1>
      <div>
      <h3>Click here to SignUp</h3>
        <button onClick={signUp}>SignUp</button>
      </div>
      <div>
      <h3>Click here to SignIn</h3>
        <button onClick={signIn}>SignIn</button>
      </div>
    </div>
  );
}

export default Home;
