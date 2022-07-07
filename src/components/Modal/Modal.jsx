import userDark from '../../assets/images/user-dark.svg'
import facebook from '../../assets/images/facebook.svg'
import googlePic from '../../assets/images/google.svg'
import apple from '../../assets/images/apple.svg'
import close from '../../assets/images/close.svg'
import './Modal.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
// import { useLocation } from 'react-router-dom'
// import { LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts'
import { registration, login } from '../../http/userAPI'
import { Context } from '../../index'

const Modal = ({modalActive, setModalActive, user, setUser, setLoggedIn, handleSignOut, handleCallbackResponse}) => {
    // const [user, setUser] = useState({})
    const [register, setRegister] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {loginUsers} = useContext(Context)
    // const location = useLocation()
    // const isLogin = location.pathname === LOGIN_ROUTE


    // const click = async () => {
    //     let data
    //     if (isLogin) {
    //         data = await login(email, password)
    //     } else {
    //         data = await registration(email, password)
    //         // console.log(data)
    //     }
    //     login.setLogin(login)
    //     login.setIsAuth(true)
    // }

    const signIn = async() => {
        const response = await registration(email, password)
        loginUsers.setLogin(loginUsers)
        loginUsers.setIsAuth(true)
        console.log(response)
    }

    const logIn = async() => {
        const response = await login(email, password)
        loginUsers.setLogin(loginUsers)
        loginUsers.setIsAuth(true)
        setLoggedIn(true)
        console.log(response)
    }

    // useEffect(() => {
    //     /* global google*/

    //     google.accounts.id.initialize({
    //         client_id: "567316206910-0fa69ilssoldc88j634bq53v5eo4tsk0.apps.googleusercontent.com",
    //         callback: handleCallbackResponse
    //     })

    //     google.accounts.id.renderButton(
    //         document.getElementById("signInDiv"),
    //         {theme: "outline", size: "large"}
    //     )

    //     google.accounts.id.prompt()
    // }, [])

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
                            <button type='button' className='enter' onClick={logIn}>Войти</button>
                            <button type='button' className='register' onClick={() => setRegister(false)}>Зарегистрироваться</button>
                        </>

                        :
                        <>
                            <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} className='form-control__modal'/>
                            <input type="password" placeholder='Пароль' value={password} onChange={e => setPassword(e.target.value)} className='form-control__modal'/>
                            <input type="password" placeholder='Введите пароль ещё раз' className='form-control__modal'/>
                            <button type='button' className='enter' onClick={() => setRegister(true)}>Войти</button>
                            <button type='button' className='register' onClick={signIn}>Зарегистрироваться</button>
                        </>
                        
                    }
                    <div id="firebaseui-auth-container"></div>
                    <div className="btn__soc">
                        <button className='btn btn-primary' disabled>
                            <img src={facebook} height='25' alt='facebook' className='btn__img'/>
                            Войти по номеру телефона
                        </button>
                        <a className='btn btn-light'>
                            <img src={googlePic} height="25" alt="google" className='btn__img'/> 
                            <span className="googl2">Войти с помощью Google</span>
                        </a>
                        {/* <div id="signInDiv"></div> */}
                        {/* { Object.keys(user).length != 0 &&
                            <button onClick={(e) => handleSignOut(e)}>Выйти</button>
                        }
                        { user &&
                            <div>
                                <h3>{user.name}</h3>
                            </div>
                        } */}
                        <button className='btn btn-dark' disabled>
                            <img src={apple} height="25" alt="apple" className='btn__img'/>
                            Войти с помощью email
                        </button>
                    </div>
                    <br/>
                </form>
            </div>
        </div>
    )
}

export default Modal