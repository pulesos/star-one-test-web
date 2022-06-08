import './CurrentEventsItem.scss'

const CurrentEventsItem = () => {
    const items = [
        {id: 1, title: 'Apple iPhone 13 Pro Max 256Gb (небесно-голубой)', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
        {id: 2, title: '500 Stars', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
        {id: 3, title: 'Sony PlayStation 5 Digital Edition  ', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'}

    ]
    return (
        <>
        <div className='current__events__wrapper'>
            {items.map(item => 
                <div className="current__events__hot-price__item">
                        <div className="current__events__hot-price">
                            <h5 className="current__events__card-title__large">Hot Price</h5>
                        </div>
                        <div className="current__events__image">
                            <img src={item.avatar} alt='user' className="rounded-circle" width='75' height='75'/>
                        </div>
                        <div className="current__events__info">
                            <h4 className="current__events__title__middle">{item.title}</h4>
                        </div>
                        
                        <div className="current__events__timer">
                            <span>00:00</span>
                        </div>
                        
                        <button className="btn current__events__btn-green">СДЕЛАТЬ ХОД</button>
                </div>
                
            )}
            </div>
        </>
    )
}

export default CurrentEventsItem