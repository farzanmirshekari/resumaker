/* eslint-disable react/jsx-pascal-case */
import { Project } from '../../interfaces/interface-models'
import Detail_Input_Field from '../micro_components/Detail_Input_FIeld'
import Input_Field from '../micro_components/Input_Field'

interface Props {
    item: Project
    index: number
    on_input_array_change: (
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        index: number
    ) => (e: React.ChangeEvent<HTMLInputElement>) => void
    on_details_input_array_change: (
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        index: number,
        detail_index: number
    ) => (e: React.ChangeEvent<HTMLInputElement>) => void
    on_detail_add: (
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        index: number,
        detail_index: number
    ) => void
    on_detail_delete: (
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        index: number,
        detail_index: number
    ) => void
    on_item_delete: (
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        id: string
    ) => void
    on_item_add: () => void
}

function Project_Input_Group({
    item,
    index,
    on_input_array_change,
    on_details_input_array_change,
    on_detail_add,
    on_detail_delete,
    on_item_delete,
    on_item_add,
}: Props) {
    const {
        id,
        title,
        overview,
        github_repository,
        tools,
        start_date,
        end_date,
        details,
    } = item

    return (
        <div key={index} className="flex flex-col gap-2.5 input_form_group">
            <Input_Field
                label="Title"
                value={title}
                name="title"
                onChange={on_input_array_change('projects', index)}
            />
            <Input_Field
                label="Overview"
                value={overview}
                name="overview"
                onChange={on_input_array_change('projects', index)}
            />
            <Input_Field
                label="Repository"
                value={github_repository}
                name="github_repository"
                onChange={on_input_array_change('projects', index)}
            />
            <Input_Field
                label="Tools"
                value={tools}
                name="tools"
                onChange={on_input_array_change('projects', index)}
            />
            <Input_Field
                label="Start Date"
                value={start_date}
                name="start_date"
                onChange={on_input_array_change('projects', index)}
            />
            <Input_Field
                label="End Date"
                value={end_date}
                name="end_date"
                onChange={on_input_array_change('projects', index)}
            />
            {details.map((details_item, detail_index) => {
                return (
                    <Detail_Input_Field
                        key={`project_description-${detail_index}`}
                        id={`project_description-${detail_index}`}
                        property="projects"
                        index={index}
                        detail_index={detail_index}
                        label="Description"
                        value={details_item}
                        name={`project_description-${detail_index}`}
                        onChange={on_details_input_array_change(
                            'projects',
                            index,
                            detail_index
                        )}
                        on_detail_add={on_detail_add}
                        on_detail_delete={on_detail_delete}
                    />
                )
            })}
            <div className="flex gap-2 w-full h-10 justify-end mt-1 -translate-x-0.5">
                {details.length === 0 && (
                    <button
                        className="form_button add_description_button"
                        onClick={() => {
                            on_detail_add('projects', index, 0)
                        }}
                    >
                        + Description
                    </button>
                )}
                <button
                    type="button"
                    className="form_button"
                    onClick={() => on_item_delete('projects', id)}
                >
                    Delete
                </button>
                <button
                    type="button"
                    className="add_button form_button"
                    onClick={on_item_add}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default Project_Input_Group
