import { productsData } from "../../data/products"
import CategoryFeature from "../categoryFeature/CategoryFeature"

const HeroCCTV = ({ products, category }) => {

const getFilteredProducts = productsData.filter((product) => product.category === "routers-and-receivers")


    return (
        <CategoryFeature
            title="NEW AGE ELECTRIC SCOOTER"
            price="749"
            imageUrl="/categories/satellite.png"
            products={getFilteredProducts}
            viewAllLink="/products/routers-and-receivers"
            backgroundColor="bg-gray-100"
        />
    )
}


export default HeroCCTV