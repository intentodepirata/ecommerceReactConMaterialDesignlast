import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import React from "react";
import { useState } from "react";

const FormProductos = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [modeloId, setModeloId] = useState("");
  const [referencia, setReferencia] = useState("");
  const [rating, setRating] = useState("");
  const [imagen, setImagen] = useState(null);
  const [descripcion, setDescripcion] = useState("");
  return (
    <Box
      component={"form"}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        mt: 4,
      }}
    >
      <Typography variant="h4" color="initial" mb={2}>
        Agregar Producto
      </Typography>
      <Typography variant="body1" color="initial" mb={2}>
        Rellene todos los campos para agregar un producto
      </Typography>
      <Box sx={{ display: "flex" }}>
        <TextField
          name="nombre"
          label="Nombre"
          fullWidth
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          sx={{ mb: 2, backgroundColor: "var(--secundario)", mr: 2 }}
          size="small"
        />
        <FormControl
          fullWidth
          size="small"
          sx={{ mb: 2, mr: 1, backgroundColor: "var(--secundario)" }}
        >
          <InputLabel>Seleccione un modelo</InputLabel>
          <Select
            size="small"
            value={modeloId}
            label="Seleccione una modelo"
            onChange={(e) => setModeloId(e.target.value)}
          >
            <MenuItem value={1}>Pantallas</MenuItem>
            <MenuItem value={2}>Baterias</MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="precio"
          label="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          sx={{ mb: 2, mr: 1, backgroundColor: "var(--secundario)" }}
          size="small"
        />
        <TextField
          name="cantidad"
          label="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          sx={{ mb: 2, mr: 1, backgroundColor: "var(--secundario)" }}
          size="small"
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <FormControl
          fullWidth
          size="small"
          sx={{ mb: 2, mr: 1, backgroundColor: "var(--secundario)" }}
        >
          <InputLabel>Seleccione una Categoria</InputLabel>
          <Select
            size="small"
            value={categoriaId}
            label="Seleccione una Categoria"
            onChange={(e) => setCategoriaId(e.target.value)}
          >
            <MenuItem value={1}>Pantallas</MenuItem>
            <MenuItem value={2}>Baterias</MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="referencia"
          label="Referencia"
          value={referencia}
          onChange={(e) => setReferencia(e.target.value)}
          sx={{ mb: 2, mr: 1, backgroundColor: "var(--secundario)" }}
          size="small"
        />
        <TextField
          name="rating"
          label="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          sx={{ mb: 2, mr: 1, backgroundColor: "var(--secundario)" }}
          size="small"
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <TextField
          name="descripcion"
          label="Descripcion"
          fullWidth
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          sx={{ mb: 2, backgroundColor: "var(--secundario)", mr: 2 }}
          size="small"
        />
        <MuiFileInput
          size="small"
          label={"Subir una Imagen"}
          sx={{ mb: 2, mr: 1, backgroundColor: "var(--secundario)" }}
          value={imagen}
          onChange={(newImagen) => setImagen(newImagen)}
        />
      </Box>

      <Button sx={{ width: "300px" }} variant="contained" color="primary">
        Agregar producto a la bbdd
      </Button>
    </Box>
  );
};

export default FormProductos;
