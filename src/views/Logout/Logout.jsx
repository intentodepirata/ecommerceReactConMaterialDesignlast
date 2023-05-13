import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";
import { useEffect } from "react";

const Logout = () => {
  const { cerrarSesion } = useUserContext();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/logout") {
      cerrarSesion();
    }
  }, [location]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Typography variant="h1" color="initial">
          Hasta Luego !!{" "}
        </Typography>
      </Box>
    </>
  );
};

export default Logout;
