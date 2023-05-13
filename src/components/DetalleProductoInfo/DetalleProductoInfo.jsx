import React from "react";

const DetalleProductoInfo = () => {
  return (
    <>
      <section className="wrap">
        <div className="section-caracteristicas">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-cpu"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#00a6fb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="5" y="5" width="14" height="14" rx="1" />
              <path d="M9 9h6v6h-6z" />
              <path d="M3 10h2" />
              <path d="M3 14h2" />
              <path d="M10 3v2" />
              <path d="M14 3v2" />
              <path d="M21 10h-2" />
              <path d="M21 14h-2" />
              <path d="M14 21v-2" />
              <path d="M10 21v-2" />
            </svg>
            <h4 className="no-margin">Caracteristicas</h4>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-messages"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#00a6fb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
              <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
            </svg>
            <h4 className="no-margin">Opiniones (3)</h4>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="caracteristicas-detalladas">
          <div>
            <h4 className="no-margin">
              Vehículo de dos ruedas, normalmente de igual tamaño, cuyos pedales
              transmiten el movimiento a la rueda trasera por medio de un plato,
              un piñón y una cadena. 1. f. bicicleta que es ligera, de ruedas
              anchas y con diferentes combinaciones de platos y piñones para
              facilitar el pedaleo por terrenos accidentados.
            </h4>
            <div className="caracteristicas-detalladas-texto">
              <h3 className="no-margin">Características del producto</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                enim. Omnis harum reiciendis doloremque tempora rem. Accusantium
                voluptas neque corrupti nostrum id tempore repudiandae fuga,
                culpa, iste eveniet dolorum enim.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus molestias voluptates exercitationem fugit quam rerum
                praesentium, ad magni similique, quae temporibus ullam
                perferendis iste, numquam error eligendi pariatur facere
                aspernatur!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                tenetur dolorum numquam quaerat voluptatum, provident, facere
                reiciendis nisi, accusantium totam alias nulla? Deserunt optio
                maiores, cupiditate et excepturi fuga aspernatur.
              </p>
            </div>
          </div>

          <div>
            <h3 className="no-margin">Especificaciones</h3>
            <ul>
              <li> Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
              <li>molestias voluptates exercitationem </li>
              <li> Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
              <li>
                doloremque tempora rem. Accusantium voluptas neque corrupti
                nostrum id
              </li>
              <li> Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
              <li>Especificaciones</li>
              <li> Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
              <li>Especificaciones</li>
              <li>
                doloremque tempora rem. Accusantium voluptas neque corrupti
                nostrum id
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="testimonios wrap">
        <div className="testimonio-titulo">
          <h2>Testimonios de clientes</h2>
          <h4>Consigue ahora los mejores productos de MyReleevan Store</h4>
          <a className="btnClaro" href="privacidad.html">
            Ver todos
          </a>
        </div>
        <a onclick="mostrarTestimonioAnterior()" className="prevTestimonio">
          <img src="../assets/icons/arrow-left.svg" alt="" />
        </a>

        <div className="testimonios">
          <div className="testimonio1 testimonio active">
            <h4>
              Muchos de los que viven merecen morir y algunos de los que mueren
              merecen la vida. ¿Puedes devolver la vida? Entonces no te
              apresures a dispensar la muerte, pues ni el más sabio conoce el
              fin de todos los caminos. El viaje no termina aquí.
            </h4>
            <cite>Gandalf Mithrandir</cite>
            <div className="rating h6">
              <span>★★★</span>★★
            </div>
          </div>
          <div className="testimonio2 testimonio">
            <h4>
              Qué dise usteer me cago en tus muelas ese hombree qué dise usteer
              de la pradera pupita no puedor. A peich caballo blanco caballo
              negroorl ese pedazo de no puedor no te digo trigo por no llamarte
              Rodrigor mamaar llevame al sircoo a wan torpedo torpedo
            </h4>
            <cite>Chiquito de la calzada</cite>
            <div className="rating h6">
              <span>★★★★★</span>
            </div>
          </div>
          <div className="testimonio3 testimonio">
            <h4>
              Benemeritaar a gramenawer va usté muy cargadoo fistro no te digo
              trigo por no llamarte Rodrigor de la pradera a gramenawer pupita
              diodeno hasta luego Lucas. Condemor caballo blanco caballo
              negroorl papaar papaar condemor torpedo.
            </h4>
            <cite>Chiquito de la calzada 2</cite>
            <div className="rating h6">
              <span>★★★★</span>★
            </div>
          </div>
        </div>
        <a onclick="mostrarTestimonioSiguiente()" className="nextTestimonio">
          <img src="../assets/icons/arrowslim-right.svg" alt="" />
        </a>
      </section>
    </>
  );
};

export default DetalleProductoInfo;
