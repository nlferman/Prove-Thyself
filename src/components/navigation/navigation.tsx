import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {

    return (
        <BrowserRouter>
            <div className='navbar flex'>
                <label className='logo'>GPT-3</label>
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

            {/* <Routes>
                <Route path='/' element={<div></div>} />
                <Route path='/' element={<div></div>} />
            </Routes> */}
        </BrowserRouter>
    )
}

export default Navigation;