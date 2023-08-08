import React, { useState, useEffect } from "react";
import './App.css'
  import Home from "./components/Home.jsx";
  import Post from "./components/Post.jsx";  
  import Login from "./components/Login.jsx";
  //import Register from "./components/Register.jsx";
  import{Routes, Route} from "react-router-dom";
  import Navbar from "./components/NavBar.jsx";

  const API_URL = `https://strangers-things.herokuapp.com/api/${2306-fsa-et-web-ft-sf}`

function App () {
  const [thingsList, setThingsList] = useState([])



  useEffect(() => {
  const fetchThings = async () => {
  const response = await fetch(API_URL);
  const body = await response.json();
  const items = body.data
    
  console.log(body)


  setThingsList(items)

}
fetchItems()


}, []);

  function App() {
    const[logForm, setLogForm] = useState('login');
        console.log(setLogForm)
    return (
   
        <>
        <Login/>
        
        <Navbar />
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/"element={<Post/>}/>
          <Route path="/"element={<Login/>}/>
          </Routes>
      
     </>
   );
  }
}
    
    export default App;
