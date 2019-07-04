import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PageBody from "./components/PageBody/PageBody";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <PageBody />
        <div className="next"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
