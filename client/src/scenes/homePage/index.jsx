import IndiaMap from "../../components/IndiaMap";
import Cards from "../../components/Cards";
import ReactBackbone from "../../components/reactBackbone";
import "./home.css";


import Carousels from "../../components/Carousels";
const HomePage = () => {
    return (
        <div className="home">
            <div className="home-bg"></div>
            <Carousels />
            <ReactBackbone/>
            <center>
            <iframe src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FCrop%2Bsummary&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="900" height="450" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            </center> 
            <IndiaMap />
            <Cards />
        </div>
    )
}

export default HomePage;