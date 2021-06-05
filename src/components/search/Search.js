import { useEffect, useState } from "react";
import styles from "./Search.module.css";
const Search = ({ searchHandler, placeholder }) => {
  const [filter, setFilter] = useState("");
  const [lastSearchedText, setLastSearchedText] = useState("");

  useEffect(() => {
    const inputTimer = setTimeout(() => {
      // filter's value is the value .5s ago, compare it with the current value and decide whether user stopped writing or not
      if (filter !== lastSearchedText) {
        setLastSearchedText(filter);
        searchHandler(filter.toLowerCase());
      }
    }, 500);
    return () => clearTimeout(inputTimer);
  }, [filter, searchHandler, lastSearchedText]);
  return (
    <input
      className={styles.search}
      value={filter}
      onChange={e => setFilter(e.target.value.trim())}
      type="search"
      placeholder={placeholder}
    />
  );
};
export default Search;
