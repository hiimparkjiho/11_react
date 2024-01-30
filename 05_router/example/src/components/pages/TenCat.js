import React, { useState } from "react";

const TenCat = () => {
  const [catImages, setCatImages] = useState([]);

  const onClickHandler = async () => {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
      const data = await response.json();

      setCatImages(data.map(cat => cat.url));
     
  };

  return (
    <div>
      <button onClick={onClickHandler}>10마리 출력!</button>
      <div>{catImages.map((url, index) => (
        <img key={index} src={url} alt={`Cat ${index + 1}`} style={{ width: '300px', marginTop: '10px' }} />
      ))}</div>
    </div>
  );
};

export default TenCat;