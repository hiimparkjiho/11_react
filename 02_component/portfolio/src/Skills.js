import React from 'react';
import SkillCategory from './SkillCategory';
import "./skillset.css";

function Skillset() {
    const backendSkills = ['Java', 'Spring'];
    const frontendSkills = ['HTML', 'CSS', 'Javascript', 'React'];
    const databaseSkills = ['MySQL'];
    const toolsSkills = ['Git', 'SourceTree'];

    return (
        <div className='skillSetDiv'>
            <div className='skillsFont'>Skills</div>

            <SkillCategory title='Back-end' skills={backendSkills} />
            <SkillCategory title='Front-end' skills={frontendSkills} />
            <SkillCategory title='DB' skills={databaseSkills} />
            <SkillCategory title='Tools' skills={toolsSkills} />

            <hr className='skillAppHr'/>
        </div>
    );
}

export default Skillset;