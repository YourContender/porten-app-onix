import Brands     from "../components/brands/Brands";
import Commercial from "../components/commercial/Commercial";
import Content    from "../components/content/Content";
import Features   from "../components/features/Features";
import Footer     from "../components/footer/Footer";
import Promo      from "../components/promo/Promo";

const HomePage = () => {
    return (
        <div>
            <Promo/>
            <Content/>
            <Features/>
            <Commercial/>
            <Brands/>
            <Footer/>
        </div>
    );
}

export default HomePage;