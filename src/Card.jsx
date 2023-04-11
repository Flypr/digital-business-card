import Info from './components/Info/Info';
import About from './components/About/About';
import Interests from './components/Interests/Interests';
import Footer from './components/Footer/Footer';

function Card() {
    return (
        <div className="card__wrapper">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default Card;