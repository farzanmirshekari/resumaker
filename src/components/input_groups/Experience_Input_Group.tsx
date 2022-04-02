import { Experience } from "../../models/interface-models";
import Input_Field from "../micro_components/Input_Field";

interface Props {
    item: Experience;
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

function Experience_Input_Group ( { item, index, onInputArrayChange, onItemDelete, onItemAdd } : Props ) {

    const { id, position, overview, start_date, end_date, details } = item;

    return (
        <div key={index} className = 'flex flex-col gap-1 input_form_group'>
            <Input_Field
                label = "Position"
                value = {position}
                name = "position"
                onChange = {onInputArrayChange("experience", index)}
            />
            <Input_Field
                label = "Overview"
                value = {overview}
                name = "overview"
                onChange = {onInputArrayChange("experience", index)}
            />
            <Input_Field
                label = "Start Date"
                value = {start_date}
                name = "start_date"
                onChange = {onInputArrayChange("experience", index)}
            />
            <Input_Field
                label = "End Date"
                value = {end_date}
                name = "end_date"
                onChange = {onInputArrayChange("experience", index)}
            />
            <div className = 'flex gap-2 w-full h-10 justify-end mt-1 -translate-x-0.5'>
                <button type='button' className = 'form_button' onClick={() => onItemDelete("experience", id)}>Delete</button>
                <button type='button' className = 'add_button form_button' onClick={onItemAdd}>Add</button>
            </div>
        </div>
    )

}    

export default Experience_Input_Group;