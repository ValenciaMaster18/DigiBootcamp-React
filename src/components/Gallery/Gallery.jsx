import './Gallery.css';
import React, { useState } from 'react';
import  metodologiaAgiles  from '../../assets/img/gallery/metodologiaAgiles.jpeg';
import  powerBi  from '../../assets/img/gallery/powerBi.jpg';


function ObtenerDatos(){
    const [datos, setDatos] = useState([]);
    // '../../assets/json/img.json'
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setDatos(json));
    return datos;
}

export function Gallery(){
    
    // const datos = ObtenerDatos();
    // console.log(datos)

    return (
        <section className="gallery">
            <div className="gallery__title">
                <span>NUESTROS BOOTCAMPS</span>
                <h2>GALERIA DE BOOTCAMP</h2>
            </div>
            <div className="gallery__img">
                <picture>
                    <img src={metodologiaAgiles} alt="" />
                </picture>
                <picture>
                    <img src={powerBi} alt="" />
                </picture>
            </div>
            {/* <ul>
                { datos.length ? datos.map(item => {
                    return (
                        <li key={item.id}>
                            { item.title }
                            <li>
                                { item.price }
                            </li>
                        </li>
                    );
                }) : <p>Loading...</p> }
            </ul> */}
        </section>
    )
}
