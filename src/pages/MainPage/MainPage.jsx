import CurrentEvents from "../../components/CurrentEvents/CurrentEvents"
import MenuBottom from "../../components/MenuBottom/MenuBottom"
import PopularBrands from "../../components/PopularBrands/PopularBrands"
import PopularCategories from "../../components/PopularCategories/PopularCategories"
import PopularEvents from "../../components/PopularEvents/PopularEvents"
import { UserAuth } from "../../context/AuthContext" 


const MainPage = ({setModalActive, handleClick, loggedIn, products}) => {
    const {user} = UserAuth()
    return (
        <>
            {user ? 
                <>
                    <CurrentEvents/>
                    <PopularEvents handleClick={handleClick} loggedIn={loggedIn} products={products}/>
                    <PopularCategories/>
                    <PopularBrands/>
                    <MenuBottom/>
                </>
                :
                <>
                    <PopularEvents setModalActive={setModalActive} loggedIn={loggedIn} products={products}/>
                    <PopularCategories/>
                    <PopularBrands/>
                    <MenuBottom/>
                </>
            }    
        </>
    )
}

export default MainPage