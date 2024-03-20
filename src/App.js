import React from 'react';
import Home from "./components/Home";
import LetsConnectForm from "./components/LetsConnectForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route exact path="connect" element={<LetsConnectForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;