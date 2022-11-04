import { v4 as uuidv4 } from 'uuid'

const data = {
    personal_details: {
        full_name: 'Farzan Mirshekari',
        phone_number: '+1 (234) 567-8910',
        email_address: 'fmirshek@uwaterloo.ca',
        github_username: 'farzanmirshekari',
        linkedin_username: 'farzanmirshekari',
        location: 'Waterloo, ON',
    },
    skills: {
        programming_languages: 'Java, JavaScript, TypeScript, HTML/CSS, C, C++',
        frameworks: 'React, Bootstrap, Express.js',
        tools: 'Webpack, Git, GitHub, Visual Studio, VSCode, Firebase, Heroku, MongoDB, Node.js, Guava, Arduino',
        certifications: 'Fortinet Security Associate 1',
    },
    projects: [
        {
            id: uuidv4(),
            title: 'Résumaker',
            overview:
                'React application for generating stylish, detailed and versatile CVs which was used to make this résumé',
            github_repository:
                'https://github.com/farzanmirshekari/resume-builder',
            tools: 'React, TypeScript, JavaScript, HTML/CSS',
            start_date: 'April 2021',
            end_date: 'Present',
            details: [
                'Created TypeScript interface models for each category and used export functions to return the proper structure of information based on user requests.',
                'Used state and props to store user input, render live changes and display them on a preview panel.',
                'Utilized CSS styling to create a professional, complete and robust template, which can be printed to PDF upon completion.',
            ],
        },
    ],
    experience: [
        {
            id: uuidv4(),
            position: 'IT and Help Desk Intern',
            company: 'Woodgreen Community Services',
            overview:
                'Volunteered for 80+ hours with the IT department of a non-profit',
            start_date: 'March 2022',
            end_date: 'April 2022',
            details: [
                'Worked closely with the help desk with online, over the phone and in-person troubleshooting, solving a wide range of user issues.',
                'Took on additional responsibility with the purchase, configuration and deployment of company devices.',
                'Assisted the IT department with inventory management as well as writing and organizing tickets.',
            ],
        },
    ],
    education: [
        {
            id: uuidv4(),
            education_institute: 'University of Waterloo',
            program: 'Candidate for BASc. - Electrical Engineering',
            start_date: '',
            end_date: '',
            details: ["1A Term's Dean Honours List - Grade: 90"],
        },
    ],
    print_mode: false,
}

export default data
