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
        <label htmlFor={id}>
            <input 
                type = 'text'
                id = {id}
                value = {value}
                placeholder = {label}
                name = {name}
                onChange = {onChange}
                className = 'relative w-full h-10 pl-2.5 pr-2.5 input_field mb-1'
            />
        </label>
    )

}

export default Input_Field;