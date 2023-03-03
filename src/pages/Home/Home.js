// Importamos el css del componente
import "./home.css";
// Importamos el componente portada
import { Portada } from "../../components/Portada/Portada";
import { About } from "../../components/About/About";


// Creamos el componente
function Home(){
    return (
        <main>
            <Portada /> 
            <About /> 
        </main>
    )
}
export default Home;