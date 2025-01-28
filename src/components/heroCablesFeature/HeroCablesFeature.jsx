import { productsData } from "../../data/products"
import CategoryFeature from "../categoryFeature/CategoryFeature"

const HeroCablesFeature= ({ products, category }) => {

const FilteredProducts = productsData.filter((product) => product.category === "automatic-gates-and-doors")


    return (
        <CategoryFeature
        title="AUDIO STUDIO WIRELESS"
        description="Hear the music Not the noice"
        imageUrl="/categories/cctv.png"
        products={FilteredProducts}
        viewAllLink="/products/automatic-gates-and-doors"
        imagePosition="right"
        backgroundColor="bg-gray-100"
    />
    )
}


export default HeroCablesFeature