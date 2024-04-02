import React from 'react';
import Home from "./components/Home";
import LetsConnectForm from "./components/LetsConnectForm";
import Designs from "./components/Designs";
import WebApps from "./components/WebApps";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route exact path="/connect" element={<LetsConnectForm />} />
        <Route exact path="/designs" element={<Designs />} />
        <Route exact path="/webapps" element={<WebApps />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;