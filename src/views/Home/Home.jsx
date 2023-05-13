import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import SeccionProductos from "../../components/SeccionProductos/SeccionProductos";

const Home = ({ setCarrito, carrito }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/productos/categoria/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Carousel />
      <SeccionProductos
        carrito={carrito}
        setCarrito={setCarrito}
        productos={productos}
      />
    </>
  );
};

export default Home;
