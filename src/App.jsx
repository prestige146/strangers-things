import React, { usestate } from "react";
import './App.css'
  import Home from "./components/Home.jsx";
  import Post from "./components/Post.jsx";  
  import Login from "./components/Login.jsx";
  import Register from "./components/Register.jsx";
  import{Routes, Route} from "react-router-dom";


  function App() {
    const[logForm, setLogForm] = useState('login');

    return (
      <div classname="App">
      {
        logForm ==="login" ? <login/> :<Register />
      }
      </div>
    );
  }
        
        <Login/>
        <>
        <Navbar />
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/"element={<Post/>}/>
          <Route path="/"element={<Login/>}/>
          </Routes>
      
     </>
    );
    }
    
    export default App;
