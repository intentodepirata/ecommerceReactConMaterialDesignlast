import { Box, Button } from "@mui/material";
import React from "react";
import logo from "../Header/img/logo.png";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRightOutlined";
const HeaderCarrito = ({ locationActual }) => {
  return (
    <Box
      component={"header"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: "40px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Link to="/" underline="none">
        <Box
          component={"img"}
          src={logo}
          alt="MyReelevantStore Logo"
          sx={{ width: "280px" }}
        />
      </Link>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "26px",
        }}
      >
        <Button
          component={Link}
          to="/carrito"
          variant={locationActual === 1 ? "outlined" : "contained"}
          color="secondary"
          size="large"
          sx={{
            border: locationActual === 1 && "2px solid #0582ca",
            color: locationActual === 1 && "#0582ca",
            textTransform: "none",
            borderRadius: 4,
            boxShadow: "none",
            p: "12px 32px",
          }}
        >
          Carrito
        </Button>
        <ArrowCircleRightIcon sx={{ color: "#444" }} />
        <Button
          component={Link}
          to="forma-pago"
          variant={locationActual === 2 ? "outlined" : "contained"}
          color="secondary"
          size="large"
          sx={{
            border: locationActual === 2 && "2px solid #0582ca",
            color: locationActual === 2 && "#0582ca",
            textTransform: "none",
            borderRadius: 4,
            boxShadow: "none",
            p: "12px 32px",
          }}
        >
          Forma de pago
        </Button>
        <ArrowCircleRightIcon sx={{ color: "#444" }} />
        <Button
          component={Link}
          to="finalizar-pedido"
          variant={locationActual === 3 ? "outlined" : "contained"}
          color="secondary"
          size="large"
          sx={{
            border: locationActual === 3 && "2px solid #0582ca",
            color: locationActual === 3 && "#0582ca",
            textTransform: "none",
            borderRadius: 4,
            boxShadow: "none",
            p: "12px 32px",
          }}
        >
          Finalizar pedido
        </Button>
      </Box>
    </Box>
  );
};

export default HeaderCarrito;
