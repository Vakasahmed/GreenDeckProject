import React,{useState} from 'react';
import './App.css';
import SignUp from './Pages/SignUp';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Pages/SignIn';
import Product from './Components/Product';
import details from './Context';
import Header from './Components/Header';

function App() {

  const [user, setUser] = useState([]);
  

  return (
    <div className="App">
    <details.Provider value={{user,setUser}}>
    
    <Routes>
    {/* <Route path='' element={<Header/>}/> */}
    <Route path='/' element={<Home/>}/>
      <Route path='/register'  element={<SignUp/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/product' element={<Product/>}/>
    </Routes>
    </details.Provider>
    </div>
  );
}

export default App;
