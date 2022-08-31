import React from "react";
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-a">
                <div className="footer-fist-row pt40">
                    <div className="container">
                        <div className="row footer-deg2">
                            <div className="col-5s">
                                <div className="footer-ree-c">
                                    <div className="footer-logo">
                                        <Link to="/"> <img src="images/footer-logo.png" alt="reeven" className="img" /> </Link>
                                    </div>
                                    <p>ООО "Веон-консалт"</p>
                                </div>
                                <p>УНП 193082231</p>
                            </div>
                            <div>
                                <h5 className="mb20 footer_contact-info">Контактная информация</h5>
                                <ul className="footer-links-list social-linkz btn-sets">
                                    <li><a href="tel:+911234567890"><span><i className="fas fa-phone-square-alt"></i></span> +91 123 4567 890 </a></li>
                                    <li><a href="https://wa.me/+911234567890"><span><i className="fab fa-whatsapp-square"></i></span> +91 123 4567 890</a></li>
                                    <li><a href="mailto:career@reevan.com"><span><i className="fas fa-envelope"></i></span> career@reevan.com</a></li>
                                    <li><a href="mailto:career@reevan.com"><span><i className="fas fa-envelope"></i></span> info@reevan.com</a></li>
                                    <li><a href="skype:reevan.company"><span><i className="fab fa-skype"></i></span> reevan-skype</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="container ft-cpy bt-top mt70">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="ft-copyright">
                                    <p>We are tracking any intention of piracy.</p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ft-copyright ft-r">
                                    <p>© 2021-2022. All Rights Reserved By <a href="https://themeforest.net/user/rajesh-doot/portfolio" target="blank">Rajesh Doot</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;