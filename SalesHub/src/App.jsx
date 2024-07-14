import React from "react"
import FileUpload from "./FileUpload"
import Home from "./Home";
import Login from "./Login";
import Excel from "./Excel";
import Calendar from "./Calendar";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dataEntry' element={<FileUpload/>}></Route>
        <Route path="/excel" element={<Excel/>}></Route>
        <Route path="/calendar" element={<Calendar/>}></Route>
      </Routes>
    </>
  )
}

export default App;
