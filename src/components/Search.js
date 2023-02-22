import React, {useState} from "react";

function Search({handleSearch}) {

const [text, setText] = useState("")  

handleSearch(text)

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default Search;
