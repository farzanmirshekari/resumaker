import { v4 as uuidv4 } from 'uuid';

const data = {
    personal_details: {
        full_name: "Farzan Mirshekari",
        phone_number: "+1 647 569-2182",
        email_address: "fmirshek@uwaterloo.ca",
        github_username: "farzanmirshekari",
        linkedin_username: "fmirshekari",
        location: "Waterloo, ON"
    },
    skills: {
        programming_languages: "Java, JavaScript, TypeScript, HTML/CSS, C, C++",
        frameworks: "React, Bootstrap, Express.js",
        tools: "Webpack, Git, GitHub, Visual Studio, VSCode, Firebase, Heroku, MongoDB, Node.js, Guava, Arduino",
        certifications: "Fortinet Security Associate 1"
    },
    projects: [
        {
            id: uuidv4(),
            title: "Résumaker",
            overview: "React application for generating stylish, detailed and versatile CVs which was used to make this résumé",
            github_repository: "https://github.com/farzanmirshekari/resume-builder",
            tools: "React, TypeScript, JavaScript, HTML/CSS",
            start_date: "",
            end_date: "",
            details: [
                "",
                ""
            ]
        }
    ],
    experience: [
        {
            id: uuidv4(),
            position: "IT and Help Desk Intern",
            company: "Woodgreen Community Services",
            overview: "Volunteered for 80+ hours with the IT department of a non-profit",
            start_date: "",
            end_date: "",
            details: [
                "",
                ""
            ]
        }
    ],
    education: [
        {
            id: uuidv4(),
            education_institute: "University of Waterloo",
            program: "Candidate for BASc. - Electrical Engineering",
            start_date: "",
            end_date: "",
            details: [
                "",
                ""
            ]
        }
    ]
}

export default data;