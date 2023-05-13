import ButtonCarrito from "../../UI/ButtonCarrito/ButtonCarrito";
import Buscador from "../Buscador/Buscador";
import logo from "./img/logo.png";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = ({ carritolenght }) => {
  return (
    <Box
      component={"header"}
      sx={{
        paddingTop: 5,
        display: "flex",
        gap: 3,
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 1200,
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

      <Buscador />
      <ButtonCarrito carritolenght={carritolenght} />
    </Box>
  );
};

export default Header;
