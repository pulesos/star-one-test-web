import userDark from '../../assets/images/user-dark.svg'
import close from '../../assets/images/close.svg'
import './Modal.scss'
import { useState } from 'react'
import { UserAuth } from '../../context/AuthContext'
import GoogleButton from 'react-google-button'
import PhoneInput from 'react-phone-number-input'


const Modal = ({modalActive, setModalActive}) => {
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


    const {googleSignIn, createUser, signInEmail, setUpRecaptcha} = UserAuth()

    const handleGoogleSignIn = async() => {
        setModalActive(false)
        try {
            await googleSignIn()
            // handleAdd()
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
            // handleAdd()
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
            // handleAdd()
        } catch(err) {
            setError(err.message)
        }
    }

    const toggleRegisterByPhone = () => {
        setRegisterByPhone(!registerByPhone)
    }

    // const handleAdd = async() => {
    //     await addDoc(collection(db, 'users'), {
    //         email: email,
    //         password: password,
    //         number: number
    //     })
    // }

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
                            Войти по номеру телефона
                        </button>
                        <div className="signin-phone" style={{display: registerByPhone ? 'block' : 'none'}}>
                            <form className='form-signin' onSubmit={getOtp} style={{display: !flag ? 'block' : 'none'}}>
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
                        <GoogleButton onClick={handleGoogleSignIn} label='Войти с помощью GMail' style={{width: '296px'}}/>
                    </div>
                    <br/>
            </div>
        </div>
    )
}

export default Modal