import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export default function Buscador() {
  return (
    <Paper
      component="form"
      sx={{ p: "4px 4px", display: "flex", alignItems: "center", width: '100%', borderRadius: 4, boxShadow:'none', backgroundColor:"var(--secundario)"  }}
    >
      <InputBase
        sx={{ flex: 1, fontFamily: 'outfit', paddingLeft:"10px", fontSize:'18px'}}
        placeholder="Buscar productos"

      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
