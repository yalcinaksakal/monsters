import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/card/Cards";
import Search from "./components/search/Search";

function App() {
  const [monsterList, setMonsters] = useState([]);
  const [filteredMonsters, setFMonsters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setMonsters(data);
        setFMonsters(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Search searchHandler={searchHandler} placeholder="Search monsters" />
      {isLoading ? (
        <p>Loading monsters...</p>
      ) : (
        <Cards monsters={filteredMonsters} />
      )}
    </div>
  );
}

export default App;
