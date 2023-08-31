import {React,useState, useEffect} from "react";
import './calculator.css'
import CalculatorMain from "../../components/CalculatorMain";
import CalculatorMain2 from "../../components/CalculatorMain2";
import bgvid from "../../widgets/bgvid2.mp4";
import calc_bg from "../../components/images/bgCalc.png";
import CalculatorMain3 from "../../components/CalculatorMain3";
import CalculatorMain4 from "../../components/CalculatorMain4";
import CalculatorCards from "../../components/CalculatorCards";

import axios from "axios";
const Calculator = () => {
    // const [data, setData] = useState('');

    // useEffect(() => {
    //     axios.get('http://localhost:5000/calculator')
    //         .then(response => setData(response.data.message))
    //         .catch(error => console.error(error));
    //     console.log(data);
    // }, []);

 
    return (
        <div className="parshu">
            <video className='calc-bg' muted autoPlay loop poster={calc_bg} id="bgvid">
                <source src={bgvid} type="video/mp4"/>
                Your Browser doesn't support the video tag.
            </video>
            <CalculatorMain />
            <CalculatorMain2 />
            <CalculatorMain3 />
            <CalculatorMain4 />
            <CalculatorCards />
        </div>
    )
}

export default Calculator;