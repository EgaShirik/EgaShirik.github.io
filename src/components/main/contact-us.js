import React from "react";

class ContactUs extends React.Component {
    render() {
        return (
            <section className="home-contact pb120 contact-us__wrapper">
                <div className="container">
                    <div className="row zap">
                        <div className="col-right-a">
                            <div className="sec-heading fourc-up-a">
                                <span className="sub-heading mb15">Опрос</span>
                                <h2>Хотите<span className="ree-text rt40"> Связаться</span></h2>
                            </div>
                            <div className="home-contact-block">
                                <div className="contact-infos">
                                    <div className="c-infot">
                                        <span>Номер</span>
                                        <a href="tel:+7(995)577-51-63">
                                            <i className="fas fa-phone-alt"></i>
                                            +7(995)577-51-63
                                        </a>
                                    </div>

                                </div>
                                <div className="contact-infos">
                                    <div className="c-infot">
                                        <span>Email</span>
                                        <a href="mailto:sales@veon-tech.by">
                                            <i className="fas fa-envelope"></i>
                                            sales@veon-tech.by
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-right-b">
                            <div className="form-contact-hom fourc-up-b">
                                <div className="form-block">
                                    <div className="form-head">
                                        <h3>Заполните форму</h3>
                                    </div>
                                    <div className="form-body">
                                        <form action="#" method="post" name="feedback-form">
                                            <div className="fieldsets row">
                                                    <input type="text" placeholder="Полное Имя" name="name" ></input>
                                            </div>
                                            <div className="fieldsets row">
                                                    <input type="number" placeholder="Номер телефона" name="phone" ></input>
                                            </div>

                                            <div className="fieldsets">
                                                <textarea placeholder="Текст сообщения" name="message"></textarea>
                                            </div>
                                            <div className="fieldsets mt20">
                                                <button type="submit" name="submit" className="ree-btn  ree-btn-grdt1 w-100">
                                                    Отправить форму
                                                    <i className="fas fa-arrow-right fa-btn"></i>
                                                </button>
                                            </div>
                                            <p className="trm">
                                                <i className="fas fa-lock"></i>
                                                Мы не любим спам и уважаем Вашу конфиденциальность.
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactUs;