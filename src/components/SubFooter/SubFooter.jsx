import garantia from './icons/garantia.svg';
import pagoSeguro from './icons/pagoseguro.svg';
import enviogratis from './icons/enviogratis.svg';
import ofertas from './icons/ofertas.svg';
import './SubFooter.css'

const SubFooter = () => {
  return (
    <div className='wrap'>
    <section className="contenedor ">
      <div className="icono">
        <img src={pagoSeguro} alt="Icono" width="50px"/>
        <div>
          <h4>Pago seguro</h4>
          <p>100% garantizado</p>
        </div>
      </div>
      <div className="icono">
        <img src={enviogratis} alt="Icono" width="50px"/>
        <div>
          <h4>Envio gratis</h4>
          <p>En pedidos de +100€</p>
        </div>
      </div>
      <div className="icono">
        <img src={garantia} alt="Icono" width="50px"/>
        <div>
          <h4>2 años de garantía</h4>
          <p>En todos los repuestos</p>
        </div>
      </div>
      <div className="icono">
        <img src={ofertas} alt="Icono" width="50px"/>
        <div>
          <h4>Ofertas únicas</h4>
          <p>Precio de mayorista</p>
        </div>
      </div>
    </section>

    </div>
  )
}

export default SubFooter