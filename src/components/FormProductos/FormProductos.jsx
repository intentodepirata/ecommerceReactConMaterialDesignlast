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
import React, { useEffect } from "react";
import { useState } from "react";

const FormProductos = ({
  setAlertaExito,
  setAlertaError,
  setAlertaMensaje,
  setMarcas,
}) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria_id, setCategoria_id] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [modelos_id, setModelos_id] = useState("");
  const [modelos, setModelos] = useState([]);
  const [referencia, setReferencia] = useState("");
  const [rating, setRating] = useState("");
  const [imagen, setImagen] = useState(null);
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    const modelosFetch = async () => {
      const response = await fetch("http://localhost:8000/api/v1/modelo/");
      const data = await response.json();
      setModelos(data);
    };
    modelosFetch();
  }, []);

  const productoFetch = async () => {
    const data = {
      nombre,
      precio,
      descripcion,
      categoria_id,
      cantidad,
      rating,
      referencia,
      modelos_id,
      imagen: imagen.name,
    };
    console.log(data);

    const response = await fetch("http://localhost:8000/api/v1/productos/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data2 = await response.json();
    if (data2.error) {
      setAlertaError(true);
      setAlertaMensaje(data2.message);
      setTimeout(() => {
        setAlertaError(false);
      }, 2500);

      return;
    }

    handleFileUpload();

    setAlertaExito(true);
    setAlertaMensaje(data2.message);
    setTimeout(() => {
      setAlertaExito(false);
    }, 2500);
    setNombre("");
    setPrecio("");
    setCategoria_id("");
    setCantidad("");
    setCantidad("");
    setModelos_id("");
    setReferencia("");
    setRating("");
    setImagen("");
    setDescripcion("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    productoFetch();
    handleFileUpload();
  };

  const handleFileChange = (newImagen) => {
    setImagen(newImagen);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("imagen", imagen);

    try {
      const response = await fetch("http://localhost:8000/subir-imagen", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.text();
        console.log(data); // Manejar la respuesta de la API según sea necesario
      } else {
        console.error("Error al subir la imagen:", response.status);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <Box
      component={"form"}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        mt: 4,
      }}
      onSubmit={handleSubmit}
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
            value={modelos_id}
            label="Seleccione una modelo"
            onChange={(e) => setModelos_id(e.target.value)}
          >
            {modelos.map((modelo) => (
              <MenuItem key={modelo.id} value={modelo.id}>
                {modelo.modelo}
              </MenuItem>
            ))}
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
            value={categoria_id}
            label="Seleccione una Categoria"
            onChange={(e) => setCategoria_id(e.target.value)}
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
          onChange={handleFileChange}
        />
      </Box>

      <Button
        type="submit"
        sx={{ width: "300px" }}
        variant="contained"
        color="primary"
      >
        Agregar producto a la bbdd
      </Button>
    </Box>
  );
};

export default FormProductos;
