import { createContext, useState } from "react";
import Register from "./User/Register";
import Home from "./Components/Home";
import { Context } from "./Components/Context";



function App() {
  return (
    <>
      <Context>
        <Register />
        <Home />
      </Context>
    </>
  );
}

export default App;
