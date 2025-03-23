import React from 'react'
import Navbar from '../components/home/Navbar'

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>

      {/* Sección de Inicio/Hero */}
      <section id="inicio" className="py-5 text-center text-white bg-primary d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', marginTop: '56px' }}>
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-lg-8 mx-auto">
              <h1 className="display-3 fw-bold mb-4">Bienvenido a ZAPATILLAS ELITE S.A.C.</h1>
              <p className="lead mb-4">comercialización de zapatillas deportivas y clasicas.</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-light btn-lg px-4 gap-3">Nuestros Servicios</button>
                <button type="button" className="btn btn-outline-light btn-lg px-4">Contáctanos</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Nosotros/Misión */}
      <section id="nosotros" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">Sobre Nosotros</h2>
              <p className="lead">
                ZAPATILLAS ELITE S.A.C. es una Sociedad Anónima Cerrada dedicada a la fabricación y comercialización de zapatillas deportivas.
              </p>
              <p>
                Con RUC: 20678912345, y ubicada en AV. Los Pinos #789 URB. Santa Clara - San Juan de Lurigancho, Perú, nuestra empresa se destaca por la excelencia y la innovación. Bajo la dirección de nuestro Gerente General, Marcos Rivera, trabajamos para ofrecer productos de alta calidad.
              </p>
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Nuestra Misión</h2>
              <p>
                Nuestra misión es proporcionar zapatillas deportivas de alta calidad, combinando innovación, diseño y tecnología para el mejor desempeño de nuestros clientes.
              </p>
              <p>
                Nos esforzamos por ser líderes en el sector, manteniendo siempre los más altos estándares éticos y profesionales.
              </p>
              <div className="d-flex mt-4">
                <div className="me-4">
                  <h4 className="fw-bold">Visión</h4>
                  <p>Ser reconocidos como referentes en el mercado de zapatillas deportivas.</p>
                </div>
                <div>
                  <h4 className="fw-bold">Valores</h4>
                  <p>Integridad, excelencia, compromiso, innovación y trabajo en equipo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Nuestros Servicios</h2>
            <p className="lead">Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                    </svg>
                  </div>
                  <h4 className="card-title mb-3">Servicio 1</h4>
                  <p className="card-text">Descripción detallada de tu primer servicio. Explica aquí los beneficios y características principales.</p>
                </div>
                <div className="card-footer bg-transparent border-0 text-center">
                  <a href="#" className="btn btn-primary">Más información</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                    </svg>
                  </div>
                  <h4 className="card-title mb-3">Servicio 2</h4>
                  <p className="card-text">Descripción detallada de tu segundo servicio. Explica aquí los beneficios y características principales.</p>
                </div>
                <div className="card-footer bg-transparent border-0 text-center">
                  <a href="#" className="btn btn-primary">Más información</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                    </svg>
                  </div>
                  <h4 className="card-title mb-3">Servicio 3</h4>
                  <p className="card-text">Descripción detallada de tu tercer servicio. Explica aquí los beneficios y características principales.</p>
                </div>
                <div className="card-footer bg-transparent border-0 text-center">
                  <a href="#" className="btn btn-primary">Más información</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Historia */}
      <section id="historia" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              {/* Imagen Sección Historia */}
              <img src="/nikeperu.jpeg" alt="Historia de la empresa" className="img-fluid rounded shadow-lg" />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Nuestra Historia</h2>
              <p>
                Desde nuestros inicios, hemos recorrido un largo camino de crecimiento y desarrollo constante en el sector de las zapatillas deportivas.
              </p>
              <div className="mt-4">
                <div className="d-flex mb-3">
                  <div className="flex-shrink-0 me-3">
                    <div className="bg-primary text-white p-2 rounded-circle">2010</div>
                  </div>
                  <div>
                    <h5>Fundación</h5>
                    <p>Nuestra empresa fue fundada con la visión de ofrecer zapatillas deportivas de calidad.</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="flex-shrink-0 me-3">
                    <div className="bg-primary text-white p-2 rounded-circle">2015</div>
                  </div>
                  <div>
                    <h5>Expansión</h5>
                    <p>Ampliamos nuestras operaciones y fortalecimos nuestra presencia en el mercado.</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-shrink-0 me-3">
                    <div className="bg-primary text-white p-2 rounded-circle">2023</div>
                  </div>
                  <div>
                    <h5>Actualidad</h5>
                    <p>Hoy, somos líderes en la fabricación y comercialización de zapatillas deportivas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Contáctanos</h2>
            <p className="lead">Estamos aquí para ayudarte. ¡Ponte en contacto con nosotros!</p>
          </div>
          <div className="row">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h4 className="mb-3">Información de Contacto</h4>
              <p>Completa el formulario o utiliza la información de contacto para comunicarte con nosotros.</p>
              <div className="d-flex align-items-start mb-3">
                <div className="me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
                </div>
                <p>Dirección: AV. Los Pinos #789 URB. Santa Clara - San Juan de Lurigancho, Perú</p>
              </div>
              <div className="d-flex align-items-start mb-3">
                <div className="me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                </div>
                <p>Teléfono: +51 982 387 638</p>
              </div>
              <div className="d-flex align-items-start mb-3">
                <div className="me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                  </svg>
                </div>
                <p>Email: info@zapatillaselite.com</p>
              </div>
              <div className="d-flex align-items-start mb-3">
                <div className="me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                </div>
                <p>Horario: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="col-lg-7">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="apellido" placeholder="Tu apellido" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="tu@email.com" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input type="tel" className="form-control" id="telefono" placeholder="Tu teléfono" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="asunto" className="form-label">Asunto</label>
                    <input type="text" className="form-control" id="asunto" placeholder="Asunto del mensaje" required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="mensaje" rows="4" placeholder="Tu mensaje" required></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    <footer className="py-5 bg-dark text-white border-top border-secondary">
      <div className="container text-center">
        <h5 className="fw-bold mb-2">© 2025 ZAPATILLAS ELITE S.A.C.</h5>
          <p className="text-white-50 small mb-4">Fabricando zapatillas deportivas de calidad.</p>
            <div className="d-flex justify-content-center">
      <a href="#" className="text-white me-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
      </a>
      <a href="#" className="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </svg>
      </a>
    </div>
  </div>
</footer>

    </>
  )
}

export default HomePage
