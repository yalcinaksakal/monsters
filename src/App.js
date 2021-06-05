import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/card/Cards";
import Search from "./components/search/Search";

function App() {
  const [monsterList, setMonsters] = useState([]);
  const [filteredMonsters, setFMonsters] = useState([]);

  const searchHandler = useCallback(
    filterText => {
      setFMonsters(
        monsterList.filter(monster =>
          monster.name.toLowerCase().includes(filterText)
        )
      );
    },
    [monsterList]
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setMonsters(data);
        setFMonsters(data);
      });
  }, []);

  return (
    <div className="App">
      <Search searchHandler={searchHandler} />
      <Cards monsters={filteredMonsters} />
    </div>
  );
}

export default App;
