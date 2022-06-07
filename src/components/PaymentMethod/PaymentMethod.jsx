import visa from '../../assets/images/visa.svg'
import masterCard from '../../assets/images/mastercard.svg'
import mir from '../../assets/images/mir.svg'
import gPay from '../../assets/images/g-pay.svg'
import applePay from '../../assets/images/apple-pay.svg'
import webmoney from '../../assets/images/web-money.svg'
import neteller from '../../assets/images/neteller.svg'
import qiwi from '../../assets/images/qiwi.svg'
import './PaymentMethod.scss'

const PaymentMethod = () => {
    const items = [
        {id: 1, image: visa},
        {id: 2, image: masterCard},
        {id: 3, image: mir},
        {id: 4, image: gPay},
        {id: 5, image: applePay},
        {id: 6, image: webmoney},
        {id: 7, image: neteller},
        {id: 8, image: qiwi},
    ]
    return (
        <>
            <div className="pay">
                <div className="pay__wrapper">
                    {items.map(item => 
                        <div className="pay__item" key={item.id}>
                            <img src={item.image} alt='picture'/>
                        </div>
                    )}
                    
                </div>
            </div>
        </>
        
    )
}

export default PaymentMethod