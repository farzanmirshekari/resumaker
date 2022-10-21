/* eslint-disable react/jsx-pascal-case */
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
import Printer_Icon from './assets/printer_icon.svg';
import Return_Icon from './assets/return_icon.svg';
import Download_Icon from './assets/download_icon.svg';
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
        education: [],
        print_mode: false
      };

    };

    saveToLocalStorage() {
      localStorage.setItem('values', JSON.stringify(this.state))
    }

    componentDidMount() {
      if (JSON.parse(localStorage.getItem('values')!)) {
        this.setState(JSON.parse(localStorage.getItem('values')!))
      }
      else {
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
    };

    componentDidUpdate( prev_state : any ) {
      if (this.state !== prev_state) {
        this.saveToLocalStorage();
      }
    };

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
    };

    handleInputChange = ( e : React.ChangeEvent<HTMLInputElement> ) : void => {
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

    handleDetailAdd = ( property: "experience" | "education" | "projects", index: number, detail_index: number ) : void => {
      const state_json = JSON.parse(JSON.stringify(this.state)); 
      state_json[property][index].details.splice(detail_index + 1, 0, '');
      this.setState(JSON.parse(JSON.stringify(state_json)));
    };

    handleDetailDelete = ( property: "experience" | "education" | "projects", index: number, detail_index: number ) : void => {
      const state_json = JSON.parse(JSON.stringify(this.state)); 
      state_json[property][index].details.splice(detail_index, 1);
      this.setState(JSON.parse(JSON.stringify(state_json)));
    };

    handleItemDelete =  ( property: "experience" | "education" | "projects", id: string ) : void  => {
      this.setState((prev_state) => ({
        ...prev_state,
        [property]: [...prev_state[property]].filter(
          (item: Experience | Education | Project) => item.id !== id
        )
      }));
    };

    handleExperienceItemAdd = () : void => {
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

    handleEducationItemAdd = () : void => {
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
    };

    handleProjectsItemAdd = () : void => {
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

    onExistingSectionsUpload = ( e : React.ChangeEvent<HTMLInputElement> ) : void => {
      const reader = new FileReader();
      const { files } = e.target;
      if (files) {
        reader.readAsText(files[0], "UTF-8");
        reader.onload = (e) => {
          const uploaded_json = JSON.parse(e.target!.result as string);
          this.setState((prev_state) => ({
            ...prev_state,
            ...uploaded_json
          }));
        }
      } else {
        alert("Please upload a valid .JSON file..");
      }
    };

    handlePrintMode = () => {
      this.setState((prev_state) => ({
        ...prev_state,
        print_mode: !prev_state.print_mode
      }))
      this.state.print_mode ? 
        document.getElementById('resume_container')!.classList.remove('print_mode')  : 
        document.getElementById('resume_container')!.classList.add('print_mode');
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
              {
                !this.state.print_mode && (
                  <div style={{ width: `${595}px` }}>
                    <Form
                      {...this.state}
                      onInputChange = {this.handleInputChange}
                      onInputArrayChange = {this.handleInputArrayChange}
                      onDetailsInputArrayChange = {this.handleDetailsInputArrayChange}
                      onDetailAdd = {this.handleDetailAdd}
                      onDetailDelete = {this.handleDetailDelete}
                      onExistingSectionsUpload = {this.onExistingSectionsUpload}
                      onItemDelete = {this.handleItemDelete}
                      onEducationItemAdd = {this.handleEducationItemAdd}
                      onExperienceItemAdd = {this.handleExperienceItemAdd}
                      onProjectsItemAdd = {this.handleProjectsItemAdd}
                    />
                  </div>
                )
              }
              <div className = 'flex flex-col justify-center items-center h-fit w-fit' id = 'resume_container'>
                <div className = 'flex flex-col justify-start items-start gap-4 resume_side'>
                  <Personal_Information {...personal_details} />
                  <Skills {...skills} />
                  {experience_list.length > 0 ? (
                    <Experience_List
                      heading = "experience"
                      experience_list = {experience_list}
                    />
                  ) : null}
                  {project_list.length > 0 ? (
                    <Projects_List
                      heading = "projects"
                      projects_list = {project_list}
                    />
                  ) : null}
                  {education_list.length > 0 ? (
                    <Education_List
                      heading = "education"
                      education_list = {education_list}
                    />
                  ) : null}
                </div>
                <button className = 'print_button mt-16' onClick={this.handlePrintMode}>
                  {
                    !this.state.print_mode && (
                      <>
                        <img src={Printer_Icon} alt = 'Printer Icon'/>
                        <p>Print to PDF</p>
                      </>
                    )
                  }
                  {
                    this.state.print_mode && (
                      <>
                        <img src={Return_Icon} className = 'w-10 -mr-1.5' alt = 'Return Icon'/>
                        <p>Return</p>
                      </>
                    )
                  }
                </button>
              </div>
            </div>
        )
    }

}

export default App;
