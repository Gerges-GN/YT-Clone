import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "../components";
import { logo } from "../utils/constants";

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        height:  "75px",
        overflow: "hidden",
        m: 0, 
        p: "0 16px",
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        bgcolor: "#000",
        zIndex: 1000,
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img alt="Logo" src={logo} height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
