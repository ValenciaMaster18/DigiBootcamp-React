import { useState } from "react";
import "./Portada.css";
import people from "../../assets/img/peoplePortada.jpeg";
import time from "../../assets/img/time.svg";
import edit from "../../assets/img/edit.svg";
import buys from "../../assets/img/buy.svg";

export function Portada() {
    const [animate, setAnimate] = useState([false, false, false]);

    function agregarAnimacion(i) {
        const newAnimate = [...animate];
        console.log(newAnimate[i])
        newAnimate[i] = !animate[i];
        setAnimate(newAnimate);
    }

    return (
        <section>
            <div className="portada__text">
                <div className="portada__title">
                    <h1>ÚNETE A NUESTROS BOOTCAMPS GRATUITOS</h1>
                </div>
                <div className="portada__parrafo">
                    <p>
                        COMPÁÑANOS EN ESTA GRAN AVENTURA DE CONOCIMIENTO Y
                        SUMÉRGETE EN LAS TECNOLOGÍAS 4.0
                    </p>
                </div>
                <div className="portada__btn">
                    <button className="animate__animated animate__fadeInUp">
                        EMPIEZA YA
                    </button>
                </div>
            </div>
            <picture className="portada__img">
                <img src={people} alt="..." />
                <div className="img__btn">
                    <button
                        onClick={() => agregarAnimacion(0)}
                        className={`animate__animated ${
                            animate[0] ? "animate__fadeIn" : ""
                        }`}
                    >
                        <img className="img__time" src={edit} alt="..." />
                        <span>Personalizable</span>
                    </button>
                    <button
                        onClick={() => agregarAnimacion(1)}
                        className={`animate__animated ${
                            animate[1] ? "animate__fadeIn" : ""
                        }`}
                    >
                        <img className="img__buys" src={buys} alt="..." />
                        Sin compromisos
                    </button>
                    <button
                        onClick={() => agregarAnimacion(2)}
                        className={`animate__animated ${
                            animate[2] ? "animate__fadeIn" : ""
                        }`}
                    >
                        <img className="img__time" src={time} alt="..." />A tu
                        ritmo
                    </button>
                </div>
            </picture>
        </section>
    );
}
