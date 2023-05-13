import { Box, Button, CardActionArea, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Card = ({ producto, setCarrito, carrito }) => {
  const navigate = useNavigate();
  const {
    id,
    nombre,
    descripcion,
    precio,
    imagen,
    categoria_id,
    cantidad,
    rating,
    referencia,
    modelos_id,
  } = producto;

  const Img = styled("img")({
    padding: "40px",
    backgroundColor: "var(--secundario)",
    maxWidth: "100%",
    width: "324px",
    height: "298px",
    objectFit: "contain",
  });

  const handleAddCarrito = () => {
    let encontrado = false;

    let productoCarrito = carrito;
    for (let i = 0; i < productoCarrito.length; i++) {
      if (productoCarrito[i].producto_id === id) {
        productoCarrito[i].cantidadCarrito += 1;
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      productoCarrito = {
        producto_id: id,
        nombre: nombre,
        imagen: imagen,
        precio: precio,
        cantidadCarrito: 1,
      };
      setCarrito((carrito) => [productoCarrito, ...carrito]);
    }
  };

  function printStairs(rating) {
    let estrellas = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        estrellas += "★";
      } else {
        estrellas += "☆";
      }
    }
    return estrellas;
  }
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        width: "324px",
        borderRadius: 4,
        WebkitBoxShadow: "-1px 5px 5px -1px rgba(0, 0, 0, 0.26)",
        MozBoxShadow: "-1px 5px 5px -1px rgba(0, 0, 0, 0.26)",
        boxShadow: "-1px 5px 5px -1px rgba(0, 0, 0, 0.26)",
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Img src={imagen} alt="A12" />

      <Box sx={{ p: 2, backgroundColor: "var(--blanco)" }}>
        <Typography sx={{ pb: 2 }} variant="h5" component="h4">
          {nombre}
        </Typography>

        <Box>
          {precio}
          <Box component="span" sx={{ color: "primary.dark" }}>
            {" "}
            €
          </Box>
        </Box>

        <Typography variant="h6" component="span">
          {printStairs(rating)}
        </Typography>
        <p>{descripcion}</p>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            color="primary"
            sx={{
              textTransform: "none",
              p: "12px 32px",
              borderRadius: 4,
              fontSize: 18,
            }}
            variant="contained"
            onClick={handleAddCarrito}
          >
            Añadir a carrito
          </Button>
          <Button
            onClick={() => navigate(`/${id}`)}
            color="secondary"
            sx={{
              textTransform: "none",
              p: "12px 32px",
              borderRadius: 4,
              fontSize: 18,
            }}
            variant="contained"
          >
            Ver
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Card;
