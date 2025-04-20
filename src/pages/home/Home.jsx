import BlogFeature from "../../components/blogFeature/BlogFeature";
import CategoriesSlider from "../../components/categoriesSlider/CategoriesSlider";
import HelpFeature from "../../components/helpFeature/HelpFeature";
import HeroCablesFeature from "../../components/heroCablesFeature/HeroCablesFeature";
import BracketsFeature from "../../components/BracketsFeature/BracketsFeature";
import HeroFeatures from "../../components/heroFeature/HeroFeatures";
import HeroSlider from "../../components/heroSlider/HeroSlider";
import TabsCarousel from "../../components/tabsCarousel/TabsCarousel";
import HeroStatic from "../../components/heroStaticimage/HeroStaticImage";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
    return (
        <section className="hero-section">
            <div className="hero-slider">
                <HeroSlider />
            </div>
            <div className="hero-categories eakha-container">
                <CategoriesSlider />
            </div>

            <div className="carousel-tabs eakha-container">
                <TabsCarousel defaultTab={'aerials-and-satellites'} />
            </div>

            <div className="hero-feature eakha-container">
                <HeroFeatures />
            </div>

            <div className="hero-CCTV-feature eakha-container">
                <BracketsFeature />
            </div>

            <div className="carousel-tabs eakha-container">
                <TabsCarousel defaultTab={'routers-and-receivers'} />
            </div>

            <div className="home-static-image-feature">
                <HeroStatic />
            </div>

            <div>
                <iframe
                    src="https://www.youtube.com/embed/oNI9SPdLbDs?si=OxABZCCpRulGIimh"
                    title="YouTube video player"
                    frameborder="0"
                    className="h-100 w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>

            <div className="hero-cables-feature eakha-container">
                <HeroCablesFeature />
            </div>

            <div className="carousel-tabs eakha-container">
                <TabsCarousel defaultTab={`cables-and-connectors`} />
            </div>

            <div className="home-blog-feature eakha-container">
                <BlogFeature />
            </div>

            <div className="testimonials-slider">
                <Testimonials />
            </div>

            <div className="hero-help-feature eakha-container">
                <HelpFeature />
            </div>

        </section>
    )
}

export default Home;