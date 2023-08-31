import React, { useState } from 'react'
import CalculatorForm1 from './CalculatorForm1'
import '../styles/calculatorMain.css'
import {motion} from 'framer-motion';

const CalculatorMain = () => {
    const [onUse1, setOnUse1] = useState(true);
    const [onUse2, setOnUse2] = useState(false);

    const [active1, setActive1] = useState("activeForm");
    const [active2, setActive2] = useState("");

    const onClickHandler1 = () => {
        if(onUse1 == false) {
            setOnUse1(true);
            setOnUse2(false);

            setActive1("activeForm")
            setActive2("")
        }
    };

    const onClickHandler2 = () => {
        if(onUse2 == false) {
            setOnUse2(true);
            setOnUse1(false);

            setActive2("activeForm")
            setActive1("")
        } 
    };

  return (
    <motion.div 
        layout 
        transition={{layout:{duration:1, type:"spring"}}}
        className='calc'>
        <center>
            <motion.div 
                layout="position"
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 1}}
                className='mainform'>
            <table style={{borderCollapse: "collapse"}}>
                <thead>
                    <td style={{}} className={active1}>
                        <div className='form1' onClick={onClickHandler1}>
                        <center><h3 style={{
                                color: "#4a4a4a"
                            }}>Crop Recommendation</h3></center>
                        </div>
                    </td>
                    <td className={active2}>
                        <div className='form2' onClick={onClickHandler2} 
                        >
                            {/* {onUse1? className={active}: className={'form2'}} */}
                            <center><h3 style={{
                                color: "#4a4a4a"
                            }}>What it does?</h3></center>
                        </div>
                    </td>
                </thead>
                <tr>
                    <td colSpan={2}>
                        <div>
                            {onUse1 && (
                                <CalculatorForm1 />
                            )}
                        </div>

                        <div>
                            {onUse2 && (
                                <div className='firstform' style={{paddingTop: "2%"}}>
                                    <div className='description'>
                                        <p>A farmer can engage in farming based on the knowledge of their soil type, the current season and water availability in their land, even without extensive knowledge about their soil</p>
                                        <ul style={{marginLeft:"5%"}}>
                                            <li>Name of the crop</li>
                                            <li>Machinery Required</li>
                                            <li>Capital Required</li>
                                            <li>Required Fertilizers</li>
                                        </ul>
                                        <p>Using this information, the farmer can choose crops that not only suit their land's conditions but also align with their additional considerations such as budget and available machinery.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </td>
                </tr>
            </table>
            </motion.div>
        </center>

    </motion.div>
  )
}

export default CalculatorMain