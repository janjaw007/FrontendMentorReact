import { useState } from "react";
import Containter from "./components/Containter";
import Result from "./components/Result";
import Summary from "./components/Summary";

import "./App.css";

function App() {
  return (
    <>
      <Containter>
        <Result />
        <Summary />
      </Containter>
    </>
  );
}

export default App;
