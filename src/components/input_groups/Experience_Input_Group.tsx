/* eslint-disable react/jsx-pascal-case */
import { Experience } from "../../models/interface-models";
import Detail_Input_Field from "../micro_components/Detail_Input_FIeld";
import Input_Field from "../micro_components/Input_Field";

interface Props {
    item: Experience;
    index: number;
    onInputArrayChange: (
        property: "experience" | "education" | "projects",
        index: number
    ) => (e : React.ChangeEvent<HTMLInputElement>) => void;
    onDetailsInputArrayChange: (
        property: "experience" | "education" | "projects",
        index: number,
        detail_index: number
    ) => (e : React.ChangeEvent<HTMLInputElement>) => void;
    onDetailAdd: (
        property: "experience" | "education" | "projects",
        index: number,
        detail_index: number
    ) => void;
    onDetailDelete: (
        property: "experience" | "education" | "projects",
        index: number,
        detail_index: number
    ) => void;
    onItemDelete: (
        property: "experience" | "education" | "projects",
        id: string
    ) => void;
    onItemAdd: () => void;
}

function Experience_Input_Group ( { item, index, onInputArrayChange, onDetailsInputArrayChange, onDetailAdd, onDetailDelete, onItemDelete, onItemAdd } : Props ) {

    const { id, position, company, overview, start_date, end_date, details } = item;

    return (
        <div key={index} className = 'flex flex-col gap-2.5 input_form_group'>
            <Input_Field
                label = "Position"
                value = {position}
                name = "position"
                onChange = {onInputArrayChange("experience", index)}
                    />
            <Input_Field
                label = "Company"
                value = {company}
                name = "company"
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
            {
                details.map((details_item, detail_index) => {
                    return (
                        <Detail_Input_Field
                            key = {`experience_description-${detail_index}`}
                            id = {`experience_description-${detail_index}`}
                            property = 'experience'
                            index = {index}
                            detail_index = {detail_index}
                            label = "Description"
                            value = {details_item}
                            name = {`experience_description-${detail_index}`}
                            onChange={onDetailsInputArrayChange("experience", index, detail_index)}
                            onDetailAdd = {onDetailAdd}
                            onDetailDelete = {onDetailDelete}
                        />
                    )
                })
            }
            <div className = 'flex gap-2 w-full h-10 justify-end mt-1 -translate-x-0.5'>
                {
                    details.length === 0 && (
                        <button className = 'form_button add_description_button' onClick = {() => {onDetailAdd('experience', index, 0)}}>+ Description</button>
                    )
                }
                <button type='button' className = 'form_button' onClick={() => onItemDelete("experience", id)}>Delete</button>
                <button type='button' className = 'add_button form_button' onClick={onItemAdd}>Add</button>
            </div>
        </div>
    )

}    

export default Experience_Input_Group;