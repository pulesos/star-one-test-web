import { useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage'
import star from '../../assets/images/star-big.svg'
import CurrentEventItem from '../../components/CurrentEventItem/CurrentEventItem'

const CurrentEventPage = ({name}) => {
    const [timeLeft, setTimeLeft] = useLocalStorage('timer',  5 * 60)

    const getPadTime = (time) => time.toString().padStart(2, '0')
  
    const minutes = getPadTime(Math.floor(timeLeft / 60))
    const seconds = getPadTime(timeLeft - minutes * 60)
  
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 5 * 60))
        }, 1000)
        return () => clearInterval(interval) 
    }, [])


    return (
        <>
        <section className='popular__events'>
            <h3 className="events__title">
                <img className="mr-2" src={star} alt="top events" width="28" height="28" />
                <span>Событие закончится через {minutes}:{seconds}</span>
            </h3>
            <CurrentEventItem name={name} />
        </section>
    </>
    )
}

export default CurrentEventPage