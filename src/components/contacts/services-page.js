import React from "react";
import { Link } from "react-router-dom";

class Services extends React.Component{
    render(){
        return(
            <div class="services-cover">
                <h1 class="services-title">УСЛУГИ</h1>
                <ul class="services-nav">
                    <li><Link to="/web-dev" id="s-choice">Разработка сайтов</Link></li>
                    <li><Link to="/web-support"  id="s-choice" class="services-choice">Поддержка сайтов</Link></li>
                    <li><Link to="/software-dev"  id="s-choice" class="services-choice">Разработка ПО</Link></li>
                    <li><Link to="/design"  id="s-choice" class="services-choice">UI/UX дизайн</Link></li>
                    <li><Link to="/marketing"  id="s-choice" class="services-choice">Маркетинг</Link></li>
                </ul>
                <p class="services-text">Наша компания предлагает услуги по разработке сайтов и приложений. Уникальный дизайн, а также легкость в использовании сайтов<br></br> 
                и приложений помогут привлечь Вам максимум клиентов. Созданием сайтов и приложений занимается команда молодых амбициозных <br></br>
                профессионалов.</p>
            </div>
        )
    }
}

export default Services;