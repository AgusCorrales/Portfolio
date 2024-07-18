// src/components/Home.jsx
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ImagenTesla from '../../src/assets/Tesla.png';
import ImagenEcomerce from '../../src/assets/Ecomerce.png';
import ImagenTrivia from '../../src/assets/Trivia.png';
import ImagenElearning from '../../src/assets/E-leargingg.png';
import './Home.scss';

const Home = () => {
  useEffect(() => {
    if (window.Bootstrap && window.Bootstrap.ScrollSpy) {
      // Inicializar ScrollSpy
      const scrollSpy = new window.Bootstrap.ScrollSpy(document.body, {
        target: '#simple-list-example'
      });

      return () => {
        // Limpiar ScrollSpy cuando el componente se desmonte
        scrollSpy.dispose();
      };
    } else {
      console.error('ScrollSpy no está disponible en window.Bootstrap');
    }
  }, []);

  return (
    <div className='div-container'>
      <div className="row">
        <div className="col-3 me-2">
          <div
            id="simple-list-example"
            className="d-flex flex-column gap-2 simple-list-example-scrollspy height overflow-y-auto position-fixed ms-3"
          >
            <a className="p-1 rounded nav-link" href="#simple-list-item-1">Agustin</a>
            <a className="p-1 rounded nav-link" href="#simple-list-item-2">Sobre mi</a>
            <a className="p-1 rounded nav-link" href="#simple-list-item-3">Portfolio</a>
            <a className="p-1 rounded nav-link" href="#simple-list-item-4">Educacion</a>
            <a className="p-1 rounded nav-link" href="#simple-list-item-5">Skills</a>
            <a className="p-1 rounded nav-link" href="#simple-list-item-6">Contacto</a>
          </div>
        </div>
        <div className="col-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#simple-list-example"
            data-bs-offset="0"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabIndex="0"
          >
            <div className='parrafos'>
              <h4 id="simple-list-item-1">AGUSTIN CORRALES ZARATE</h4>
              <p>Bienvenidos a mi Portfolio como desarrollador web.</p>
              <p>Si quieres ponerte en contacto conmigo escríbeme a aguscorrales1997@gmail.com</p>
            </div>
            <hr />
            <div className='parrafos'>
              <h4 id="simple-list-item-2">Sobre mi</h4>
              <p>Toda mi vida la dediqué al deporte, fui futbolista durante muchos años con la posibilidad de dedicarme profesionalmente pero no tuve la suerte de concretar mi sueño. Tuve que reinventarme y encontré esta maravillosa profesión. Ya hace un año que me encuentro estudiando y trabajando en proyectos personales como desarrollador web.</p>
              <p>Mira mi experiencia laboral en detalle en <a href="https://www.linkedin.com/in/agustincorraleszarate" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
            </div>
            <hr />
            <div className='parrafos'>
              <h4 id="simple-list-item-3">Portfolio</h4>
              <div className="card-container">
                <a href="https://github.com/AgusCorrales/MiniProyectoReact" className="card-link">
                  <div className="card" style={{ width: '18rem', height: '27rem' }}>
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                      <image href={ImagenTesla} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                    </svg>
                    <div className="card-body">
                      <h3 className="card-title">Tesla Noticias</h3>
                      <p className="card-text">Es un pequeño proyecto que trata de una página sobre Tesla, con imágenes y noticias sobre la marca. También con un pequeño formulario para publicar las noticias que desees.</p>
                    </div>
                  </div>
                </a>
                <a href="https://github.com/AgusCorrales/ProyectoReactEcomerce" className="card-link">
                  <div className="card" style={{ width: '18rem', height: '27rem' }}>
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                      <image href={ImagenEcomerce} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                    </svg>
                    <div className="card-body">
                      <h3 className="card-title">Ecomerce</h3>
                      <p className="card-text">Proyecto que trata de una página Ecomerce, con Frontend y Backend. Puedes publicar productos, actualizarlos, borrarlos, etc. Y como usuario puedes visitar la página, crear usuarios y comprar.</p>
                    </div>
                  </div>
                </a>
                <a href="https://github.com/AgusCorrales/ProyectoQuiz" className="card-link">
                  <div className="card" style={{ width: '18rem', height: '27rem' }}>
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                      <image href={ImagenTrivia} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                    </svg>
                    <div className="card-body">
                      <h3 className="card-title">Trivia Game</h3>
                      <p className="card-text">Un juego de trivia que consiste en diez preguntas sobre videojuegos. Con un registro de usuarios y un login.</p>
                    </div>
                  </div>
                </a>
                <a href="https://github.com/sentobc13/Front-Proyecto-Final-Tripulaciones" className="card-link">
                  <div className="card" style={{ width: '18rem' }}>
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                      <image href={ImagenElearning} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                    </svg>
                    <div className="card-body">
                      <h3 className="card-title">E-learning</h3>
                      <p className="card-text">Proyecto para el cliente Samoo by Pentec con el fin de mejorar el networking entre asistentes a los eventos realizados por la empresa. Hecho con un equipo de 12 personas, incluyendo desarrolladores Full Stack, UX/UI Designers y Data Science.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <hr />
            <div className='parrafos'>
              <h4 id="simple-list-item-4">Educacion</h4>
              <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
              <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
              <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
            </div>
            <hr />
            <div className='parrafos'>
              <h4 id="simple-list-item-5">Skills</h4>
              <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
            </div>
            <hr />
            <div className='parrafos'>
              <h4 id="simple-list-item-6">Contacto</h4>
              <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
