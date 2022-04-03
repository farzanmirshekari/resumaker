import { Project } from "../../models/interface-models";
import Input_Field from "../micro_components/Input_Field";

interface Props {
    item: Project;
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

function Project_Input_Group ( { item, index, onInputArrayChange, onItemDelete, onItemAdd } : Props ) {

    const { id, title, overview, github_repository, tools, start_date, end_date, details } = item;

    console.log(details)

    return (
        <div key={index} className = 'flex flex-col gap-1 input_form_group'>
            <Input_Field
                label = "Title"
                value = {title}
                name = "title"
                onChange = {onInputArrayChange("projects", index)}
            />
            <Input_Field
                label = "Overview"
                value = {overview}
                name = "overview"
                onChange  = {onInputArrayChange("projects", index)}
            />
            <Input_Field
                label = "GitHub Repository"
                value = {github_repository}
                name = "github_repository"
                onChange  = {onInputArrayChange("projects", index)}
            />
            <Input_Field
                label = "Tools"
                value = {tools}
                name = "tools"
                onChange  = {onInputArrayChange("projects", index)}
            />
            <Input_Field
                label = "Start Date"
                value = {start_date}
                name = "start_date"
                onChange = {onInputArrayChange("projects", index)}
            />
            <Input_Field
                label = "End Date"
                value = {end_date}
                name = "end_date"
                onChange = {onInputArrayChange("projects", index)}
            />
            {
                details.map((details_item, index) => {
                    return (
                        <Input_Field
                            key = {index}
                            label = "Description"
                            value = {details_item}
                            name = "description"
                            onChange={onInputArrayChange("projects", index)}
                        />
                    )
                })
            }
            <div className = 'flex gap-2 w-full h-10 justify-end mt-1 -translate-x-0.5'>
                <button type='button' className = 'form_button' onClick={() => onItemDelete("projects", id)}>Delete</button>
                <button type='button' className = 'add_button form_button' onClick={onItemAdd}>Add</button>
            </div>
        </div>
    )

}

export default Project_Input_Group;