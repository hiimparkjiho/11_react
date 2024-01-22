import { useState } from "react";

const hardCalculator = (num) => {

    for(let i = 0; i < 19999999; i++){

    }
    return num + 10000;
}


const easyCalculator = (num) => {
    
    return num +1;
}

const ComplexCalculator = () => {
    const [hardNumber, setHardNumber] = useState(0);
    const [easyNumber, setEasyNumber] = useState(0);

    const hardSum = hardCalculator(hardNumber);
    const easySum = easyCalculator(easyCalculator);

    return (
        <>
            <input
                type="number"
                value={hardNumber}
                onChange={e => setHardNumber(parseInt(e.target.value))}
            />
            <span>+ 1000000 = {hardSum}</span>

            <input
                type="number"
                value={easyNumber}
                onChange={e => setEasyNumber(parseInt(e.target.value))}
            />
            <span>+ 1 = {easySum}</span>
        </>
    );
}

export default ComplexCalculator;