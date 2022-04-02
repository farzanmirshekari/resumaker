import Skill_Item from './../individual_items/Skill_Item';

interface Props {
    programming_languages: string;
    frameworks: string;
    tools: string;
    certifications: string;
}

function Skills ( { programming_languages, frameworks, tools, certifications } : Props ) {
    return (
        <div className = '-mt-1 w-full flex flex-col items-start gap-2'>
            <h3 className = '-mb-2.5 lighter section_header'><p className = 'translate-y-0.5'>SKILLS</p></h3>
            <div className = 'horizontal_divider'></div>
            <div className = '-translate-y-1 text-base'>
                <Skill_Item title='Languages' values={programming_languages}/>
                <Skill_Item title='Frameworks' values={frameworks}/>
                <Skill_Item title='Tools' values={tools}/>
                <Skill_Item title='Certifications' values={certifications}/>
            </div>
        </div>
    )
}

export default Skills;