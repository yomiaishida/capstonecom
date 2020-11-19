import React from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import ImageCard from "./components/ImageCard";

function App() {
  return (
    <div className="App container">
      <Navbar />
      <ImageCard />
    </div>
  );
}

export default App;
