import CategoriesSlider from "../../components/categoriesSlider/CategoriesSlider";
import HeroSlider from "../../components/heroSlider/HeroSlider";

const Home = () => {
    return (
        <section className="hero-section">
            <div className="hero-slider">
                <HeroSlider />
            </div>
            <div className="hero-categories eakha-container">
                <CategoriesSlider />
            </div>
        </section>
    )
}

export default Home;

