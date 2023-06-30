import { Box, Container, Typography } from "@mui/material";
import FormMarcas from "../../components/FormMarcas/FormMarcas";
import FormProductos from "../../components/FormProductos/FormProductos";
import { useEffect, useState } from "react";
import Alerta from "../../components/Alerta/Alerta";
import TablaProductos from "../../components/TablaProductos/TablaProductos";

const AdminPanel = () => {
  // const [formMarcas, setFormMarcas] = useState(null);
  // const [formModelos, setFormModelos] = useState(null);
  // const [formProductos, setFormProductos] = useState(null);
  const [alertaExito, setAlertaExito] = useState(false);
  const [alertaError, setAlertaError] = useState(false);
  const [alertaMensaje, setAlertaMensaje] = useState("");
  const [productos, setProductos] = useState([]);
  const [marcas, setMarcas] = useState([]);
  useEffect(() => {
    const productosFetch = async () => {
      const response = await fetch("http://localhost:8000/api/v1/productos");
      const data = await response.json();
      setProductos(data);
    };
    productosFetch();
  }, []);

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
        setAlertaExito={setAlertaExito}
        setAlertaError={setAlertaError}
        setAlertaMensaje={setAlertaMensaje}
      />
      <FormProductos
        setAlertaExito={setAlertaExito}
        setAlertaError={setAlertaError}
        setAlertaMensaje={setAlertaMensaje}
        setMarcas={setMarcas}
      />
      <TablaProductos productos={productos} />
    </Container>
  );
};

export default AdminPanel;
