import { useEffect, useState } from "react";

const PortfolioPage = ({ portfolio }) => {

    const [portfolioArray, setNewPortfolioArray] = useState(null);

    useEffect(() => {
        const allCategoryPortfolio = portfolio.map(item => (
            item.content
        )).flat();

        const newCategoryToPortfolioArray = {
            selected: true,
            path: 'all',
            title: 'все',
            content: allCategoryPortfolio
        };

        const newPortfolioArray = [newCategoryToPortfolioArray, ...portfolio];

        setNewPortfolioArray(newPortfolioArray);
    }, []);

    const handleToggleClick = e => {
        const { value } = e.target.dataset;

        const chosenPorfolioCategory = portfolioArray.map(item => (
            item.path === value ? { ...item, selected: true } : { ...item, selected: false }
        ));

        setNewPortfolioArray(chosenPorfolioCategory);
    }

    const handleOnMouseEnterCard = e => {
        const { id } = e.target.dataset;
        const mouseEnterPorfolioCard = portfolioArray.map(item => (
            item.selected ?
                {
                    ...item, content: item.content.map(card => (
                        card.id === +id ? { ...card, selected: true } : { ...card, selected: false }
                    ))
                }
                :
                { ...item }
        ))

        setNewPortfolioArray(mouseEnterPorfolioCard);
    }

    const handleOnMouseLeaveCard = () => {
        const mouseLeavePortfolioCard = portfolioArray.map(item => (
            item.selected ?
                {
                    ...item, content: item.content.map(card => (
                        { ...card, selected: false }
                    ))
                }
                :
                { ...item }
        ))

        setNewPortfolioArray(mouseLeavePortfolioCard);
    }

    return (
        <section>
            <section className="header-title head-opacity portfolio-page__title" data-background="images/banner/office.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <h1 className="mb15">НАШИ РАБОТЫ</h1>
                            <h2 className="mr50 mb15">Качество важнее количества</h2>
                        </div>
                    </div>
                </div>
            </section>
            <div className="sec-pad r-bg-a portfolio-page__main">
                <div className="container">

                    <div className="row portfolio__title">
                        <div className="col-lg-7 porfolio-toggle__wrapper">
                            {portfolioArray && portfolioArray.map((category, i) => (
                                <div className="port-ref-link" key={i}>
                                    <button className={`ree-btn ree-btn-grdt2 toggle ${category.selected ? 'active' : ''}`} data-value={category.path} onClick={handleToggleClick} key={i}>{category.title}</button>
                                </div>
                            ))}
                        </div>


                    </div>

                    <div className="row justify-content-center mt70">
                        {portfolioArray &&
                            portfolioArray.map(item => (
                                item.selected &&
                                item.content.map((card, i) => (
                                    <div className={`col-lg-3 col-md-6  col-sm-6 mt30 portfolio__card ${card.selected ? 'active' : ''}`}
                                        data-id={card.id}
                                        onMouseEnter={handleOnMouseEnterCard}
                                        onMouseLeave={handleOnMouseLeaveCard}
                                        key={i}
                                    >
                                        <div className="fwb-main-x fwb-a"  data-id={card.id}>
                                            <div className="work-thumbnails" data-id={card.id}>
                                                <img src={card.img} alt="portfolio reevan" className="img-fluid"  data-id={card.id} />
                                            </div>
                                            <div className="work-details" data-id={card.id}>
                                                <h4>{card.title}</h4>
                                                <div className={`work-details__footer ${card.selected ? 'visible' : ''}`}>
                                                    <p>Тип сайта: <span>{card.type}</span></p>
                                                    <p>Перечень работ: <span>{card.worksList}</span></p>
                                                    <p>Примененный стек технологий: <span>{card.techStack}</span></p>
                                                    <p>Срок разработки: <span>{card.devTime}</span></p>
                                                    <p>Стоимость аналогичного проекта: <span>{card.analogueProjectPrice}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioPage;