/* eslint-disable react/jsx-pascal-case */
import { item_fields } from '../../interfaces/interface-fields'
import { AbstractModel } from '../../interfaces/interface-models'
import Input_Field from '../micro_components/Input_Field'
import Detail_Input_Field from '../micro_components/Detail_Input_FIeld'

interface Props {
    index: number
    type: 'experience' | 'education' | 'projects' | 'volunteering'
    label_list: string[]
    item: AbstractModel
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

function Abstract_Input_Group({
    index,
    type,
    label_list,
    item,
    on_input_array_change,
    on_details_input_array_change,
    on_detail_add,
    on_detail_delete,
    on_item_delete,
    on_item_add,
}: Props) {
    return (
        <div key={index} className="flex flex-col gap-2.5 input_form_group">
            {label_list.map((label, label_index) => {
                return (
                    <Input_Field
                        key={label_index}
                        label={label}
                        value={(item as any)[item_fields[label_index]]}
                        name={item_fields[label_index]}
                        onChange={on_input_array_change(type, index)}
                    />
                )
            })}
            {item.details.map((detail_item, detail_index) => {
                return (
                    <Detail_Input_Field
                        key={type + '_description-' + detail_index}
                        id={type + '_description-' + detail_index}
                        property={type}
                        index={index}
                        detail_index={detail_index}
                        label="Description"
                        value={detail_item}
                        name={type + '_description-' + detail_index}
                        onChange={on_details_input_array_change(
                            type,
                            index,
                            detail_index
                        )}
                        on_detail_add={on_detail_add}
                        on_detail_delete={on_detail_delete}
                    />
                )
            })}
            <div className="flex gap-2 w-full h-10 justify-end mt-1 -translate-x-0.5">
                {item.details.length === 0 && (
                    <button
                        className="form_button add_description_button"
                        onClick={() => {
                            on_detail_add(type, index, 0)
                        }}
                    >
                        + Description
                    </button>
                )}
                <button
                    type="button"
                    className="form_button"
                    onClick={() => on_item_delete(type, item.id)}
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

export default Abstract_Input_Group
