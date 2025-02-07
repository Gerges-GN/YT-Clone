import { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

// Make a container to adjust the width of the search bar and other components

function SearchBar() {
  return (
    <Paper
      component={"form"}
      onSubmit={() => {}}
      className="flex items-center justify-between pl-3 border border-[#3e3e3e] !rounded-[20px] "
    >
      <input
        type="text"
        placeholder="Search"
        className="flex items-center outline-none w-[300px]"
      />
      <IconButton>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
