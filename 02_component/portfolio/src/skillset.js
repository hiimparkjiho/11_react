import React from 'react';
import "./skillset.css";

function Skillset(){

    return(
        <div className='skillSetDiv'>
                <div className='skillsFont'>Skills</div>
                <div className='skillCategoryDiv'>
                    <div className='backEndDiv'>
                        <div className='backEndFont'>Back-end</div>
                        <hr className='skillHr'/>
                            <div className='skillList'>
                                <li className='skillName'>Java</li>
                                <li className='skillName'>Spring</li>
                                <li className='skillName'>MyBatis</li>
                                <li className='skillName'>JPA</li>
                            </div>
                    </div>
                    <div className='frontEndDiv'>
                        <div className='backEndFont'>Front-end</div>
                        <hr className='skillHr'/>
                            <div className='skillList'>
                                <li className='skillName'>HTML</li>
                                <li className='skillName'>CSS</li>
                                <li className='skillName'>Javascript</li>
                                <li className='skillName'>React</li>
                            </div>
                    </div>
                </div>
                <div className='skillCategoryDiv'>
                    <div className='DBDiv'>
                    <div className='backEndFont'>DB</div>
                        <hr className='skillHr'/>
                            <div className='skillList'>
                                <li className='skillName'>MySQL</li>
                            </div>
                    </div>
                    <div className='ToolsDiv'>
                        <div className='backEndFont'>Tools</div>
                        <hr className='skillHr'/>
                            <div className='skillList'>
                                <li className='skillName'>Git</li>
                                <li className='skillName'>SourceTree</li>
                                <li className='skillName'>Notion</li>
                            </div>
                    </div>
                </div>
                <hr className='skillAppHr'/>
        </div>
        
    )

}

export default Skillset;