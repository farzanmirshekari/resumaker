/* eslint-disable react/jsx-pascal-case */
import { PersonalDetails } from '../../interfaces/interface-models'
import Input_Field from '../micro_components/Input_Field'

interface Props {
    item: PersonalDetails
    on_input_change: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Personal_Details_Input_Group({ item, on_input_change }: Props) {
    const {
        full_name,
        phone_number,
        email_address,
        github_username,
        linkedin_username,
        location,
    } = item

    return (
        <div className="flex flex-col gap-2.5 input_form_group">
            <Input_Field
                label="Full Name"
                value={full_name}
                name="full_name"
                onChange={on_input_change}
            />
            <Input_Field
                label="Phone Number"
                value={phone_number}
                name="phone_number"
                onChange={on_input_change}
            />
            <Input_Field
                label="Email Address"
                value={email_address}
                name="email_address"
                onChange={on_input_change}
            />
            <Input_Field
                label="GitHub Username"
                value={github_username}
                name="github_username"
                onChange={on_input_change}
            />
            <Input_Field
                label="LinkedIn Username"
                value={linkedin_username}
                name="linkedin_username"
                onChange={on_input_change}
            />
            <Input_Field
                label="Location"
                value={location}
                name="location"
                onChange={on_input_change}
            />
        </div>
    )
}

export default Personal_Details_Input_Group
