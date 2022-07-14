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
import { UserAuth } from '../../context/AuthContext'
import GoogleButton from 'react-google-button'
import PhoneInput from 'react-phone-number-input'

const Modal = ({modalActive, setModalActive, user, setUser, setLoggedIn, handleSignOut, handleCallbackResponse}) => {
    // const [user, setUser] = useState({})
    let countryCode = '+7'
    const [register, setRegister] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [number, setNumber] = useState(countryCode)
    const [otp, setOtp] = useState('') 
    const [flag, setFlag] = useState(false) 
    const [confirmObj, setConfirmObj] = useState('')
    const [registerByPhone, setRegisterByPhone] = useState(false)

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

    // const signIn = async() => {
    //     const response = await registration(email, password)
    //     loginUsers.setLogin(loginUsers)
    //     loginUsers.setIsAuth(true)
    //     console.log(response)
    // }

    // const logIn = async() => {
    //     const response = await login(email, password)
    //     loginUsers.setLogin(loginUsers)
    //     loginUsers.setIsAuth(true)
    //     setLoggedIn(true)
    //     console.log(response)
    // }

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

    const {googleSignIn, createUser, signInEmail, setUpRecaptcha} = UserAuth()

    const handleGoogleSignIn = async() => {
        setModalActive(false)
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }

    const handleSignInEmail = async(e) => {
        e.preventDefault()
        setError('')
        setModalActive(false)
        try {
            await createUser(email, password)
        } catch(e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    const handleLogInEmail = async(e) => {
        e.preventDefault()
        setError('')
        setModalActive(false)
        try {
            await signInEmail(email, password)
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    const getOtp = async(e) => {
        e.preventDefault()
        try {
            const response = await setUpRecaptcha(number)
            console.log(response)
            setConfirmObj(response)
            setFlag(true)
        } catch(err) {
            setError(err.message)
        }
        console.log(number)
    }

    const verifyOtp = async(e) => {
        e.preventDefault()
        console.log(otp)
        try {
            await confirmObj.confirm(otp)
            setModalActive(false)
        } catch(err) {
            setError(err.message)
        }
    }

    const toggleRegisterByPhone = () => {
        setRegisterByPhone(!registerByPhone)
    }

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
                    {register ?
                        <>
                            <form className="form-signin" onSubmit={handleLogInEmail}>

                            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='form-control__modal'/>
                            <input type="password" placeholder='Пароль' onChange={(e) => setPassword(e.target.value)} className='form-control__modal'/>
                            <button type='submit' className='enter'>Войти</button>
                            <button type='button' className='register' onClick={() => setRegister(false)}>Зарегистрироваться</button>
                            </form>

                        </>

                        :
                        <>
                            <form className="form-signin" onSubmit={handleSignInEmail}>

                            <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} className='form-control__modal'/>
                            <input type="password" placeholder='Пароль'  onChange={e => setPassword(e.target.value)} className='form-control__modal'/>
                            <input type="password" placeholder='Введите пароль ещё раз' className='form-control__modal'/>
                            <button type='button' className='enter' onClick={() => setRegister(true)}>Войти</button>
                            <button type='submit' className='register'>Зарегистрироваться</button>
                            </form>

                        </>
                        
                    }
                    <div id="firebaseui-auth-container"></div>
                    <div className="btn__soc">
                        <button className='btn btn-primary' onClick={toggleRegisterByPhone}>
                            {/* <img src={facebook} height='25' alt='facebook' className='btn__img'/> */}
                            Войти по номеру телефона
                        </button>
                        <div className="signin-phone" style={{display: registerByPhone ? 'block' : 'none'}}>
                            <form className='form-signin' onSubmit={getOtp} style={{display: !flag ? 'block' : 'none'}}>
                                {/* <input type="tel" onChange={(e) => setNumber(e.target.value)}/> */}
                                <PhoneInput value={number} onChange={setNumber}/>
                                <div className="button-right">
                                    <button className='register__phone__btn'>Отправить код</button>
                                </div>
                                <div id="recaptcha-container"></div>
                            </form>
                            <form className='form-signin' onSubmit={verifyOtp} style={{display: flag ? 'block' : 'none'}}>
                                <input type="text" placeholder='Введите код' onChange={(e) => setOtp(e.target.value)} className='register__phone__input'/>
                                <div className="button-right">
                                    <button className='register__phone__btn' onClick={() => setFlag(false)}>Отправить</button>
                                </div>
                            </form>
                        </div>
 
                        {/* <a className='btn btn-light'>
                            <img src={googlePic} height="25" alt="google" className='btn__img'/> 
                            <span className="googl2">Войти с помощью Google</span>
                        </a> */}
                        {/* <div id="signInDiv"></div> */}
                        <GoogleButton onClick={handleGoogleSignIn} label='Войти с помощью GMail' style={{width: '296px'}}/>
                        {/* { Object.keys(user).length != 0 &&
                            <button onClick={(e) => handleSignOut(e)}>Выйти</button>
                        }
                        { user &&
                            <div>
                                <h3>{user.name}</h3>
                            </div>
                        } */}
                        {/* <button className='btn btn-dark' disabled>
                            <img src={apple} height="25" alt="apple" className='btn__img'/>
                            Войти с помощью email
                        </button> */}
                    </div>
                    <br/>
            </div>
        </div>
    )
}

export default Modal