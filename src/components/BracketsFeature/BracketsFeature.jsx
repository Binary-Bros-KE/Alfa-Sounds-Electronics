import { productsData } from "../../data/products"
import CategoryFeature from "../categoryFeature/CategoryFeature"

const BracketsFeature = () => {

const getFilteredProducts = productsData.filter((product) => product.category === "tv-screens-and-brackets")

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
            title="high quality LED TV wall mounts"
            imageUrl="/hero-features/brackets.png"
            products={getFilteredProducts}
            viewAllLink="/products/tv-screens-and-brackets"
            backgroundColor="bg-gray-100"
            featureslist={featuresList}
        />
    )
}


export default BracketsFeature