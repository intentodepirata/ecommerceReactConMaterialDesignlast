import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import Card from "../Card/Card";

const SeccionProductos = ({ productos, setCarrito, carrito }) => {
  useEffect(() => {
    const slider = document.querySelector("#my-slider");
    if (slider) {
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener("mouseleave", (_) => {
        isDown = false;
      });

      slider.addEventListener("mouseup", (_) => {
        isDown = false;
      });

      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const SCROLL_SPEED = 3;
        const walk = (x - startX) * SCROLL_SPEED;
        slider.scrollLeft = scrollLeft - walk;
      });
    }
  }, []);

  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto" }} component="section">
      <Box sx={{ my: 10, display: "flex", flexDirection: "column", gap: 5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography component="h2" variant="h4">
              Repuestos de pantalla
            </Typography>
            <Typography component="h4" variant="p">
              Consigue los mejores productos de MyReleevant Store
            </Typography>
          </Box>
          <Box>
            <Button
              color="secondary"
              sx={{
                textTransform: "none",
                p: "12px 32px",
                borderRadius: 4,
                fontSize: 18,
              }}
              variant="contained"
            >
              Ver todos
            </Button>
          </Box>
        </Box>
        <Box
          id="my-slider"
          sx={{
            mt: 5,
            py: 4,
            overflow: "scroll",
            display: "grid",
            gridTemplateColumns: " repeat(10, 1fr)",
            gap: "24px",
            scrollSnapType: " x mandatory",
          }}
        >
          {productos.map((producto) => (
            <Card
              key={producto.id}
              producto={producto}
              setCarrito={setCarrito}
              carrito={carrito}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SeccionProductos;
