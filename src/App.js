import React from 'react';
import Home from "./components/Home";
import LetsConnectForm from "./components/LetsConnectForm";
import Designs from "./components/Designs";
import WebApps from "./components/WebApps";
import About from './components/About';
import Seek from './components/Seek';
import Tools from './components/Tools';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route exact path="/connect" element={<LetsConnectForm />} />
          <Route exact path="/designs" element={<Designs />} />
          <Route exact path="/webapps" element={<WebApps />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/seek" element={<Seek />} />
          <Route exact path="/tools" element={<Tools />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;