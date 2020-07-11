import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import routes from "./routes";

function App() {
  return (
    <div className="app">
      <Navbar />
      {routes}
    </div>
  );
}

export default App;
