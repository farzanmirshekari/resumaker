/* eslint-disable react/jsx-pascal-case */
import { Skills } from '../../interfaces/interface-models'
import Input_Field from '../micro_components/Input_Field'

interface Props {
    item: Skills
    on_input_change: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Skills_Input_Group({ item, on_input_change }: Props) {
    const { programming_languages, frameworks, tools, certifications } = item

    return (
        <div className="flex flex-col gap-2.5 input_form_group">
            <Input_Field
                label="Programming Languages"
                value={programming_languages}
                name="programming_languages"
                onChange={on_input_change}
            />
            <Input_Field
                label="Frameworks"
                value={frameworks}
                name="frameworks"
                onChange={on_input_change}
            />
            <Input_Field
                label="Tools"
                value={tools}
                name="tools"
                onChange={on_input_change}
            />
            <Input_Field
                label="Certifications"
                value={certifications}
                name="certifications"
                onChange={on_input_change}
            />
        </div>
    )
}

export default Skills_Input_Group
