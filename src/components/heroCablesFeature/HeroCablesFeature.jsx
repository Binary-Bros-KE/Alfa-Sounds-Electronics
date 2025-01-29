import { productsData } from "../../data/products"
import CategoryFeature from "../categoryFeature/CategoryFeature"

const HeroCablesFeature= ({ products, category }) => {

const FilteredProducts = productsData.filter((product) => product.category === "power-supply")

const featuresList = [
    "Seamless power management for recording and stage setups.",
    "High-performance RF & HDMI",
    "top-tier signal distribution.",
    "LED display for real-time monitoring",
    "High accuracy, stability, and efficient",
    "Compact yet powerful designs",
    "efficient cooling systems",
];


    return (
        <CategoryFeature
        title="Reliable Power Solutions for Every Application"
        imageUrl="/categories/power.png"    
        products={FilteredProducts}
        viewAllLink="/products/power-supply"
        imagePosition="right"
        backgroundColor="bg-gray-200"
        featureslist={featuresList}
    />
    )
}


export default HeroCablesFeature