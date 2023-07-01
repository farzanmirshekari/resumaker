import { v4 as uuidv4 } from 'uuid'

const data = {
    personal_details: {
        full_name: 'John Doe',
        phone_number: '+1 (123) 456-7890',
        email_address: 'johndoe@example.com',
        github_username: 'johndoe',
        linkedin_username: 'johndoe',
        location: 'City, State',
    },
    skills: {
        programming_languages: 'Java, Python, C++, SQL',
        frameworks: 'Spring, Django',
        tools: 'Git, Eclipse, MySQL',
        certifications: 'AWS Certified Solutions Architect',
    },
    experience: [
        {
            id: uuidv4(),
            primary_desc: 'Software Engineer',
            secondary_desc: 'XYZ Corporation',
            overview:
                'Contributed to the development of enterprise software solutions',
            start_date: 'April 2020',
            end_date: 'Present',
            details: [
                'Collaborated with cross-functional teams to deliver scalable and reliable software',
                'Participated in the full software development lifecycle, including requirement gathering, design, implementation, and testing',
                'Identified and resolved software defects and performance issues',
            ],
        },
    ],
    projects: [
        {
            id: uuidv4(),
            primary_desc: 'Inventory Management System',
            overview:
                'Developed a web-based inventory management system for a retail company',
            primary_desc_hyperlink: 'https://github.com/johndoe/inventory-system',
            secondary_desc: 'Java, Spring Boot, MySQL',
            start_date: 'January 2022',
            end_date: 'March 2022',
            details: [
                'Designed and implemented the backend using Spring Boot framework',
                'Created and optimized database schema using MySQL',
                'Implemented RESTful APIs for data retrieval and manipulation',
            ],
        },
    ],
    education: [
        {
            id: uuidv4(),
            education_institute: 'University of ABC',
            program: 'Bachelor of Science in Computer Science',
            start_date: 'September 2016',
            end_date: 'May 2020',
            details: [
                'Completed coursework in algorithms, data structures, and database management',
            ],
        },
    ],
    volunteering: [
        {
            id: uuidv4(),
            title: 'Outreach Volunteer',
            organization: 'Community Outreach Initiative',
            overview:
                'Participated in a community outreach program to assist vulnerable populations',
            start_date: 'June 2022',
            end_date: 'August 2022',
            details: [
                'Provided meals and essential supplies to homeless individuals',
                'Assisted in organizing and coordinating community events',
                'Offered tutoring and mentoring support to at-risk youth',
            ],
        },
    ],
}

export default data
