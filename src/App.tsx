import React, { Component } from 'react';
import './App.css';
import { State, Experience, Education, Project } from './models/interface-models';
import Experience_List from './components/views/groups/Experience_List';
import Education_List from './components/views/groups/Education_List';
import Projects_List from './components/views/groups/Projects_List';
import Form from './components/Form';
import Skills from './components/views/groups/Skills';
import Personal_Information from './components/views/groups/Personal_Information';
import data from './Sample_Data';
import { v4 as uuidv4 } from "uuid";

class App extends Component<{}, State>{

    constructor(props = {}) {

      super(props);

      this.state = {
        personal_details: {
          full_name: "",
          phone_number: "",
          email_address: "",
          github_username: "",
          linkedin_username: "",
          location: ""
        },
        skills: {
          programming_languages: "",
          frameworks: "",
          tools: "",
          certifications: ""
        },
        projects: [],
        experience: [],
        education: []
      }

    }

    componentDidMount() {
      const { personal_details, skills, projects, experience, education } = data;
      this.setState((prev_state) => ({
        ...prev_state,
        personal_details,
        skills,
        projects,
        experience,
        education
      }));
    }

    handleInputArrayChange = (
      property: "experience" | "education" | "projects",
      index: number
    ) => {
      return ( e : React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target;
        this.setState((prev_state) => ({
          ...prev_state,
          [property] : [
            ...prev_state[property].slice(0, index),
            {
              ...prev_state[property][index],
              [name] : value
            },
            ...prev_state[property].slice(index + 1)
          ]
        }));
      };
    };

    handleDetailsInputArrayChange = (
      property: "experience" | "education" | "projects",
      index: number,
      detail_index: number
    ) => {
      return ( e : React.ChangeEvent<HTMLInputElement> ) => {
        const { value } = e.target;
        const state_json = JSON.parse(JSON.stringify(this.state));
        state_json[property][index].details[detail_index] = value;
        this.setState(JSON.parse(JSON.stringify(state_json)));
      }
    }

    handleInputChange = ( e : React.ChangeEvent<HTMLInputElement> ) => {
      const { name, value } = e.target;
      this.setState((prev_state) => ({
        ...prev_state,
        personal_details: {
          ...prev_state.personal_details,
          [name] : value
        },
        skills: {
          ...prev_state.skills,
          [name]: value
        }
      }));
    };

    handleDetailAdd = () => {
      const state_json = JSON.parse(JSON.stringify(this.state));
      console.log(state_json);
    }

    handleItemDelete =  ( property: "experience" | "education" | "projects", id: string ) => {
      this.setState((prev_state) => ({
        ...prev_state,
        [property]: [...prev_state[property]].filter(
          (item: Experience | Education | Project) => item.id !== id
        )
      }));
    };

    handleExperienceItemAdd = () => {
      const id = uuidv4();
      this.setState((prev_state) => ({
        ...prev_state,
        experience: [
          ...prev_state.experience,
          {
            id,
            position: "",
            company: "",
            overview: "",
            start_date: "",
            end_date: "",
            details: []
          }
        ]
      }));
    };

    handleEducationItemAdd = () => {
      const id = uuidv4();
      this.setState((prev_state) => ({
        ...prev_state,
        education: [
          ...prev_state.education,
          {
            id,
            education_institute: "",
            program: "",
            start_date: "",
            end_date: "",
            details: []
          }
        ]
      }))
    }

    handleProjectsItemAdd = () => {
      const id = uuidv4();
      this.setState((prev_state) => ({
        ...prev_state,
        projects: [
          ...prev_state.projects,
          {
            id,
            title: "",
            overview: "",
            tools: "",
            github_repository: "",
            start_date: "",
            end_date: "",
            details: []
          }
        ]
      }));
    };

    render() {
        const {
          personal_details,
          skills,
          projects: project_list,
          experience: experience_list,
          education: education_list
        } = this.state;

        return (
            <div className = 'flex flex-row flex-wrap justify-center gap-20'>
              <div style={{ width: `${595}px` }}>
                <Form
                  {...this.state}
                  onInputChange = {this.handleInputChange}
                  onInputArrayChange = {this.handleInputArrayChange}
                  onDetailsInputArrayChange = {this.handleDetailsInputArrayChange}
                  onDetailAdd = {this.handleDetailAdd}
                  onItemDelete = {this.handleItemDelete}
                  onEducationItemAdd = {this.handleEducationItemAdd}
                  onExperienceItemAdd = {this.handleExperienceItemAdd}
                  onProjectsItemAdd = {this.handleProjectsItemAdd}
                />
              </div>
              <div className = 'flex flex-col justify-center items-center h-fit w-fit'>
                <div className = 'flex flex-col justify-start items-start gap-4 resume_side'>
                  <Personal_Information {...personal_details} />
                  <Skills {...skills} />
                  {project_list.length > 0 ? (
                    <Projects_List
                      heading = "projects"
                      projects_list = {project_list}
                    />
                  ) : null}
                  {experience_list.length > 0 ? (
                    <Experience_List
                      heading = "experience"
                      experience_list = {experience_list}
                    />
                  ) : null}
                  {education_list.length > 0 ? (
                    <Education_List
                      heading = "education"
                      education_list = {education_list}
                    />
                  ) : null}
                </div>
              </div>
            </div>
        )
    }

}

export default App;
