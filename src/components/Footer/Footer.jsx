import logoFooter from "./img/logo-footer.jpg"
import facebook from "./icons/facebook.svg"
import youtube from "./icons/youtube.svg"
import twitch from "./icons/twitch.svg"
import instagram from "./icons/instagram.svg"

import "./footer.css"



const Footer = () => {
  return (
    <footer  >
      <div  className="footer wrap grid-2">
        <div>
          <div className="logo-footer">
            <a href="/index.html">
              <img src={logoFooter} alt="logo-footer" />
            </a>
          </div>
          <div className="grid-2">
            <ul className="menu">
              <li>Centro de ayuda</li>
              <li>Servicio al consumidor</li>
              <li>Escribenos</li>
              <li>Servicio telefonico</li>
            </ul>
            <ul className="menu">
              <li>Politica de privacidad</li>
              <li>Condiciones de compra</li>
              <li>Opiniones de clientes</li>
              <li>Aviso de privacidad y cookies</li>
            </ul>
          </div>
        </div>
        <div className="social">
          <h4 className="no-margin">
            Únete a nuestra newsletter y recibe ofertas diarias
          </h4>

          <form className="social-newsletter">
            <div className="newsletter">
              <input
                className="newsletter-email"
                type="email"
                name="email"
                placeholder="Introduce tu email"
              />
              <input
                className="newsletter-btn social"
                type="submit"
                value="Suscribirme"
              />
            </div>
            <label htmlFor="politica">
              <input
                className="social-checkbox"
                type="checkbox"
                value="acepto"
              />
              <p className="in-line">
                {" "}
                Acepto la <span>política de privacidad</span> de esta web
              </p>
            </label>
          </form>

          <div className="social-iconos">
            <h4>Siguenos en redes</h4>
            <div>
              <a href="">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
            <div>
              <a href="">
                <img src={youtube} alt="youtube" />
              </a>
            </div>
            <div>
              <a href="">
                <img src={twitch} alt="twitch" />
              </a>
            </div>
            <div>
              <a href="">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
