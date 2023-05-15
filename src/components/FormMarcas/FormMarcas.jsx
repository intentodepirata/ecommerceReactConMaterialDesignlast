import React from "react";
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

const FormMarcas = ({ setFormMarcas, setFormModelos }) => {
  const [marca, setMarca] = useState("");
  const [marcaId, setMarcaId] = useState("");
  const [modelo, setModelo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleMarca = (e) => {
    e.preventDefault();
    setFormMarcas(marca);
  };
  const handleModelo = (e) => {
    e.preventDefault();
    setFormModelos(modelo);
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
              <MenuItem value={1}>Samsung</MenuItem>
              <MenuItem value={2}>Huawei</MenuItem>
              <MenuItem value={3}>Xiaomi</MenuItem>
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
