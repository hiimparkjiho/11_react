import { useEffect, useState } from "react"

const Quiz = () => {
    const [input, setInput] = useState("");
    const [isDone, setIsDone] = useState(false);

    const correct = "추적60분";

    const onChangeHandler = e => {
        setInput(e.target.value);
    }

    const onClickHandler = () => {
      if(input === !correct){
        setIsDone(false);
      }else{
        setIsDone(true);
      }
    }

    useEffect(() => {
        if(isDone === false){
            alert("오답");
        }else{
            alert("정답");
        }
        
    },[isDone])

    return (
        <>
        <h1>퀴즈쇼</h1>
        <p>문제: 비가 한 시간동안 오면?</p>
        <label> 정답 입력: <input type="text" value={input} onChange={onChangeHandler}/>
        <button onClick={onClickHandler}>확인</button>
        </label>
        </>
    )
}

export default Quiz;