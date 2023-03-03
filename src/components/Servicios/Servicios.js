import "./Servicios.css";

import webIcon from "../../assets/img/servicios/iconoweb.png";

export function Servicios() {
    return (
        <section className="services">
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
            </div>
        </section>
    );
}
