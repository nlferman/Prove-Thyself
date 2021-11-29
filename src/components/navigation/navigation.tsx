import './navigation.css';
import GPT3 from '../../images/GPT-3.png';

const Navigation = () => {
    return (
        <div className='navbar flex'>
            <img className='logo' src={GPT3} alt='GPT-3'/>
            <div className='nav-container flex'>
                <nav>
                    <ul id='primary-navigation' className='primary-navigation flex'>
                        <li className='active'>
                            <a className='navigation-text' href='#'>Home</a>
                        </li>
                        <li>
                            <a className='navigation-text' href='#GTP'>What is GPT?</a>
                        </li>
                        <li>
                            <a className='navigation-text' href='#OpenAI'>OpenAI</a>
                        </li>
                        <li>
                            <a className='navigation-text' href='#CaseStudies'>Case Studies</a>
                        </li>
                        <li>
                            <a className='navigation-text' href='#Library'>Library</a>
                        </li>
                    </ul>
                </nav>
                <div className='sign-up'>
                    <label className='sign-in-text'>Sign in</label>
                    <button className='sign-up-btn'>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Navigation;