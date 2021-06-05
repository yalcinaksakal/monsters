import { useEffect, useState } from "react";

const Search = ({ searchHandler }) => {
  const [filter, setFilter] = useState("");
  const [lastSearchedText, setLastSearchedText] = useState("");

  useEffect(() => {
    const inputTimer = setTimeout(() => {
      // filter's value is the value .5s ago, compare it with the current value and decide whether user stopped writing or not
      if (filter !== lastSearchedText) {
        console.log("searching");
        setLastSearchedText(filter);
        searchHandler(filter.toLowerCase());
      }
    }, 500);
    return () => clearTimeout(inputTimer);
  }, [filter, searchHandler, lastSearchedText]);
  return (
    <div>
      <input
        value={filter}
        onChange={e => setFilter(e.target.value.trim())}
        type="search"
        placeholder="Search monsters"
      />
    </div>
  );
};
export default Search;
