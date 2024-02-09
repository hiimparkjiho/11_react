import React from 'react';
import "./skillset.css";



function SkillCategory({ title, skills }) {
    return (
        <div className='skillCategoryDiv'>
            <div className='categoryTitle'>{title}</div>
            <hr className='skillHr'/>
            <div className='skillList'>
                {skills.map((skill, index) => (
                    <li className='skillName' key={index}>{skill}</li>
                ))}
            </div>
        </div>
    );
}

export default SkillCategory;