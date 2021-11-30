import './caseStudies.css';
import Hole from '../../images/CaseStudies/01-Hole.png';
import Face from '../../images/CaseStudies/01-Face.png';
import Chain from '../../images/CaseStudies/01-Chain.png';
import ZeroOnes from '../../images/CaseStudies/01-01s.png';
import Caution from '../../images/CaseStudies/01-Caution.png';


const CaseStudies = () => {
    return (
        <section id='CaseStudies' className='case-studies-container flex flex-col'>
            <div className='title'>
                <label className='gradient-text'>A lot is happening, We are blogging about it.</label>
            </div>
            <div>
                <div className='articles-container grid'>
                    <div className='flex flex-col flex-spread hole'>
                        <img src={Hole} alt='Coded Black-Hole' />
                        <div className='article-backdrop'>
                            <div>
                                <p>Sep 26, 2021</p>
                                <label>GPT-3 and Open  AI is the future. Let us explore how it is?</label>
                            </div>
                            <a href='#'>Read Full Article</a>
                            
                        </div>
                    </div>
                    <div className='flex flex-col face'>
                        <img src={Face} alt='Code Face' />
                        <div className='article-backdrop'>    
                            <p>Sep 26, 2021</p>
                            <label>GPT-3 and Open  AI is the future. Let us explore how it is?</label>
                            <a href='#'>Read Full Article</a>
                        </div>
                    </div>
                    <div className='flex flex-col chain'>
                        <img src={Chain} alt='Coded Chain' />
                        <div className='article-backdrop'>    
                            <p>Sep 26, 2021</p>
                            <label>GPT-3 and Open  AI is the future. Let us explore how it is?</label>
                            <a href='#'>Read Full Article</a>
                        </div>
                    </div>
                    <div className='flex flex-col zero-ones'>
                        <img src={ZeroOnes} alt='Coded Zeroes and Ones' />
                        <div className='article-backdrop'>    
                            <p>Sep 26, 2021</p>
                            <label>GPT-3 and Open  AI is the future. Let us explore how it is?</label>
                            <a href='#'>Read Full Article</a>
                        </div>
                    </div>
                    <div className='flex flex-col caution'>
                        <img src={Caution} alt='Coded Caution Symbol' />
                        <div className='article-backdrop'>    
                            <p>Sep 26, 2021</p>
                            <label>GPT-3 and Open  AI is the future. Let us explore how it is?</label>
                            <a href='#'>Read Full Article</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudies;