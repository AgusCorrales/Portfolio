import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagenTesla from '../../src/assets/Tesla.png'
import ImagenEcomerce from '../../src/assets/Ecomerce.png'
import './Home.scss'


const Home = () => {
    return (

        <div>
            <div class="row">
                <div class="col-4">
                    <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center height overflow-y-auto sticky-top">
                        <a class="p-1 rounded" href="#simple-list-item-1">Agustin</a>
                        <a class="p-1 rounded" href="#simple-list-item-1">Sobre mi</a>
                        <a class="p-1 rounded" href="#simple-list-item-2">Portfolio</a>
                        <a class="p-1 rounded" href="#simple-list-item-3">Educacion</a>
                        <a class="p-1 rounded" href="#simple-list-item-4">Skills</a>
                        <a class="p-1 rounded" href="#simple-list-item-5">Contacto</a>
                    </div>
                </div>
                <div class="col-8">
                    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                        <h4 id="simple-list-item-1"></h4>
                        <h2>AGUSTIN CORRALES ZARATE</h2>
                        <p>Bienvenidos a mi Portfolio como desarrollador web.</p>
                        <p>Si quieres ponerte en contacto conmigo escribeme a aguscorrales1997@gmail.com</p>
                        <h4 id="simple-list-item-1">Sobre mi</h4>
                        <p>Toda mi vida la dedique al deporte, fuí futbolista durante muchos años con la posibilidad de dedicarme profesionalmente pero no tuve la suerte de concretar mi sueño.
                            Tuve que reiventarme y encontre esta maravillosa profesion. Ya hace un año que me encuentro estudiando y trabajando en proyectos personales como desarrollador web </p>
                        <p>Mira mi experiencia laboral en detalle en <a href="https://www.linkedin.com/in/agustincorraleszarate" target="_blank">LinkedIn</a>.</p>
                        <h4 id="simple-list-item-2">Portfolio</h4>
                        <div className='card-container'>
                        <a href="https://github.com/AgusCorrales/MiniProyectoReact" className="card-link">
                        <div className="card" style={{ width: '18rem' }}>
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <rect width="100%" height="100%" fill="#868e96"></rect>
                                <image href={ImagenTesla} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                                <text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text>
                            </svg>
                            <div className="card-body">
                                <h3 className="card-title">Tesla Noticas</h3>
                                <p className="card-text">Es un pequeño proyecto que trata de una pagina sobre Tesla, con imagenes y noticias sobre la marca. Tambien con un pequeño
                                 formulario para publicar las noticias de desees
                                </p>
                            </div>
                        </div>
                        </a>
                        <a href="https://github.com/AgusCorrales/ProyectoReactEcomerce" className="card-link">
                        <div className="card" style={{ width: '18rem' }}>
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <rect width="100%" height="100%" fill="#868e96"></rect>
                                <image href={ImagenEcomerce} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                                <text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text>
                            </svg>
                            <div className="card-body">
                                <h3 className="card-title">Ecomerce</h3>
                                <p className="card-text"> Proyecto que trata de una pagina Ecomerce, con Frontend y Backend. Puedes publicar productos, actualizarlos, borralos, etc.
                                    Y como usuario puedes visitar la pagina, crear usuarios y comprar.
                                </p>
                            </div>
                        </div>
                        </a>
                        </div>

                        <h4 id="simple-list-item-3">Educacion</h4>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        <h4 id="simple-list-item-4">Skills</h4>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        <h4 id="simple-list-item-5">Contacto</h4>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home