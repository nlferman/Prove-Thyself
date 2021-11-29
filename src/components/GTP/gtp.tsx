import { BrowserRouter, Link } from 'react-router-dom';
import './gtp.css';

const GTP = () => {
    return (
        <section id='GTP' className='GTP gtp-background gtp-background-bg'>
            <div className='gtp-container flex'>
                <div className='what-is-container flex'>
                    <div className='what-is-title flex-column'>
                        <hr className='gradient-line'></hr>
                        <label>What is GTP-3</label>
                    </div>
                    <div className='flex'>
                        <p className='what-is-desc'>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
                    </div>
                </div>
                <div className='possibilities-container flex'>
                    <label className='possibilities-text gradient-text'>
                        The possibilities are beyond your imagination
                    </label>
                    <BrowserRouter><Link to='#' target='_blank'>Explore the Library</Link></BrowserRouter>
                </div>
                <div className='flex'>
                    <div className='extras-container flex flex-column'>
                        <div className='extras-title flex-column'>
                            <hr className='gradient-line'></hr>
                            <label>Chatbots</label>
                        </div>
                        <p className='extras-desc'>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
                    </div>
                    <div className='extras-container flex flex-column'>
                        <div className='extras-title flex-column'>
                            <hr className='gradient-line'></hr>
                            <label>Knowledgebase</label>
                        </div>
                        <p className='extras-desc'>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
                    </div>
                    <div className='extras-container flex flex-column'>
                        <div className='extras-title flex-column'>
                            <hr className='gradient-line'></hr>
                            <label>Education</label>
                        </div>
                        <p className='extras-desc'>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GTP;