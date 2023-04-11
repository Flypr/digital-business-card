import './Footer.css';
import { twitterSvg, facebookSvg, instagramSvg, githubSvg } from '../../main.jsx';

function Footer() {
    return (
        <footer className="footer__wrapper">
            <ul className="footer__social_list">
                <li className="footer__social_item">
                    <a className="footer__social_item-link" href="https://twitter.com/Flypr6" target="_blank">
                        <img src={twitterSvg} alt="Twitter" />
                    </a>
                </li>
                <li className="footer__social_item">
                    <a className="footer__social_item-link" href="https://www.facebook.com/profile.php?id=100007257014723" target="_blank">
                        <img src={facebookSvg} alt="Facebook" />
                    </a>
                </li>
                <li className="footer__social_item">
                    <a className="footer__social_item-link" href="https://www.instagram.com/filipmihocas/" target="_blank">
                        <img src={instagramSvg} alt="Instagram" />
                    </a>
                </li>
                <li className="footer__social_item">
                    <a className="footer__social_item-link" href="https://github.com/Flypr" target="_blank">
                        <img src={githubSvg} alt="GitHub" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;