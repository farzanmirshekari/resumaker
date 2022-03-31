import Contact_Details from "../individual_items/Contact_Details";

interface Props {
    full_name: string;
    phone_number: string;
    email_address: string;
    github_username: string;
    linkedin_username: string;
    location: string;
}

function Personal_Information ( { full_name, phone_number, email_address, github_username, linkedin_username, location } : Props ) {
    return (    
        <header>
            <div>
                <div>
                    <span>{full_name}</span>
                </div>
            </div>
            <div>
                <Contact_Details text = {phone_number} icon = "" />
                <Contact_Details text = {email_address} icon = "" />
                <Contact_Details text = {location} icon = "" />
                <Contact_Details text = {github_username} icon = "" />
                <Contact_Details text = {linkedin_username} icon = "" />
            </div>
        </header>
    )
}   

export default Personal_Information;