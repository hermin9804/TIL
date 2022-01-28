import { useState } from "react";
import "./App.css";
import AddNumberRoot from "./components/AddNuberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

function App() {
  const [numValue, setNumber] = useState<number>(0);

  const addNumverHandler = (num: number) => {
    const newNumValue = numValue + num;

    setNumber(newNumValue);
  };

  return (
    <div>
      <h1>Root</h1>
      <AddNumberRoot addNumber={addNumverHandler}></AddNumberRoot>
      <DisplayNumberRoot numValue={numValue}></DisplayNumberRoot>
    </div>
  );
}

export default App;
