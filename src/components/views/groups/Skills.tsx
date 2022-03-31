import Skill_Item from './../individual_items/Skill_Item';

interface Props {
    programming_languages: string;
    frameworks: string;
    tools: string;
    certifications: string;
}

function Skills ( { programming_languages, frameworks, tools, certifications } : Props ) {
    return (
        <div>
            <h3>Skills</h3>
            <div>
                <Skill_Item title='Languages' values={programming_languages}/>
                <Skill_Item title='Frameworks' values={frameworks}/>
                <Skill_Item title='Tools' values={tools}/>
                <Skill_Item title='Certifications' values={certifications}/>
            </div>
        </div>
    )
}

export default Skills;