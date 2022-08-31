import React from "react";
import { Link } from "react-router-dom";
import RequestCallback from "./contacts/request-callback";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stateRequestPopUp: false
        }
    }

    handleClickRequest = () => {
        const { stateRequestPopUp } = this.state;

        this.setState({ stateRequestPopUp: !stateRequestPopUp })
    }

    render() {
        const { stateRequestPopUp } = this.state;
        const { location } = this.props;

        return (
            <header className={`header-bhv ree-header fixed-top ${stateRequestPopUp ? 'pop-up-open' : ''}`}>
                <div className="container-fluid m-p-l-r-0">
                    <div className="menu-header">
                        <div className="menu-logo">
                            <div className="dskt-logo"><Link className="nav-brand" to="/"><img src={location.pathname.includes('request') ? 'images/white-logo.png' : 'images/dark-logo.png'} alt="Logo" className="ree-logo" /> </Link> </div>
                        </div>
                        <div className="ree-nav" role="navigation">
                            <ul className="nav-list">
                                <li className="megamenu">
                                    <Link to='/' className="menu-links">Главная</Link>
                                </li>
                                <li className="megamenu mega-small">
                                    <Link to="/portfolio" className="menu-links">Портфолио</Link>
                                </li>
                                <li className="megamenu mega-small">
                                    <Link to="/services-page" className="menu-links">Услуги</Link>
                                    <div className="menu-dropdown">
                                        <div className="menu-block-set">
                                            <Link className="dropdown-item" to="/web-dev">Разработка сайтов</Link>
                                            <Link className="dropdown-item" to="/web-support">Поддержка сайтов</Link>
                                            <Link className="dropdown-item" to="/software-dev">Разработка ПО</Link>
                                            <Link className="dropdown-item" to="/design">UX/UI дизайн</Link>
                                            <Link className="dropdown-item" to="/marketing">Маркетинг</Link>

                                        </div>
                                    </div>
                                </li>
                                <li className="megamenu mega-small">
                                    <Link to="/contacts" className="menu-links">Контакты</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="ree-nav-cta">
                            <button className="ree-btn ree-btn0 ree-btn-grdt2" onClick={this.handleClickRequest}>Заказать звонок</button>
                        </div>
                        {stateRequestPopUp && <RequestCallback handleClickRequest={this.handleClickRequest} />}
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;