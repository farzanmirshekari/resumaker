/* eslint-disable react/jsx-pascal-case */
import { Skills } from "../../models/interface-models";
import Input_Field from "../micro_components/Input_Field";

interface Props {
    item: Skills;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Skills_Input_Group ( { item, onInputChange } : Props ) {

    const { programming_languages, frameworks, tools, certifications } = item;

    return (
        <div className = 'flex flex-col gap-1 input_form_group'>
            <Input_Field 
                label = "Programming Languages"
                value = {programming_languages}
                name = "programming_languages"
                onChange={onInputChange}
            />
            <Input_Field 
                label = "Frameworks"
                value = {frameworks}
                name = "frameworks"
                onChange={onInputChange}
            />
            <Input_Field 
                label = "Tools"
                value = {tools}
                name = "tools"
                onChange={onInputChange}
            />
            <Input_Field 
                label = "Certifications"
                value = {certifications}
                name = "certifications"
                onChange={onInputChange}
            />
        </div>
    )

}

export default Skills_Input_Group;