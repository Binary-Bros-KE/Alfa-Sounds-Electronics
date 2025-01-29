import { productsData } from "../../data/products"
import CategoryFeature from "../categoryFeature/CategoryFeature"

const BracketsFeature = () => {

const getFilteredProducts = productsData.filter((product) => product.category === "tv-screens-and-brackets")

const featuresList = [
    "Adjustable, durable, and easy-to-install TV brackets.",
    "Secure & Stylish TV Mounting Solutions",
    'Compatible with screen sizes (37" - 70").',
    "Space-saving designs.",
    "Free up desk space with sturdy desktop mounts.",
    "Shop now for the best deals",
    "tv trolleys",
];

    return (
        <CategoryFeature
            title="high quality LED TV wall mounts"
            imageUrl="/hero-features/brackets.png"
            products={getFilteredProducts}
            viewAllLink="/products/tv-screens-and-brackets"
            backgroundColor="bg-gray-200"
            featureslist={featuresList}
        />
    )
}


export default BracketsFeature