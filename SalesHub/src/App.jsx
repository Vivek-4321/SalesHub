import React from "react"
import FileUpload from "./FileUpload"
import Home from "./Home";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dataEntry' element={<FileUpload/>}></Route>
      </Routes>
    </>
  )
}

export default App;
