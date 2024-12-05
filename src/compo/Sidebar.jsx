import img1 from '../img/Spotify logo.png';
import img2 from '../img/Home.png';
import img3 from '../img/Search.png';
import img4 from '../img/Your library.png';
import img5 from '../img/Create.png';
import img6 from '../img/Liked.png';
import img7 from '../img/your episodes.png';
import img8 from '../img/grommet-icons_install-option.png';
import './Sidebar.css'


function Sidebar() {

    const data = [
        { id: 1, img:img2, title: 'Home' },
        { id: 2, img:img3, title: 'Search'},
        { id: 3, img:img4, title: 'Your library' },
    ];

    const data2 = [
        { id: 1, img:img5, title: 'Create Playlist' },
        { id: 2, img:img6, title: 'Liked Songs'},
        { id: 3, img:img7, title: 'Your Episodes' },
    ];

    return (
        <>
            <div id="sidebar">
                <div id="logobar">
                    <img src={img1} alt=""></img>
                </div>
                <div id="homebar">
                    {/* <div className="logos">
                        <div><img src={img2} alt=""></img></div>
                        <div>Home</div>
                    </div>
                    <div className="logos">
                        <div><img src={img3} alt=""></img></div>
                        <div>Search</div>
                    </div>
                    <div className="logos">
                        <div><img src={img4} alt=""></img></div>
                        <div>Your library</div>
                    </div> */}
                    {data.map((i) => (
                        <div className="logos">
                            <div><img src={i.img} alt=""></img></div>
                            <div>{i.title}</div>
                        </div>
                    ))}
                </div>
                <div id="playbar">
                    {/* <div className="logos">
                        <div><img src={img5} alt=""></img></div>
                        <div>Create Playlist</div>
                    </div>
                    <div className="logos">
                        <div><img src={img6} alt=""></img></div>
                        <div>Liked Songs</div>
                    </div>
                    <div className="logos">
                        <div><img src={img7} alt=""></img></div>
                        <div>Your Episodes</div>
                    </div> */}
                    {data2.map((j) => (
                        <div className="logos">
                            <div><img src={j.img} alt=""></img></div>
                            <div>{j.title}</div>
                        </div>
                    ))}
                </div>
                <div id="favbar">
                    <div>FAV</div>
                    <div>Daily Mix1</div>                
                    <div>Discover Weekly</div>
                    <div>Malyalam</div>
                    <div>Dance/Electronic Mix</div>
                    <div>EDM/Popluar</div>
                </div>
                <div id="downbar">
                    <div className="downlogo">
                        <div><img src={img8} alt=""></img></div>
                        <div>Install App</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar