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

export interface Project {
    id: string
    primary_desc: string              // project title
    primary_desc_hyperlink: string    // project link
    secondary_desc: string            // project tools
    overview: string                  // project overview
    start_date: string                // project start date
    end_date: string                  // project end date 
    details: string[]                 // project details
}

export interface Experience {
    id: string
    primary_desc: string              // job title
    secondary_desc: string            // employer
    overview: string                  // job overview
    start_date: string                // job start date
    end_date: string                  // job end date
    details: string[]                 // job details
}

export interface Volunteering {
    id: string
    primary_desc: string              // volunteering title
    secondary_desc: string            // volunteering organization
    overview: string                  // volunteering overview
    start_date: string                // volunteering start date
    end_date: string                  // volunteering end date
    details: string[]                 // volunteering details
}

export interface Education {
    id: string
    primary_desc: string              // education institute name
    secondary_desc: string            // education program
    overview: string                  // education overview
    start_date: string                // education start date
    end_date: string                  // education end date
    details: string[]                 // education details
}

export interface State {
    personal_details: PersonalDetails
    skills: Skills
    experience: Experience[]
    education: Education[]
    projects: Project[]
    volunteering: Volunteering[]
}
