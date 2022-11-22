export interface PersonalDetails {
    full_name: string
    phone_number: string
    email_address: string
    github_username: string
    linkedin_username: string
    location: string
}

export interface Experience {
    id: string
    position: string
    company: string
    overview: string
    start_date: string
    end_date: string
    details: string[]
}

export interface Education {
    id: string
    education_institute: string
    program: string
    start_date: string
    end_date: string
    details: string[]
}

export interface Project {
    id: string
    title: string
    overview: string
    github_repository: string
    tools: string
    start_date: string
    end_date: string
    details: string[]
}

export interface Skills {
    programming_languages: string
    frameworks: string
    tools: string
    certifications: string
}

export interface State {
    personal_details: PersonalDetails
    skills: Skills
    experience: Experience[]
    education: Education[]
    projects: Project[]
    print_mode: boolean
}
