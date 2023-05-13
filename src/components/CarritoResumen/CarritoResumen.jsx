import { Box, Typography, Button, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CardSmall from "../CardSmall/CardSmall";

const CarritoResumen = ({ carrito, eliminarProductoCesta }) => {
  const sumarPrecios = () => {
    const totalPrecio = carrito.reduce(
      (acumulador, producto) =>
        acumulador + Number(producto.precio * Number(producto.cantidadCarrito)),
      0
    );

    return totalPrecio.toFixed(2);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 10,
        }}
      >
        <Typography variant="h3" color="initial">
          Mi carrito ({carrito.length})
        </Typography>

        <Button
          component={Link}
          to="/"
          variant={"contained"}
          color="secondary"
          size="large"
          sx={{
            textTransform: "none",
            borderRadius: 4,
            boxShadow: "none",
            p: "12px 32px",
          }}
        >
          Seguir comprando
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          {carrito.map((producto) => (
            <CardSmall
              key={producto.producto_id}
              producto={producto}
              eliminarProductoCesta={eliminarProductoCesta}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            p: "40px",
            gap: "40px",
            width: " 100%",
            border: " 2px solid #0582ca",
            borderRadius: "16px",
            maxWidth: "400px",
          }}
        >
          <Typography variant="h4">Resumen del pedido</Typography>
          <Typography variant="p">
            Continua con el proceso de compra para conectar tu Coinbase Wallet o
            pagar con tu tarjeta
          </Typography>

          <Box component="h3" sx={{ margin: 0 }}>
            {sumarPrecios()}
            <Box component="span" sx={{ color: "primary.dark" }}>
              {" "}
              €
            </Box>
          </Box>
          <Button
            color="primary"
            sx={{
              textTransform: "none",
              p: "12px 32px",
              borderRadius: 4,
              fontSize: 18,
            }}
            variant="contained"
          >
            Proceder al pago
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CarritoResumen;
