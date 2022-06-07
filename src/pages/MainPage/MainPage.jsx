import MenuBottom from "./MenuBottom/MenuBottom"
import PopularBrands from "./PopularBrands/PopularBrands"
import PopularCategories from "./PopularCategories/PopularCategories"
import PopularEvents from "./PopularEvents/PopularEvents"


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