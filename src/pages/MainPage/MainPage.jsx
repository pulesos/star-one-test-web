import MenuBottom from "../../components/MenuBottom/MenuBottom"
import PopularBrands from "../../components/PopularBrands/PopularBrands"
import PopularCategories from "../../components/PopularCategories/PopularCategories"
import PopularEvents from "../../components/PopularEvents/PopularEvents"


const MainPage = () => {
    return (
        <>
            <PopularEvents/>
            <PopularCategories/>
            <PopularBrands/>
            <MenuBottom/>
        </>
    )
}

export default MainPage