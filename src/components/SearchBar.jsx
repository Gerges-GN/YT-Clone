import { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

// Make a container to adjust the width of the search bar and other components

function SearchBar() {
  return (
    <Paper
      component={"form"}
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        placeholder="Search"
        style={{ border: "none", outline: "none" }}
      />
      <IconButton>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
