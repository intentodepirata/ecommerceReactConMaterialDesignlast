import { Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import Alerta from "../Alerta/Alerta";

import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
const defaultFullUserValue = {
  nombre: "",
  apellidos: "",
  email: "",
  password: "",
};
const FormLogin = () => {
  const [correoLogin, setCorreoLogin] = useState("");
  const [passWordLogin, setPasswordLogin] = useState("");
  const [alertaError, setAlertaError] = useState(false);
  const [alertaExito, setAlertaExito] = useState(false);
  const [alertaErrorRegistro, setAlertaErrorRegistro] = useState(false);
  const [alertaExitoRegistro, setAlertaExitoRegistro] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const { useLogin } = useUserContext();
  const [userFull, setUserFull] = useState(defaultFullUserValue);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if ([correoLogin, passWordLogin].includes("")) {
      setAlertaError(true);
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setAlertaError(false);
      }, 1500);
      return;
    }

    setAlertaError(false);
    const response = await fetch("http://localhost:8000/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: correoLogin, password: passWordLogin }),
    });
    const data = await response.json();
    if (data.error) {
      setAlertaError(true);
      setMensaje(data.message);
      setTimeout(() => {
        setAlertaError(false);
      }, 2500);
      setCorreoLogin("");
      setPasswordLogin("");
      return;
    }

    setAlertaExito(true);
    setMensaje(data.message);
    setTimeout(() => {
      setAlertaExito(false);
    }, 2500);

    console.log("Respuesta de la API:", data);

    // Guardo la respuesta en sessionStorage
    sessionStorage.setItem("user", JSON.stringify(data.usuario));

    useLogin(data.usuario);
    console.log(data.usuario);
    setCorreoLogin("");
    setPasswordLogin("");
    navigate("/");

    // Si la respuesta es exitosa, mando al usuario a la página de inicio
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(userFull).includes("")) {
      setAlertaErrorRegistro(true);
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setAlertaErrorRegistro(false);
      }, 1500);

      return;
    }

    const response = await fetch("http://localhost:8000/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userFull),
    });
    const data = await response.json();
    if (data.error) {
      setAlertaErrorRegistro(true);
      setMensaje(data.message);
      setTimeout(() => {
        setAlertaErrorRegistro(false);
      }, 2500);
      setUserFull(defaultFullUserValue);
      return;
    }

    setAlertaExitoRegistro(true);
    setMensaje(data.message);
    setTimeout(() => {
      setAlertaExitoRegistro(false);
    }, 2500);

    console.log("Respuesta de la API:", data);

    // Guardo la respuesta en sessionStorage
    // sessionStorage.setItem("user", JSON.stringify(data.usuario));
    useLogin(data.usuario);

    setUserFull(defaultFullUserValue);

    // Si la respuesta es exitosa, mando al usuario a la página de inicio
    navigate("/");
  };

  const handleUserRegiser = (e) => {
    setUserFull((currentValue) => ({
      ...currentValue,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: "60px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 5,
        }}
      >
        <Box
          onSubmit={(e) => handleLogin(e)}
          component={"form"}
          sx={{ width: "100%", p: 2 }}
        >
          <h2>Iniciar sesión</h2>

          <h4>Accede con tus datos anteriores</h4>
          {alertaError && <Alerta mensaje={mensaje} alerta={alertaError} />}

          {alertaExito && <Alerta mensaje={mensaje} />}

          <TextField
            fullWidth
            type="email"
            label="Correo"
            variant="outlined"
            onChange={(e) => setCorreoLogin(e.target.value)}
            value={correoLogin}
            sx={{ mb: 2, backgroundColor: "var(--secundario)" }}
          />
          <TextField
            fullWidth
            type="password"
            label="Contraseña"
            variant="outlined"
            onChange={(e) => setPasswordLogin(e.target.value)}
            value={passWordLogin}
            sx={{ mb: 2, backgroundColor: "var(--secundario)" }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontSize: "18px",
            }}
          >
            Iniciar sesión
          </Button>
        </Box>
        <Box
          onSubmit={handleRegisterSubmit}
          component={"form"}
          sx={{ width: "100%", p: 2 }}
        >
          <h2>Registrate</h2>
          <h4>
            Crea una cuenta en My Releevant Store para conseguir tu primer
            descuento como cliente
          </h4>
          {alertaErrorRegistro && (
            <Alerta mensaje={mensaje} alerta={alertaErrorRegistro} />
          )}

          {alertaExitoRegistro && <Alerta mensaje={mensaje} />}

          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              fullWidth
              type="text"
              label="Nombre"
              name="nombre"
              value={userFull.nombre}
              onChange={handleUserRegiser}
              variant="outlined"
              sx={{ mb: 2, backgroundColor: "var(--secundario)" }}
            />
            <TextField
              fullWidth
              type="text"
              label="Apellidos"
              name="apellidos"
              value={userFull.apellidos}
              onChange={handleUserRegiser}
              variant="outlined"
              sx={{ mb: 2, backgroundColor: "var(--secundario)" }}
            />
          </Box>
          <TextField
            fullWidth
            type="email"
            name="email"
            label="Correo"
            value={userFull.email}
            onChange={handleUserRegiser}
            variant="outlined"
            sx={{ mb: 2, backgroundColor: "var(--secundario)" }}
          />
          <TextField
            fullWidth
            type="password"
            name="password"
            label="Contraseña"
            value={userFull.password}
            onChange={handleUserRegiser}
            variant="outlined"
            sx={{ mb: 2, backgroundColor: "var(--secundario)" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontSize: "18px",
            }}
          >
            Crear cuenta ahora
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default FormLogin;
