import { useState } from "react";

import ReactDatamaps from "react-india-states-map";
import STATES from '../data/States.js'
import { Link } from "react-router-dom";

const IndiaMap = () => {
    

    const [activeState, setactiveState] = useState({
        data: STATES["Andhra Pradesh"],
        name: "Andhra Pradesh",
 
    });
    const as = `states/${activeState.name}`;

    const [stateLists, setStateLists] = useState(STATES);

    const stateOnClick = (data, name) => {
        setactiveState({ data, name });
    };

    return (    
        // <div className="container">
        
        <div className="row container">
        <img className="container-img" src={activeState.data.image}/>
            <ReactDatamaps
                regionData={stateLists}
                mapLayout={{
                    // hoverTitle: "Count",
                    noDataColor: "transparent",
                    borderColor: "white",
                    hoverBorderColor: "white",
                    hoverColor: "green",
                
                }}
                hoverComponent={({ value }) => {
                    return (
                        <>
                            <p className="hovertxt" style={{fontSize:"0.5rem"}}>{value.name}</p>
                        </>
                    );
                }}

                onClick={stateOnClick}
                activeState={activeState}
            />
            <div className="text" key={activeState.name}>
                <h1 className="fade-in-left">{activeState.name}</h1>
                
                <h2 className="fade-in-up" style={{fontWeight:"400"}}>Area : <span className="fade-in-up" style={{fontWeight:"300", fontSize:"1.2rem"}}>{activeState.data.Area}</span></h2>
                <h2 className="fade-in-up" style={{fontWeight:"400"}}>Production : <span className="fade-in-up" style={{fontWeight:"300", fontSize:"1.2rem"}}>{activeState.data.Production}</span></h2>
                <h2 className="fade-in-up" style={{fontWeight:"400"}}>Population : <span className="fade-in-up" style={{fontWeight:"300", fontSize:"1.2rem"}}>{activeState.data.Population}</span></h2>
                <h2 className="fade-in-up" style={{fontWeight:"400"}}>Key crops : <span className="fade-in-up" style={{fontWeight:"300", fontSize:"1.2rem"}}>{activeState.data.keyCrops}</span></h2>

                <Link to={as}><button className="button-28 fade-in-up" role="button"> Detailed Analysis</button></Link>
                
            </div>
        </div>
        
    );


};

export default IndiaMap;
