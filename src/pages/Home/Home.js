// Importamos el css del componente
import "./home.css";
// Importamos el componente portada
import { Header } from "../../components/Header/Header";
import { Portada } from "../../components/Portada/Portada";
import { About } from "../../components/About/About";
import { Servicios } from "../../components/Servicios/Servicios";
import { Contact } from "../../components/Contact/Contact";
import { Footer } from "../../components/Footer/Footer";
// Para trbajar con iconos de react (https://react-icons.github.io/react-icons/icons?name=fa)
import { FaArrowUp } from "react-icons/fa";

// Creamos el componente
function Home(){
    return (
        <main>
            <Header /> 
            <Portada /> 
            <About /> 
            <Servicios />
            <Contact />
            <Footer />
            <div className="home__button">
                <a href="#header">
                    <button className="button__subir">
                        <FaArrowUp />
                    </button>
                </a>

            </div>

        </main>
    )
}
export default Home;