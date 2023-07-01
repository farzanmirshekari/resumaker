export interface PersonalDetails {
    full_name: string
    phone_number: string
    email_address: string
    github_username: string
    linkedin_username: string
    location: string
}

export interface Skills {
    programming_languages: string
    frameworks: string
    tools: string
    certifications: string
}

export interface AbstractModel {
    id: string
    primary_desc: string
    primary_desc_hyperlink?: string
    secondary_desc: string
    overview: string
    start_date: string
    end_date: string
    details: string[]
}

export interface State {
    personal_details: PersonalDetails
    skills: Skills
    experience: AbstractModel[]
    education: AbstractModel[]
    projects: AbstractModel[]
    volunteering: AbstractModel[]
}
