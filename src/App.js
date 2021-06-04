import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/card/Cards";

function App() {
  const [monsterList, setMonsters] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setMonsters(data));
  }, []);
  return (
    <div className="App">
      <Cards monsters={monsterList} />
    </div>
  );
}

export default App;
