import "./About.css";
// <>
export function About(){
    return (
        <section className="about">
            <div className="about__text">
                <div className="about__title">
                    <h2>
                        SOBRE NUESTROS BOOTCAMPS
                    </h2>
                </div>
                <div className="about__parrafo">
                    <p>
                    DigiBootcamp es un programa de entrenamiento intensivo que se enfoca en desarrollar habilidades específicas en un corto período de tiempo. Nuestros bootcamps de tecnología son muy populares y pueden durar de unas pocas semanas. Estos programas están diseñados para ayudar a los estudiantes a adquirir habilidades técnicas que son valiosas en la industria tecnológica, como programación, diseño de sitios web y aplicaciones móviles, ciencia de datos y análisis de datos, entre otros.
                    </p>
                </div>
                <div className="about__btn">
                    <button className="button">
                        Empieza ya
                    </button>
                </div>
            </div>
            <div className="about__card">
                    <h2>
                        Nuestros bootcamps
                    </h2>
                <div className="about__card-text">
                    <picture className="about__icon">
                        <img src="https://img.plasmic.app/img-optimizer/v1/img/35bf1438cd89de20e42b8afb4150bc37.png?w=64&q=75&f=webp" alt="..." />  
                    </picture>
                    <div className="element">
                        <h3>
                            FullStack Developer
                        </h3>
                        <span>
                                Git | JavaScript | Python | Angular ...
                        </span>     
                    </div>
                </div>
                <div className="about__card-text">
                    <picture className="about__icon">
                        <img src="https://img.plasmic.app/img-optimizer/v1/img/556fafcc720ba2d27aae47a17efdab34.png?w=64&q=75&f=webp" alt="..." />  
                    </picture>
                    <div className="element">
                        <h3>
                            FullStack Developer
                        </h3>
                        <span>
                                React | HTML Y CSS | Angular | JavaScript ...
                        </span>
                    </div>
                </div>
                <div className="about__card-text">
                    <picture className="about__icon">
                        <img src="https://img.plasmic.app/img-optimizer/v1/img/6445b650949a602ffc0abe924dd1c78d.png?w=64&q=75&f=webp" alt="..." />  
                    </picture>
                    <div className="element">
                        <h3>
                            FullStack Developer
                        </h3>
                        <span>
                                Spring | JUnit | Java | Git |Python ...
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}