import userDark from '../../assets/images/user-dark.svg'
import facebook from '../../assets/images/facebook.svg'
import google from '../../assets/images/google.svg'
import apple from '../../assets/images/apple.svg'
import close from '../../assets/images/close.svg'
import './Modal.scss'
import { useState } from 'react'

const Modal = ({modalActive, setModalActive}) => {
    const [register, setRegister] = useState(false)

    return (
        <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
            <div className={modalActive ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
            <img src={close} className={modalActive ? 'modal__close active' : 'modal__close'} alt="close" width='25' onClick={() => setModalActive(false)}/>
            <div className="section__top">
            <img className="user__dark" src={userDark} alt="user" width="35" height="35" />
                {register ? 
                    <h3 className='section__title'>Вход</h3>
                    :
                    <h3 className='section__title'>Зарегистрироваться</h3>
                }
            </div>
                <form class="form-signin">
                    {register ?
                        <>
                            <input type="email" placeholder='Email' className='form-control__modal'/>
                            <input type="password" placeholder='Пароль' className='form-control__modal'/>
                            <button type='submit' className='enter' onClick={() => setRegister(false)}>Войти</button>
                            <button className='register disabled' disabled>Зарегистрироваться</button>
                        </>

                        :
                        <>
                            <input type="email" placeholder='Email' className='form-control__modal'/>
                            <input type="password" placeholder='Пароль' className='form-control__modal'/>
                            <input type="password" placeholder='Введите пароль ещё раз' className='form-control__modal'/>
                            <button className='enter disabled' disabled>Войти</button>
                            <button type='submit' className='register' onClick={() => setRegister(true)}>Зарегистрироваться</button>
                        </>
                        
                    }
                    <div id="firebaseui-auth-container"></div>
                    <div className="btn__soc">
                        <button className='btn btn-primary' disabled>
                            <img src={facebook} height='25' alt='facebook' className='btn__img'/>
                            Войти с помощью Facebook
                        </button>
                        <a className='btn btn-light'>
                            <img src={google} height="25" alt="google" className='btn__img'/> 
                            <span className="googl2">Войти с помощью Google</span>
                        </a>
                        <button className='btn btn-dark' disabled>
                            <img src={apple} height="25" alt="apple" className='btn__img'/>
                            Войти с помощью Apple
                        </button>
                    </div>
                    <br/>
                </form>
            </div>
        </div>
    )
}

export default Modal