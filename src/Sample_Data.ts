import { v4 as uuidv4 } from 'uuid';

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
            position: 'Software Engineer',
            company: 'XYZ Corporation',
            overview: 'Contributed to the development of enterprise software solutions',
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
            title: 'Inventory Management System',
            overview: 'Developed a web-based inventory management system for a retail company',
            github_repository: 'https://github.com/johndoe/inventory-system',
            tools: 'Java, Spring Boot, MySQL',
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
            details: ["Completed coursework in algorithms, data structures, and database management"],
        },
    ],
};

export default data;