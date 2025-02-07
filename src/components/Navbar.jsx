import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "../components";

function Navbar() {
  return (
    <Stack
      direction="row"
      className="flex items-center justify-between sticky px-6 py-3 bg-black"
    >
      <Link to="/" className="flex items-center">
        <img
          alt="Logo"
          src="https://i.ibb.co/s9Qys2j/logo.png"
          className="h-11"
        />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
