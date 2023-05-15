import { Box, Container, Typography } from "@mui/material";
import FormMarcas from "../../components/FormMarcas/FormMarcas";
import FormProductos from "../../components/FormProductos/FormProductos";
import { useEffect, useState } from "react";
import Alerta from "../../components/Alerta/Alerta";

const AdminPanel = () => {
  const [formMarcas, setFormMarcas] = useState(" ");
  const [formModelos, setFormModelos] = useState(null);
  const [formProductos, setFormProductos] = useState(null);
  const [alertaExito, setAlertaExito] = useState(false);
  const [alertaError, setAlertaError] = useState(false);
  const [alertaMensaje, setAlertaMensaje] = useState("");

  useEffect(() => {
    const fetchMarca = async () => {
      if (formMarcas.includes("")) {
        setAlertaError(true);
        setAlertaMensaje("Todos los campos son obligatorios");
        setTimeout(() => {
          setAlertaError(false);
        }, 1500);
        return;
      }
      const response = await fetch("http://localhost:8000/api/v1/marca", {
        method: "POST",
        body: JSON.stringify({ marca: formMarcas }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.error) {
        setAlertaError(true);
        setAlertaMensaje(data.message);
        setTimeout(() => {
          setAlertaError(false);
        }, 2500);

        return;
      }
      setAlertaExito(true);
      setAlertaMensaje(data.message);
      setTimeout(() => {
        setAlertaExito(false);
      }, 2500);
    };

    fetchMarca();
    setFormMarcas("");
    console.log("se ejecuta");
  }, [formMarcas]);
  return (
    <Container maxWidth="lg">
      <Typography
        component={"h1"}
        textAlign={"center"}
        variant="h3"
        color="initial"
        marginTop={2}
        marginBottom={5}
      >
        Panel de Administracion
      </Typography>
      <Box>
        {alertaError && <Alerta mensaje={alertaMensaje} alerta={alertaError} />}

        {alertaExito && <Alerta mensaje={alertaMensaje} />}
      </Box>
      <FormMarcas
        setFormMarcas={setFormMarcas}
        setFormModelos={setFormModelos}
      />
      <FormProductos setFormProductos={setFormProductos} />
    </Container>
  );
};

export default AdminPanel;
