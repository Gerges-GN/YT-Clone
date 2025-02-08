// import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import {SideBar} from "../components"
function Feed() {
  return (
    <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
      <Box sx={{height: {sx: 'auto', md: '86vh'}, borderRight: "1px solid #3d3d3d", px:{sx: 0, md: 2}, }}>
        <SideBar />

        <Typography variant="body2" sx={{color: "#fff", }}>
          Copyright 2025 Gerges Naguib
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed