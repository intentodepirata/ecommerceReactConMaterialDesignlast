import { useParams } from "react-router-dom";
import DetalleProductoInfo from "../../components/DetalleProductoInfo/DetalleProductoInfo";
import DetalleProductoCard from "../../components/DetalleProductoCard/DetalleProductoCard";
import { useEffect, useState } from "react";

const DetalleProducto = ({ setCarrito, carrito }) => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const llamadaDetalleProducto = async () => {
      const response = await fetch(
        `http://localhost:8000/api/v1/productos/${id}`
      );
      const [data] = await response.json();
      setProducto(data);
    };
    llamadaDetalleProducto();
  }, [id]);
  return (
    <div>
      {producto ? (
        <DetalleProductoCard
          setCarrito={setCarrito}
          carrito={carrito}
          producto={producto}
        />
      ) : (
        <p>cargando</p>
      )}
      <DetalleProductoInfo />
    </div>
  );
};

export default DetalleProducto;
