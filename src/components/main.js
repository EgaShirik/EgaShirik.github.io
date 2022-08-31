import React from "react";

import jQuery from "jquery";
import PortfolioSlider from "./main/portfolio";
import Contacts from "./contacts/contacts";

(function ($) {
    function updateScroll() {
        if ($(window).scrollTop() >= 80) {
            $(".ree-header").addClass('sticky');
        } else {
            $(".ree-header").removeClass("sticky");
        }
    }
    $(function () {
        $(window).scroll(updateScroll);
        updateScroll();
    });
})(jQuery);

class Main extends React.Component {
    render() {
        const { portfolio } = this.props;

        return (
            <main>
                <section className="home-hero slide-hero">
                    <div className="hero-owl owl-carousel">
                        <div className="slide owlbg11" data-background="images/svg/svg-bg1.svg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 vcenter">
                                        <div className="hero-content-x">
                                            <h1 className="mb30" data-aos="fade-in" data-aos-delay="200"><span className="ree-tt">WEB-студия</span> полного цикла</h1>
                                            <p data-aos="fade-in" data-aos-delay="500">
                                                Создаем по-настоящему эффективные сайты: внедряем актуальные IT разработки, уделяем максимум внимания дизайну и юзабилити.
                                            </p>
                                            <button className="ree-btn  ree-btn-grdt1 mt40 mw-80" data-aos="fade-in"
                                                data-aos-delay="800">Получить консультацию</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 vcenter">
                                        <div className="sol-image m-mt30">
                                            <img src="images/svg/web-design.svg" alt="web development" className="img-fluid" data-aos="fade-in"
                                                data-aos-delay="400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="r-bg-i sec-pad digi-service">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="sec-heading text-center pera-block">
                                    <h2>Посмотрите, что мы можем <span className="ree-tt">Сделать</span> для <span className="ree-tt">Вас</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt30">
                            <div className="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay="100">
                                <div className="ree-card bhv-tt">
                                    <div className="creative-img reebga"><img src="images/svg/webdesign.svg" alt="App Development"
                                        className="img-fluid" /></div>
                                    <div className="creative-cntnt">
                                        <h4 className="mb15"><a href="service-details.html">Разработка сайтов</a></h4>
                                        <p>Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ</p>
                                        <a href="services.html" className="ree-card-link mt30">Узнать подробнее <i className="fas fa-arrow-right fa-btn"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay="400">
                                <div className="ree-card bhv-tt">
                                    <div className="creative-img reebgb"><img src="images/svg/appdesign.svg" alt="App Development"
                                        className="img-fluid" /></div>
                                    <div className="creative-cntnt">
                                        <h4 className="mb15"><a href="service-details.html">Поддержка сайтов</a></h4>
                                        <p>Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ</p>
                                        <a href="services.html" className="ree-card-link mt30">Узнать подробнее<i className="fas fa-arrow-right fa-btn"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay="700">
                                <div className="ree-card bhv-tt">
                                    <div className="creative-img reebgc"><img src="images/svg/content.svg" alt="App Development" className="img-fluid" />
                                    </div>
                                    <div className="creative-cntnt">
                                        <h4 className="mb15"><a href="service-details.html">Разработка ПО</a></h4>
                                        <p>Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ</p>
                                        <a href="services.html" className="ree-card-link mt30">Узнать подробнее<i className="fas fa-arrow-right fa-btn"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay="1000">
                                <div className="ree-card bhv-tt">
                                    <div className="creative-img reebgb"><img src="images/svg/appdesign.svg" alt="App Development" className="img-fluid" />
                                    </div>
                                    <div className="creative-cntnt">
                                        <h4 className="mb15"><a href="service-details.html">UX/UI дизайн</a></h4>
                                        <p>Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ</p>
                                        <a href="services.html" className="ree-card-link mt30">Узнать подробнее<i className="fas fa-arrow-right fa-btn"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay="100">
                                <div className="ree-card bhv-tt">
                                    <div className="creative-img reebgd"><img src="images/svg/strategy.svg" alt="App Development"
                                        className="img-fluid" /></div>
                                    <div className="creative-cntnt">
                                        <h4 className="mb15"><a href="service-details.html">Маркетинг</a></h4>
                                        <p>Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ</p>
                                        <a href="services.html" className="ree-card-link mt30">Узнать подробнее<i className="fas fa-arrow-right fa-btn"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="r-bg-x zup sec-pad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sec-heading text-center">
                                    <h2><span className="ree-text rt40">Технологии</span> с которыми мы работаем</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt30">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="icon-with-title">
                                    <a href="#">
                                        <div className="iwt-icon">
                                            <img src="images/icons/apple.svg" alt="Apple"></img>
                                        </div>
                                        <div className="iwt-content">
                                            <p>IOS</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="icon-with-title">
                                    <a href="#">
                                        <div className="iwt-icon">
                                            <img src="images/icons/android.svg" alt="Android"></img>
                                        </div>
                                        <div className="iwt-content">
                                            <p>Android</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="icon-with-title">
                                    <a href="#">
                                        <div className="iwt-icon">
                                            <img src="images/icons/flutterio-icon.svg" alt="Flutter"></img>
                                        </div>
                                        <div className="iwt-content">
                                            <p>Flutter</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="icon-with-title">
                                    <a href="#">
                                        <div className="iwt-icon">
                                            <img src="images/icons/java.svg" alt="JAVA"></img>
                                        </div>
                                        <div className="iwt-content">
                                            <p>JAVA</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="icon-with-title">
                                    <a href="#">
                                        <div className="iwt-icon">
                                            <img src="images/icons/physics.svg" alt="React Native"></img>
                                        </div>
                                        <div className="iwt-content">
                                            <p>React Native</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="icon-with-title">
                                    <a href="#">
                                        <div className="iwt-icon">
                                            <img src="images/icons/apple.svg" alt="Apple"></img>
                                        </div>
                                        <div className="iwt-content">
                                            <p>Python</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="icon-with-title">
                                    <a href="#">
                                        <div className="iwt-icon">
                                            <img src="images/icons/java.svg" alt="JAVA"></img>
                                        </div>
                                        <div className="iwt-content">
                                            <p>JAVA</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="icon-with-title">
                                    <a href="#">
                                        <div className="iwt-icon">
                                            <img src="images/icons/swift.svg" alt="Swift"></img>
                                        </div>
                                        <div className="iwt-content">
                                            <p>Swift</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="icon-with-title">
                                    <a href="#">
                                        <div className="iwt-icon">
                                            <img src="images/icons/pwa.svg" alt="PWA"></img>
                                        </div>
                                        <div className="iwt-content">
                                            <p>PWA</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <PortfolioSlider portfolio={portfolio} />
                <Contacts />
                <div className="location-home sec-pad">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="location-block- mt60">
                                    <div className="loc-icon-nam">
                                        <img src="/images/icons/minsk-belarus.jpg" alt="minsk-belarus" />
                                        <p><span className="ree-text rt40">Республика Беларусь</span></p>
                                    </div>
                                    <p className="pt20 pb20">220068, г. Минск, ул. Орловская, 40а, офис 40-1</p>
                                    <div className="loc-contct">
                                        <a href="https://yandex.by/maps/157/minsk/house/Zk4YcwJlSUEOQFtpfXVyc3prZQ==/?ll=27.555048%2C53.932681&z=16.81" target="blank" className="btn-outline rount-btn" title="Map Location"><i className="fas fa-map-marker-alt"></i></a>
                                        <a href="tel:+7(995)577-51-63" className="btn-outline rount-btn" title="Phone Number"><i className="fas fa-phone-alt"></i></a>
                                        <a href="mailto:sales@veon-tech.by" className="btn-outline rount-btn" title="Email Address"><i className="fas fa-envelope"></i></a>
                                        <a href="" target="blank" className="btn-outline rount-btn" title="Skype Id"><i className="fab fa-skype"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}


export default Main;