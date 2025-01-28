import { productsData } from "../../data/products"
import CategoryFeature from "../categoryFeature/CategoryFeature"

const HeroCablesFeature= ({ products, category }) => {

const FilteredProducts = productsData.filter((product) => product.category === "automatic-gates-and-doors")

const featuresList = [
    "Universal TV Wall Mount 15-43 Inch Flat Panel",
    "Bracket (37' - 70') - New Star Model",
    "telescopic retractable wall bracket",
    "LED LCD TV wall Brackets",
    "Flat Panel Tv Wall Mounts",
    "desktop Mounts",
    "hot sale",
    "tv trolleys",
];


    return (
        <CategoryFeature
        title="AUDIO STUDIO WIRELESS"
        description="Hear the music Not the noice"
        imageUrl="/categories/cctv.png"
        products={FilteredProducts}
        viewAllLink="/products/automatic-gates-and-doors"
        imagePosition="right"
        backgroundColor="bg-gray-100"
        featureslist={featuresList}
    />
    )
}


export default HeroCablesFeature