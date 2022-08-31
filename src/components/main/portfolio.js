import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

class PortfolioSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allProjects: null
        }
    }

    componentDidMount() {
        const { portfolio } = this.props;
        const allProjects = portfolio.map(item => (
            item.content
        )).flat();

        this.setState({ allProjects: allProjects });
    }

    render() {
        const { allProjects } = this.state;

        const sliderSettings = {
            slidesToShow: 4,
            slidesToScroll: 1
        };

        return (
            <section className='main__portfolio'>
                <div className='portfolio__wrapper'>
                    <div className='heading-hz-btn'>
                        <span className='sub-heading mb15'>ПОРТФОЛИО</span>
                        <h2 className='w-txt'>Одни из наших <span className='ree-text rt40'>Лучших</span> Работ</h2>
                    </div>
                    <div className='mt60 mb60'>
                        <Slider {...sliderSettings}>
                            {allProjects && allProjects.map((project, i) => (
                                <div className='fwb-main-x fwb-a' key={i}>
                                    <div className='work-thumbnails'>
                                        <img src={project.img} alt='portfolio reevan' className='img-fluid' />
                                    </div>
                                    <div className='work-details'>
                                        <p className='mb10'>{project.type}</p>
                                        <h4>{project.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className='portfolio__footer'>
                        <h3 className='w-txt mr20'>Ознакомьтесь со списком наших работ</h3>
                        <Link to='/portfolio' className='ree-btn  ree-btn-grdt1 mw-80 no-shadows'>Смотреть всё <i className='fas fa-arrow-right fa-btn'></i></Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default PortfolioSlider;