import React,{useContext} from "react";
import details from "../Context";
import {useNavigate} from 'react-router-dom';

function Header() {

    const navigateTo = useNavigate();
  const { user } = useContext(details);
 console.log(user);


  return (
  <div className="header">
    <span onClick={()=>navigateTo("/login")}>SignIn</span>
    <span onClick={()=>navigateTo("/signup")}>SignUp</span>
    <span>
      <img className="profile" src={user.avatar.url} alt="profile"/>
    </span>
  </div>
  )
}

export default Header;
