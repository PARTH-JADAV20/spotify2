import img9 from '../img/top arrow navigation.png';
import img10 from '../img/User.png';
import img11 from '../img/Group 2.png';
import img12 from '../img/image4.png';
import img13 from '../img/image3.png';
import img14 from '../img/image1.png';
import img15 from '../img/image2.png';
import img16 from '../img/image9.png';
import img17 from '../img/image8.png';
import img18 from '../img/image7.png';
import img19 from '../img/image6.png';
import img20 from '../img/image5.png';
import img21 from '../img/image10.png';
import './Mainbar.css'


function Mainbar() {

    const data = [
        { id: 1, img:img11, title: 'Liked Songs', height:"100%" },
        { id: 2, img:img12, title: 'NEFFEX Playlist', height:"80%"},
        { id: 3, img:img13, title: 'K/DA', height:"80%"},
        { id: 4, img:img14, title: 'Liked Songs', height:"80%"},
        { id: 5, img:img15, title: 'Dance/Electronics Mix', height:"80%"},
    ];

    const data1 = [
        { id: 1, img:img16},
        { id: 2, img:img17},
        { id: 3, img:img18},
        { id: 4, img:img19},
        { id: 5, img:img20},
        { id: 5, img:img21},
    ];

    return (
        <>
            <div id="mainbar">
                <div id="upperrow">
                    <div><img src={img9} alt="" width="30%"></img></div>
                    <div><img src={img10} alt=""></img></div>
                </div>
                <div id="gm">
                    <div>Good moring</div>
                </div>
                <div id="favlist">
                    {/* <div className="list1">
                        <div><img src={img11} alt=""  height="100%"></img></div>
                        <div id="text11">Liked Songs</div>
                    </div>
                    <div  className="list1">
                        <div><img src={img12} alt="" height="80%"></img></div>
                        <div className="text1">NEFFEX Playlist</div>
                    </div>
                    <div  className="list1">
                        <div><img src={img13} alt="" height="80%"></img></div>
                        <div className="text1">K/DA</div>
                    </div>
                    <div  className="list1">
                        <div><img src={img14} alt="" height="80%"></img></div>
                        <div className="text1">Liked Songs</div>
                    </div>
                    <div  className="list1">
                        <div><img src={img15} alt="" height="80%"></img></div>
                        <div className="text1">Dance/Electronics Mix</div>
                    </div> */}
                    {data.map((i) => (
                        <div className="list1">
                            <div><img src={i.img} alt="" height={i.height}></img></div>
                            <div className="text1" >{i.title}</div>
                        </div>
                    ))}
                </div>
                <div id="gmm">
                    <div>Shows you might like</div>
                </div>
                <div id="songs">
                    {/* <div className="box1">
                        <div className="playimg"><img src={img16} alt="" className="imges"></img></div>
                        <div className="songtitle">Weekly Motivtion...</div>
                        <div className="singer">Parth Jadav</div>
                    </div>
                    <div className="box1">
                        <div className="playimg"><img src={img17} alt="" className="imges"></img></div>
                        <div className="songtitle">MEDITATION SELF</div>
                        <div className="singer">Parth Jadav</div>
                    </div>
                    <div className="box1">
                        <div className="playimg"><img src={img18} alt="" className="imges"></img></div>
                        <div className="songtitle">Words beyond act...</div>
                        <div className="singer">Parth Jadav</div>
                    </div>
                    <div className="box1">
                        <div className="playimg"><img src={img19} alt="" className="imges"></img></div>
                        <div className="songtitle">The Alexa Show</div>
                        <div className="singer">Parth Jadav</div>
                    </div>
                    <div className="box1">
                        <div className="playimg"><img src={img20} alt="" className="imges"></img></div>
                        <div className="songtitle">The Stories of Ma...</div>
                        <div className="singer">Parth Jadav</div>
                    </div>
                    <div className="box1">
                        <div className="playimg"><img src={img21} alt="" className="imges"></img></div>
                        <div className="songtitle">Motivtional daily b...</div>
                        <div className="singer">Parth Jadav</div>
                    </div> */}
                    {data1.map((j) => (
                        <div className="box1">
                            <div><img src={j.img} alt="" className="imges"></img></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Mainbar