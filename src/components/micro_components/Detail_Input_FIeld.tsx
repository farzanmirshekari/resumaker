import { v4 as uuidv4 } from "uuid";
import './../../App.css';

interface Props {
    property: "experience" | "education" | "projects";
    index: number;
    detail_index: number;
    label: string;
    value: string;
    name: string;
    id?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
}

function Detail_Input_Field( { property, index, detail_index, label, value, id, name, onChange, onDetailAdd, onDetailDelete } : Props) {

    if (!id) {
        id = `input_${label.split(' ').join('_')}-${uuidv4()}`;
    }

    return (
        <label htmlFor={id} className = 'flex flex-row justify-center items-center mb-1 detail_input_field_container'>
            <input 
                type = 'text'
                id = {id}
                value = {value}
                placeholder = {label}
                name = {name}
                onChange = {onChange}
                className = 'relative w-11/12 h-10 pl-2.5 pr-7 detail_input_field'
            />
            <div className = 'relative h-10 flex flex-row justify-start items-center w-1/12 -translate-x-3 gap-4'>
                <button className = 'relative w-1/2 h-10 -mt-0.5 text-2xl' onClick = {() => {onDetailDelete(property, index, detail_index)}}>-</button>
                <div className = 'relative h-6 bg-black' style = {{ width: `${1}px`, backgroundColor: '#093652' }}></div>
                <button className = 'relative w-1/2 h-10 text-xl' onClick = {() => {onDetailAdd(property, index, detail_index)}}>+</button>
            </div>
        </label>
    )

}

export default Detail_Input_Field;