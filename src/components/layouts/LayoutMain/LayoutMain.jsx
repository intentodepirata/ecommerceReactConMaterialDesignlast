import React, { useEffect } from "react";
import Header from "../../Header/Header";
import Nav from "../../Nav/Nav";
import { Outlet, useLocation } from "react-router-dom";
import SubFooter from "../../SubFooter/SubFooter";
import Footer from "../../Footer/Footer";

const LayoutMain = ({ carrito }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  const navArrayLinks = [
    { title: "Todos los productos", path: "/" },
    { title: "Sobre nosotros", path: "/nosotros" },
    { title: "Contacto", path: "/contacto" },
    { title: "Gadgets", path: "/gadgets" },
    { title: "Ofertas", path: "/ofertas" },
  ];

  return (
    <>
      <Header carritolenght={carrito.length} />
      <Nav navArrayLinks={navArrayLinks} />
      <Outlet />
      <SubFooter />
      <Footer />
    </>
  );
};

export default LayoutMain;
