import "./openai.css";
import VR_Lady from '../../images/OpenAI/VR_Lady_Full.png';

const openAI = () => {
    return (
        <section id='OpenAI' className='open-ai-container open-ai-background-bg flex'>
            <div className='top-container flex'>
                <div className='title-col flex flex-col'>
                    <label className='gradient-text title-size'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</label>
                    <a href='#' target='_blank'>Request Early Access To Get Started</a>
                </div>
                <div className='heading-col flex flex-col'>
                    <div className='flex gap-5'>
                        <div className='heading-title flex flex-col'>
                            <hr className='gradient-line'></hr>
                            <label className='label-title'>Improving end distrusts instantly</label>
                        </div>
                        <div className='mt-1'>
                            <label className='label-desc'>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</label>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='heading-title flex flex-col'>
                            <hr className='gradient-line mt'></hr>
                            <label className='label-title'>Become the tended active</label>
                        </div>
                        <div className='mt'>
                            <label className='label-desc'>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</label>
                        </div>
                    </div>
                    
                    <div className='flex gap-5'>
                        <div className='heading-title flex flex-col'>
                            <hr className='gradient-line mt'></hr>
                            <label className='label-title'>Message or am nothing</label>
                        </div>
                        <div className='mt'>
                            <label className='label-desc'>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</label>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='heading-title flex flex-col'>
                            <hr className='gradient-line mt'></hr>
                            <label className='label-title'>Really boy law county</label>
                        </div>
                        <div className='mt'>
                            <label className='label-desc'>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='middle-container flex'>
                <div className='feature-container flex'>
                    <div className='image'>
                        <img src={VR_Lady} alt='My Apps' />
                    </div>
                </div>
                <div className='content-container flex flex-col'>
                    <a className='blue-a' href='#' target='_blank'>Request Early Access To Get Started</a>
                    <p className='content-title gradient-text title-size'>The possibilities are beyond your imagination</p>
                    <p className='content-desc'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <a className='red-a' href='#' target='_blank'>Request Early Access To Get Started</a>
                </div>
            </div>
            <div className='bottom-container flex'>
                <div className='bottom-content gradient-bg flex'>
                    <div className='flex flex-col'>
                        <p className='desc'>Request Early Access to Get Started</p>
                        <p className='heading'>Register today & start exploring the endless possiblities.</p>
                    </div>
                    <div className='button-container'>
                        <button className='get-started-button'><label>Get Started</label></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default openAI;