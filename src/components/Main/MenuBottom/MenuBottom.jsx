import winnersDark from '../../../assets/images/winners-dark.svg'
import archiveDark from '../../../assets/images/archive-dark.svg'
import question from '../../../assets/images/question.svg'
import companyDark from '../../../assets/images/company-dark.svg'
import quest from '../../../assets/images/quest.svg'
import './MenuBottom.scss'

const MenuBottom = () => {
    return (

        <div className="menu-bottom mb-3">
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6">
                            <a className="btn action-btn mb-3" href="#">
                                <div className="action-btn__border">
                                    <div className="action-btn__content d-flex justify-content-center align-items-center h-100 text__middle">
                                        <img src={winnersDark} className="mr-2" /> Победители
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a className="btn action-btn mb-3" href="#">
                                <div className="action-btn__border">
                                    <div className="action-btn__content d-flex justify-content-center align-items-center h-100 text__middle">
                                        <img src={archiveDark} className="mr-2" /> Архив
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <a className="btn action-btn mb-3" href="#">
                                <div className="action-btn__border">
                                    <div className="action-btn__content d-flex justify-content-center align-items-center h-100 text__middle">
                                        <img src={question} className="mr-2" /> Как это работает
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a className="btn action-btn mb-3" href="#">
                                <div className="action-btn__border">
                                    <div className="action-btn__content d-flex justify-content-center align-items-center h-100 text__middle">
                                        <img src={companyDark} className="mr-2" /> О нас
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="box-card">
                        <div className="box-card__border">
                            <div className="box-card__content">
                                <h5 className="text__middle bold">
                                    <a href="#">Ящик желаний</a>
                                </h5>
                                <a data-number="1" href="#" className="card__question">
                                    <img src={quest} height="25" alt="question" />
                                </a>
                                <div data-number="1" className="answer">prompt</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBottom