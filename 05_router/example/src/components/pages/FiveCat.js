import { useState } from "react"

const FiveCat = () => {
    const [catImage, setCatImage] = useState([]);

    const onClickHandler = async() => {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=5");
        const data = await response.json();

        setCatImage(data.map(cat => cat.url));
    };

    return(
        <div>
            <button onClick={onClickHandler}>고양이 5마리 출력</button>
            <div>{catImage.map((url, index) => (
        <img key={index} src={url} style={{ width: '300px', marginTop: '10px' }} />
      ))}</div>
        </div>
    )
}

export default FiveCat;