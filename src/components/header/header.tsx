import { BrowserRouter as Router, Link } from 'react-router-dom';
import './header.css';
import Face from '../../images/Face.png';
import SocialIcons from '../../images/Social-Icons.png';
import Google from '../../images/google.png';
import Slack from '../../images/slack.png';
import Atlassian from '../../images/atlassian.png';
import Dropbox from '../../images/dropbox.png';
import Shopify from '../../images/shopify.png';

const Header = () => {
    return (
        <div className='header-container flex'>
            <div className='left-right-container flex'>
                <div className='header-right'>
                    <div className='text-container'>
                        <label className='header-title gradient-text'>Let's Build Something amazing with GPT-3 OpenAI</label>
                    </div>
                    <div className='text-container text-clamp'>
                        <label className='header-desc'>Yet bed any for travelling assistance indulgence unpleasing. 
                        Not thoughts all exercise blessing. 
                        Indulgence way everything joy alteration boisterous the attachment. 
                        Party we years to order allow asked of.</label>
                    </div>
                    <div className='flex header-start-container'>
                        <input className='header-input' placeholder='Your email address'></input><button className='header-button'>Get Started</button>
                    </div>
                    <div className='header-footer-container flex'>
                        <img className='header-social-icons' src={SocialIcons} alt='social icons'/><label className='header-footer-desc'>1,600 people requested access a visit in last 24 hours</label>
                    </div>
                </div>
                <div className='header-left'>
                    {/* <img className='face-image' src={Face} alt='Face'/> */}
                </div>
            </div>
            <div className='header-logos flex'>
                <div className='logos-container flex'>
                    <Router>
                        <Link to='#' className='logo-nav'><img className='logo-img' src={Google} alt='Google Link' /></Link>
                        <Link to='#' className='logo-nav'><img className='logo-img' src={Slack} alt='Slack Link' /></Link>
                        <Link to='#' className='logo-nav'><img className='logo-img' src={Atlassian} alt='Atlassian Link' /></Link>
                        <Link to='#' className='logo-nav'><img className='logo-img' src={Dropbox} alt='Dropbox Link' /></Link>
                        <Link to='#' className='logo-nav'><img className='logo-img' src={Shopify} alt='Shopify Link' /></Link>
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default Header;