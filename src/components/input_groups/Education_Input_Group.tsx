import { Education } from "../../models/interface-models";
import Input_Field from "../micro_components/Input_Field";

interface Props {
    item: Education;
    index: number;
    onInputArrayChange: (
        property: "experience" | "education" | "projects",
        index: number
    ) => (e : React.ChangeEvent<HTMLInputElement>) => void;
    onItemDelete: (
        property: "experience" | "education" | "projects",
        id: string
    ) => void;
    onItemAdd: () => void;
}

function Education_Input_Group ( { item, index, onInputArrayChange, onItemDelete, onItemAdd } : Props ) {
    
    const { id, education_institute, program, start_date, end_date, details } = item;

    console.log(details.length)
    console.log(details)

    return (
        <div key={index} className = 'flex flex-col gap-1 input_form_group'>  
            <Input_Field
                label = "Education Institute"
                value = {education_institute}
                name = "education_institute"
                onChange = {onInputArrayChange("education", index)}
            />
            <Input_Field
                label = "Program"
                value = {program}
                name = "program"
                onChange = {onInputArrayChange("education", index)}
            />
            <Input_Field
                label = "Start Date"
                value = {start_date}
                name = "start_date"
                onChange = {onInputArrayChange("education", index)}
            />
            <Input_Field
                label = "End Date"
                value = {end_date}
                name = "end_date"
                onChange = {onInputArrayChange("education", index)}
            />
            {
                details.map((details_item, index) => {
                    return (
                        <Input_Field
                            key = {index}
                            label = "Description"
                            value = {details_item}
                            name = "description"
                            onChange={onInputArrayChange("education", index)}
                        />
                    )
                })
            }
            <div className = 'flex gap-2 w-full h-10 justify-end mt-1 -translate-x-0.5'>
                <button type='button' className = 'form_button' onClick={() => onItemDelete("education", id)}>Delete</button>
                <button type='button' className = 'add_button form_button' onClick={onItemAdd}>Add</button>
            </div>
        </div>
    )

}

export default Education_Input_Group;