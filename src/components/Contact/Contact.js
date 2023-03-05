import "./Contact.css";
import imgContact from "../../assets/img/imgContact.jpg";
export function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact__title">
                <h2>CONTACTATE CON DIGIBOOTCAMP</h2>
            </div>
            <div className="contact__body">
                <div className="contact__form">
                    <form role="form">
                        <div class="form__nombre">
                            <input type="text" id="" placeholder="Nombre" />
                        </div>
                        <div class="form__celular">
                            <input type="number" id="" placeholder="Celular" />
                        </div>
                        <div class="form__email">
                            <input type="email" id="" placeholder="Email" />
                        </div>
                        {/* <div class="form__text">
                            <textarea placeholder="Email" />
                        </div> */}
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <picture className="contact__img">
                    <img src={imgContact} alt="..." />
                </picture>
            </div>

            <div className="contact__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5456211207365!2d-74.8002678849604!3d10.997628958078309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d0b893fd6e9%3A0xb24654761168258f!2sSENA%20-%20Sede%20TIC!5e0!3m2!1ses-419!2sco!4v1677875695071!5m2!1ses-419!2sco"
                    width="100%"
                    height="100%"
                ></iframe>
            </div>
        </section>
    );
}
