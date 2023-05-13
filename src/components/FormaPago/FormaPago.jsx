import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FormaPago = () => {
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
          Forma de pago
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
    </>
  );
};

export default FormaPago;
