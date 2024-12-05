import Bottombar from './compo/Bottombar.jsx'
import Mainbar from './compo/Mainbar.jsx'
import Sidebar from './compo/Sidebar.jsx'
import './style.css'

function App() {

  return (
    <>
      <div id="main">
        <div id="top">
            <Sidebar />
            <Mainbar />
        </div>
        <Bottombar />
        <div id="bottombar2"></div>
        <div id="triangle"></div>
    </div>
    </>
  )
}

export default App
