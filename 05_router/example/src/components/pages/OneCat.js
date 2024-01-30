import { useState } from "react"

const OneCat = () => {
    const [catImage, setCatImage] = useState(null);
    
    const onClickHandler = async() => {
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json();

        setCatImage(data[0]?.url);
    };

    return(
        <div>
            <button onClick={onClickHandler}>고양이 한마리 출력!</button>
            {catImage && <img src={catImage} alt="Cat" style={{ maxWidth: '100%' }} />}
        </div>
    )
}

export default OneCat;