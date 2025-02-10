import { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Make a container to adjust the width of the search bar and other components

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.preventDefault();
    
    if(searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
    setSearchTerm("");
  }
  return (
    <Paper
      component={"form"}
      onSubmit={submitSearch}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm: 5 },
      }}
      className="SearchBar"
    >
      <input
        type="text"
        value={searchTerm}
        placeholder="Search"
        style={{ border: "none", outline: "none" }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
