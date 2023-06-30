import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  TextField,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

const FormMarcas = ({ setAlertaExito, setAlertaError, setAlertaMensaje }) => {
  const [marca, setMarca] = useState("");
  const [marcaId, setMarcaId] = useState("");
  const [modelo, setModelo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    const fetchMarcas = async () => {
      const response = await fetch("http://localhost:8000/api/v1/marca");
      const data = await response.json();
      setMarcas(data);
    };
    fetchMarcas();
  }, [marcas.id, marca]);

  const fetchMarca = async () => {
    if (marca == "") {
      setAlertaError(true);
      setAlertaMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setAlertaError(false);
      }, 1500);
      return;
    }
    const response = await fetch("http://localhost:8000/api/v1/marca", {
      method: "POST",
      body: JSON.stringify({ marca }),
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

    setMarca("");
  };

  const handleMarca = (e) => {
    e.preventDefault();
    fetchMarca();
  };
  const handleModelo = (e) => {
    e.preventDefault();
    fetchModelo();
  };

  const fetchModelo = async () => {
    // if (marca == "" || modelo == "" || marcaId == "") {
    //   setAlertaError(true);
    //   setAlertaMensaje("Todos los campos son obligatorios");
    //   setTimeout(() => {
    //     setAlertaError(false);
    //   }, 1500);
    //   return;
    // }
    const response = await fetch("http://localhost:8000/api/v1/modelo", {
      method: "POST",
      body: JSON.stringify({
        modelo: modelo,
        marcas_id: marcaId,
        descripcion_modelo: descripcion,
      }),
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

    setModelo("");
    setDescripcion("");
    setMarcaId("");
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          onSubmit={handleMarca}
          component={"form"}
          sx={{
            display: "flex",
            flexDirection: "column",
            mr: 5,
            width: "100%",
          }}
        >
          <Typography variant="h4" color="initial" mb={2}>
            Agregar Marca
          </Typography>
          <Typography variant="body1" color="initial" mb={2}>
            Rellene todos los campos para agregar una marca
          </Typography>
          <TextField
            name="marca"
            label="Marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            sx={{ mb: 2, backgroundColor: "var(--secundario)" }}
            size="small"
          />
          <Button type="submit" variant="contained" color="primary">
            Agregar marca a la bbdd
          </Button>
        </Box>
        <Box
          onSubmit={handleModelo}
          component={"form"}
          sx={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Typography variant="h4" color="initial" mb={2}>
            Agregar Modelo
          </Typography>
          <Typography variant="body1" color="initial" mb={2}>
            Rellene todos los campos para agregar un modelo
          </Typography>
          <FormControl
            size="small"
            fullWidth
            sx={{ mb: 2, backgroundColor: "var(--secundario)" }}
          >
            <InputLabel>Seleccione una Marca</InputLabel>
            <Select
              size="small"
              value={marcaId}
              label="Seleccione una Marca"
              onChange={(e) => setMarcaId(e.target.value)}
            >
              {marcas.map((marca) => (
                <MenuItem key={marca.id} value={marca.id}>
                  {marca.marca}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            sx={{ mb: 2, backgroundColor: "var(--secundario)" }}
            size="small"
          />
          <TextField
            label="Descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            sx={{ mb: 2, backgroundColor: "var(--secundario)" }}
            size="small"
          />
          <Button type="submit" variant="contained" color="primary">
            Agregar modelo a la bbdd
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default FormMarcas;
