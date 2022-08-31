import React from "react";
import { Link } from "react-router-dom";

class Contacts extends React.Component{
    render(){
        return(
            <div id="contacts"class="contact-head-sec r-bg-a pt85 pb120">
                <div class="container">
                    <div class="row pt80">
                        <div class="col-lg-5 vcenter">
                            <div class="page-headings">
                                <span class="sub-heading mb15">
                                    <i class="fas fa-headset mr5"></i>
                                    Давайте свяжемся
                                </span>
                                <h1 class="mb15">Хорошие разговоры делают хорошие проекты</h1>
                                <p>Мы будем рады связаться с вами, пожалуйста, заполните форму ниже или напишите нам ваши требования.</p>
                            </div>
                        </div>
                        <div class="col-lg-7 vcenter">
                            <div class = "row">
                                <div class="col-lg-6 m-mt30">
                                    <div class="contact-details-block">
                                        <div class="ree-row-set">
                                            <div class="ree-icon-set dtb-icon">
                                                <i class="fas fa-phone-alt"></i>
                                            </div>
                                            <div class="ree-details-set dtb-details">
                                                <span>Номер</span>
                                                <a href="tel:+7(995)577-51-63">+7(995)577-51-63</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 m-mt30">
                                    <div class="contact-details-block">
                                        <div class="ree-row-set">
                                            <div class="ree-icon-set dtb-icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div class="ree-details-set dtb-details">
                                                <span>Адрес</span>
                                                <a href="#">
                                                    
                                                    Орловская улица, 40А Минск, Беларусь
                                                </a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class = "row mt30">
                                <div class="col-lg-6">
                                    <div class="contact-details-block">
                                        <div class="ree-row-set">
                                            <div class="ree-icon-set dtb-icon">
                                                <i class="fas fa-envelope"></i>
                                            </div>
                                            <div class="ree-details-set dtb-details">
                                                <span>Email</span>
                                                <a href="mailto:sales@veon-tech.by">sales@veon-tech.by</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="col-lg-6 m-mt30">
                                    <div class="contact-details-block">
                                        <div class="ree-row-set">
                                            <div class="ree-icon-set dtb-icon">
                                                <i class="fas fa-envelope"></i>
                                            </div>
                                            <div class="ree-details-set dtb-details">
                                                <span>HR Department</span>
                                                <a href="#">hr@example.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts;