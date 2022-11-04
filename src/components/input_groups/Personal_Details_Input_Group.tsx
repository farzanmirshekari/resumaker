/* eslint-disable react/jsx-pascal-case */
import { PersonalDetails } from '../../models/interface-models'
import Input_Field from '../micro_components/Input_Field'

interface Props {
    item: PersonalDetails
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Personal_Details_Input_Group({ item, onInputChange }: Props) {
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
                onChange={onInputChange}
            />
            <Input_Field
                label="Phone Number"
                value={phone_number}
                name="phone_number"
                onChange={onInputChange}
            />
            <Input_Field
                label="Email Address"
                value={email_address}
                name="email_address"
                onChange={onInputChange}
            />
            <Input_Field
                label="GitHub Username"
                value={github_username}
                name="github_username"
                onChange={onInputChange}
            />
            <Input_Field
                label="LinkedIn Username"
                value={linkedin_username}
                name="linkedin_username"
                onChange={onInputChange}
            />
            <Input_Field
                label="Location"
                value={location}
                name="location"
                onChange={onInputChange}
            />
        </div>
    )
}

export default Personal_Details_Input_Group
