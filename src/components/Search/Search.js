import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import classes from "./Search.module.css";

const Search = ({ handleSearch }) => {
  return (
    <form className={classes.form}>
      <div className={classes["Icon-inside"]}>
        <input
          type="text"
          placeholder="Search for notes..."
          name="search"
          onChange={(event) => handleSearch(event.target.value)}
        />
        <i aria-hidden="true">
          <FontAwesomeIcon icon={faSearch} />
        </i>
      </div>
    </form>
  );
};

export default Search;
