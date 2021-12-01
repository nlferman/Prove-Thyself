import './footers.css';
import GPT3 from '../../images/GPT-3.svg';

const Footer = () => {
    return (
        <section id='#Library' className='footer-container flex flex-col'>
            <div className='title flex flex-col'>
                <p className='gradient-text'>Do you want to step in to the future before others</p>
                <a href='#'>Request Early Access</a>
            </div>
            <div className='links flex'>
                <div className='GTP-3-container flex flex-col'>
                    <img src={GPT3} alt='GTP-3'></img>
                    <p className='address'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className='links-col flex flex-col'>
                    <label>Links</label>
                    <a href='#'>Overons</a>
                    <a href='#'>Social Media</a>
                    <a href='#'>Counters</a>
                    <a href='#'>Contact</a>
                </div>
                <div className='links-col flex flex-col'>
                    <label>Company</label>
                    <a href='#'>Terms & Conditions</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Contact</a>
                </div>
                <div className='links-col flex flex-col'>
                    <label>Get in touch</label>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <a href='tel:085-132567'>085-132567</a>
                    <a href='mailto:info@payme.net'>info@payme.net</a>
                </div>
            </div>
            <div className='copyright flex'>
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer;