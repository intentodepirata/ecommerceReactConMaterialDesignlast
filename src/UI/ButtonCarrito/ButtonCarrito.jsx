import React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const ButtonCarrito = ({ carritolenght }) => {
  return (
    <Badge badgeContent={carritolenght} color="primary">
      <Button
        component={Link}
        to="/carrito"
        endIcon={<ShoppingCartIcon />}
        variant="contained"
        color="secondary"
        size="large"
        sx={{
          textTransform: "none",
          borderRadius: 4,
          boxShadow: "none",
          p: "12px 32px",
        }}
      >
        Carrito
      </Button>
    </Badge>
  );
};

export default ButtonCarrito;
