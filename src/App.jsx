import { useState } from "react";
import SignUp from "./pages/SignUp";
import "./App.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
