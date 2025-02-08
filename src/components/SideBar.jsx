import { Button, Stack } from "@mui/material";
import { categories } from "../utils/constants";

// eslint-disable-next-line react/prop-types
function SideBar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction={"row"}
      sx={{
        height: { sx: "auto", md: "95%" },
        overflow: "scroll",
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, i) => (
        <Button
          key={i}
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "nowrap",
            px: 2,
            m: 0.5,
            borderRadius: 5,
            bgcolor: selectedCategory === category.name && "#FF0000",
            ":hover": { bgcolor: "#FF0000" },
            minWidth: { xs: "fit-content !important" },
          }}
        >
          <span
            style={{
              marginRight: "15px",
              color: selectedCategory === category.name ? "#fff" : "#FF0000",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: selectedCategory === category.name ? 1 : 0.8, textWrap: "nowrap" }}
          >
            {category.name}
          </span>
        </Button>
      ))}
    </Stack>
  );
}

export default SideBar;
