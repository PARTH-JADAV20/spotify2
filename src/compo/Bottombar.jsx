import img22 from '../img/bx_bxs-heart.png';
import img23 from '../img/Music Player Options.png';
import img24 from '../img/Right options.png';
import img25 from '../img/image11.png';
import './Bottombar.css'


function Bottombar() {
    return (
        <>
        <div id="bottombar">
            <div id="btmlft">
                <div id="btmlftimg"><img src={img25} alt="" height="80%"></img></div>
                <div id="btmlfttext">
                    <div id="text2">Dreaming On<div id="text3">NEFFEX</div></div>
                    
                </div>
                <div id="gheart"><img src={img22} alt="" height="40%"></img></div>
            </div>
            <div id="pause"><img src={img23} alt="" height="80%"></img></div>
            <div id="btmrgt"><img src={img24} alt="" height="40%"></img></div>
        </div>
        </>
    )
}

export default Bottombar