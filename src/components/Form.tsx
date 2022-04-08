import React from "react";
import Input_Field from "./micro_components/Input_Field";
import Experience_Input_Group from "./input_groups/Experience_Input_Group";
import Education_Input_Group from "./input_groups/Education_Input_Group";
import Project_Input_Group from "./input_groups/Project_Input_Group";
import Skills_Input_Group from "./input_groups/Skills_Input_Group";
import Personal_Details_Input_Group from "./input_groups/Personal_Details_Input_Group";
import { State } from "../models/interface-models";

interface Props extends State {
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onInputArrayChange: (
        property: "experience" | "education" | "projects",
        index: number
    ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
    onDetailsInputArrayChange: (
        property: "experience" | "education" | "projects",
        index: number,
        detail_index: number
    ) => (e : React.ChangeEvent<HTMLInputElement>) => void;
    onDetailAdd: () => void;
    onItemDelete: (property: "experience" | "education" | "projects", id: string) => void;
    onExperienceItemAdd: () => void;
    onEducationItemAdd: () => void;
    onProjectsItemAdd: () => void;
}

const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
}

function Form ({
    personal_details,
    skills,
    experience,
    education,
    projects,
    onInputChange,
    onInputArrayChange,
    onDetailsInputArrayChange,
    onDetailAdd,
    onItemDelete,
    onExperienceItemAdd,
    onEducationItemAdd,
    onProjectsItemAdd
} : Props) {

    return (
        <form onSubmit={onFormSubmit}>
            <section>
                <h2 className = 'mb-1' style={{ color: '#093652' }}>Personal Details</h2>
                <Personal_Details_Input_Group
                    item = {personal_details}
                    onInputChange = {onInputChange}
                />
            </section>
            <section>
                <h2 className = 'mb-1' style={{ color: '#093652' }}>Skills</h2>
                <Skills_Input_Group
                    item={skills}
                    onInputChange={onInputChange}       
                />
            </section>
            <section>
                <h2 className = 'mb-1' style={{ color: '#093652' }}>Projects</h2>
                {
                    projects.length === 0 ? (
                        <button type='button' onClick={onProjectsItemAdd}>Add Project</button>
                    ) : (
                        projects.map((item, index) => {
                            return (
                                <Project_Input_Group
                                    key = {index}
                                    item = {item}
                                    index = {index}
                                    onInputArrayChange = {onInputArrayChange}
                                    onDetailsInputArrayChange = {onDetailsInputArrayChange}
                                    onDetailAdd = {onDetailAdd}
                                    onItemDelete = {onItemDelete}
                                    onItemAdd = {onProjectsItemAdd}
                                />
                            );
                        })
                    )
                }
            </section>
            <section>
                <h2 className = 'mb-1' style={{ color: '#093652' }}>Experience</h2>
                {
                    experience.length === 0 ? (
                        <button type='button' onClick={onExperienceItemAdd}>Add Experience</button>
                    ) : (
                        experience.map((item, index) => {
                            return (
                                <Experience_Input_Group
                                    key = {index}
                                    item = {item}
                                    index = {index}
                                    onInputArrayChange = {onInputArrayChange}
                                    onDetailsInputArrayChange = {onDetailsInputArrayChange}
                                    onItemDelete = {onItemDelete}
                                    onItemAdd = {onExperienceItemAdd}
                                />
                            )
                        })
                    )
                }
            </section>
            <section>
                <h2 className = 'mb-1' style={{ color: '#093652' }}>Education</h2>
                {
                    education.length === 0 ? (
                        <button type='button' onClick={onEducationItemAdd}>Add Education</button>
                    ) : (
                        education.map((item, index) => {
                            return (
                                <Education_Input_Group
                                    key = {index}
                                    item = {item}
                                    index = {index}
                                    onInputArrayChange = {onInputArrayChange}
                                    onDetailsInputArrayChange = {onDetailsInputArrayChange}
                                    onItemDelete = {onItemDelete}
                                    onItemAdd = {onEducationItemAdd}
                                />
                            )
                        })
                    )
                }
            </section>
        </form>
    )

}

export default Form;