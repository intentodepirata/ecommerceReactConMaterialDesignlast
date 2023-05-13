import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useUserContext } from "../../contexts/UserContext";
const Nav = ({ navArrayLinks }) => {
  const { user, cerrarSesion } = useUserContext();

  return (
    <Box
      component={"nav"}
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        paddingTop: "56px",
        paddingBottom: "16px",
        display: "flex",
        justifyContent: "space-between",
        "& a": {
          marginRight: "24px",
          "&:last-child": {
            margin: 0,
          },
        },
      }}
    >
      <Box>
        {navArrayLinks.map((enlace) => (
          <Link key={enlace.path} to={enlace.path}>
            {enlace.title}
          </Link>
        ))}
      </Box>
      <Box>
        {user && (
          <Link to={user?.admin === 1 ? "/admin-panel" : "/user-config"}>
            {user?.admin === 1
              ? `Bienvenido Admin ${user?.nombre}`
              : `Bienvenido ${user?.nombre}`}
          </Link>
        )}
        {user && <Link to={"/mis-pedidos"}>Mis pedidos</Link>}
        {user ? (
          <Link onClick={() => cerrarSesion()} to={"/"}>
            Cerrar Sesion
          </Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </Box>
    </Box>
  );
};

export default Nav;
