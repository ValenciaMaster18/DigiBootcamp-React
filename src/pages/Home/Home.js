// Importamos el css del componente
import "./home.css";
// Importamos el componente portada
import { Portada } from "../../components/Portada/Portada";
import { About } from "../../components/About/About";
import { Servicios } from "../../components/Servicios/Servicios";
import { Contact } from "../../components/Contact/Contact";


// Creamos el componente
function Home(){
    return (
        <main>
            <Portada /> 
            <About /> 
            <Servicios />
            <Contact />
        </main>
    )
}
export default Home;