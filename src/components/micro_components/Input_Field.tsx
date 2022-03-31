import './../../App.css';

interface Props {
    label: string;
    value: string;
    name: string;
    id?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input_Field( { label, value, id, name, onChange } : Props) {

    if (!id) {
        id = `input_${label.split(' ').join('_')}`;
    }

    return (
        <label htmlFor={id} className = 'relative flex flex-col items-start justify-start input_field'>
            <input 
                type = 'text'
                id = {id}
                value = {value}
                placeholder = {label}
                name = {name}
                onChange = {onChange}
                className = 'relative w-11/12 ml-3 flex justify-center align-middle text-sm pl-3 pr-3 text-black'
            />
        </label>
    )

}

export default Input_Field;