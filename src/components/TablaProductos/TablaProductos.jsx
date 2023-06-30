import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton, Stack } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 30 },
  {
    field: "nombre",
    headerName: "Nombre",
    width: 280,
  },
  {
    field: "descripcion",
    headerName: "Descripcion",
    width: 280,
  },
  {
    field: "precio",
    headerName: "Precio",
    width: 75,
  },
  {
    field: "imagen",
    headerName: "Imagen",
    width: 100,
    renderCell: (params) => {
      return (
        <>
          <Box
            component={"img"}
            sx={{ width: "70px", p: 1 }}
            src={`public/images/${params.row.imagen}`}
          />
        </>
      );
    },
  },

  {
    field: "categoria_id",
    headerName: "Categoria",
    width: 50,
  },
  {
    field: "cantidad",
    headerName: "Cantidad",
    width: 50,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 50,
  },
  {
    field: "referencia",
    headerName: "Referencia",
    width: 120,
  },
  {
    field: "modelos_id",
    headerName: "Modelo",
    width: 50,
  },
];

export default function TablaProductos({ productos }) {
  const [iconosVisibles, setIconosVisibles] = useState(false);
  const [filaSeleccionada, setFilaSeleccionada] = useState(null);
  const [selectionModel, setSelectionModel] = useState();
  const navigate = useNavigate();

  const handleSelectionModelChange = (newSelection) => {
    setSelectionModel(newSelection);
    console.log(newSelection);

    if (newSelection.length > 0) {
      setIconosVisibles(true);
      setFilaSeleccionada(newSelection);
    } else {
      setIconosVisibles(false);
      setFilaSeleccionada(null);
    }
  };

  function handleEditar(id) {
    console.log("eliminando", id[0]);
  }

  function handleEliminar(id) {
    console.log("eliminando", id[0]);
  }

  return (
    <Box sx={{ mt: 2, height: 600, width: "100%" }}>
      {iconosVisibles && (
        <Stack
          sx={{ mb: 2, justifyContent: "end" }}
          direction="row"
          spacing={2}
        >
          <Button
            onClick={() => handleEliminar(selectionModel)}
            color="error"
            variant="contained"
            startIcon={<DeleteIcon />}
          >
            Eliminar
          </Button>
          <Button
            onClick={() => handleEditar(selectionModel)}
            variant="contained"
            endIcon={<EditNoteIcon />}
          >
            Editar
          </Button>
        </Stack>
      )}

      <DataGrid
        rows={productos}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        onRowSelectionModelChange={handleSelectionModelChange}
      />
    </Box>
  );
}
