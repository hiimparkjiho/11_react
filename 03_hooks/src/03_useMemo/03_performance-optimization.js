import { useMemo, useState } from "react";

const hardCalculator = (num) => {
    console.log("어려운 계산기");

    for(let i = 0; i < 19999999; i++){

    }
    return num + 10000;
}


const easyCalculator = (num) => {
    console.log("쉬운 계산기");
    
    return num +1;
}

const UseMemoComponent = () => {
    const [hardNumber, setHardNumber] = useState(0);
    const [easyNumber, setEasyNumber] = useState(0);

    const hardSum = useMemo(() => {
        return hardCalculator(hardNumber);
    },[hardNumber]);    // hardNumber가 변경되면 useMemo의 값을 다시 

    const easySum = useMemo(() => {
        return easyCalculator(easyNumber);
    }, [easyNumber]);

    return (
        <>
            <input
                type="number"
                value={hardNumber}
                onChange={e => setHardNumber(parseInt(e.target.value))}
            />
            <span>+ 1000000 = {hardSum}</span>
            <h3>쉬운 계산기</h3>

            <input
                type="number"
                value={easyNumber}
                onChange={e => setEasyNumber(parseInt(e.target.value))}
            />
            <span>+ 1 = {easySum}</span>
        </>
    );
}

export default UseMemoComponent;