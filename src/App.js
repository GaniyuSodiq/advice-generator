import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);

    return setAdvice(data.slip.advice);
  }

  return (
    <div className="App">
      <button onClick={getAdvice}>GET ADVICE</button>
      <p>{advice}</p>
    </div>
  );
}

export default App;
