import logo from "./logo.svg";
import "./App.css";

async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  console.log(data);

  return data;
}

function App() {
  return (
    <div className="App">
      <button onClick={getAdvice}>GET ADVICE</button>
    </div>
  );
}

export default App;
