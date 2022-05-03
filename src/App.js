import Header     from './components/header/Header';
import Nav        from './components/nav/Nav';
import Promo      from './components/promo/Promo';
import Content    from './components/content/Content';
import Features   from './components/features/Features';
import Commercial from './components/commercial/Commercial';
import Brands     from './components/brands/Brands';
import Footer     from './components/footer/Footer';
import './App.sass';

function App() {
    return (
        <>
            <Header/>
            <Nav/>
            <Promo/>
            <Content/>
            <Features/>
            <Commercial/>
            <Brands/>
            <Footer/>
        </>
    );
}

export default App;
