import './Saldo.scss'

const Saldo = ({total}) => {
    return (
        <div className="saldo__wrapper">
            <div className="saldo__info">
            <h4 className='saldo__title'>Все товары</h4>
                <div className="saldo__block">
                    <div className="saldo__cost__wrapper">
                        <h4 className="saldo__product">
                            Стоимость
                        </h4>
                        <h4>$ {total.price}</h4>
                    </div>
                    <div className="saldo__pay__wrapper">
                        <h4 className="saldo__product__pay">
                            К оплате
                        </h4>
                        <h4>$ {total.price}</h4>
                    </div>

                </div>
                <button className="btn btn-green saldo">Купить</button>
            </div>
        </div>
    )
}

export default Saldo