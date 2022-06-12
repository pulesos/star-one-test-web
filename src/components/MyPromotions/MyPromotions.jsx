import './MyPromotions.scss'

const MyPromotions = () => {
    const items = [
        {id: 1, date: '01/03/2022', name: 'Apple iPhone 13 Pro Max 256 Gb (серый космос)'},
        {id: 2, date: '01/03/2022', name: ' Сертификат STEAM 3 000'},
        {id: 3, date: '01/03/2022', name: 'Сертификат МВИДЕО 10 000'},
        {id: 4, date: '01/03/2022', name: 'Сертификат МВИДЕО 10 000'},
        {id: 5, date: '01/03/2022', name: ' Apple iPhone 11 Pro 64 Gb (розовый) '},
        {id: 6, date: '01/03/2022', name: 'Apple iPhone 13 Pro Max 256 Gb (серый космос)'},
        {id: 7, date: '01/03/2022', name: 'Apple Watch 7 44 mm (серый космос)'},
        {id: 8, date: '01/03/2022', name: 'Apple iPhone 13 Pro Max 256 Gb (серый космос)'}
    ]
    return (
        <div className="mypromotions__wrapper">
            {items.map(item => 
                <>
                    <div className="mypromotions__item" key={item.id}>

                        <div className="mypromotions__title">
                            <h5>{item.date}</h5>
                        </div>
                        <div className="mypromotions__name">
                            <h5>{item.name}</h5>
                        </div>

                    </div>
                </>      
            )}
        </div>
    )
}

export default MyPromotions