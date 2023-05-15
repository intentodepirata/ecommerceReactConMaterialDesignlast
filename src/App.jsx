import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./views/Home/Home";
import Nosotros from "./views/Nosotros/Nosotros";
import Contacto from "./views/Contacto/Contacto";
import Gadgets from "./views/Gadgets/Gadgets";
import Ofertas from "./views/Ofertas/Ofertas";
import MisPedidos from "./views/MisPedidos/MisPedidos";
import Login from "./views/Login/Login";
import { useEffect, useState } from "react";
import LayoutMain from "./components/layouts/LayoutMain/LayoutMain";
import LayoutCarrito from "./components/layouts/LayoutCarrito/LayoutCarrito";
import FormaPago from "./components/FormaPago/FormaPago";
import FinalizarPedido from "./views/Finalizarpedido/FinalizarPedido";
import CarritoResumen from "./components/CarritoResumen/CarritoResumen";
import { UserContextProvider } from "./contexts/UserContext";
import Logout from "./views/Logout/Logout";
import DetalleProducto from "./views/DetalleProducto/DetalleProducto";
import PublicRoutes from "./router/PublicRoutes";
import PrivateRoutes from "./router/PrivateRoutes";
import AdminPanel from "./views/AdminPanel/AdminPanel";
import UserConfig from "./views/UserConfig/UserConfig";

const ROLES = {
  ADMIN: 1,
  CLIENTE: 0,
};

function App() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("carrito"));
    carritoLS?.length > 0 && setCarrito(carritoLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const eliminarProductoCesta = (id) => {
    const carritoActualizado = carrito.filter(
      (item) => item.producto_id !== id
    );

    setCarrito(carritoActualizado);
  };

  const locations = useLocation();
  let locationActual = 1;

  switch (locations.pathname) {
    case "/carrito":
      locationActual = 1;
      break;
    case "/carrito/forma-pago":
      locationActual = 2;
      break;
    case "/carrito/finalizar-pedido":
      locationActual = 3;
      break;
    default:
      locationActual = 1;
      break;
  }

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<LayoutMain carrito={carrito} />}>
          <Route
            path=":id"
            element={
              <DetalleProducto carrito={carrito} setCarrito={setCarrito} />
            }
          />
          <Route
            index
            element={<Home carrito={carrito} setCarrito={setCarrito} />}
          />

          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="gadgets" element={<Gadgets />} />
          <Route path="ofertas" element={<Ofertas />} />
          <Route element={<PrivateRoutes ROLES={ROLES} />}>
            <Route path="user-config" element={<UserConfig />} />
            <Route path="mis-pedidos" element={<MisPedidos />} />
            <Route path="admin-panel" element={<AdminPanel />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="logout" element={<Logout />} />
        </Route>

        <Route
          path="/carrito"
          element={<LayoutCarrito locationActual={locationActual} />}
        >
          <Route
            index
            element={
              <CarritoResumen
                eliminarProductoCesta={eliminarProductoCesta}
                carrito={carrito}
              />
            }
          />
          <Route path="forma-pago" element={<FormaPago />} />
          <Route path="finalizar-pedido" element={<FinalizarPedido />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
