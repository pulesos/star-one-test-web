import quest from '../../assets/images/quest.svg'
import sony from '../../assets/images/sony.png'
import headphones from '../../assets/images/headphones.svg'
import smartphones from '../../assets/images/smartphones.svg'
import coin1 from '../../assets/images/coin1.jpg'
import {useParams} from 'react-router-dom'

const CategoriesDetailsPage = () => {
    const {id} = useParams()
    return (
        
        <h2>Categories page {id}</h2>
    )
}

export default CategoriesDetailsPage