import React from "react";
import HeaderCarrito from "../../HeaderCarrito/HeaderCarrito";
import SubFooter from "../../SubFooter/SubFooter";
import Footer from "../../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const LayoutCarrito = ({ locationActual }) => {
  return (
    <>
      <HeaderCarrito locationActual={locationActual} />
      <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Outlet />
      </Box>
      <SubFooter />
      <Footer />
    </>
  );
};

export default LayoutCarrito;
