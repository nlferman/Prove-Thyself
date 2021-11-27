import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './navigation.css';
import GPT3 from '../../images/GPT-3.png';

const Navigation = () => {

    return (
        <BrowserRouter>
            <div className='navbar flex'>
                <img className='logo' src={GPT3} alt='GPT-3'/>
                <div className='nav-container flex'>
                    <nav>
                        <ul id='primary-navigation' className='primary-navigation flex'>
                            <li className='active'>
                                <Link className='navigation-text' to='#'>Home</Link>
                            </li>
                            <li>
                                <Link className='navigation-text' to='#GTP'>What is GPT?</Link>
                            </li>
                            <li>
                                <Link className='navigation-text' to='#OpenAI'>OpenAI</Link>
                            </li>
                            <li>
                                <Link className='navigation-text' to='#CaseStudies'>Case Studies</Link>
                            </li>
                            <li>
                                <Link className='navigation-text' to='#Library'>Library</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='sign-up'>
                        <label className='sign-in-text'>Sign in</label>
                        <button className='sign-up-btn'>Sign up</button>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Navigation;