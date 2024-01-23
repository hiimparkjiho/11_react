import React from 'react';
import "./projects.css";

function Projects(){
    return(
    <div>
        <div className='projectFont'>Project</div>
        <div className='projectDiv'> 
            <img className='projectImg' alt='프로젝트사진' src='img/petTales.PNG'></img>
            <div className='projectIntro'>
                <p>제목: petTales</p>
                <p>소개: 반려인들을 위한 반려견 동반 가능한 문화시설의 정보를 볼 수 있고 여행계획까지 짤 수 있는 사이트</p>
                
            </div>
        </div>
    </div>
    );
}

export default Projects;