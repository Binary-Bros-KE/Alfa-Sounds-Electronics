import BlogFeature from "../../components/blogFeature/BlogFeature";
import CategoriesSlider from "../../components/categoriesSlider/CategoriesSlider";
import HelpFeature from "../../components/helpFeature/HelpFeature";
import HeroCablesFeature from "../../components/heroCablesFeature/HeroCablesFeature";
import BracketsFeature from "../../components/BracketsFeature/BracketsFeature";
import HeroFeatures from "../../components/heroFeature/heroFeatures";
import HeroSlider from "../../components/heroSlider/HeroSlider";
import TabsCarousel from "../../components/tabsCarousel/TabsCarousel";
import HeroStatic from "../../components/heroStaticimage/HeroStaticImage";

const Home = () => {
    return (
        <section className="hero-section">
            <div className="hero-slider">
                <HeroSlider />
            </div>
            <div className="hero-categories eakha-container">
                <CategoriesSlider />
            </div>

            <div className="carousel-tabs">
                <TabsCarousel defaultTab={'aerials-and-satellites'}/>
            </div>

            <div className="hero-feature eakha-container">
                <HeroFeatures />
            </div>

            <div className="hero-CCTV-feature">
                <BracketsFeature />
            </div>

            <div className="carousel-tabs">
                <TabsCarousel defaultTab={'routers-and-receivers'}/>
            </div>

            <div className="home-static-image-feature">
                <HeroStatic />
            </div>

            <div className="hero-cables-feature">
                <HeroCablesFeature />
            </div>

            <div className="carousel-tabs">
                <TabsCarousel defaultTab={`cables-and-connectors`}/>
            </div>

            <div className="home-blog-feature eakha-container">
                <BlogFeature />
            </div>

            <div className="hero-help-feature eakha-container">
                <HelpFeature />
            </div>
        </section>
    )
}

export default Home;