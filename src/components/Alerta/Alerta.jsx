import { Box, Typography } from "@mui/material";

const Alerta = ({ mensaje, alerta }) => {
  console.log(alerta);
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: alerta ? "red" : "#05CA60",
        borderRadius: "4px",
        margin: "16px 0",
        padding: " 8px",
      }}
    >
      <Typography variant="body1" color="#fbfdfe">
        {mensaje}
      </Typography>
    </Box>
  );
};

export default Alerta;
