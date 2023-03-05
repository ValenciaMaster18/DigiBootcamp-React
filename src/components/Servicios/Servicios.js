import "./Servicios.css";

import webIcon from "../../assets/img/servicios/iconoweb.png";
import Pythoncon from "../../assets/img/servicios/iconopython.png";
import CiberIcon from "../../assets/img/servicios/iconociber.png";
import PcIcon from "../../assets/img/servicios/bootcamp_imagen.png";


export function Servicios() {
    return (
        <section id="services" className="services">
            <div className="services__text">
                <div className="services__title">
                    <h2>NUESTROS SERVICIOS DE BOOTCAMPS</h2>
                </div>
                <div className="services__parrafo">
                    <p>
                    Ofrecemos bootcamps con programas intensivos de corta duración que te permiten adquirir habilidades específicas en tecnología
                    </p>
                </div>
            </div>
            <div className="services__body">
                <div className="card">
                    <picture className="card__img">
                        <img src={webIcon} alt="..." />
                    </picture>
                    <div className="card__body">
                        <div className="card__title">
                            <h1>Frond End</h1>
                            <span>Fabian Florian</span>
                        </div>
                        <p className="card__text">
                            Diseño y desarrollo de interfaces web
                        </p>
                    </div>
                </div>
                <div className="card">
                    <picture className="card__img">
                        <img src={Pythoncon} alt="..." />
                    </picture>
                    <div className="card__body">
                        <div className="card__title">
                            <h1>Analitica De Datos</h1>
                            <span>Oscar Gonzales</span>
                        </div>
                        <p className="card__text">
                            Python simplifica análisis de datos.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <picture className="card__img">
                        <img src={CiberIcon} alt="..." />
                    </picture>
                    <div className="card__body">
                        <div className="card__title">
                            <h1>Ciberseguridad</h1>
                            <span>Eduardo Ramirez</span>
                        </div>
                        <p className="card__text">
                            Seguridad cibernética es crítica.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <picture className="card__img">
                        <img src={PcIcon} alt="..." />
                    </picture>
                    <div className="card__body">
                        <div className="card__title">
                            <h1>Microsoft Power Bi</h1>
                            <span>Luis Valencia</span>
                        </div>
                        <p className="card__text">
                            Power BI simplifica visualización datos.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <picture className="card__img">
                        <img src={CiberIcon} alt="..." />
                    </picture>
                    <div className="card__body">
                        <div className="card__title">
                            <h1>Ciberseguridad Con Azure</h1>
                            <span>Cristian Porrety</span>
                        </div>
                        <p className="card__text">
                            Azure protege datos confidenciales.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <picture className="card__img">
                        <img src={Pythoncon} alt="..." />
                    </picture>
                    <div className="card__body">
                        <div className="card__title">
                            <h1>Inteligencia Artifical</h1>
                            <span>Oscar Gonzales</span>
                        </div>
                        <p className="card__text">
                            Azure potencia IA con Python seguro.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
