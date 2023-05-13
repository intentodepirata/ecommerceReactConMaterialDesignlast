import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CardSmall = ({ producto, eliminarProductoCesta }) => {
  const handleEliminar = () => {
    const respuesta = confirm("Eliminar de la cesta?");

    if (respuesta) {
      eliminarProductoCesta(producto.producto_id);
    }
  };
  console.log(producto.producto_id);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <Link to="/detallesProducto.html?id=2">
          <Box
            sx={{
              borderRadius: "16px",
              maxWidth: "96px",
              maxHeight: "96px",
              p: "16px",
              backgroundColor: "#edf4f7",
            }}
            component="img"
            src={producto.imagen}
            alt="imagen"
          />
        </Link>

        <Box>
          <Typography variant="h6" color="initial">
            {producto.nombre}
          </Typography>

          <Box>
            {producto.precio}
            <Box component="span" sx={{ color: "primary.dark" }}>
              {" "}
              €
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="item-menos">-</span>
          <span className="item-number">{producto.cantidadCarrito}</span>
          <span className="item-mas">+</span>
        </Box>

        <Box>
          <Button
            color="secondary"
            sx={{
              textTransform: "none",
              borderRadius: 4,
              boxShadow: "none",
              p: "16px 32px",
            }}
            variant="contained"
            size="large"
            onClick={handleEliminar}
          >
            Eliminar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CardSmall;
