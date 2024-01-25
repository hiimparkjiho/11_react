// 인풋창에 아무 텍스트를 입력하면 외계인 사진을 띄워주는 기능
import { useState } from "react";

const RandomImageSearch = ({ setImageUrl }) => {
    const [inputValue, setInputValue] = useState("");

    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    }

    const onClickHandler = () => {
        setImageUrl(`https://robohash.org/${inputValue}`);
    }

    const onClickHandler2 = () => {
        setImageUrl(`https://robohash.org/${inputValue}?set=set2`);
    }

    const onClickHandler3 = () => {
        setImageUrl(`https://robohash.org/${inputValue}?set=set3`);
    }

    const onClickHandler4 = () => {
        setImageUrl(`https://robohash.org/${inputValue}?set=set4`);
    }

    return (
        <>
            <input type="text" onChange={onChangeHandler} />
            <button onClick={onClickHandler}>확인</button><br/>
            <button onClick={onClickHandler2}>외계인</button><br/>
            <button onClick={onClickHandler3}>로봇</button><br/>
            <button onClick={onClickHandler4}>고양이</button><br/>
        </>
    );
}

const ImgBox = ({ imageUrl }) => {
    return !!imageUrl ? <img src={imageUrl} /> : <h1>입력해주세요</h1>;
}

const RandomImgContainer = () => {
    const [imageUrl, setImageUrl] = useState("");

    return (
        <>
            <RandomImageSearch setImageUrl={setImageUrl} />
            <ImgBox imageUrl={imageUrl} />
        </>
    );
}

export default RandomImgContainer;
