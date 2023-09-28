import React, { useEffect } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {

  useEffect(()=>{
    document.title = 'Finmee | Home'
  },[])

  return (
    <div className="App">
       <Navbar></Navbar>
       <Routes>
         <Route path="/" element={<HomePage></HomePage>} ></Route>
       </Routes>
    </div>
  );
}

export default App;
