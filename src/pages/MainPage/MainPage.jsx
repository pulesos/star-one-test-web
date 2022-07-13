import CurrentEvents from "../../components/CurrentEvents/CurrentEvents"
import MenuBottom from "../../components/MenuBottom/MenuBottom"
import PopularBrands from "../../components/PopularBrands/PopularBrands"
import PopularCategories from "../../components/PopularCategories/PopularCategories"
import PopularEvents from "../../components/PopularEvents/PopularEvents"
import { UserAuth } from "../../context/AuthContext" 


const MainPage = ({setModalActive, handleClick, loggedIn}) => {
    const {user, logOut} = UserAuth()
    return (
        <>
            {user ? 
                <>
                    <CurrentEvents/>
                    <PopularEvents handleClick={handleClick} loggedIn={loggedIn}/>
                    <PopularCategories/>
                    <PopularBrands/>
                    <MenuBottom/>
                </>
                :
                <>
                    <PopularEvents setModalActive={setModalActive} loggedIn={loggedIn}/>
                    <PopularCategories/>
                    <PopularBrands/>
                    <MenuBottom/>
                </>
            }    
        </>
    )
}

export default MainPage