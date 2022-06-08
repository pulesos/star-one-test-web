import CurrentEvents from "../../components/CurrentEvents/CurrentEvents"
import MenuBottom from "../../components/MenuBottom/MenuBottom"
import PopularBrands from "../../components/PopularBrands/PopularBrands"
import PopularCategories from "../../components/PopularCategories/PopularCategories"
import PopularEvents from "../../components/PopularEvents/PopularEvents"


const MainPage = ({setModalActive}) => {
    const user = false
    return (
        <>
            {user ? 
                <>
                    <CurrentEvents/>
                    <PopularEvents/>
                    <PopularCategories/>
                    <PopularBrands/>
                    <MenuBottom/>
                </>
                :
                <>
                    <PopularEvents setModalActive={setModalActive}/>
                    <PopularCategories/>
                    <PopularBrands/>
                    <MenuBottom/>
                </>
            }    
        </>
    )
}

export default MainPage