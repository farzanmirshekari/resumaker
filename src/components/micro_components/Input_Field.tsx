import { v4 as uuidv4 } from 'uuid'
import './../../App.css'

interface Props {
    label: string
    value: string
    name: string
    id?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input_Field({ label, value, id, name, onChange }: Props) {
    if (!id) {
        id = `input_${label.split(' ').join('_')}-${uuidv4()}`
    }

    return (
        <label htmlFor={id} className="flex h-10 items-center justify-start">
            <input
                type="text"
                id={id}
                value={value}
                placeholder={label}
                name={name}
                onChange={onChange}
                className="relative w-full h-full pl-2.5 pr-2.5 input_field"
            />
        </label>
    )
}

export default Input_Field
