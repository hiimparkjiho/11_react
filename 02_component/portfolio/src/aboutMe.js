import React from 'react';
import "./aboutMe.css";

function AboutMe(){

    return(
        <>
        <div id="aboutDiv">
            <p className="home">Home</p>
            <hr className='homeHr'/>
            <img src='img/jihoEmoji.png' alt='이모지 사진' className='imoteImg'></img>
            <p className='intro'>안녕하세요, 백엔드 개발자를 희망하는 박지호입니다.</p>
            <p className='about'>웹 개발자에 흥미를 느끼고 훌륭한 백엔드 개발자가 되기 위해 공부하고 있습니다.</p>
        </div>
        <hr className='endHr'/>
        </>
    )
}


export default AboutMe;