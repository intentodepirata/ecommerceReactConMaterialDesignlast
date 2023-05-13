import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import GppGoodIcon from "@mui/icons-material/GppGood";

const DetalleProductoCard = ({ producto, setCarrito, carrito }) => {
  const {
    id,
    nombre,
    descripcion,
    precio,
    imagen,
    categoria_id,
    rating,
    referencia,
    modelos_id,
  } = producto;
  const handleAddCarrito = () => {
    let encontrado = false;

    let productoCarrito = carrito;
    for (let i = 0; i < productoCarrito.length; i++) {
      if (productoCarrito[i].producto_id === id) {
        productoCarrito[i].cantidadCarrito += 1;
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      productoCarrito = {
        producto_id: id,
        nombre: nombre,
        imagen: imagen,
        precio: precio,
        cantidadCarrito: 1,
      };
      setCarrito((carrito) => [productoCarrito, ...carrito]);
    }
  };
  return (
    <div className="wrap">
      <div className="product-info">
        <img src={imagen} alt="bicicleta" />
        <div className="product-content">
          <div className="  nav-detalle">
            <p className="no-margin">Samsung</p>
            <KeyboardArrowRightIcon sx={{ color: "grey" }} alt="flecha" />
            <p className="no-margin">SM-G900F (S10+)</p>
          </div>
          <h2 className="no-margin">{nombre}</h2>
          <p className="no-margin">{descripcion}</p>
          <div className="precio h3">
            {precio} <span>€</span>
          </div>

          <div className="card-cantidad">
            <span className="item-menos">-</span>
            <span className="item-number">1</span>
            <span className="item-mas-detalle">+</span>
            <input
              className="btn-detalle"
              type="button"
              value="Añadir al carrito"
              onClick={handleAddCarrito}
            />
          </div>
          <div className="garantia-texto">
            <GppGoodIcon alt="shield tick" color="primary" />
            <p>
              Incluye <span>2 años</span> de garantía
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleProductoCard;
