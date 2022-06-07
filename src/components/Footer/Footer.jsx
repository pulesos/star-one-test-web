import Logotype from '../Header/Logotype/Logotype'
import appStore from '../../assets/images/app-store.svg'
import googlePlay from '../../assets/images/g-play.png'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
        <div className="row">
            <div className="col-md-2 order-md-0 order-2">        
            </div>
            <div className="col-md-2 order-md-0 order-2 starone">
                <div className="d-flex align-items-md-end justify-content-md-start justify-content-center h-100">
                    <p className="footer__text year">© 2022 Star.one</p>
                </div>
            </div>
            <div className="col-md-4 order-md-1 order-0">
                <div className="footer__center">
                    <Logotype/>
                </div>
            </div>
            <div className="col-md-4 order-md-2 order-1">
                <div className="footer__right">
                    <div className="footer__icons">
                        <a href="#">
                            <img src={appStore} height="50" alt="AppStore" />
                        </a>
                        <a href="#">
                            <img src={googlePlay} height="50" alt="Google Play" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer